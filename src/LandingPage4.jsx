import { Link } from "react-router-dom";

const LandingPage4 = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-12 h-screen">
        {/* Left Column */}
        <div className="flex flex-col justify-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-7xl font-bold">
              Leilani
              <span className="text-purple-400">.</span>
            </h1>
            <h2 className="text-3xl text-gray-400">
              Software Engineer
            </h2>
          </div>

          <p className="text-xl text-gray-300 max-w-md">
            Turning real life ideas into reality with passion and precision.
          </p>

          <div className="flex gap-6">
            <Link to="/projects">
              <button className="group relative px-6 py-3 bg-purple-600 rounded-lg overflow-hidden">
                <span className="relative z-10">View Work</span>
                <div className="absolute inset-0 bg-purple-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </Link>
            <Link>
              <button className="px-6 py-3 border-2 border-purple-400 rounded-lg hover:bg-purple-400/10 transition-colors">
                Contact
              </button>
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent rounded-2xl"></div>
          <img 
            src="/PurpleLily.jpg"
            alt="Purple Lily"
            className="w-96 h-96 object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage4;