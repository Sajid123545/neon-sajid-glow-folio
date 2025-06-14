
import { useState, useEffect } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "Makab O1 Pro",
      description: "A cutting-edge web application featuring advanced AI integration and modern user interface design. Built with React and TypeScript for optimal performance.",
      image: "/api/placeholder/600/400",
      tech: ["React", "TypeScript", "AI Integration", "Modern UI"],
      featured: true
    },
    {
      title: "Makab Lango",
      description: "An innovative language learning platform with interactive features and smooth animations. Designed for seamless user experience across all devices.",
      image: "/api/placeholder/600/400",
      tech: ["React", "Animation", "Responsive", "Interactive"],
      featured: true
    }
  ];

  const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => (
    <div
      className={`glass-effect rounded-2xl border border-neon-pink/20 overflow-hidden hover:border-neon-pink/40 transition-all duration-500 hover:scale-105 group ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.3}s` }}
    >
      <div className="relative overflow-hidden">
        <div className="h-64 bg-gradient-to-br from-neon-pink/20 to-neon-purple/20 flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-neon-pink to-neon-purple rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-white">{project.title.charAt(0)}</span>
            </div>
            <p className="text-gray-400">Project Screenshot</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          {project.featured && (
            <span className="px-3 py-1 bg-gradient-to-r from-neon-pink to-neon-purple rounded-full text-xs font-semibold text-white">
              Featured
            </span>
          )}
        </div>
        
        <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-neon-pink/20 text-neon-pink rounded-full text-sm border border-neon-pink/30"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-neon-pink to-neon-purple rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-neon-pink/50 transition-all duration-300">
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 border border-neon-blue text-neon-blue rounded-lg hover:bg-neon-blue hover:text-white transition-all duration-300">
            <Github size={16} />
            <span>Code</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            My <span className="neon-text">Projects</span>
          </h1>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-neon-pink to-neon-blue rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore my latest work and see how I bring ideas to life through code and creativity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <div className="text-center">
          <div className="glass-effect p-8 rounded-2xl border border-neon-purple/20 max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">More Projects Coming Soon</h3>
            <p className="text-gray-300 mb-6">
              I'm constantly working on new and exciting projects. Stay tuned for more!
            </p>
            <div className="flex items-center justify-center space-x-2 text-neon-pink">
              <span>Watch this space</span>
              <ArrowRight size={20} className="animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
