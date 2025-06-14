
import { useEffect, useState } from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const highlights = [
    { icon: Code, title: "3+ Years Experience", desc: "Building modern web applications" },
    { icon: Palette, title: "Creative Design", desc: "Crafting visually stunning interfaces" },
    { icon: Zap, title: "Performance Focused", desc: "Optimized and fast applications" }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="neon-text">Me</span>
            </h1>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-neon-pink to-neon-blue rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="glass-effect p-8 rounded-2xl border border-neon-pink/20">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Hi, I'm <span className="neon-text font-semibold">Sajid</span> — a passionate web app developer 
                  with over 3 years of experience. I love building modern, interactive, and visually stunning 
                  web applications with clean code and smooth animations.
                </p>
              </div>
              
              <div className="glass-effect p-8 rounded-2xl border border-neon-blue/20">
                <p className="text-lg text-gray-300 leading-relaxed">
                  My journey in web development has been driven by a passion for creating digital experiences 
                  that not only look amazing but also provide exceptional user experiences. I believe in 
                  the power of technology to transform ideas into reality.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`glass-effect p-6 rounded-xl border border-neon-pink/20 hover:border-neon-pink/40 transition-all duration-300 hover:scale-105 ${
                    isVisible ? 'animate-slide-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-neon-pink to-neon-purple rounded-lg">
                      <item.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="glass-effect p-8 rounded-2xl border border-neon-purple/20 inline-block">
              <p className="text-xl text-gray-300 mb-4">
                "Code is like humor. When you have to explain it, it's bad."
              </p>
              <p className="text-neon-pink font-semibold">— Cory House</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
