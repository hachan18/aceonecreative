import React from 'react';

const Services = () => {
  return (
    <section className="w-full bg-white py-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-black">Our Services</h2>
        <p className="text-xl text-gray-600 mt-4">We offer a variety of web development services tailored to your needs.</p>
      </div>
      <div className="flex justify-center mt-10 gap-10">
        <div className="w-64 p-6 bg-gray-200 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-black">Web Design</h3>
          <p className="text-gray-600 mt-2">Creative and responsive web design that attracts and engages visitors.</p>
        </div>
        <div className="w-64 p-6 bg-gray-200 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-black">Web Development</h3>
          <p className="text-gray-600 mt-2">Building fast, scalable, and secure websites to drive business growth.</p>
        </div>
        <div className="w-64 p-6 bg-gray-200 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-black">E-commerce Solutions</h3>
          <p className="text-gray-600 mt-2">Developing customized e-commerce solutions for businesses of all sizes.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
