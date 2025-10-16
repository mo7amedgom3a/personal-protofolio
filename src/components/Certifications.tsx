import React from "react";

const certifications = [
  {
    title: "AWS Solution Architect Associate",
    issuer: "Amazon Web Services (AWS)",
    link: "https://www.credly.com/badges/24f40222-3340-4c6c-981c-e5374af0b9f4",
    image: "/aws-sa.png",
    issued: "Oct 2025",
    expires: "Oct 2028",
    skills: [
      "Amazon Web Services (AWS)", "Cloud Architecture", "AWS Well-Architected Framework", "Designing Resilient Architectures", "High-Performing Architectures", "Secure Applications and Architectures", "Cost-Optimized Architectures", "AWS Identity and Access Management (IAM)", "Amazon VPC", "Amazon EC2", "AWS Lambda", "Amazon S3", "Amazon RDS", "AWS CloudFormation", "AWS CloudTrail", "AWS Config"
    ]
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    link: "https://www.credly.com/badges/8e1e3b2d-04ca-487a-bfc2-95669cf5771c",
    image: "/aws.jpeg",
    issued: "Jun 2025",
    expires: "Jun 2028",
    skills: [
      "Amazon Web Services (AWS)", "Cloud Computing", "AWS's global infrastructure", "security and compliance", "AWS billing and pricing models", "AWS Identity and Access Management (AWS IAM)", "Amazon VPC", "Amazon EC2", "ECS", "Amazon S3", "Amazon Relational Database Service (RDS)", "Amazon EBS", "EFS", "AWS Auto Scaling"
    ]
  },
  {
    title: "Software Engineer Program (12 months)",
    issuer: "alx_africa",
    link: "https://savanna.alxafrica.com/certificates/TSnCB5ELRm",
    image: "/alx.png",
    issued: "Nov 2024",
    expires: "Nov 2028",
    skills: [
      "C (Programming Language)", "Linux", "Operating Systems", "SQL", "Data Structures", "Git", "JavaScript", "Python", "Algorithms", "Object-Oriented Programming (OOP)", "networking", "DevOps", "Nginx", "HAProxy", "Docker", "Kubernetes", "Puppet (Software)", "Ansible", "MongoDB", "Microservices", "RabbitMQ", "gRPC", "Domain-Driven Design (DDD)"
    ]
  },

];

const Certifications = () => (
  <section id="certifications" className="py-16 bg-primary">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, idx) => (
          <div key={idx} className="bg-card rounded-lg shadow-lg p-0 flex flex-col items-center overflow-hidden group transition-all duration-300 hover:scale-105 hover:-rotate-2 perspective-1000" style={{transformStyle: 'preserve-3d'}}>
            <div className="relative overflow-hidden w-full">
              <img src={cert.image} alt={cert.title} className="w-full h-64 object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6 flex flex-col items-center">
              <h3 className="text-xl font-semibold text-secondary mb-2 text-center">{cert.title}</h3>
              <p className="text-gray-300 mb-2 text-center">{cert.issuer}</p>
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-accent underline mb-2">View Certificate</a>
              <p className="text-gray-400 text-sm mb-1">Issued: {cert.issued}</p>
              <p className="text-gray-400 text-sm mb-2">Expires: {cert.expires}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {cert.skills.map((skill, i) => (
                  <span key={i} className="bg-secondary text-primary px-2 py-1 rounded-full text-xs">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications; 