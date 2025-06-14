
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Message Sent Successfully! 🎉",
      description: "Thank you for reaching out. I'll get back to you within 24 hours!",
    });
    
    setFormData({ name: '', email: '', message: '' });
    
    // Reset submitted state after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get In <span className="neon-text">Touch</span>
          </h1>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-neon-pink to-neon-blue rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-effect p-8 rounded-2xl border border-neon-pink/20">
            <h2 className="text-3xl font-bold text-white mb-6">Send a Message</h2>
            
            {isSubmitted ? (
              <div className="text-center py-12 animate-fade-in">
                <div className="mb-6">
                  <CheckCircle className="mx-auto text-green-400 animate-bounce" size={64} />
                </div>
                <h3 className="text-2xl font-bold text-green-400 mb-4">Message Sent! 🎉</h3>
                <p className="text-gray-300 mb-6">
                  Thank you for reaching out! I'll get back to you soon.
                </p>
                <div className="animate-pulse">
                  <div className="h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-black/50 border border-neon-pink/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-pink focus:ring-1 focus:ring-neon-pink transition-all duration-300 disabled:opacity-50"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-black/50 border border-neon-pink/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-pink focus:ring-1 focus:ring-neon-pink transition-all duration-300 disabled:opacity-50"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    rows={6}
                    className="w-full px-4 py-3 bg-black/50 border border-neon-pink/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-pink focus:ring-1 focus:ring-neon-pink transition-all duration-300 resize-none disabled:opacity-50"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-neon-pink to-neon-purple rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-neon-pink/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-effect p-8 rounded-2xl border border-neon-blue/20">
              <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-neon-pink to-neon-purple rounded-lg">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <p className="text-gray-300">Technicalart688@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Location</h3>
                    <p className="text-gray-300">Available for remote work</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-neon-purple to-neon-pink rounded-lg">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Response Time</h3>
                    <p className="text-gray-300">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-effect p-8 rounded-2xl border border-neon-purple/20">
              <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-3 bg-gradient-to-r from-neon-pink to-neon-purple rounded-lg hover:shadow-lg hover:shadow-neon-pink/50 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="text-white" size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
