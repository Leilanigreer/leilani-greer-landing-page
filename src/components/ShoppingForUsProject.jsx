// src/components/ShoppingForUsProject.jsx
import ProjectComponent from './ProjectComponent';
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projectData = {
  id: 'shopping4us',
  title: "Shopping 4 Us",
  technologies: ['React.js', 'Ruby on Rails', 'PostgreSQL', 'JWT'],
  date: new Date('2024-09-09'),
  displayDate: 'Sep 2024',
  status: 'completed',
  description: [
    "An e-commerce platform built with React.js frontend and Ruby on Rails backend, backed by a PostgreSQL database and secured with JWT authentication. Developed independently over three weeks, the application implements responsive design principles using Tailwind CSS for consistent styling and cross-browser compatibility.",
    "The application features a role-based access system with distinct experiences for public users, authenticated shoppers, and administrators. Public users can browse and search products, while authenticated users gain access to a full-featured shopping cart with real-time tax calculations and comprehensive order tracking. The admin dashboard provides a product management interface with CRUD operations and image handling through URL integration.",
    "A notable technical achievement is the implementation of a weekly automated database maintenance system that reverts any changes to the original dataset while preserving order history integrity. This solution ensures data consistency while maintaining access to historical purchase records. While designed as a demonstration platform that implements complete e-commerce workflows without payment processing, the application showcases features like form validation, error handling, and secure role-based access control. Fully deployed on Railway's infrastructure with automated maintenance routines."
  ],
  media: {
    type: 'images',
    content: [
      {
        src: "S4U_ProductsPage3.png", 
        alt: "Shopping For Us Product Page" 
      }
    ]
  }, 
  links: {
    live: [
      {
        href: "https://shopping-4-us-tailwind-production.up.railway.app/",
        text: "Live Demo",
        icon: <FaExternalLinkAlt className="w-4 h-4 relative z-10" />
      }
    ],
    github: [
      {
        href: "https://github.com/Leilanigreer/shopping-4-us-tailwind",
        text: "React GitHub",
        icon: <FaGithub size={16} className="w-4 h-4" />
      },
      {
        href: "https://github.com/Leilanigreer/shopping-4-us-api",
        text: "Ruby on Rails GitHub",
        icon: <FaGithub size={16} className="w-4 h-4" />
      }
    ]
  }
}; 

const ShoppingForUsProject = () => {
  return <ProjectComponent {...projectData} />;
};

export default ShoppingForUsProject;