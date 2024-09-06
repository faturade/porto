import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input type="text" id="name" className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-gray-700 dark:text-white" />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input type="email" id="email" className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-gray-700 dark:text-white" />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea id="message" className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-gray-700 dark:text-white" rows="5"></textarea>
          </div>
          <button className="flex items-center justify-center bg-blue-500 text-white px-6 py-3 rounded-lg">
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
