import ProjectComponent from './ProjectComponent';
import {FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ShopsAt550Project = () => {
  const projectData = {
    title: "The Shops At 550",
    technologies: ['React.tsx', 'Tailwind CSS', 'TypeScript', 'Cloudinary'],
    description: [
      "The Shops At 550 is a web application built with React.tsx, Tailwind CSS, TypeScript, and Cloudinary. It is a platform for managing and showcasing the shops at 550, a collection of small business located in the heart of the city. The application allows users to view the shops, read about their offerings, and contact them for more information.",
      "I chose to build this project using React.tsx, Tailwind CSS, and TypeScript because I wanted to challenge myself to learn new technologies and build a project that would be useful for the community. The next steps for this project will be to create a login for the shops to update their own information."
    ],
    media: {
      type: 'images',
      content: [
        {
          src: "ShopsAt550_HomePage.png",
          alt: "Shops At 550 Home Page"
        }
      ]
    },
    links: {
      live: [
        {
          href: "https://theshopsat550.com/",
          text: "Active Site",
          icon: <FaExternalLinkAlt className="w-4 h-4 relative z-10" />
        }
      ],
      github: [
        {
          href: "https://github.com/Leilanigreer/shops_550_vite",
          text: "GitHub",
          icon: <FaGithub size={16} className="w-4 h-4" />
        }
      ]
    }
  };

  return <ProjectComponent {...projectData} />;
};

export default ShopsAt550Project;