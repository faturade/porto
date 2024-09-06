const Projects = () => {
    return (
      <section id="projects" className="py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Project 1</h3>
              <p>A responsive web application built using React and Tailwind CSS.</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Project 2</h3>
              <p>An e-commerce platform with dynamic components and user authentication.</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Project 3</h3>
              <p>A personal blog created with React and Markdown for content management.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  