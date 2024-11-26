import ProjectComponent from './ProjectComponent';
import { FaGithub } from "react-icons/fa";

const LPCProductCreationProject = () => {
  const projectData = {
    title: "LPC Product Creation",
    technologies: [
      'Remix', 
      'PostgreSQL', 
      'Prisma', 
      'Shopify CLI', 
      'GraphQL', 
      'Polaris'
    ],
    description: [
      "A production-ready Remix application that streamlines custom leather product management. Built as a solo project in collaboration with LPC stakeholders, this tool has significantly reduced product creation time from 30 minutes to under 5 minutes per item. Developed using Prisma for database operations, PostgreSQL for data storage, and Polaris for UI components, with comprehensive error handling and data validation. Development and deployment are streamlined using Shopify CLI, facilitating seamless integration with the Shopify ecosystem.",
      "The application automatically generates unique SKUs, product titles, descriptions, and variant names through a sophisticated validation process. Testing implementation includes Jest for unit testing and Cypress for end-to-end testing, ensuring reliable functionality across all features. The system integrates with Shopify through GraphQL mutations for product creation and maintains data consistency with a Railway-hosted PostgreSQL database.",
      "Currently in active use by LPC, this solution has processed over [X] products since deployment, with zero reported data inconsistencies. Planned feature enhancements include management interface for leather colors and thread options, collection-wide pricing updates, new style addition functionality, and Last Chance inventory management system with automated stock control."
    ],
    media: {
      type: 'video',
      content: {
        onPlay: () => {
          // Implement your video play logic here
          console.log('Play video');
        }
      }
    },
    links: {
      github: [
        {
          href: "https://github.com/Leilanigreer/lpc-product-manager",
          text: "GitHub",
          icon: <FaGithub size={16} className="w-4 h-4" />
        }
      ]
    }
  };

  return <ProjectComponent {...projectData} />;
};

export default LPCProductCreationProject;