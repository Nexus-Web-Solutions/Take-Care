import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleContactUsClick = () => {
    navigate("/#contact");

    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="mx-10 bg-white py-4 font-semibold">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold text-take_care_primary">
        <img
            src="/images/logo.jpg"
            alt="Take Care Logo"
            className="h-12 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="hidden space-x-10 md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-take_care_primary ${
                isActive && "text-take_care_primary"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              `hover:text-take_care_primary ${
                isActive && "text-take_care_primary"
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `hover:text-take_care_primary ${
                isActive && "text-take_care_primary"
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/careers"
            className={({ isActive }) =>
              `hover:text-take_care_primary ${
                isActive && "text-take_care_primary"
              }`
            }
          >
            Careers
          </NavLink>
        </div>
        <div className="hidden md:flex">
          <Button onClick={handleContactUsClick}>Contact Us</Button>
        </div>
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu className="hover:cursor-pointer" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-4 items-center text-center md:hidden">
          <div className="flex flex-col space-y-2 divide-y divide-gray-400">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `w-full hover:text-take_care_primary ${
                  isActive && "text-take_care_primary"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                `w-full pt-2 hover:text-take_care_primary ${
                  isActive && "text-take_care_primary"
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/careers"
              className={({ isActive }) =>
                `w-full pt-2 hover:text-take_care_primary ${
                  isActive && "text-take_care_primary"
                }`
              }
            >
              Careers
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `w-full pt-2 hover:text-take_care_primary ${
                  isActive && "text-take_care_primary"
                }`
              }
            >
              Services
            </NavLink>
          </div>
          <div className="pt-2">
            <Button onClick={handleContactUsClick}>Contact Us</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
