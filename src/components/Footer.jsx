import { Facebook, Instagram, Mail } from "lucide-react";
import React from "react";


const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-black text-white py-6">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
          {/* Company Info */}
          <div className="space-y-1">
            <h2 className="font-bold text-lg">Humeny</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus
              feugiat lectus risus sed ullamcorper. Auctor semper fermentum.
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus
              feugiat lectus risus sed ullamcorper. Auctor semper fermentum

            </p>
            <p className="text-sm">
              Volutpat integer vel. In rhoncus elementum nunc, malesuada mi sed.
              Nibh est sit lobortis id semper.
            </p>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400 text-xl">
                <Instagram/>
              </a>
              <a href="#" className="hover:text-gray-400 text-xl">
                <Facebook/>
              </a>
              <a href="#" className="hover:text-gray-400 text-xl">
                <Mail/>
              </a>
            </div>
          </div>

          {/* Address Section */}
          <div className="space-y-2">
            <h2 className="font-bold text-lg">Address</h2>
            <div className="w-90 h-32 bg-gray-300 rounded-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62827.69349158767!2d76.33972654235599!3d10.202499356966053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080665e0bb9959%3A0x19b75e6b4e671ef1!2sAngamaly%2C%20Kerala!5e0!3m2!1sen!2sin!4v1735654208633!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 border-t-2 border-gray-100 pt-4 flex flex-col md:flex-row items-center justify-between text-sm">
          {/* Left: Copyright */}
          <p>Humeny © 2024. All rights reserved.</p>

          {/* Right: Links */}
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-gray-400">
              Terms
            </a>
            <a href="#" className="hover:text-gray-400">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-400">
              Contact
            </a>
            <a href="#" className="hover:text-gray-400">
              EN
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
