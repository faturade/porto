import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import Foto from '../assets/pp.png'

const About = () => {
  const { data } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-10 lg:space-y-0 lg:space-x-16">
          {/* Left: Image Section */}
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <img
              src={Foto} // Pastikan path gambar benar
              alt="About Me"
              className="rounded-lg shadow-lg max-w-xs md:max-w-sm"
            />
          </div>

          {/* Right: Text Section */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-bold text-center lg:text-left mb-6">{data.about}</h2>
            <p className="text-xl text-center lg:text-left max-w-lg mx-auto lg:mx-0">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
