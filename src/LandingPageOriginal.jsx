const LandingPageOriginal = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative background dots */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-200 rounded-full animate-[float_3s_ease-in-out_infinite]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
        {/* Lily image with subtle hover effect */}
        <div className="w-64 h-64 mb-8 relative hover:scale-105 transition-transform duration-300">
          <img 
            src="/PurpleLily.jpg"  // Updated to use your local image
            alt="Purple Lily" 
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </div>

        {/* Text content with staggered fade-in animations */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-bold text-purple-900 opacity-0 animate-[slideUp_0.8s_ease-out_0.2s_forwards]">
            Hi, my name is Leilani.
          </h1>
          <p className="text-2xl text-purple-700 opacity-0 animate-[slideUp_0.8s_ease-out_0.4s_forwards]">
            I am a budding software engineer.
          </p>
          <p className="text-xl text-purple-600 opacity-0 animate-[slideUp_0.8s_ease-out_0.6s_forwards]">
            Turning real life ideas into reality.
          </p>
        </div>

        {/* Optional decorative line */}
        <div className="mt-8 w-48 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent opacity-0 animate-[fadeIn_1s_ease-out_0.8s_forwards]" />
      </div>
    </div>
  );
};

export default LandingPageOriginal;