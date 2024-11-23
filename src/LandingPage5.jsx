import { useState } from 'react';

const LandingPage5 = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 flex items-center justify-center p-8">
      <div 
        className="relative max-w-4xl w-full bg-white/10 backdrop-blur-lg rounded-2xl p-12 transform perspective-1000"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`flex gap-12 items-center transition-transform duration-500 ${isHovered ? 'scale-105' : ''}`}>
          {/* Left Content */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl font-bold text-white">
                Leilani Greer
              </h1>
              <div className="h-1 w-24 bg-purple-400"></div>
              <h2 className="text-2xl text-purple-300">
                Software Engineer
              </h2>
            </div>

            <p className="text-xl text-gray-300">
              Turning real life ideas into reality through innovative solutions.
            </p>

            <div className="flex gap-4">
              <button className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-400 transition-colors">
                Projects
              </button>
              <button className="px-6 py-3 border-2 border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400/10 transition-colors">
                About Me
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-transparent rounded-full animate-pulse"></div>
            <img 
              src="/PurpleLily.jpg"
              alt="Purple Lily"
              className="w-64 h-64 rounded-full object-cover shadow-2xl transform hover:rotate-12 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage5;