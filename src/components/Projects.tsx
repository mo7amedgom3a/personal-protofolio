import { title } from "process";

const projects = [
  {
    title: "Programmer's Social Hub",
    description: "a social media microservices platform designed for programmers to share their knowledge, tips, tricks, and code snippets.",
    image: "https://res.cloudinary.com/upwork-fp/video/upload/c_scale,w_1000,q_auto/v1732047250/profile/portfolio/1744025927888236544/prqo2z0ttuqhaczvgsuy.mp4",
    link: "https://github.com/mo7amedgom3a/Programmers-Social-Hub",
    technologies: [".NET", "MySQL", "Next.JS", "MongoDB", "TypeScript", "Docker", "Kubernetes", "RabbitMQ", "Redis", "Kong", "gRPC", "Jinkins", "SignalR"],
  },
  {
    title: "School Management System",
    description: "comprehensive school management system empowers teachers, students, and administrators to collaborate, track progress, and optimize operations.",
    image: "https://school-management-system-lime.vercel.app/school.jpg",
    link: "https://github.com/mo7amedgom3a/School-Management-System",
    technologies: [".NET", "MySQL", "JWT" , "REST API", "Next.JS", "Docker"],
  },
  {
    title: "Hospital Management System",
    description: "Created a Hospital Management System enabling patients to schedule appointments, track progress, and view treatments.",
    image: "../doctor.jpg",
    link: "https://github.com/mo7amedgom3a/Hospital_Management_System",
    technologies: ["C#", ".NET", "Razor Pages", "MVC", "SQL Server", "JWT", "Ajax", "Jquery", "Bootstrap"]
  },
  {
    title: "AirBnB Clone",
    description: "Developed an AirBnB Clone enabling users to book accommodations, view listings, and manage bookings.",
    image: "../web_dynamic_diagram.jpg",
    link: "https://github.com/mo7amedgom3a/AirBnB_clone_v4",
    technologies: ["HTML", "CSS", "JS", "jquery", "Python", "Flask", "SQLAlchemy", "MySQL", "REST API", "AJAX"]
  },
  {
    title: "Simple Shell",
    description: "Developed a simple UNIX command interpreter allowing users to execute commands, manage processes, and handle signals.",
    image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGE1M2hkZzBtZHJ1NG94ejdnMWxuMjI5NHJud3l6M3k5cG40MThqMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/h0Cq1ClzO3UpupFPjP/giphy.gif",
    link: "https://github.com/mo7amedgom3a/simple_shell",
    technologies: ["C", "UNIX", "system calls", "fork", "exec", "signals", "Linux", "Data Structures"]
  },
  {
    title: "Genetic Algorithm for Shortest Path",
    description: "Developed a genetic algorithm to find the shortest path between two points in a grid.",
    image: "https://github.com/mo7amedgom3a/Genetic-Algorithm/raw/main/assets/Madrid_Brussels.gif?raw=true",
    link: "https://github.com/mo7amedgom3a/Genetic-Algorithm",
    technologies: ["Python", "Genetic Algorithm", "Ai", "Algorithms"]
  }
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
              className="group bg-primary rounded-lg overflow-hidden shadow-lg transform-gpu transition-all duration-300 hover:scale-105 hover:-rotate-2 perspective-1000"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
                <div className="relative overflow-hidden">
                {project.image.endsWith('.mp4') ? (
                  <video 
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-64 object-cover object-center"
                  src={project.image}
                  />
                ) : (
                  <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover object-center"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              <div className="p-6 transform transition-transform duration-300 group-hover:translate-z-10">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-secondary text-primary px-3 py-1 rounded-full text-sm transform transition-transform duration-300 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block text-secondary hover:text-accent transition-colors transform transition-transform duration-300 group-hover:translate-x-2"
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