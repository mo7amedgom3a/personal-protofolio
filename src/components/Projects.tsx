const projects = [
  {
    title: "E-commerce Backend",
    description: "Built a scalable backend system using Node.js and MongoDB",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    link: "#",
    technologies: ["Node.js", "MongoDB", "Express"],
  },
  {
    title: "API Gateway",
    description: "Developed a microservices API gateway using Spring Boot",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    link: "#",
    technologies: ["Java", "Spring Boot", "Docker"],
  },
  {
    title: "Real-time Chat System",
    description: "Created a real-time messaging system with WebSocket",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    link: "#",
    technologies: ["Python", "WebSocket", "Redis"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-card">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-primary rounded-lg overflow-hidden shadow-lg hover:transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-secondary text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-secondary hover:text-accent transition-colors"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;