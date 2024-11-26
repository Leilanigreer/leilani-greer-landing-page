// src/components/ShoppingForUsProject.jsx
import ProjectComponent from './ProjectComponent';
import { ExternalLink } from 'lucide-react';
import { SiGithub } from '@icons-pack/react-simple-icons';

const ShoppingForUsProject = () => {
  const projectData = {
    title: "Shopping 4 Us",
    technologies: ['React.js', 'Ruby on Rails', 'PostgreSQL', 'JWT'],
    description: [
      "An e-commerce platform built with React.js frontend and Ruby on Rails backend, backed by a PostgreSQL database and secured with JWT authentication. Developed independently over three weeks, the application implements responsive design principles and cross-browser compatibility. Core technologies include Redux for state management, Active Storage for image handling, and Action Mailer for order notifications. The application features a product browsing system, shopping cart functionality, and order history tracking.",
      "The admin dashboard enables product management, including CRUD operations for inventory items. Notable features include vendor relationship management and product image handling. Performance optimizations include image lazy loading and database query optimization. While designed as a demonstration, the platform implements complete e-commerce workflows without actual payment processing. Fully deployed on Railway's infrastructure."
    ],
    media: {
      type: 'images',
      content: [
        {
          src: "S4U_HomePage.png", 
          alt: "Shopping For Us Homepage" 
        }, 
        {
          src: "S4U_ProductsPage.png", 
          alt: "Shopping For Us Product Page" 
        }
      ]
    }, 
    links: {
      live: [
        {
          href: "https://shopping-4-us-tailwind-production.up.railway.app/",
          text: "Live Demo",
          icon: <ExternalLink className="w-4 h-4 relative z-10" />
        }
      ],
      github: [
        {
          href: "https://github.com/Leilanigreer/shopping-4-us-tailwind",
          text: "React GitHub",
          icon: <SiGithub size={16} className="w-4 h-4" />
        },
        {
          href: "https://github.com/Leilanigreer/shopping-4-us-api",
          text: "Ruby on Rails GitHub",
          icon: <SiGithub size={16} className="w-4 h-4" />
        }
      ]
    }
  }; 

  return <ProjectComponent {...projectData} />;
};

export default ShoppingForUsProject;