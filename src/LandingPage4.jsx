import { Link } from "react-router-dom";

const LandingPage4 = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-8">
      <div className="max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 min-h-screen">
        {/* Left Column */}
        <div className="flex flex-col justify-center space-y-6 md:space-y-8 text-center md:text-left">
          <div className="space-y-3 md:space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              Leilani
              <span className="text-purple-400">.</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-400">
              Software Engineer
            </h2>
          </div>

          <p className="text-lg md:text-xl text-gray-300 max-w-md mx-auto md:mx-0">
            Turning real life ideas into reality with passion and precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
            <Link to="/projects" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto group relative px-6 py-3 bg-purple-600 rounded-lg overflow-hidden">
                <span className="relative z-10">View Work</span>
                <div className="absolute inset-0 bg-purple-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </Link>
            <Link className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 py-3 border-2 border-purple-400 rounded-lg hover:bg-purple-400/10 transition-colors">
                Contact
              </button>
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative flex items-center justify-center mt-8 md:mt-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent rounded-2xl"></div>
          <img 
            src="/PurpleLily.jpg"
            alt="Purple Lily"
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage4;