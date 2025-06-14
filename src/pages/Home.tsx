
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
              <span className="neon-text">SAJID</span>
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-neon-pink to-neon-blue rounded-full animate-neon-pulse"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Creative Web App Developer with <span className="neon-text font-semibold">3+ years experience</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-neon-pink to-neon-purple rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-neon-pink/50 hover:scale-105"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-pink rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-neon-pink text-neon-pink rounded-lg font-semibold transition-all duration-300 hover:bg-neon-pink hover:text-white hover:shadow-lg hover:shadow-neon-pink/50"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-neon-pink" size={32} />
      </div>
    </div>
  );
};

export default Home;
