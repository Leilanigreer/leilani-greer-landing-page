const LandingPage2 = () => {
  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Section */}
      <div className="w-1/2 bg-gradient-to-br from-purple-700 to-purple-900 p-12 flex items-center justify-center">
        <img 
          src="/PurpleLily.jpg"
          alt="Purple Lily"
          className="w-64 h-64 rounded-2xl object-cover shadow-2xl transform hover:scale-105 transition-all duration-500"
        />
      </div>

      {/* Right Section */}
      <div className="w-1/2 p-12 flex flex-col justify-center">
        <div className="space-y-8">
          <h1 className="text-6xl font-bold text-gray-900">
            Leilani Greer
          </h1>
          <h2 className="text-3xl text-purple-600">
            Software Engineer
          </h2>
          <div className="h-1 w-24 bg-purple-600"></div>
          <p className="text-xl text-gray-600 max-w-md">
            Turning real life ideas into reality with creativity and precision.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              View Projects
            </button>
            <button className="px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors">
              About Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage2;