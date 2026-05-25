import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
export default function ContactUsContent() {
  const brandGradient =
    "linear-gradient(135deg, rgb(0, 204, 170) 0%, rgb(0, 185, 204) 100%)";
  return (
    <section className="">
      <div className="contact-us"></div>
      <section className="contact-us-form bg-white">
        <div className="max-w-7xl mx-auto px-6 py-10 form-div shodow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div className=" p-8 rounded-2xl shadow-md">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Contact Us
              </h2>

              <form className="space-y-5">
                <div>
                  <label className="block mb-2 text-gray-700">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700">Message</label>
                  <textarea
                    rows="5"
                    placeholder="Write your message..."
                    className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className=" text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
                  style={{ background: brandGradient }}
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div
              className=" text-white p-8 rounded-2xl shadow-md"
              style={{ background: brandGradient }}
            >
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white text-emerald-500 p-3 rounded-full">
                    <FaMapMarkerAlt size={20} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-xl mb-1">Address</h3>

                    <p className="text-gray-100">
                      Office No-215, Frij All Murar Deira, DUBAI (UAE)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white text-emerald-500 p-3 rounded-full" >
                    <FaPhoneAlt size={18} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-xl mb-1">Phone</h3>

                    <p className="text-gray-100">+971543471546</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white text-emerald-500 p-3 rounded-full">
                    <FaEnvelope size={18} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-xl mb-1">Email</h3>

                    <p className="text-gray-100">info@elemensisllc.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        id="map"
        className="relative h-[500px] overflow-hidden bg-cover bg-[50%] bg-no-repeat"
      >
        <iframe
          src="https://maps.google.com/maps?q=frij%20all%20murar%2C%20deira%2C%20dubai&t=m&z=17&output=embed&iwloc=near"
          width="100%"
          height="480"
          style={{ border: "0" }}
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
