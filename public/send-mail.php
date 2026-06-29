<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Get the POST data
$input = json_decode(file_get_contents('php://input'), true);

// Validate input
if (!$input) {
    echo json_encode(['error' => 'Invalid request data']);
    http_response_code(400);
    exit();
}

$name = htmlspecialchars($input['name'] ?? '');
$email = htmlspecialchars($input['email'] ?? '');
$subject = htmlspecialchars($input['subject'] ?? '');
$message = htmlspecialchars($input['message'] ?? '');

// Server-side validation
if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    echo json_encode(['error' => 'All fields are required']);
    http_response_code(400);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['error' => 'Invalid email address']);
    http_response_code(400);
    exit();
}

// Email configuration
$to = 'm.yaqoob@i-diligence.com'; // Change to your email
$company_name = 'Elemensis';

// Email subject
$email_subject = "New Contact Form  - $company_name";

// HTML Email Body for Admin
$email_body = "
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #0D231D; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { padding: 20px; background: #f9f9f9; border-radius: 0 0 10px 10px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #0D231D; }
        .value { margin-top: 5px; padding: 10px; background: white; border-radius: 5px; border-left: 4px solid #00cba9; }
        .company-name { color: #00cba9; font-weight: bold; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>New Contact Form Submission</h2>
            <p style='color: #00cba9; margin: 0;'>$company_name</p>
        </div>
        <div class='content'>
            <div class='field'>
                <div class='label'>Name:</div>
                <div class='value'>$name</div>
            </div>
            <div class='field'>
                <div class='label'>Email:</div>
                <div class='value'>$email</div>
            </div>
            <div class='field'>
                <div class='label'>Subject:</div>
                <div class='value'>$subject</div>
            </div>
            <div class='field'>
                <div class='label'>Message:</div>
                <div class='value'>" . nl2br($message) . "</div>
            </div>
            <br>
            <p style='color: #666; font-size: 12px; text-align: center;'>
                This message was sent from your website contact form.
            </p>
        </div>
    </div>
</body>
</html>
";

// Plain text version for admin
$text_body = "
New Contact Form Submission - $company_name

Name: $name
Email: $email
Subject: $subject

Message:
$message

---
This message was sent from your website contact form.
";

// Email headers for admin
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: $company_name <$to>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send admin email
$admin_sent = mail($to, $email_subject, $email_body, $headers);

// Auto-reply to user
if ($admin_sent) {
    // Auto-reply subject
    $reply_subject = "Thank you for contacting $company_name";
    
    // Auto-reply HTML body
    $reply_body = "
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #00cba9; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { padding: 20px; background: #f9f9f9; border-radius: 0 0 10px 10px; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
            .company-name { color: #00cba9; font-weight: bold; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>Thank You for Contacting $company_name!</h2>
            </div>
            <div class='content'>
                <p>Dear $name,</p>
                <p>Thank you for reaching out to <strong>$company_name</strong>. We have received your message and will get back to you within 24 hours.</p>
                
                <p><strong>Your Message Summary:</strong></p>
                <p><strong>Subject:</strong> $subject</p>
                <p><strong>Message:</strong></p>
                <p style='background: #f5f5f5; padding: 15px; border-radius: 5px;'>$message</p>
                
                <br>
                <p>Best regards,</p>
                <p><strong style='color: #00cba9;'>$company_name Team</strong></p>
                <p style='color: #666; font-size: 14px;'>$to</p>
            </div>
            <div class='footer'>
                <p>This is an automated response. Please do not reply to this email.</p>
                <p>&copy; " . date('Y') . " $company_name. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
    ";
    
    // Auto-reply plain text
    $reply_text = "
    Thank You for Contacting $company_name!
    
    Dear $name,
    
    Thank you for reaching out to $company_name. We have received your message and will get back to you within 24 hours.
    
    Your Message Summary:
    Subject: $subject
    Message: $message
    
    Best regards,
    $company_name Team
    $to
    
    This is an automated response. Please do not reply to this email.
    ";
    
    // Auto-reply headers
    $reply_headers = "MIME-Version: 1.0\r\n";
    $reply_headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $reply_headers .= "From: $company_name <$to>\r\n";
    $reply_headers .= "Reply-To: $to\r\n";
    $reply_headers .= "X-Mailer: PHP/" . phpversion();
    
    // Send auto-reply
    mail($email, $reply_subject, $reply_body, $reply_headers);
    
    // Return success response
    echo json_encode([
        'success' => true,
        'message' => 'Email sent successfully'
    ]);
    http_response_code(200);
} else {
    // Return error response
    echo json_encode([
        'error' => 'Failed to send email. Please try again later.'
    ]);
    http_response_code(500);
}
?>