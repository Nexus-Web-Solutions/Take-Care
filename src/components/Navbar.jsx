import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <nav className="bg-white py-4 font-semibold  mx-10">
         <div className="flex justify-between items-center">
            <div className="font-bold  text-xl text-take_care_primary">
               Take Care
            </div>
            <div className="hidden md:flex space-x-10">
               <a href="/" className="hover:text-take_care_primary">
                  Home
               </a>
               <a href="/about" className="hover:text-take_care_primary">
                  About Us
               </a>
               <a href="/contact" className="hover:text-take_care_primary">
                  Services
               </a>
               <a href="/services" className="hover:text-take_care_primary">
                  Careers
               </a>
            </div>
            <div className="hidden md:flex ">
               <Button>Contact Us</Button>
            </div>
            <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
               <Menu className="hover:cursor-pointer" />
            </div>
         </div>

         {/* Mobile Menu */}
         {isOpen && (
            <div className="mt-4 md:hidden text-center items-center">
               <div className="flex flex-col  space-y-2 divide-y divide-gray-400">
                  <a href="/" className="hover:text-take_care_primary w-full">
                     Home
                  </a>
                  <a
                     href="/about"
                     className="hover:text-take_care_primary w-full pt-2"
                  >
                     About Us
                  </a>
                  <a
                     href="/contact"
                     className="hover:text-take_care_primary w-full pt-2"
                  >
                     Contact Us
                  </a>
                  <a
                     href="/services"
                     className="hover:text-take_care_primary w-full pt-2"
                  >
                     Services
                  </a>
               </div>
               <div className="pt-2">
                  <Button>Contact Us</Button>
               </div>
            </div>
         )}
      </nav>
   );
};

export default Navbar;
