import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNodeJs, faJs, faCss3Alt, faHtml5, faGit } from "@fortawesome/free-brands-svg-icons";
import { useLanguage } from '../components/LanguageContext';

const Projects = () => {

  const { data } = useLanguage();

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">{data.projects}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Project 1 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-center items-center text-center">
            <img src="https://via.placeholder.com/300" alt="Project 1" className="rounded-lg mb-4" />
            <h3 className="text-2xl font-bold mb-2">{data.project1}</h3>
            <p className="mb-4">{data.projectp1}</p>
            <div className="flex space-x-4 mb-4 justify-center">
              <FontAwesomeIcon icon={faReact} size="2x" className="text-blue-500" />
              <FontAwesomeIcon icon={faJs} size="2x" className="text-yellow-500" />
              <FontAwesomeIcon icon={faCss3Alt} size="2x" className="text-blue-600" />
            </div>
            <a
              href="https://github.com/username/project1"
              className="inline-block bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white font-semibold px-6 py-3 rounded-full"
              target="_blank" rel="noopener noreferrer"
            >
              {data.a}
            </a>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-center items-center text-center">
            <img src="https://via.placeholder.com/300" alt="Project 2" className="rounded-lg mb-4" />
            <h3 className="text-2xl font-bold mb-2">{data.project2}</h3>
            <p className="mb-4">{data.projectp2}</p>
            <div className="flex space-x-4 mb-4 justify-center">
              <FontAwesomeIcon icon={faNodeJs} size="2x" className="text-green-500" />
              <FontAwesomeIcon icon={faReact} size="2x" className="text-blue-500" />
              <FontAwesomeIcon icon={faHtml5} size="2x" className="text-orange-500" />
            </div>
            <a
              href="https://github.com/username/project2"
              className="inline-block bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white font-semibold px-6 py-3 rounded-full"
              target="_blank" rel="noopener noreferrer"
            >
              {data.a}
            </a>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-center items-center text-center">
            <img src="https://via.placeholder.com/300" alt="Project 3" className="rounded-lg mb-4" />
            <h3 className="text-2xl font-bold mb-2">{data.project3}</h3>
            <p className="mb-4">{data.projectp3}</p>
            <div className="flex space-x-4 mb-4 justify-center">
              <FontAwesomeIcon icon={faGit} size="2x" className="text-orange-600" />
              <FontAwesomeIcon icon={faReact} size="2x" className="text-blue-500" />
              <FontAwesomeIcon icon={faJs} size="2x" className="text-yellow-500" />
            </div>
            <a
              href="https://github.com/username/project3"
              className="inline-block bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white font-semibold px-6 py-3 rounded-full"
              target="_blank" rel="noopener noreferrer"
            >
              {data.a}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
