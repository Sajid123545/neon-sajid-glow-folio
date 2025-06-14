
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center px-4 animate-fade-in-up">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-glow">
              <span className="bg-gradient-to-r from-neon-pink via-purple-400 to-neon-blue bg-clip-text text-transparent">SAJID</span>
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-neon-pink via-purple-500 to-neon-blue rounded-full animate-pulse"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            <span className="text-cyan-400">Creative</span> <span className="text-yellow-400">Web App Developer</span> with <span className="text-green-400 font-semibold">3+ years experience</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="/projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/30 hover:scale-105"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-pink-400 text-pink-400 rounded-lg font-semibold transition-all duration-300 hover:bg-pink-400 hover:text-white hover:shadow-lg hover:shadow-pink-400/30"
            >
              Get In Touch
            </Link>
          </div>

          {/* Project Logos Section */}
          <div className="flex justify-center items-center gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-pink-400 hover:border-cyan-400 transition-all duration-300 hover:scale-110 mb-2">
                <img 
                  src="/lovable-uploads/3dfbd3f9-15cf-401c-9034-ba28c59377a0.png" 
                  alt="Makab O1 Pro" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-400">Makab O1 Pro</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-cyan-400 hover:border-pink-400 transition-all duration-300 hover:scale-110 mb-2">
                <img 
                  src="/lovable-uploads/70047fd4-b9a8-48ef-be3f-6927ef84570e.png" 
                  alt="Makab Lango" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-400">Makab Lango</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-pink-400" size={32} />
      </div>
    </div>
  );
};

export default Home;
