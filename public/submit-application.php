<?php
/**
 * Single PHP File for Career Application - Email Only Version
 * Handles validation, file upload, and sends email with attachments
 * No database required
 */

// ============================================
// CONFIGURATION
// ============================================

// Email Configuration
define('SMTP_HOST', 'smtp.gmail.com');
define('SMTP_PORT', 587);
define('SMTP_USERNAME', 'your-email@gmail.com');
define('SMTP_PASSWORD', 'your-app-password');
define('SMTP_FROM_EMAIL', 'careers@elemensis.com');
define('SMTP_FROM_NAME', 'Elemensis Careers');
define('ADMIN_EMAIL', 'hr@elemensis.com');

// File Upload Configuration
define('UPLOAD_DIR', __DIR__ . '/uploads/resumes/');
define('MAX_FILE_SIZE', 5 * 1024 * 1024); // 5MB
define('ALLOWED_EXTENSIONS', ['pdf', 'doc', 'docx']);
define('ALLOWED_MIME_TYPES', [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
]);

// ============================================
// AUTO-LOAD PHPMailer
// ============================================

// If using Composer:
// require_once __DIR__ . '/vendor/autoload.php';

// If using manual PHPMailer download:
require_once __DIR__ . '/PHPMailer/PHPMailer.php';
require_once __DIR__ . '/PHPMailer/SMTP.php';
require_once __DIR__ . '/PHPMailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// ============================================
// API ENDPOINT
// ============================================

// Set headers for API response
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

try {
    // Process the application
    $result = processApplication($_POST, $_FILES);
    echo json_encode($result);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'An error occurred processing your application',
        'error' => $e->getMessage()
    ]);
}

// ============================================
// MAIN FUNCTIONS
// ============================================

/**
 * Main function to process the application
 */
function processApplication($postData, $fileData) {
    // Validate input
    $validator = new Validator();
    $sanitizedData = $validator->sanitize($postData);
    $errors = $validator->validateApplication($sanitizedData);
    
    if (!empty($errors)) {
        return [
            'success' => false,
            'message' => 'Validation failed',
            'errors' => $errors
        ];
    }
    
    // Check if resume was uploaded
    if (!isset($fileData['resume']) || $fileData['resume']['error'] === UPLOAD_ERR_NO_FILE) {
        return [
            'success' => false,
            'message' => 'Resume is required',
            'errors' => ['resume' => 'Please upload your resume']
        ];
    }
    
    // Create upload directory if it doesn't exist
    if (!is_dir(UPLOAD_DIR)) {
        mkdir(UPLOAD_DIR, 0755, true);
    }
    
    try {
        // Upload resume
        $resumePath = uploadFile($fileData['resume'], $sanitizedData['full_name']);
        
        // Send email to admin with all details and attachment
        $emailSent = sendAdminEmail($sanitizedData, $resumePath);
        
        if (!$emailSent) {
            // Delete uploaded file if email fails
            if (file_exists(UPLOAD_DIR . $resumePath)) {
                unlink(UPLOAD_DIR . $resumePath);
            }
            throw new Exception('Failed to send email notification');
        }
        
        // Optionally send confirmation email to applicant
        sendConfirmationEmail($sanitizedData);
        
        return [
            'success' => true,
            'message' => 'Application submitted successfully! We will contact you soon.'
        ];
        
    } catch (Exception $e) {
        // Delete uploaded file if it exists
        if (isset($resumePath) && file_exists(UPLOAD_DIR . $resumePath)) {
            unlink(UPLOAD_DIR . $resumePath);
        }
        throw $e;
    }
}

/**
 * Upload file with validation
 */
function uploadFile($file, $applicantName) {
    // Check for upload errors
    if ($file['error'] !== UPLOAD_ERR_OK) {
        throw new Exception('File upload error: ' . getUploadErrorMessage($file['error']));
    }
    
    // Check file size
    if ($file['size'] > MAX_FILE_SIZE) {
        throw new Exception('File size exceeds maximum allowed size of ' . (MAX_FILE_SIZE / 1024 / 1024) . 'MB');
    }
    
    // Get file extension and validate
    $extension = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
    if (!in_array($extension, ALLOWED_EXTENSIONS)) {
        throw new Exception('Invalid file type. Please upload PDF, DOC, or DOCX files.');
    }
    
    // Validate MIME type
    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    $mimeType = finfo_file($finfo, $file['tmp_name']);
    finfo_close($finfo);
    
    if (!in_array($mimeType, ALLOWED_MIME_TYPES)) {
        throw new Exception('Invalid file type. Please upload a valid PDF, DOC, or DOCX file.');
    }
    
    // Generate unique filename
    $sanitizedName = preg_replace('/[^a-zA-Z0-9]/', '_', $applicantName);
    $filename = $sanitizedName . '_' . date('Ymd_His') . '.' . $extension;
    $filepath = UPLOAD_DIR . $filename;
    
    // Move uploaded file
    if (!move_uploaded_file($file['tmp_name'], $filepath)) {
        throw new Exception('Failed to save uploaded file');
    }
    
    return $filename;
}

/**
 * Get user-friendly upload error message
 */
function getUploadErrorMessage($errorCode) {
    $messages = [
        UPLOAD_ERR_INI_SIZE => 'File exceeds the maximum size allowed by the server',
        UPLOAD_ERR_FORM_SIZE => 'File exceeds the maximum size allowed by the form',
        UPLOAD_ERR_PARTIAL => 'File was only partially uploaded',
        UPLOAD_ERR_NO_FILE => 'No file was uploaded',
        UPLOAD_ERR_NO_TMP_DIR => 'Missing temporary folder',
        UPLOAD_ERR_CANT_WRITE => 'Failed to write file to disk',
        UPLOAD_ERR_EXTENSION => 'File upload stopped by extension',
    ];
    return $messages[$errorCode] ?? 'Unknown upload error';
}

/**
 * Send email to admin with application details and resume
 */
function sendAdminEmail($data, $resumePath) {
    $mailer = getMailer();
    $mailer->clearAddresses();
    $mailer->addAddress(ADMIN_EMAIL);
    $mailer->addReplyTo($data['email'], $data['full_name']);
    
    // Add resume as attachment
    $resumeFullPath = UPLOAD_DIR . $resumePath;
    if (file_exists($resumeFullPath)) {
        $mailer->addAttachment($resumeFullPath);
    }
    
    $mailer->isHTML(true);
    $mailer->Subject = 'New Career Application - ' . $data['position'];
    $mailer->Body = getAdminEmailBody($data);
    $mailer->AltBody = strip_tags(getAdminEmailBody($data));
    
    return $mailer->send();
}

/**
 * Send confirmation email to applicant
 */
function sendConfirmationEmail($data) {
    try {
        $mailer = getMailer();
        $mailer->clearAddresses();
        $mailer->addAddress($data['email'], $data['full_name']);
        $mailer->isHTML(true);
        $mailer->Subject = 'Application Received - Elemensis Careers';
        $mailer->Body = getConfirmationEmailBody($data);
        $mailer->AltBody = strip_tags(getConfirmationEmailBody($data));
        return $mailer->send();
    } catch (Exception $e) {
        // Don't throw error if confirmation email fails
        error_log('Confirmation email failed: ' . $e->getMessage());
        return false;
    }
}

/**
 * Get PHPMailer instance
 */
function getMailer() {
    $mailer = new PHPMailer(true);
    $mailer->isSMTP();
    $mailer->Host = SMTP_HOST;
    $mailer->Port = SMTP_PORT;
    $mailer->SMTPAuth = true;
    $mailer->Username = SMTP_USERNAME;
    $mailer->Password = SMTP_PASSWORD;
    $mailer->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mailer->setFrom(SMTP_FROM_EMAIL, SMTP_FROM_NAME);
    return $mailer;
}

/**
 * Get admin email HTML body with all application details
 */
function getAdminEmailBody($data) {
    return "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; color: #333; line-height: 1.6; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #064D50; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
            .content { padding: 20px; background: #f9f9f9; border-radius: 0 0 5px 5px; }
            .details { background: white; padding: 20px; border-radius: 5px; margin: 15px 0; }
            .field { margin: 12px 0; padding: 8px; border-bottom: 1px solid #eee; }
            .label { font-weight: bold; color: #064D50; display: inline-block; width: 150px; }
            .highlight { background: #e8f5e9; padding: 10px; border-radius: 5px; border-left: 4px solid #064D50; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>📄 New Career Application</h2>
            </div>
            <div class='content'>
                <div class='highlight'>
                    <p><strong>Position:</strong> {$data['position']}</p>
                    <p><strong>Submitted:</strong> " . date('F d, Y H:i:s') . "</p>
                </div>
                
                <div class='details'>
                    <h3 style='color: #064D50; margin-top: 0;'>Applicant Details</h3>
                    
                    <div class='field'>
                        <span class='label'>Full Name:</span> {$data['full_name']}
                    </div>
                    <div class='field'>
                        <span class='label'>Email:</span> <a href='mailto:{$data['email']}'>{$data['email']}</a>
                    </div>
                    <div class='field'>
                        <span class='label'>Phone:</span> {$data['phone']}
                    </div>
                    <div class='field'>
                        <span class='label'>Location:</span> " . ($data['location'] ?? 'Not specified') . "
                    </div>
                    <div class='field'>
                        <span class='label'>Position:</span> {$data['position']}
                    </div>
                    " . (!empty($data['cover_letter']) ? "
                    <div class='field'>
                        <span class='label'>Cover Letter:</span><br>
                        <div style='margin-top: 10px; padding: 10px; background: #f5f5f5; border-radius: 5px;'>
                            " . nl2br($data['cover_letter']) . "
                        </div>
                    </div>
                    " : "") . "
                    <div class='field'>
                        <span class='label'>Resume:</span> <strong>Attached to this email</strong>
                    </div>
                    <div class='field'>
                        <span class='label'>IP Address:</span> " . ($_SERVER['REMOTE_ADDR'] ?? 'Unknown') . "
                    </div>
                    <div class='field'>
                        <span class='label'>User Agent:</span> " . ($_SERVER['HTTP_USER_AGENT'] ?? 'Unknown') . "
                    </div>
                </div>
                
                <div style='margin-top: 20px; padding: 15px; background: #fff3cd; border-radius: 5px; border-left: 4px solid #ffc107;'>
                    <p style='margin: 0; color: #856404;'>
                        <strong>📌 Action Required:</strong> Please review this application and respond to the candidate.
                    </p>
                </div>
                
                <p style='margin-top: 20px; text-align: center;'>
                    <a href='mailto:{$data['email']}' style='background: #064D50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;'>
                        Reply to Candidate
                    </a>
                </p>
            </div>
        </div>
    </body>
    </html>
    ";
}

/**
 * Get confirmation email HTML body for applicant
 */
function getConfirmationEmailBody($data) {
    return "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; color: #333; line-height: 1.6; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #064D50; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
            .content { padding: 20px; background: #f9f9f9; border-radius: 0 0 5px 5px; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; border-top: 1px solid #ddd; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>✅ Application Received</h2>
            </div>
            <div class='content'>
                <p>Dear <strong>{$data['full_name']}</strong>,</p>
                
                <p>Thank you for applying for the <strong>{$data['position']}</strong> position at Elemensis.</p>
                
                <p>We have received your application and will review it carefully. Our HR team will contact you if your qualifications match our requirements.</p>
                
                <div style='background: white; padding: 15px; border-radius: 5px; margin: 20px 0;'>
                    <p><strong>📋 Application Summary:</strong></p>
                    <ul>
                        <li><strong>Position:</strong> {$data['position']}</li>
                        <li><strong>Date Submitted:</strong> " . date('F d, Y H:i') . "</li>
                    </ul>
                </div>
                
                <p><strong>What happens next?</strong></p>
                <ol>
                    <li>Our HR team reviews all applications</li>
                    <li>Shortlisted candidates will be contacted within 5-7 business days</li>
                    <li>If selected, we'll schedule an interview</li>
                </ol>
                
                <p>If you have any questions, please contact us at <a href='mailto:hr@elemensis.com'>hr@elemensis.com</a></p>
                
                <p style='margin-top: 30px;'>
                    Best regards,<br>
                    <strong>Elemensis HR Team</strong>
                </p>
            </div>
            <div class='footer'>
                <p>&copy; " . date('Y') . " Elemensis. All rights reserved.</p>
                <p>This is an automated confirmation, please do not reply to this email.</p>
            </div>
        </div>
    </body>
    </html>
    ";
}

// ============================================
// VALIDATOR CLASS
// ============================================

class Validator {
    /**
     * Validate application data
     */
    public function validateApplication($data) {
        $errors = [];
        
        // Validate full name
        if (empty($data['full_name'])) {
            $errors['full_name'] = 'Full name is required';
        } elseif (strlen($data['full_name']) < 2) {
            $errors['full_name'] = 'Full name must be at least 2 characters';
        } elseif (strlen($data['full_name']) > 100) {
            $errors['full_name'] = 'Full name must not exceed 100 characters';
        }
        
        // Validate email
        if (empty($data['email'])) {
            $errors['email'] = 'Email address is required';
        } elseif (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
            $errors['email'] = 'Please enter a valid email address';
        } elseif (strlen($data['email']) > 255) {
            $errors['email'] = 'Email address must not exceed 255 characters';
        }
        
        // Validate phone
        if (empty($data['phone'])) {
            $errors['phone'] = 'Phone number is required';
        } elseif (!preg_match('/^[\+\d\s\-\(\)]{10,20}$/', $data['phone'])) {
            $errors['phone'] = 'Please enter a valid phone number (10-20 characters)';
        }
        
        // Validate position
        if (empty($data['position'])) {
            $errors['position'] = 'Please select a position';
        }
        
        return $errors;
    }
    
    /**
     * Sanitize input data
     */
    public function sanitize($input) {
        if (is_array($input)) {
            return array_map([$this, 'sanitize'], $input);
        }
        return htmlspecialchars(strip_tags(trim($input)), ENT_QUOTES, 'UTF-8');
    }
}
?>