import React from "react";

const Services = () => {
  const services = [
    "Service 1",
    "Service 2",
    "Service 3",
  ];
  return (
    <div className="-mt-10">
      <div className="bg-black h-auto text-white flex items-center justify-center text-2xl">
        <h1>All Services We Provide</h1>
        <ul className="my-10">
          {services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;
