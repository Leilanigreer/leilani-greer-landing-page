import { SiGithub } from '@icons-pack/react-simple-icons';
import { PlayCircle } from 'lucide-react';

const LPCProductCreationProject = () => {
  const technologies = [
    'Remix', 
    'PostgreSQL', 
    'Prisma', 
    'Shopify CLI', 
    'GraphQL', 
    'Jest', 
    'Cypress', 
    'Polaris'
  ];
  
  const links = {
    github: [
      {
        href: "#",
        text: "GitHub",
        icon: <SiGithub size={16} className="w-4 h-4" />
      }
    ]
  };

  return (
    <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700/50 hover:border-purple-400/50 transition-colors duration-300">
      <div className="flex justify-between gap-8 mb-6">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-white mb-3">
            LPC Product Creation
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
      </div>

      {/* Video Section */}
      <div className="mb-6 relative rounded-lg overflow-hidden bg-gray-900/50">
        <div className="aspect-video flex items-center justify-center">
          {/* Replace with actual video implementation */}
          <button className="flex items-center gap-3 text-purple-400 hover:text-purple-300 transition-colors">
            <PlayCircle className="w-16 h-16" />
            <span className="text-lg">Watch Video Walkthrough</span>
          </button>
        </div>
      </div>

      {/* Project Description */}
      <div className="text-gray-300 space-y-3 max-w-[90ch]">
        <p>
          A production-ready Remix application that streamlines custom leather product management. Built as a solo project in collaboration with LPC stakeholders, this tool has significantly reduced product creation time from 30 minutes to under 5 minutes per item. Developed using Prisma for database operations, PostgreSQL for data storage, and Polaris for UI components, with comprehensive error handling and data validation. Development and deployment are streamlined using Shopify CLI, facilitating seamless integration with the Shopify ecosystem.
        </p>
        <p>
          The application automatically generates unique SKUs, product titles, descriptions, and variant names through a sophisticated validation process. Testing implementation includes Jest for unit testing and Cypress for end-to-end testing, ensuring reliable functionality across all features. The system integrates with Shopify through GraphQL mutations for product creation and maintains data consistency with a Railway-hosted PostgreSQL database.
        </p>
        <p>
          Currently in active use by LPC, this solution has processed over [X] products since deployment, with zero reported data inconsistencies. Planned feature enhancements include management interface for leather colors and thread options, collection-wide pricing updates, new style addition functionality, and Last Chance inventory management system with automated stock control.
        </p>
      </div>

      {/* Project Links */}
      <div className="mt-6">
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

export default LPCProductCreationProject;