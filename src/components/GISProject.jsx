// src/components/GISProject.jsx
import ProjectComponent from './ProjectComponent';
import {FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projectData = {
  id: 'gis',
  title: "Get In Shape (G.I.S)",
  technologies: ['React.js', 'Ruby on Rails', 'PostgreSQL', 'JWT'],
  date: new Date('2024-11-06'),
  displayDate: 'Nov 2024',
  status: 'completed',
  description: [
    "Get In Shape (G.I.S) is a comprehensive fitness application built with React.js and Ruby on Rails, utilizing a PostgreSQL database and JWT authentication for secure user sessions. The interface features an intuitive filtering system where users can combine multiple criteria - exercise level, category, equipment, and primary muscles - with dedicated apply and reset filter buttons. The backend leverages PostgreSQL's array data type for efficient image path management, with exercise images served directly from the Rails application.",
    "The application presents over 870 exercises in a responsive card layout, each showcasing multiple navigable images, difficulty badges, exercise classifications (strength, stretching), equipment requirements, and target muscle groups. Users can explore detailed exercise information and, once authenticated, add exercises to personalized routines with specific rep and set counts. Key features include routine management with day-based filtering, exercise logging functionality, and the ability to track completed workouts with detailed notes. Deployed and hosted on Railway's cloud platform."
  ],
  media: {
    type: 'images',
    content: [
      {
        src: "GIS_ExercisePage.png",
        alt: "GIS Exercise Page"
      }
    ]
  },
  links: {
    live: [
      {
        href: "https://gym-fitness-frontend-tailwind-production.up.railway.app/",
        text: "Tailwind Live Demo",
        icon: <FaExternalLinkAlt className="w-4 h-4 relative z-10" />
      },
      {
        href: "https://gym-fitness-frontend-production.up.railway.app",
        text: "Bootstrap Live Demo",
        icon: <FaExternalLinkAlt className="w-4 h-4 relative z-10" />
      },
    ],
    github: [
      {
        href: "https://github.com/Leilanigreer/gym-fitness-frontend-tailwind",
        text: "Tailwind GitHub",
        icon: <FaGithub size={16} className="w-4 h-4" />
      },
      {
        href: "https://github.com/Leilanigreer/gym-fitness-frontend",
        text: "Bootstrap GitHub",
        icon: <FaGithub size={16} className="w-4 h-4" />
      },
      {
        href: "https://github.com/Leilanigreer/gym-fitness-api",
        text: "Ruby on Rails GitHub",
        icon: <FaGithub size={16} className="w-4 h-4" />
      }
    ]
  }
};

const GISProject = () => {
  return <ProjectComponent {...projectData} />;
};

export default GISProject;