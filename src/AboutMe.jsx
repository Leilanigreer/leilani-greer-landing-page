const AboutMe = () => {
  const skillCategories = {
    "Core Technologies": [
      "React.js", 
      "Ruby on Rails", 
      "PostgreSQL", 
      "Tailwind CSS"
    ],
    "Languages": [
      "JavaScript",
      "TypeScript",
      "Ruby", 
      "SQL"
    ],
    "Frontend": [
      "Remix",
      "Bootstrap",
      "Polaris"
    ],
    "Backend & APIs": [
      "REST APIs",
      "GraphQL",
      "JWT",
      "Prisma"
    ],
    "Cloud & Storage": [
      "Railway",
      "AWS S3",
      "Cloudinary",
      "Mux"
    ],
    "Tools & Workflow": [
      "Git/GitHub",
      "Postman/HTTPie",
      "Jira/Confluence"
    ],
    "Integrations": [
      "Shopify",
      "Google APIs",
      "EmailJS",
      "Google Apps Scripts"
    ]
  };

  const experience = [
    {
      role: "Co-Owner & Technical Owner",
      company: "Little Prince Customs",
      period: "2023 - Present",
      highlights: [
        "Engineered custom Shopify product management system processing 250+ SKUs monthly",
        "Reduced product creation time from 60 to 10 minutes through automated metadata generation",
        "Increased total sales by 25% through strategic Shopify migration",
      ]
    },
    {
      role: "Solutions Engineer",
      company: "GoodData",
      period: "2019 - 2022",
      highlights: [
        "Led technical implementation of $250MM analytics platform",
        "Managed enterprise solutions for 10,000+ users with 99.9% uptime",
        "Transformed complex data architectures into unified analytics solutions",
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Business Administration",
      school: "Saint Mary's College of California",
      year: "Graduate",
    },
    {
      degree: "Certified Full Stack Developer",
      school: "Actualize Coding Bootcamp",
      year: "Graduate",
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto p-8">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">
            About Me<span className="text-violet-500">.</span>
          </h1>
          <p className="text-xl text-gray-400">
            Solutions-Driven Software Engineer with expertise in Software Development, Data Management, & Automation
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          {/* Introduction Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-white">
              Hello, I&apos;m Leilani<span className="text-violet-500">!</span>
            </h2>
            <div className="prose prose-invert max-w-none space-y-4">
              <p>
                I&apos;m a Software Engineer based in the San Francisco Bay Area, with a unique background that bridges the gap between business operations and technical solutions. With over 10 years of experience in business operations, I&apos;ve successfully transitioned into software engineering, bringing a valuable perspective that combines technical expertise with deep business acumen.
              </p>
              <p>
                My journey in tech has been driven by a passion for creating efficient, scalable solutions that solve real business problems. From managing $250MM+ platforms to developing custom automation tools that save hundreds of work hours, I&apos;ve consistently demonstrated the ability to deliver high-impact technical solutions while maintaining a strong focus on business objectives.
              </p>
              <p>
                Currently, I&apos;m focused on full-stack development using React, Ruby on Rails, and modern database technologies. I&apos;m passionate about creating intuitive user experiences while ensuring robust backend implementations that can scale with business needs.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-white">
              Technical Skills<span className="text-violet-500">.</span>
            </h2>
            
            {/* Core Skills Highlight */}
            <div className="mb-8 bg-gray-800/30 rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-semibold mb-4 text-violet-500">
                Specialized In
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillCategories["Core Technologies"].map((skill) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 bg-violet-500/20 text-white rounded-lg font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Other Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(skillCategories).filter(([category]) => 
                category !== "Core Technologies"
              ).map(([category, skills]) => (
                <div 
                  key={category} 
                  className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/50"
                >
                  <h3 className="text-lg font-semibold mb-3 text-violet-500">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Professional Experience Highlights */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-white">
              Experience Highlights<span className="text-violet-500">.</span>
            </h2>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div 
                  key={index}
                  className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">{exp.role}</h3>
                  <p className="text-violet-500 mb-4">{exp.company} • {exp.period}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-violet-500 rounded-full mt-2"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-white">
              Education<span className="text-violet-500">.</span>
            </h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
                      <p className="text-violet-500">{edu.school} • {edu.year}</p>
                    </div>
                    {edu.school === "Actualize Coding Bootcamp" && (
                      <a
                        href="/ActualizeCertification.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-violet-500 text-white text-sm rounded-md hover:bg-purple-600 transition-colors"
                      >
                        View Certificate
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Interest Section */}
          <section className="bg-gray-800/30 rounded-xl p-8 border border-gray-700/50">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Beyond Coding<span className="text-violet-500">.</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="p-6 rounded-lg bg-gray-900/50 border border-violet-500/20">
                <div className="text-violet-500 text-3xl mb-4">🍷</div>
                <h3 className="text-xl font-semibold mb-2">Wine Enthusiast</h3>
                <p className="text-gray-400">Aspiring sommelier with dreams of retiring to work in a tasting room</p>
              </div>
              
              <div className="p-6 rounded-lg bg-gray-900/50 border border-violet-500/20">
                <div className="text-violet-500 text-3xl mb-4">🐕</div>
                <h3 className="text-xl font-semibold mb-2">Dog Parent</h3>
                <p className="text-gray-400">Adventures with Duke, my energetic companion</p>
              </div>
              
              <div className="p-6 rounded-lg bg-gray-900/50 border border-violet-500/20">
                <div className="text-violet-500 text-3xl mb-4">👨‍🍳</div>
                <h3 className="text-xl font-semibold mb-2">Food & Company</h3>
                <p className="text-gray-400">Enjoying Karl&apos;s chef-level culinary creations</p>
              </div>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p>I believe life&apos;s richest experiences happen beyond the screen. As an aspiring sommelier, I&apos;ve developed a deep appreciation for wine culture and dream of sharing this passion with others in a tasting room during my retirement years. When I&apos;m not coding, you&apos;ll likely find me at the local park with Duke, my energetic four-legged companion who never seems to run out of steam. I&apos;m also a firm believer in the power of good food and great company – I&apos;m fortunate to share my life with Karl, whose culinary talents rival those of professional chefs. Whether we&apos;re enjoying his latest kitchen masterpiece at home or discovering hidden gem restaurants with friends, these moments of connection, whether through a perfectly paired wine, a playful afternoon at the park, or savoring Karl&apos;s exceptional cooking, help me maintain balance and bring fresh perspectives to my technical work.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;