// src/Projects.jsx

import GISProject from './components/GISProject';
import ShoppingForUsProject from './components/ShoppingForUsProject';
import LPCProductCreationProject from './components/LPCProductCreationProject';
import ShopsAt550Project from './components/ShopsAt550Project';
import PortfolioProject from './components/PortfolioProject';
export function Projects() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto p-8">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">
            Projects<span className="text-violet-500">.</span>
          </h1>
          <p className="text-xl text-gray-400">
            A collection of my recent work and contributions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GISProject />
          <ShoppingForUsProject />
          <LPCProductCreationProject />
          <ShopsAt550Project />
          <PortfolioProject />
        </div>
      </div>
    </div>
  );
}

export default Projects;