import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNodeJs, faGit, faCss3Alt, faHtml5, faJs, faBootstrap, faNpm } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faCode } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from '../components/LanguageContext';

const Skills = () => {

  const { data } = useLanguage();

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">{data.skills}</h2>
        
        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          
          {/* Frontend Skills */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Frontend</h3>
            <div className="flex justify-center space-x-6 mb-4">
              <FontAwesomeIcon icon={faHtml5} size="3x" className="text-orange-600" />
              <FontAwesomeIcon icon={faCss3Alt} size="3x" className="text-blue-600" />
              <FontAwesomeIcon icon={faJs} size="3x" className="text-yellow-500" />
              <FontAwesomeIcon icon={faReact} size="3x" className="text-blue-500" />
              <FontAwesomeIcon icon={faBootstrap} size="3x" className="text-purple-600" />
            </div>
            <p>HTML, CSS, JavaScript, React, Bootstrap</p>
          </div>
          
          {/* Backend Skills */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Backend</h3>
            <div className="flex justify-center space-x-6 mb-4">
              <FontAwesomeIcon icon={faNodeJs} size="3x" className="text-green-600" />
              <FontAwesomeIcon icon={faDatabase} size="3x" className="text-gray-600" />
              <FontAwesomeIcon icon={faNpm} size="3x" className="text-red-600" />
            </div>
            <p>Node.js, Express, MongoDB</p>
          </div>
          
          {/* Tools */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Tools</h3>
            <div className="flex justify-center space-x-6 mb-4">
              <FontAwesomeIcon icon={faGit} size="3x" className="text-orange-600" />
              <FontAwesomeIcon icon={faCode} size="3x" className="text-green-600" />
              <FontAwesomeIcon icon={faNpm} size="3x" className="text-red-600" />
            </div>
            <p>Git, Webpack, VSCode</p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Skills;
