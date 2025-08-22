'use client';

import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with modern architecture, real-time inventory management, and secure payment processing. Built with microservices architecture for scalability.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Stripe API", "AWS"],
      liveUrl: "https://example-ecommerce.com",
      githubUrl: "https://github.com/vincenttetteh/ecommerce-platform",
      featured: true
    },
    {
      title: "DevOps Dashboard",
      description: "A comprehensive monitoring dashboard for DevOps teams to track deployments, system metrics, and application performance across multiple environments.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["React", "Python", "Grafana", "Prometheus", "Docker", "Kubernetes"],
      liveUrl: "https://devops-dashboard.com",
      githubUrl: "https://github.com/vincenttetteh/devops-dashboard",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team workspaces, and advanced filtering capabilities. Optimized for remote teams.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Express.js", "MongoDB", "Socket.io", "JWT"],
      liveUrl: "https://taskmaster-app.com",
      githubUrl: "https://github.com/vincenttetteh/task-management",
      featured: false
    },
    {
      title: "API Gateway Service",
      description: "A high-performance API gateway with rate limiting, authentication, load balancing, and comprehensive logging for microservices architecture.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      technologies: ["Go", "Redis", "Nginx", "Docker", "Consul", "Prometheus"],
      liveUrl: "",
      githubUrl: "https://github.com/vincenttetteh/api-gateway",
      featured: false
    },
    {
      title: "Real-time Chat Application",
      description: "A scalable real-time chat application with multiple rooms, file sharing, message encryption, and mobile-responsive design.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Cloudinary"],
      liveUrl: "https://realtime-chat.com",
      githubUrl: "https://github.com/vincenttetteh/realtime-chat",
      featured: false
    },
    {
      title: "Infrastructure as Code",
      description: "Complete infrastructure automation using Terraform and Ansible for AWS cloud environments with CI/CD integration and cost optimization.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      technologies: ["Terraform", "Ansible", "AWS", "Jenkins", "Python", "Bash"],
      liveUrl: "",
      githubUrl: "https://github.com/vincenttetteh/iac-templates",
      featured: false
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A selection of my recent work showcasing full-stack development, 
              DevOps automation, and cloud architecture expertise
            </p>
          </motion.div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                        >
                          <ArrowTopRightOnSquareIcon className="w-4 h-4 mr-1" />
                          Live Demo
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-gray-700 font-medium transition-colors"
                      >
                        <CodeBracketIcon className="w-4 h-4 mr-1" />
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Other Notable Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <motion.div
                  key={project.title}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                      >
                        Live Demo
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-700 text-sm font-medium transition-colors"
                    >
                      Source Code
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center mt-12">
            <a
              href="https://github.com/vincenttetteh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              <CodeBracketIcon className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
