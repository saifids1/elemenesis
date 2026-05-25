// import { div } from "framer-motion/client";

import Footer from "../layouts/footer";
import TopNavigation from "../layouts/navbar";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { SiSatellite } from "react-icons/si";
import { FaRegHandshake } from "react-icons/fa6";
import { PiFediverseLogoDuotone } from "react-icons/pi";
import { BiLogoTelegram } from "react-icons/bi";

export default function WhyUs() {
  const brandGradient =
    "linear-gradient(135deg, rgb(0, 204, 170) 0%, rgb(0, 185, 204) 100%)";
  return (
    <div className="bg-black why-us">
      <TopNavigation />
      <section>
        <div className="why-us-bg"></div>
        <div className="why-us-content">
            <div className="why-us-div p-10">
              <h1 className="text-5xl font-bold mb-4">Why Choose US?</h1>
              <div className="flex gap-2">
                <div className="p-6 rounded-lg shadow-md" style={{width : "90%"}}>
                  <p>
                    Elemensis’ strengths come from its continuous commitment and
                    unrelenting effort to offer our cherished clients unmatched
                    assistance. However, the source of our actual commitment is in
                    the very centre of our principles, which act as the beating
                    heart of our business, directing and influencing every facet of
                    our operations.
                  </p>
                  <button
                    className="mt-4 px-4 py-2 text-white rounded hover:bg-blue-600"
                    style={{ background: brandGradient }}
                  >
                    Learn More
                  </button>
                </div>
                <div className="rounded-lg shadow-md width-100">
                  <div className="flex flex-cols gap-5">
                    <div>
                      <div
                        className="flex items-start pt-16  p-4  gap-4"
                        style={{ borderRight: "1px solid #333" }}
                      >
                        <div className="bg-white text-emerald-500 p-3 rounded-full">
                          <SiSatellite size={20} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-xl mb-1">Innovation</h3>
                          <p className="text-gray-100">
                            Elemensis is a pioneering company that continually
                            introduces cutting-edge goods and solutions that
                            transform the market and improve your daily experiences.
                          </p>
                        </div>
                      </div>
                      <div
                        className="p-4"
                        style={{ borderRight: "1px solid #333" }}
                      >
                        <div
                          className="flex items-start gap-4 pt-5"
                          style={{ borderTop: "1px solid #333" }}
                        >
                          <div className="bg-white text-emerald-500 p-3 rounded-full">
                            <PiFediverseLogoDuotone size={20} />
                          </div>
                          <div className="">
                            <h3 className="font-semibold text-xl mb-1">
                              Diversity
                            </h3>
                            <p className="text-gray-100">
                              Diversity improves our culture, inspires innovation,
                              and develops a collaborative atmosphere where diverse
                              viewpoints and skills come together to produce
                              ground-breaking solutions suited for a variety of
                              audiences.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-start gap-4">
                        <div className="bg-white text-emerald-500 p-3 rounded-full">
                          <FaRegHandshake size={20} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-xl mb-1">
                            Customers Centricity
                          </h3>
                          <p className="text-gray-100">
                            The core of our ideology is that of our customers. We
                            pay close attention to what they need, what they like,
                            and what they say so that every connection is unique and
                            extraordinary and leaves them feeling valued and cared
                            for.
                          </p>
                        </div>
                      </div>
                      <div
                        className="flex items-start gap-4 mt-5 p-4"
                        style={{ borderTop: "1px solid #333" }}
                      >
                        <div className="bg-white text-emerald-500 p-3 rounded-full">
                          <BiLogoTelegram size={20} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-xl mb-1">
                            SUSTAINABILITY
                          </h3>
                          <p className="text-gray-100">
                            SUSTAINABILITY We are committed to protecting the
                            environment for future generations, thus sustainability
                            is more than simply a catchphrase to us. We work to
                            reduce our environmental impact and advocate for a
                            greener future through eco-friendly sourcing,
                            responsible production, and eco-friendly packaging.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
