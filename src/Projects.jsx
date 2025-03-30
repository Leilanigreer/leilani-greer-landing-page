// src/Projects.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';
import ProjectSidebar from './components/ProjectSidebar';
import ProjectComponent from './components/ProjectComponent';
import projectData from './data/projectData';
// Import the helper function to get all projects as an array
import { getProjectsArray } from './data/projectData';

function Projects() {
  // Get project data from centralized store
  const projectsData = getProjectsArray();

  // State for currently selected project and sort order
  const [selectedProject, setSelectedProject] = useState(null);
  const [sortAscending, setSortAscending] = useState(false);
  
  // Sort projects by date
  const sortedProjects = [...projectsData].sort((a, b) => {
    if (sortAscending) {
      return a.date - b.date; // Oldest to newest
    } else {
      return b.date - a.date; // Newest to oldest (default)
    }
  });

  // Set initial selected project after sorting
  useEffect(() => {
    if (selectedProject === null) {
      setSelectedProject(sortedProjects[0].id);
    }
  }, [sortedProjects, selectedProject]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        <div className="mb-8 md:mb-12">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Projects<span className="text-violet-500">.</span>
            </h1>
            <button 
              onClick={() => setSortAscending(!sortAscending)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              aria-label={sortAscending ? "Sort newest first" : "Sort oldest first"}
            >
              {sortAscending ? (
                <>
                  <span className="hidden sm:inline">Oldest First</span>
                  <FaSortAmountUp />
                </>
              ) : (
                <>
                  <span className="hidden sm:inline">Newest First</span>
                  <FaSortAmountDown />
                </>
              )}
            </button>
          </div>
          <p className="text-lg md:text-xl text-gray-400">
            A collection of my recent work and contributions
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Navigation */}
          <ProjectSidebar 
            projects={sortedProjects}
            selectedProject={selectedProject}
            onProjectSelect={setSelectedProject}
          />

          {/* Main Content Area */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              {selectedProject && (
                <motion.div
                  key={selectedProject}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectComponent {...projectData[selectedProject]} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;