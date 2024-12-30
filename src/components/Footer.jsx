import { getCurrentYear } from "@/lib/utils";

const Footer = () => {
   return (
      <footer className="bg-take_care_primary py-10 text-white">
         <div className="container mx-auto px-4 text-center lg:flex lg:justify-between lg:text-left">
            <div className="mb-5 lg:mb-0 lg:w-1/2">
               <h2 className="text-2xl font-bold">Humeny</h2>
               <p>Trusted care and compassion for your loved ones.</p>
               <div className="mt-5">
                  <p>Contact us: 123 456 7890</p>
                  <p>Email: info@humeny.com</p>
               </div>
               <div className="mt-5">
                  <a href="#" className="mx-2">
                     Facebook
                  </a>
                  <a href="#" className="mx-2">
                     Twitter
                  </a>
                  <a href="#" className="mx-2">
                     Instagram
                  </a>
               </div>
               <div className="mt-5">
                  <p>&copy; {getCurrentYear()} Humeny. All rights reserved.</p>
               </div>
            </div>
            <div className="lg:w-1/2">
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39176.15755245568!2d76.49995019794702!3d9.5946251888781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b062ba16c6b435f%3A0xbe2b02f68f8dd06e!2sKottayam%2C%20Kerala!5e1!3m2!1sen!2sin!4v1735304540762!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  loading="lazy"
               ></iframe>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
