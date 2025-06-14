
import { useEffect, useState } from 'react';
import { Code, Palette, Database, Zap, Globe, Cpu } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    {
      icon: Code,
      title: "Web App Development",
      description: "Building scalable and performant web applications",
      color: "from-neon-pink to-neon-purple",
      items: ["React", "TypeScript", "JavaScript", "Node.js"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user interfaces",
      color: "from-neon-blue to-neon-pink",
      items: ["Figma", "Adobe XD", "Responsive Design", "User Research"]
    },
    {
      icon: Zap,
      title: "Animation & Interactions",
      description: "Bringing interfaces to life with smooth animations",
      color: "from-neon-purple to-neon-blue",
      items: ["CSS Animations", "Framer Motion", "GSAP", "Three.js"]
    },
    {
      icon: Database,
      title: "API Integration",
      description: "Connecting frontend with powerful backend services",
      color: "from-neon-pink to-neon-blue",
      items: ["REST APIs", "GraphQL", "Firebase", "Supabase"]
    },
    {
      icon: Cpu,
      title: "AI Tools",
      description: "Leveraging artificial intelligence in web development",
      color: "from-neon-blue to-neon-purple",
      items: ["OpenAI API", "Machine Learning", "AI Integration", "Automation"]
    },
    {
      icon: Globe,
      title: "Web Technologies",
      description: "Modern web development stack and tools",
      color: "from-neon-purple to-neon-pink",
      items: ["HTML5", "CSS3", "Tailwind CSS", "Vite"]
    }
  ];

  const SkillCard = ({ skill, index }: { skill: typeof skills[0], index: number }) => (
    <div
      className={`glass-effect p-6 rounded-2xl border border-neon-pink/20 hover:border-neon-pink/40 transition-all duration-500 hover:scale-105 group ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center mb-4 group-hover:animate-glow`}>
        <skill.icon className="text-white" size={28} />
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
      <p className="text-gray-300 mb-4">{skill.description}</p>
      
      <div className="flex flex-wrap gap-2">
        {skill.items.map((item, itemIndex) => (
          <span
            key={itemIndex}
            className="px-3 py-1 bg-gradient-to-r from-neon-pink/20 to-neon-purple/20 text-neon-pink rounded-full text-sm border border-neon-pink/30"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            My <span className="neon-text">Skills</span>
          </h1>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-neon-pink to-neon-blue rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and creative abilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>

        <div className="text-center">
          <div className="glass-effect p-8 rounded-2xl border border-neon-purple/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Always Learning</h3>
            <p className="text-gray-300 leading-relaxed">
              Technology evolves rapidly, and I'm committed to staying at the forefront of web development. 
              I continuously explore new tools, frameworks, and techniques to deliver cutting-edge solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
