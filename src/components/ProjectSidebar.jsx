const ProjectSidebar = ({ 
  projects, 
  selectedProject, 
  onProjectSelect 
}) => {
  return (
    <div className="md:w-64 lg:w-80 flex-shrink-0">
      <div className="sticky top-24 bg-gray-800/30 rounded-xl border border-gray-700/50 overflow-hidden">
        <ul className="divide-y divide-gray-700/50">
          {projects.map((project) => (
            <li key={project.id}>
              <button
                onClick={() => onProjectSelect(project.id)}
                className={`w-full text-left p-4 md:p-5 relative transition-colors duration-300 ${
                  selectedProject === project.id
                    ? 'bg-violet-500/10 text-white'
                    : 'hover:bg-gray-800/70 text-gray-300'
                }`}
              >
                <div className="flex items-start">
                  {/* Indicator dot for selected project */}
                  <span
                    className={`w-2 h-2 mt-1.5 mr-3 rounded-full ${
                      selectedProject === project.id
                        ? 'bg-violet-500'
                        : 'bg-gray-600'
                    }`}
                  />
                  <div className="flex-grow">
                    <div>
                      <h3 className="font-medium">{project.title}</h3>
                      <div className="flex items-center mt-1 text-xs text-gray-400">
                        {project.status === 'ongoing' && (
                          <span className="inline-flex h-2 w-2 mr-1 bg-green-500 rounded-full animate-pulse" 
                                title="Active Project" />
                        )}
                        <span>
                          {project.displayDate}
                          {project.status === 'ongoing' ? ' - Present' : ''}
                        </span>
                      </div>
                    </div>
                    <div className="mt-1 flex flex-wrap gap-1">
                      {project.technologies.slice(0, 2).map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs px-2 py-0.5 bg-gray-700/50 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 2 && (
                        <span className="text-xs px-2 py-0.5 bg-gray-700/50 rounded-full">
                          +{project.technologies.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Active indicator line */}
                {selectedProject === project.id && (
                  <span className="absolute left-0 top-0 bottom-0 w-1 bg-violet-500" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectSidebar; 