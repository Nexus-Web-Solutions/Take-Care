import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Card = ({ title, description, duration, imageUrl }) => (
   <div
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      data-aos="fade-up"
   >
      <img
         src={imageUrl}
         alt={`Image for ${title}`}
         className="h-40 w-full object-cover"
      />
      <div className="p-4">
         <h3 className="text-lg lg:text-3xl font-bold text-gray-800">
            {title}
         </h3>
         <p className="text-sm lg:text-xl text-gray-600 mt-2">{description}</p>
         <p className="text-sm lg:text-xl text-gray-500 mt-1">{duration}</p>
      </div>
   </div>
);

const HomeNursingServices = () => {
   useEffect(() => {
      AOS.init({ duration: 1000 });
      return () => AOS.refresh(); // Ensures AOS is refreshed properly
   }, []);

   const services = [
      {
         title: "24/7 Skilled Nursing Care",
         description:
            "Around-the-clock professional nursing care to meet your medical needs.",
         duration: "Available anytime",
         imageUrl: "/images/Service (1).png", // Corrected path to public folder
      },
      {
         title: "Post-Surgery Recovery",
         description:
            "Comprehensive care to help you recover comfortably at home.",
         duration: "Custom recovery plans",
         imageUrl: "/images/Service (1).png",
      },
      {
         title: "Elderly Care Assistance",
         description:
            "Dedicated support to enhance the quality of life for seniors.",
         duration: "Flexible schedules",
         imageUrl: "/images/Service (1).png",
      },
      {
         title: "Physical Therapy at Home",
         description:
            "Personalized therapy sessions to regain strength and mobility.",
         duration: "Sessions by appointment",
         imageUrl: "/images/Service (1).png",
      },
   ];

   return (
      <div className="bg-blue-50 px-10 py-10">
         <div className="">
            <h2 className="text-5xl font-bold text-blue-600 text-center mb-16">
               Our Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2  gap-6 ">
               {services.map((service, index) => (
                  <Card
                     key={index}
                     title={service.title}
                     description={service.description}
                     duration={service.duration}
                     imageUrl={service.imageUrl}
                  />
               ))}
            </div>
         </div>
      </div>
   );
};

export default HomeNursingServices;
