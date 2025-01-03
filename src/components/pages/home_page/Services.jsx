import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Card = ({ title, description, duration, imageUrl }) => (
  <div
    className="max-w-[500px] overflow-hidden rounded-lg bg-white shadow-lg"
    data-aos="fade-up"
  >
    <img
      src={imageUrl}
      alt={`Image for ${title}`}
      className="h-40 w-full object-cover"
    />
    <div className="p-4">
      <h3 className="text-lg font-bold text-gray-800 lg:text-2xl">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 lg:text-xl">{description}</p>
      <p className="mt-1 text-sm text-gray-500 lg:text-xl">{duration}</p>
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
    <div className="bg-blue-50 px-10 py-20">
      <div className="flex flex-col items-center">
        <h2 className="mb-16 text-center text-5xl font-bold text-blue-600">
          Our Services
        </h2>
        <div className="grid grid-cols-1 gap-6 gap-x-28 sm:grid-cols-2">
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
