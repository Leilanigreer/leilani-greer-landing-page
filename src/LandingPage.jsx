import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 bg-[url('/LG_BG.png')] bg-cover bg-center bg-no-repeat">
      <main className="flex flex-col items-center justify-start pt-40 min-h-[80vh] text-center">
        <h1 className="text-5xl font-bold text-white mb-2">
          Leilani<span className="text-violet-500">.</span>
        </h1>
        <h2 className="text-slate-50 text-xl mb-4">
          Software Engineer
        </h2>
        <p className="text-gray-300 mb-8 max-w-md">
          Turning real life ideas into reality with passion and precision.
        </p>
        <div className="flex gap-4">
          <Link 
            to="/projects"
            className="w-44 bg-violet-500 text-white px-6 py-3 rounded-md hover:bg-purple-600 transition-colors"
            >
              View Work
          </Link>
          <Link 
            to="/connect"
            className="w-44 border border-white text-white px-6 py-3 rounded-md hover:bg-white/10 transition-colors"
            >
              Connect with me
          </Link>
        </div>
      </main>
    </div>
  );  
};

export default LandingPage;