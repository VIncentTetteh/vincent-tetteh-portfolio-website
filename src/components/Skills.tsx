'use client';

import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Python", level: 98 },
        { name: "TypeScript", level: 90 },
        { name: "FastAPI", level: 98 },
        { name: "Spring Boot", level: 90 },
        { name: "Kotlin", level: 88 },
        { name: "REST APIs", level: 92 },
        { name: "Microservices", level: 80 },
        { name: ".NET Core", level: 85 },
        { name: "C#", level: 80 },
        { name: "Golang", level: 85 },
        { name: "Gin Framework", level: 85 }

      ]
    },
    {
      title: "DevOps & Cloud",
      skills: [
        { name: "AWS", level: 95 },
        { name: "Docker", level: 95 },
        { name: "Kubernetes", level: 95 },
        { name: "CI/CD", level: 95 },
        { name: "Terraform", level: 95 },
        { name: "Jenkins", level: 95 },
        { name: "Ansible", level: 90 },
        { name: "Helm", level: 95 },
        { name: "ArgoCD", level: 95 },
        { name: "GitHub Actions", level: 90 },
        { name: "Pulumi", level: 85 },
        { name: "CloudFormation", level: 90 },
        { name: "AWS CDK", level: 85 },
        { name: "Serverless Framework", level: 80 },
        { name: "Sentry", level: 85 },
        { name: "Datadog", level: 90 },
        { name: "GCP", level: 85 },
        { name: "Azure", level: 89 },
        { name: "API Gateway", level: 90 },
        { name: "AWS Lambda", level: 85 },
        { name: "AWS ECS", level: 90 }
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "PostgreSQL", level: 95 },
        { name: "MongoDB", level: 80 },
        { name: "Redis", level: 90 },
        { name: "AWS RDS", level: 90 },
        { name: "Git", level: 95 },
        { name: "Linux", level: 88 },
        { name: "Nginx", level: 82 }
      ]
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


  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive expertise across the full stack, from frontend frameworks 
              to cloud infrastructure and DevOps practices
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={fadeInUp}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-800 font-medium">{skill.name}</span>
                        <span className="text-blue-600 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.1 + index * 0.1,
                            ease: "easeInOut" 
                          }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technology Icons/Badges */}
          <motion.div variants={fadeInUp} className="mt-16">
            <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Java", "Springboot", "TypeScript", "FastAPI", "Python", "AWS", 
                "Docker", "Kubernetes", "PostgreSQL", "MongoDB", "ArgoCD", 
                "Terraform", "Jenkins", "Git", "Linux",
                "Bash","Helm","Github Actions","GCP","Azure","MLOps"
              ].map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium hover:bg-blue-200 transition-colors cursor-pointer"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
