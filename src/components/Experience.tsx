'use client';

import { motion } from 'framer-motion';
import { BriefcaseIcon, CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Experience = () => {
  const experiences = [
    {
      company: "Standard Chartered",
      position: "Senior DevOps Engineer",
      duration: "April 2023 - Present",
      location: "Accra, Ghana",
      type: "Full-time",
      description: [
        "Led development of microservices architecture serving 100K+ daily active users",
        "Implemented CI/CD pipelines reducing deployment time by 75%",
        "Mentored junior developers and conducted technical interviews",
        "Architected cloud-native solutions on AWS with 99.9% uptime",
        "Created custom terraform modules for provision EKS, API-Gateway, S3, CloudFront, RDS, MSK, ETC",
        "Implemented Policy as code and integrated it into Jenkins pipelines for terraform resource provisioning"
      ],
      technologies: ["Terraform", "Helm", "AWS", "Docker", "EKS", "AWS RDS","Jenkins","Git","AWS ECS", "AWS Lambda", "Python", "API Gateway", "S3", "CloudFormation","Route 53","WAF","ArgoCD"]
    },
    {
      company: "Techieszon",
      position: "Senior Software Engineer / Cloud Solutions Architect / ML & MLOps Engineer",
      duration: "Jan 2022 – Present",
      location: "Accra, Ghana",
      type: "Part-time",
      description: [
        "Designed and deployed microservices (Python, C#, Golang, Java) on AWS, Azure, and GCP with CI/CD via GitHub Actions and Azure DevOps",
        "Built secure cloud-native applications meeting performance, security, and compliance requirements.",
        "Operated multi-cloud environments and guided cost-effective architecture decisions with 99.9% uptime SLAs",
        "Migrated legacy systems to AWS, reducing infrastructure costs by 15% and boosting scalability.",
        "Led mentoring efforts and code reviews across engineering teams; promoted best practices in DevOps and SRE.",
        "Developed and deployed an ML-powered API for skin disease prediction using Scikit-Learn, FastAPI, Pandas, and Seaborn"
      ],
      technologies: ["AWS", "Terraform", "Jenkins", "Docker", "ELK Stack", "Python","Scikit-Learn","FastAPI","Pandas","Seaborn","Golang","Gin Framework","Springboot","C#",".Net Core","Java","ECS","MLflow","Github Actions"]
    },
    {
      company: "Turntable",
      position: "DevOps Software Engineer III",
      duration: "Sep 2020 – Apr 2023",
      location: "Accra, Ghana",
      type: "Full-time",
      description: [
        "Architected and maintained AWS infrastructure using Terraform and Helm; enabled 50% faster provisioning.",
        "Created robust monitoring with Prometheus, Grafana, and Datadog; reduced incident downtime by 35%.",
        "Deployed secure containerized microservices on EKS and built auto-scaling policies for high availability",
        "Participated in agile development process and sprint planning",
        "Automated repetitive workflows and operational tasks with Python and Bash",
        "Delivered backend services in Java (Spring Boot), tuned for low latency and high throughput",
        "Contributed to incident response and on-call rotations, improving resolution workflows and reducing system outage impact."
      ],
      technologies: ["Java", "Spring Boot", "AWS", "Kubernetes", "Typescript", "Python","Docker","Helm","Scala","Jenkins"]
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
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Professional Experience
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              5+ years of hands-on experience in software development, DevOps engineering,
              and technical leadership across various industries
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-blue-200"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:justify-between`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                  }`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">
                            {exp.position}
                          </h3>
                          <h4 className="text-lg font-semibold text-blue-600 mb-2">
                            {exp.company}
                          </h4>
                        </div>
                        <BriefcaseIcon className="w-8 h-8 text-blue-600 flex-shrink-0 ml-4" />
                      </div>

                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <CalendarIcon className="w-4 h-4 mr-1" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPinIcon className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                          {exp.type}
                        </span>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-gray-700 flex items-start">
                            <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
