import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { useLanguage } from '../components/LanguageContext';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const { data } = useLanguage();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.message) formErrors.message = 'Message is required';
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      // Submit form or trigger API here
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section id="contact" className="py-12 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">{data.h2}</h2>

        {submitted ? (
          <div className="text-center text-xl font-medium text-green-500">{data.submit}</div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-1">{data.labelname}</label>
              <input
                type="text"
                id="name"
                className={`w-full p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-md dark:bg-gray-700 dark:text-white`}
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">{data.labelemail}</label>
              <input
                type="email"
                id="email"
                className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-md dark:bg-gray-700 dark:text-white`}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium mb-1">{data.labelmassage}</label>
              <textarea
                id="message"
                className={`w-full p-2 border ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-md dark:bg-gray-700 dark:text-white`}
                rows="4"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>

            <button type="submit" className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded-md">
              <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
              {data.sendmassage}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
