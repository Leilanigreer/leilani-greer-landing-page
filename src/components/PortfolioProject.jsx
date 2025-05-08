// src/components/PortfolioProject.jsx
import ProjectComponent from './ProjectComponent';
import { FaGithub } from "react-icons/fa";


const projectData = {
  id: 'portfolio',
  title: "Portfolio Website",
  technologies: ['React.js', 'Tailwind CSS', 'Framer Motion', 'EmailJS'],
  date: new Date('2024-11-20'),
  displayDate: 'Nov 2024',
  status: 'ongoing',
  description: [
    "A modern, responsive portfolio website built with React.js and Tailwind CSS, featuring smooth animations powered by Framer Motion. The site showcases my projects, skills, and experience in an engaging and interactive way.",
    "Key features include a dynamic project showcase with filtering and sorting capabilities, a contact form integrated with EmailJS for seamless communication, and a responsive design that works beautifully across all devices. The UI incorporates a dark theme with violet accents, creating a professional and visually appealing experience."
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

const PortfolioProject = () => {
  return <ProjectComponent {...projectData} />;
};

export default PortfolioProject;