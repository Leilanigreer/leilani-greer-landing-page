import ProjectComponent from './ProjectComponent';
import {FaGithub } from "react-icons/fa";

const PortfolioProject = () => {
  const projectData = {
    title: "Portfolio Website",
    technologies: ['React', 'Tailwind CSS', 'Railway', 'Vite'],
    description: [
      "My personal portfolio website showcases my projects and skills as a developer. Built with React and styled with Tailwind CSS, it features a clean, responsive design with smooth animations and a dark theme.",
      "The site is deployed on Railway for reliable hosting and uses Vite for an optimized development experience. The project demonstrates my ability to create modern, performant web applications while incorporating best practices in web development."
    ],
    links: {
      github: [
        {
          href: "https://github.com/Leilanigreer/leilani-greer-landing-page",
          text: "GitHub",
          icon: <FaGithub size={16} className="w-4 h-4" />
        }
      ]
    }
  };

  return <ProjectComponent {...projectData} />;
};

export default PortfolioProject; 