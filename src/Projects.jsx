import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">
            Projects<span className="text-purple-400">.</span>
          </h1>
          <p className="text-xl text-gray-300">
            A collection of my recent work and contributions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {/* Get In Shape Project */}
          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-purple-400/50 transition-colors duration-300">
            <h2 className="text-3xl font-bold mb-4">
              Get In Shape (G.I.S)
              <span className="text-purple-400">.</span>
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Get In Shape (G.I.S) is a comprehensive fitness application built with React.js and Ruby on Rails, utilizing a PostgreSQL database and JWT authentication for secure user sessions. The interface features an intuitive filtering system where users can combine multiple criteria - exercise level, category, equipment, and primary muscles - with dedicated apply and reset filter buttons. The backend leverages PostgreSQL's array data type for efficient image path management, with exercise images served directly from the Rails application. The application presents over 870 exercises in a responsive card layout, each showcasing multiple navigable images, difficulty badges, exercise classifications (strength, stretching), equipment requirements, and target muscle groups. Users can explore detailed exercise information and, once authenticated, add exercises to personalized routines with specific rep and set counts. Key features include routine management with day-based filtering, exercise logging functionality, and the ability to track completed workouts with detailed notes. Deployed and hosted on Railway's cloud platform.
            </p>
            
            <div className="flex flex-wrap gap-4 items-center">
              <a 
                href="https://gym-fitness-frontend-production.up.railway.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative px-6 py-3 bg-purple-600 rounded-lg overflow-hidden flex items-center gap-2"
              >
                <span className="relative z-10">Bootstrap Live Version</span>
                <ExternalLink className="w-4 h-4 relative z-10" />
                <div className="absolute inset-0 bg-purple-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
              
              <a 
                href="https://gym-fitness-frontend-tailwind-production.up.railway.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-purple-400 rounded-lg hover:bg-purple-400/10 transition-colors flex items-center gap-2"
              >
                <span>Tailwind Live Version</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              
              <a 
                href="https://github.com/Leilanigreer/gym-fitness-frontend-tailwind" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-purple-400 rounded-lg hover:bg-purple-400/10 transition-colors flex items-center gap-2"
              >
                <span>Tailwind GitHub</span>
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="https://github.com/Leilanigreer/gym-fitness-frontend" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-purple-400 rounded-lg hover:bg-purple-400/10 transition-colors flex items-center gap-2"
              >
                <span>Bootstrap GitHub</span>
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="https://github.com/Leilanigreer/gym-fitness-api" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-purple-400 rounded-lg hover:bg-purple-400/10 transition-colors flex items-center gap-2"
              >
                <span>Ruby on Rails GitHub</span>
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shopping For Us Project */}
          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-purple-400/50 transition-colors duration-300">
            <h2 className="text-3xl font-bold mb-4">
              Shopping For Us
              <span className="text-purple-400">.</span>
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              An e-commerce platform built with React.js frontend and Ruby on Rails backend, backed by a PostgreSQL database and secured with JWT authentication. Developed independently over three weeks, the application implements responsive design principles and cross-browser compatibility. Core technologies include Redux for state management, Active Storage for image handling, and Action Mailer for order notifications. The application features a product browsing system, shopping cart functionality, and order history tracking. The admin dashboard enables product management, including CRUD operations for inventory items. Notable features include vendor relationship management and product image handling. Performance optimizations include image lazy loading and database query optimization. While designed as a demonstration, the platform implements complete e-commerce workflows without actual payment processing. Fully deployed on Railway's infrastructure with automated backup systems.
            </p>
            
            <div className="flex flex-wrap gap-4 items-center">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative px-6 py-3 bg-purple-600 rounded-lg overflow-hidden flex items-center gap-2"
              >
                <span className="relative z-10">Live Demo</span>
                <ExternalLink className="w-4 h-4 relative z-10" />
                <div className="absolute inset-0 bg-purple-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
              
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-purple-400 rounded-lg hover:bg-purple-400/10 transition-colors flex items-center gap-2"
              >
                <span>React GitHub</span>
                <Github className="w-4 h-4" />
              </a>

              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-purple-400 rounded-lg hover:bg-purple-400/10 transition-colors flex items-center gap-2"
              >
                <span>Ruby on Rails GitHub</span>
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* LPC Product Creation Project */}
          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-purple-400/50 transition-colors duration-300">
            <h2 className="text-3xl font-bold mb-4">
              LPC Product Creation
              <span className="text-purple-400">.</span>
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A production-ready Remix application that streamlines custom leather product management. Built as a solo project in collaboration with LPC stakeholders, this tool has significantly reduced product creation time from 30 minutes to under 5 minutes per item. Developed using Prisma for database operations, PostgreSQL for data storage, and Polaris for UI components, with comprehensive error handling and data validation. Development and deployment are streamlined using Shopify CLI, facilitating seamless integration with the Shopify ecosystem. The application automatically generates unique SKUs, product titles, descriptions, and variant names through a sophisticated validation process. Testing implementation includes Jest for unit testing and Cypress for end-to-end testing, ensuring reliable functionality across all features. The system integrates with Shopify through GraphQL mutations for product creation and maintains data consistency with a Railway-hosted PostgreSQL database. Currently in active use by LPC, this solution has processed over [X] products since deployment, with zero reported data inconsistencies. Planned feature enhancements include management interface for leather colors and thread options, collection-wide pricing updates, new style addition functionality, and Last Chance inventory management system with automated stock control.
            </p>
            
            <div className="flex flex-wrap gap-4 items-center">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-purple-400 rounded-lg hover:bg-purple-400/10 transition-colors flex items-center gap-2"
              >
                <span>GitHub</span>
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;