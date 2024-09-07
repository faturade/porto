import { useLanguage } from '../components/LanguageContext';

const Footer = () => {

    const { data } = useLanguage(); 

  return (
    <footer className="py-4 bg-gray-300 dark:bg-gray-900 text-gray-800 dark:text-white relative">
      <div className="container mx-auto text-center">
        {/* Footer Text */}
        <p>&copy;{data.footer}</p>
      </div>
    </footer>
  );
};

export default Footer;
