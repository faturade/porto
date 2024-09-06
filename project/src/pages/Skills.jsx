const Skills = () => {
    return (
      <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>
          <div className="flex justify-center space-x-10">
            <div className="text-center">
              <h3 className="text-2xl font-bold">Frontend</h3>
              <p>React, Tailwind CSS, JavaScript</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold">Backend</h3>
              <p>Node.js, Express, MongoDB</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold">Tools</h3>
              <p>Git, Webpack, VSCode</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  