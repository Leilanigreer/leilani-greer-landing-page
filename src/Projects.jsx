export function Projects() {
  return (
    <div>
      <div>
        <div>
          Get In Shape (G.I.S) is a comprehensive fitness application built with React.js and Ruby on Rails, utilizing a PostgreSQL database and JWT authentication for secure user sessions. The interface features an intuitive filtering system where users can combine multiple criteria - exercise level, category, equipment, and primary muscles - with dedicated apply and reset filter buttons. The backend leverages PostgreSQL's array data type for efficient image path management, with exercise images served directly from the Rails application.

          The application presents over 870 exercises in a responsive card layout, each showcasing multiple navigable images, difficulty badges, exercise classifications (strength, stretching), equipment requirements, and target muscle groups. Users can explore detailed exercise information and, once authenticated, add exercises to personalized routines with specific rep and set counts. Key features include routine management with day-based filtering, exercise logging functionality, and the ability to track completed workouts with detailed notes. Deployed and hosted on Railway's cloud platform.
        </div>
        <div>link to Bootstrap styled version: https://gym-fitness-frontend-production.up.railway.app/</div>
        <div>Link to Tailwind styled version: https://gym-fitness-frontend-tailwind-production.up.railway.app/</div>
        <div>GitHub: [Add repository link if public]</div>
      </div>

      <div>
        <div>
          Shopping For Us is an e-commerce platform built with React.js frontend and Ruby on Rails backend, backed by a PostgreSQL database and secured with JWT authentication. Developed independently over three weeks, the application implements responsive design principles and cross-browser compatibility. Core technologies include Redux for state management, Active Storage for image handling, and Action Mailer for order notifications.

          The application features a product browsing system, shopping cart functionality, and order history tracking. The admin dashboard enables product management, including CRUD operations for inventory items. Notable features include vendor relationship management and product image handling. Performance optimizations include image lazy loading and database query optimization. While designed as a demonstration, the platform implements complete e-commerce workflows without actual payment processing. Fully deployed on Railway's infrastructure with automated backup systems.
        </div>
        <div>Placeholder for Link</div>
        <div>GitHub: [Add repository link if public]</div>
      </div>

      <div>
        <div>
          LPC Product Creation is a production-ready Remix application that streamlines custom leather product management. Built as a solo project in collaboration with LPC stakeholders, this tool has significantly reduced product creation time from 30 minutes to under 5 minutes per item. Developed using Prisma for database operations, PostgreSQL for data storage, and Polaris for UI components, with comprehensive error handling and data validation.

          Development and deployment are streamlined using Shopify CLI, facilitating seamless integration with the Shopify ecosystem. The application automatically generates unique SKUs, product titles, descriptions, and variant names through a sophisticated validation process. Testing implementation includes Jest for unit testing and Cypress for end-to-end testing, ensuring reliable functionality across all features.

          The system integrates with Shopify through GraphQL mutations for product creation and maintains data consistency with a Railway-hosted PostgreSQL database. Currently in active use by LPC, this solution has processed over [X] products since deployment, with zero reported data inconsistencies.

          Planned feature enhancements include:
          - Management interface for leather colors and thread options
          - Collection-wide pricing updates
          - New style addition functionality
          - Last Chance inventory management system with automated stock control
        </div>
        <div>GitHub: [Add repository link if applicable]</div>
      </div>
    </div>
  );
}