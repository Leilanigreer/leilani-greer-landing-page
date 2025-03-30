import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const ProjectSidebar = ({ 
  projects, 
  selectedProject, 
  onProjectSelect 
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleProjectSelect = (projectId) => {
    onProjectSelect(projectId);
    // Scroll to the main content on mobile
    if (window.innerWidth < 768) {
      const mainContent = document.querySelector('.project-main-content');
      if (mainContent) {
        mainContent.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="md:w-64 lg:w-80 flex-shrink-0">
      {/* Mobile header with collapse button */}
      <div className="md:hidden flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Projects</h2>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
          aria-label={isExpanded ? "Collapse projects" : "Expand projects"}
        >
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>

      <div className={`md:block transition-all duration-300 ${
        isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="sticky top-24 bg-gray-800/30 rounded-xl border border-gray-700/50 overflow-hidden">
          <ul className="divide-y divide-gray-700/50">
            {projects.map((project) => (
              <li key={project.id}>
                <button
                  onClick={() => handleProjectSelect(project.id)}
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

      {/* Mobile scroll indicator */}
      <div className="md:hidden text-center mt-4 text-gray-400">
        <FaChevronDown className="mx-auto animate-bounce" />
        <span className="text-sm">Scroll to view project details</span>
      </div>
    </div>
  );
};

export default ProjectSidebar; 