import { ExternalLink } from 'lucide-react';
import { SiGithub } from '@icons-pack/react-simple-icons';

const GISProject = () => {
  const technologies = ['React.js', 'Ruby on Rails', 'PostgreSQL', 'JWT'];
  
  const links = {
    live: [
      {
        href: "https://gym-fitness-frontend-production.up.railway.app",
        text: "Bootstrap Live Demo",
        icon: <ExternalLink className="w-4 h-4 relative z-10" />
      },
      {
        href: "https://gym-fitness-frontend-tailwind-production.up.railway.app/",
        text: "Tailwind Live Demo",
        icon: <ExternalLink className="w-4 h-4 relative z-10" />
      }
    ],
    github: [
      {
        href: "https://github.com/Leilanigreer/gym-fitness-frontend-tailwind",
        text: "Tailwind GitHub",
        icon: <SiGithub size={16} className="w-4 h-4" />
      },
      {
        href: "https://github.com/Leilanigreer/gym-fitness-frontend",
        text: "Bootstrap GitHub",
        icon: <SiGithub size={16} className="w-4 h-4" />
      },
      {
        href: "https://github.com/Leilanigreer/gym-fitness-api",
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
            Get In Shape (G.I.S)
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
              src="GIS_HomePage.png" 
              alt="GIS Application Interface" 
              className="w-full h-auto object-cover" 
            />
          </div>
          <div className="w-48 rounded-lg overflow-hidden flex-shrink-0 hover:scale-105 transition-transform duration-300 shadow-xl">
            <img 
              src="GIS_ExercisePage.png" 
              alt="GIS Exercise Page" 
              className="w-full h-auto object-cover" 
            />
          </div>
        </div>
      </div>

      {/* Project Description */}
      <div className="text-gray-300 space-y-3 max-w-[90ch]">
        <p>
          Get In Shape (G.I.S) is a comprehensive fitness application built with React.js and Ruby on Rails, utilizing a PostgreSQL database and JWT authentication for secure user sessions. The interface features an intuitive filtering system where users can combine multiple criteria - exercise level, category, equipment, and primary muscles - with dedicated apply and reset filter buttons. The backend leverages PostgreSQL's array data type for efficient image path management, with exercise images served directly from the Rails application.
        </p>
        <p>
          The application presents over 870 exercises in a responsive card layout, each showcasing multiple navigable images, difficulty badges, exercise classifications (strength, stretching), equipment requirements, and target muscle groups. Users can explore detailed exercise information and, once authenticated, add exercises to personalized routines with specific rep and set counts. Key features include routine management with day-based filtering, exercise logging functionality, and the ability to track completed workouts with detailed notes. Deployed and hosted on Railway's cloud platform.
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

export default GISProject;