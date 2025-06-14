
import { useState, useEffect } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "Makab O1 Pro",
      description: "An advanced AI tool platform with multiple features for content creators. Chat with AI for free and generate scripts in different ways. Key features include script generation, caption creation, hashtag generation, YouTube content ideas, and access to many free courses. Everything is completely free to use.",
      image: "/lovable-uploads/3dfbd3f9-15cf-401c-9034-ba28c59377a0.png",
      tech: ["AI Integration", "Script Generation", "Content Creation", "Free Courses"],
      featured: true,
      liveUrl: "https://makab-o1.vercel.app/",
      githubUrl: "#"
    },
    {
      title: "Makab Lango",
      description: "A Duolingo-style language learning platform specially designed for Pakistanis who want to learn English from Urdu. Learn English properly in just 3 months with rich animations, effects, and visuals. Features 70+ lessons, all completely free. Perfect for Urdu speakers looking to master English.",
      image: "/lovable-uploads/70047fd4-b9a8-48ef-be3f-6927ef84570e.png",
      tech: ["Language Learning", "Urdu to English", "70+ Lessons", "Animations"],
      featured: true,
      liveUrl: "https://makab-lango.vercel.app/",
      githubUrl: "#"
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
        <div className="h-48 sm:h-56 md:h-64 bg-gradient-to-br from-neon-pink/20 to-neon-purple/20 flex items-center justify-center p-4">
          <div className="w-full h-full rounded-lg overflow-hidden border-2 border-neon-pink/30">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white">{project.title}</h3>
          {project.featured && (
            <span className="px-2 sm:px-3 py-1 bg-gradient-to-r from-neon-pink to-neon-purple rounded-full text-xs font-semibold text-white">
              Featured
            </span>
          )}
        </div>
        
        <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 sm:px-3 py-1 bg-neon-pink/20 text-neon-pink rounded-full text-xs sm:text-sm border border-neon-pink/30"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-center">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-neon-pink to-neon-purple rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-neon-pink/50 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
          >
            <ExternalLink size={18} />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            My <span className="neon-text">Projects</span>
          </h1>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-neon-pink to-neon-blue rounded-full mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Explore my latest work and see how I bring ideas to life through code and creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <div className="text-center">
          <div className="glass-effect p-6 sm:p-8 rounded-2xl border border-neon-purple/20 max-w-md mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">More Projects Coming Soon</h3>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              I'm constantly working on new and exciting projects. Stay tuned for more!
            </p>
            <div className="flex items-center justify-center space-x-2 text-neon-pink">
              <span className="text-sm sm:text-base">Watch this space</span>
              <ArrowRight size={20} className="animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
