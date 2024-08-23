import Container from "@/components/shared/Container";
import { Mail, MapPin, PhoneCall, Send } from "lucide-react";

const Contact = () => {
  return (
    <Container>
      <div className="flex w-full flex-col justify-center items-center px-6 py-12">
        <div className="flex justify-center items-center gap-2 flex-col mb-12">
          <h2 className="text-3xl md:text-6xl font-semibold">Contact Us</h2>
          <p className="text-base md:text-lg text-center">
            Have any questions? Feel free to contact us.
          </p>
        </div>
        <div className="flex items-center border-2 border-accent rounded-md w-full md:w-[90%]">
          <div className="hidden lg:flex flex-col gap-8 bg-accent text-white px-6 py-10 w-[50%]">
            <div>
              {/* Map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.008834880848!2d73.08942017589804!3d19.019332353747796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e9c1fa130487%3A0xac3d8490bf4a2bc9!2sNavkar%20Academy!5e0!3m2!1sen!2sin!4v1724013140042!5m2!1sen!2sin"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[300px] rounded-md"
              ></iframe>
            </div>
            {/* Contact Information for Desktop */}
            <div className="flex flex-col gap-4">
              {/* Contact Information */}
              <div className="flex items-center gap-2 text-lg">
                <PhoneCall />
                <span>+91 1234567890</span>
              </div>
              <div className="flex items-center gap-2 text-lg">
                <Mail />
                <span>info@navkaracademy.in</span>
              </div>
              <div className="flex items-center gap-2 text-lg">
                <MapPin />
                <span>
                  123, Lorem Ipsum Street, Lorem Ipsum, Dolor Sit, Amet
                </span>
              </div>
            </div>
          </div>
          <div className="px-6 py-10 w-full lg:w-[50%]">
            {/* Contact Form for both Mobile & Desktop */}
            <form className="flex flex-col gap-6">
              <div className="flex gap-4 items-center flex-col md:flex-row">
                <div className="flex flex-col gap-1 w-full">
                  <label
                    htmlFor="firstname"
                    className="text-primary text-base font-normal"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    className="border-2 border-accent bg-transparent rounded-lg px-2 py-1 w-full"
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label
                    htmlFor="lastname"
                    className="text-primary text-base font-normal"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    className="border-2 border-accent bg-transparent rounded-lg px-2 py-1"
                  />
                </div>
              </div>
              <div className="flex gap-4 items-center flex-col md:flex-row">
                <div className="flex flex-col gap-1 w-full">
                  <label
                    htmlFor="email"
                    className="text-primary text-base font-normal"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="border-2 border-accent bg-transparent rounded-lg px-2 py-1"
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label
                    htmlFor="phone"
                    className="text-primary text-base font-normal"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="border-2 border-accent bg-transparent rounded-lg px-2 py-1"
                  />
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-1 w-full">
                  <label
                    htmlFor="message"
                    className="text-primary text-base font-normal"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="border-2 border-accent bg-transparent rounded-lg px-2 py-1 resize-none h-[100px]"
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="w-full flex justify-center items-center">
                  <button className="bg-accent text-white w-full flex justify-center items-center gap-2 border-2 border-accent rounded-md px-4 py-2 text-lg font-medium hover:bg-background hover:text-primary transition-all duration-300 ease-in-out">
                    Submit <Send />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
