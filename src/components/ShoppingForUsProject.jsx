import { ExternalLink } from 'lucide-react';
import { SiGithub } from '@icons-pack/react-simple-icons';

const ShoppingForUsProject = () => {
  const technologies = ['React.js', 'Ruby on Rails', 'PostgreSQL', 'JWT', 'Redux', 'Active Storage'];
  
  const links = {
    live: [
      {
        href: "#",
        text: "Live Demo",
        icon: <ExternalLink className="w-4 h-4 relative z-10" />
      }
    ],
    github: [
      {
        href: "#",
        text: "React GitHub",
        icon: <SiGithub size={16} className="w-4 h-4" />
      },
      {
        href: "#",
        text: "Ruby on Rails GitHub",
        icon: <SiGithub size={16} className="w-4 h-4" />
      }
    ]
  };

  return (
    <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700/50 hover:border-purple-400/50 transition-colors duration-300">
      <div className="flex justify-between gap-8 mb-6">
        <div>
          <h2 className="text-3xl font-bold text-white mb-3">
            Shopping For Us
            <span className="text-purple-400">.</span>
          </h2>

          {/* Technology Tags */}
          <div className="flex gap-2 flex-wrap">
            {technologies.map((tech) => (
              <span 
                key={tech} 
                className="px-3 py-1 bg-purple-400/10 text-purple-400 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project Images */}
        <div className="flex gap-4">
          <div className="w-48 rounded-lg overflow-hidden flex-shrink-0 hover:scale-105 transition-transform duration-300 shadow-xl">
            <img 
              src="/api/placeholder/400/320" 
              alt="Shopping For Us Homepage" 
              className="w-full h-auto object-cover" 
            />
          </div>
          <div className="w-48 rounded-lg overflow-hidden flex-shrink-0 hover:scale-105 transition-transform duration-300 shadow-xl">
            <img 
              src="/api/placeholder/400/320" 
              alt="Shopping For Us Product Page" 
              className="w-full h-auto object-cover" 
            />
          </div>
        </div>
      </div>

      {/* Project Description */}
      <div className="text-gray-300 space-y-3 max-w-[90ch]">
        <p>
          An e-commerce platform built with React.js frontend and Ruby on Rails backend, backed by a PostgreSQL database and secured with JWT authentication. Developed independently over three weeks, the application implements responsive design principles and cross-browser compatibility. Core technologies include Redux for state management, Active Storage for image handling, and Action Mailer for order notifications. The application features a product browsing system, shopping cart functionality, and order history tracking.
        </p>
        <p>
          The admin dashboard enables product management, including CRUD operations for inventory items. Notable features include vendor relationship management and product image handling. Performance optimizations include image lazy loading and database query optimization. While designed as a demonstration, the platform implements complete e-commerce workflows without actual payment processing. Fully deployed on Railway's infrastructure.
        </p>
      </div>

      {/* Project Links */}
      <div className="mt-6">
        {/* Live Demo Links */}
        <div className="flex flex-wrap gap-4 items-center mb-4">
          {links.live.map((link) => (
            <a 
              key={link.text}
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative flex items-center gap-2 px-6 py-3 rounded-lg bg-purple-600 overflow-hidden"
            >
              <span className="relative z-10">{link.text}</span>
              {link.icon}
              <div className="absolute inset-0 bg-purple-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          ))}
        </div>

        <div className="h-px bg-gray-700/50 mb-4" />

        {/* GitHub Links */}
        <div className="flex flex-wrap gap-3 items-center">
          {links.github.map((link) => (
            <a 
              key={link.text}
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-purple-400 hover:bg-purple-400/10 transition-colors"
            >
              <span>{link.text}</span>
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoppingForUsProject;