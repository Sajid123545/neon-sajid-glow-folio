
import { useEffect, useState } from 'react';
import { Code, Palette, Zap, Heart, Rocket, Star } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const highlights = [
    { icon: Code, title: "3+ Years Experience", desc: "Building modern web applications", color: "from-pink-500 to-purple-600" },
    { icon: Palette, title: "Creative Design", desc: "Crafting visually stunning interfaces", color: "from-blue-500 to-cyan-500" },
    { icon: Zap, title: "Performance Focused", desc: "Optimized and fast applications", color: "from-yellow-500 to-orange-500" }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed", icon: Rocket },
    { number: "3+", label: "Years Experience", icon: Star },
    { number: "100%", label: "Client Satisfaction", icon: Heart }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-neon-pink/10 to-neon-purple/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-neon-purple/5 to-neon-pink/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-20">
            <h1 className="text-6xl md:text-7xl font-bold mb-8">
              About <span className="bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue bg-clip-text text-transparent animate-glow">Me</span>
            </h1>
            <div className="flex justify-center mb-8">
              <div className="h-1.5 w-32 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue rounded-full animate-pulse"></div>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Passionate developer crafting digital experiences that inspire and innovate
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`glass-effect p-8 rounded-2xl border border-neon-pink/20 hover:border-neon-pink/40 transition-all duration-500 hover:scale-105 text-center group ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-4">
                  <stat.icon className="mx-auto text-neon-pink group-hover:text-neon-blue transition-colors duration-300" size={32} />
                </div>
                <div className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-neon-pink to-neon-purple bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Column - About Text */}
            <div className="space-y-8">
              <div className="glass-effect p-8 rounded-3xl border border-neon-pink/20 hover:border-neon-pink/40 transition-all duration-500 group">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-3 bg-gradient-to-r from-neon-pink to-neon-purple rounded-full mr-4 animate-pulse"></div>
                  <h3 className="text-2xl font-bold text-white">Hello World! 👋</h3>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Hi, I'm <span className="bg-gradient-to-r from-neon-pink to-neon-purple bg-clip-text text-transparent font-bold text-xl">Sajid</span> — a passionate web app developer 
                  with over 3 years of experience. I love building modern, interactive, and visually stunning 
                  web applications with clean code and smooth animations.
                </p>
              </div>
              
              <div className="glass-effect p-8 rounded-3xl border border-neon-blue/20 hover:border-neon-blue/40 transition-all duration-500 group">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full mr-4 animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <h3 className="text-2xl font-bold text-white">My Journey 🚀</h3>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  My journey in web development has been driven by a passion for creating digital experiences 
                  that not only look amazing but also provide exceptional user experiences. I believe in 
                  the power of technology to transform ideas into reality.
                </p>
              </div>

              <div className="glass-effect p-8 rounded-3xl border border-neon-purple/20 hover:border-neon-purple/40 transition-all duration-500 group">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-3 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full mr-4 animate-pulse" style={{ animationDelay: '2s' }}></div>
                  <h3 className="text-2xl font-bold text-white">Philosophy 💡</h3>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I believe that great design is not just about how it looks, but how it works. 
                  Every pixel has a purpose, every animation tells a story, and every interaction should feel natural and delightful.
                </p>
              </div>
            </div>

            {/* Right Column - Skills */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                What I Bring to the <span className="neon-text">Table</span>
              </h3>
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`glass-effect p-8 rounded-2xl border border-neon-pink/20 hover:border-neon-pink/40 transition-all duration-500 hover:scale-105 group ${
                    isVisible ? 'animate-slide-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.3 + 0.5}s` }}
                >
                  <div className="flex items-center space-x-6">
                    <div className={`p-4 bg-gradient-to-r ${item.color} rounded-2xl group-hover:animate-glow transition-all duration-300`}>
                      <item.icon className="text-white" size={28} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-neon-pink transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quote Section */}
          <div className="text-center">
            <div className="glass-effect p-12 rounded-3xl border border-neon-purple/20 hover:border-neon-purple/40 transition-all duration-500 inline-block group hover:scale-105">
              <div className="mb-6">
                <div className="text-6xl text-neon-pink mb-4 group-hover:animate-glow">"</div>
              </div>
              <p className="text-2xl text-gray-300 mb-6 italic leading-relaxed max-w-2xl">
                Code is like humor. When you have to explain it, it's bad.
              </p>
              <div className="flex items-center justify-center">
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-neon-pink to-transparent mr-4"></div>
                <p className="text-neon-pink font-bold text-lg">Cory House</p>
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-neon-pink to-transparent ml-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
