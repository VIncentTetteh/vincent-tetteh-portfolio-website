'use client';

import { motion } from 'framer-motion';
import { CodeBracketIcon, CloudIcon, CpuChipIcon } from '@heroicons/react/24/outline';

const About = () => {
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

  const values = [
    {
      icon: CodeBracketIcon,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code that stands the test of time"
    },
    {
      icon: CloudIcon,
      title: "Cloud Native",
      description: "Building applications that leverage the full potential of cloud infrastructure"
    },
    {
      icon: CpuChipIcon,
      title: "Performance",
      description: "Optimizing systems for maximum performance, reliability, and user experience"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Passionate about building digital solutions
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  With over 5 years of experience in software development and DevOps engineering,
                  I specialize in creating robust, scalable applications and implementing
                  reliable infrastructure solutions. My journey spans from frontend development
                  to backend systems, cloud architecture, and CI/CD automation.
                </p>
                <p>
                  I&apos;m passionate about leveraging modern technologies to solve complex problems
                  and improve user experiences. Whether it&apos;s developing responsive web applications,
                  designing microservices architectures, or implementing automated deployment
                  pipelines, I bring a holistic approach to every project.
                </p>
                <p>
                  When I&apos;m not coding, you can find me exploring new technologies, contributing
                  to open-source projects, or sharing knowledge with the developer community.
                  I believe in continuous learning and staying at the forefront of technology
                  trends.
                </p>
              </div>
              
              <motion.div 
                className="mt-8"
                variants={fadeInUp}
              >
                <a
                  href="/VincentTetteh-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
                >
                  Download Resume
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-700">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
