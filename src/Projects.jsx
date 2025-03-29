// src/Projects.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';
import GISProject from './components/GISProject';
import ShoppingForUsProject from './components/ShoppingForUsProject';
import LPCProductCreationProject from './components/LPCProductCreationProject';
import ShopsAt550Project from './components/ShopsAt550Project';
import PortfolioProject from './components/PortfolioProject';
import ProjectSidebar from './components/ProjectSidebar';

export function Projects() {
  // Projects data array with metadata from each project
  const projectsData = [
    { id: 'gis', title: 'Get In Shape (G.I.S)', technologies: ['React.js', 'Ruby on Rails', 'PostgreSQL', 'JWT'], date: new Date('2024-11-06'), displayDate: 'Nov 2024', status: 'completed' },
    { id: 'shopping4us', title: 'Shopping 4 Us', technologies: ['React.js', 'Ruby on Rails', 'PostgreSQL', 'JWT'], date: new Date('2024-09-09'), displayDate: 'Sep 2024', status: 'completed' },
    { id: 'lpc', title: 'LPC Product Creation', technologies: ['Remix', 'PostgreSQL', 'Prisma', 'Shopify CLI', 'GraphQL', 'Polaris'], date: new Date('2024-10-17'), displayDate: 'Oct 2024', status: 'ongoing' },
    { id: 'shops550', title: 'The Shops At 550', technologies: ['React.tsx', 'Tailwind CSS', 'TypeScript', 'Cloudinary'], date: new Date('2025-02-26'), displayDate: 'Feb 2025', status: 'completed' },
    { id: 'portfolio', title: 'Portfolio Website', technologies: ['React.js', 'Tailwind CSS', 'Railway'], date: new Date('2024-11-20'), displayDate: 'Nov 2024', status: 'ongoing' }
  ];

  // State for currently selected project and sort order
  const [selectedProject, setSelectedProject] = useState(projectsData[0].id);
  const [sortAscending, setSortAscending] = useState(false);
  
  // Sort projects by date
  const sortedProjects = [...projectsData].sort((a, b) => {
    if (sortAscending) {
      return a.date - b.date; // Oldest to newest
    } else {
      return b.date - a.date; // Newest to oldest (default)
    }
  });

  // Map of project components
  const projectComponents = {
    gis: <GISProject />,
    shopping4us: <ShoppingForUsProject />,
    lpc: <LPCProductCreationProject />,
    shops550: <ShopsAt550Project />,
    portfolio: <PortfolioProject />
  };

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
              <motion.div
                key={selectedProject}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {projectComponents[selectedProject]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;