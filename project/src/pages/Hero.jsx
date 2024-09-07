import React from 'react';
import Foto from "../assets/pp.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useLanguage } from '../components/LanguageContext';

const Hero = () => {
  const { data } = useLanguage();  // Memanggil useLanguage di dalam komponen

  return (
    <section id="home" className="bg-gray-100 dark:bg-gray-900 h-screen flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
        {/* Bagian Kiri: Teks */}
        <div className="text-left text-gray-700 dark:text-white md:w-1/2 space-y-6 md:space-y-8">
          <h1 className="text-2xl md:text-5xl font-bold mb-4">
            {data.h1}  {/* Menggunakan data dari context */}
          </h1>
          <p className="text-lg md:text-xl">
            {data.p}
          </p>
          <button className="bg-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-full dark:bg-white dark:text-gray-700 transition-all hover:bg-gray-400 dark:hover:bg-gray-200">
            {data.button}
          </button>

          {/* Bagian Ikon Sosial Media */}
          <div className="flex justify-start space-x-6 mt-6">
            <a href={data?.hero?.socialLinks?.whatsapp || "https://wa.me/yourphonenumber"} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-white hover:text-gray-500 dark:hover:text-gray-400">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
            <a href={data?.hero?.socialLinks?.facebook || "https://facebook.com"} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-white hover:text-gray-500 dark:hover:text-gray-400">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href={data?.hero?.socialLinks?.instagram || "https://instagram.com"} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-white hover:text-gray-500 dark:hover:text-gray-400">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href={data?.hero?.socialLinks?.twitter || "https://twitter.com"} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-white hover:text-gray-500 dark:hover:text-gray-400">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </div>
        </div>

        {/* Bagian Kanan: Gambar */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src={Foto}
            alt="Hero Image"
            className="rounded-lg shadow-lg max-w-xs md:max-w-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
