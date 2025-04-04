// src/data/projectData.js

// Central project data store
const projectData = {
  gis: {
    id: 'gis',
    title: "Get In Shape (G.I.S)",
    technologies: ['React.js', 'Ruby on Rails', 'REST API','PostgreSQL', 'JWT', 'Tailwind CSS', 'Bootstrap', 'Railway'],
    date: new Date('2024-11-06'),
    displayDate: 'Nov 2024',
    status: 'completed',
    description: [
      "Get In Shape (G.I.S) is a comprehensive fitness application designed to help users discover exercises, build personalized workout routines, and track their fitness progress. As the sole developer, I built it with React.js and Ruby on Rails, utilizing a PostgreSQL database and JWT authentication for secure user sessions. The fully responsive interface features an intuitive filtering system where users can combine multiple criteria - exercise level, category, equipment, and primary muscles - with dedicated apply and reset filter buttons. The backend leverages PostgreSQL's array data type for efficient image path management, with exercise images served directly from the Rails application.",
      "The application presents over 870 exercises in a responsive card layout, each showcasing multiple navigable images, difficulty badges, exercise classifications (strength, stretching), equipment requirements, and target muscle groups. Users can explore detailed exercise information and, once authenticated through a streamlined signup/login process (including a demo account option), add exercises to personalized routines with specific rep and set counts. Key features include routine management with day-based filtering, exercise logging functionality, and the ability to track completed workouts with detailed notes. The application's clean UI design prioritizes usability across devices, allowing users to plan workouts at home and access their routines at the gym. Deployed and hosted on Railway's cloud platform."
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
        },
        {
          href: "https://gym-fitness-frontend-production.up.railway.app",
          text: "Bootstrap Live Demo",
        },
      ],
      github: [
        {
          href: "https://github.com/Leilanigreer/gym-fitness-frontend-tailwind",
          text: "Tailwind GitHub",
        },
        {
          href: "https://github.com/Leilanigreer/gym-fitness-frontend",
          text: "Bootstrap GitHub",
        },
        {
          href: "https://github.com/Leilanigreer/gym-fitness-api",
          text: "Ruby on Rails GitHub",
        }
      ]
    }
  },
  
  shopping4us: {
    id: 'shopping4us',
    title: "Shopping 4 Us",
    technologies: ['React.js', 'Ruby on Rails', 'REST API', 'PostgreSQL', 'JWT', 'Tailwind CSS', 'Railway'],
    date: new Date('2024-09-09'),
    displayDate: 'Sep 2024',
    status: 'completed',
    description: [
      "An e-commerce platform built with React.js frontend and Ruby on Rails backend, backed by a PostgreSQL database and secured with JWT authentication. Developed independently over three weeks, the application implements responsive design principles using Tailwind CSS, ensuring a seamless experience across mobile, tablet, and desktop devices.",
      
      "The application features a role-based access system with distinct experiences for public users, authenticated shoppers, and administrators. Public users can browse and search products, while authenticated shoppers gain access to a full-featured shopping cart with real-time tax calculations and comprehensive order tracking. The admin dashboard provides product management with CRUD operations and image handling through URL integration. The UI/UX design prioritizes performance with efficient state management and optimized database queries.",
      
      "A notable technical achievement is the implementation of a weekly automated database maintenance system that reverts non-essential changes while preserving order history. This solution ensures demo data consistency while maintaining access to historical records. While designed as a demonstration platform implementing complete e-commerce workflows without payment processing, the application showcases features like form validation, error handling, and secure role-based access control. Fully deployed on Railway with automated CI/CD pipelines and maintenance routines."
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
        }
      ],
      github: [
        {
          href: "https://github.com/Leilanigreer/shopping-4-us-tailwind",
          text: "React GitHub",
        },
        {
          href: "https://github.com/Leilanigreer/shopping-4-us-api",
          text: "Ruby on Rails GitHub",
          }
      ]
    }
  },
  
  lpc: {
    id: 'lpc',
    title: "LPC Product Creation",
    technologies: [
      'Remix', 
      'PostgreSQL', 
      'Prisma', 
      'Shopify CLI', 
      'REST API',
      'GraphQL', 
      'Polaris',
      'Railway'
    ],
    date: new Date('2024-10-17'),
    displayDate: 'Oct 2024',
    status: 'ongoing',
    description: [
      "A production-ready Remix application that streamlines custom leather product management. Built as a solo project in collaboration with LPC stakeholders, this tool has significantly reduced product creation time from 30 minutes to under 5 minutes per item. Developed using Prisma for database operations, PostgreSQL for data storage, and Polaris for UI components, with comprehensive error handling and data validation. Development and deployment are streamlined using Shopify CLI, facilitating seamless integration with the Shopify ecosystem.",
      "The application automatically generates unique SKUs, product titles, descriptions, and variant names through a sophisticated validation process. Testing implementation includes Jest for unit testing and Cypress for end-to-end testing, ensuring reliable functionality across all features. The system integrates with Shopify through GraphQL mutations for product creation and maintains data consistency with a Railway-hosted PostgreSQL database.",
      "Currently in active use by LPC, this solution has processed over [X] products since deployment, with zero reported data inconsistencies. Planned feature enhancements include management interface for leather colors and thread options, collection-wide pricing updates, new style addition functionality, and Last Chance inventory management system with automated stock control."
    ],
    media: {
      type: 'mux',
      content: {
        playbackId: "r8NC5rNRs9Hps1Shsf4Zj00pDlZf2uqKmjbC78XGX4bo",
        title: "Product Management App for LPC",
        time: 21
      }
    },
    links: {
      github: [
        {
          href: "https://github.com/Leilanigreer/lpc-product-manager",
          text: "GitHub",
        }
      ]
    }
  },
  
  shops550: {
    id: 'shops550',
    title: "The Shops At 550",
    technologies: ['React 19', 'Tailwind CSS', 'TypeScript', 'Cloudinary', 'Vite'],
    date: new Date('2025-02-26'),
    displayDate: 'Feb 2025',
    status: 'completed',
    description: [
      "The Shops At 550 is a responsive web application showcasing a collection of small businesses located at 550 Montgomery Street. Built with React 19, TypeScript, and Vite 6, the site features an elegant UI with Tailwind CSS 4 that gracefully adapts to all device sizes.",
      
      "I implemented a custom business card component system that displays each shop's logo, hours, description, and website links. For image optimization, I integrated Cloudinary's React SDK to efficiently serve and transform business logos and founder images.",
      
      "The application is deployed on Railway using Caddy server for optimized performance and security, featuring gzip compression and automatic SSL handling. Future plans include building an authentication system to allow shop owners to update their own information through a secure admin interface."
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
        }
      ],
      github: [
        {
          href: "https://github.com/Leilanigreer/shops_550_vite",
          text: "GitHub",
        }
      ]
    }
  },
  
  portfolio: {
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
        }
      ]
    }
  }
};

// Helper function to get an array of all projects for the Projects component
export const getProjectsArray = () => {
  return Object.values(projectData).map(project => ({
    id: project.id,
    title: project.title,
    technologies: project.technologies,
    date: project.date,
    displayDate: project.displayDate,
    status: project.status
  }));
};

// Export the project data object
export default projectData;