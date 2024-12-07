import { icons } from "lucide-react";

const skills = [
  {
    category: "Backend & Frontend",
    items: [
      { name: ".NET", icon: "../Technology/NET.svg" },
      { name: "Python", icon: "../Technology/Python.svg" },
      { name: "Node.js", icon: "../Technology/Node.js.svg" },
      { name: "C#", icon: "../Technology/C.svg" },
      { name: "Express.js", icon: "../Technology/Express.svg" },
      { name: "Flask", icon: "../Technology/Flask.svg" },
      { name: "Django", icon: "../Technology/Django.svg"},
      { name: "Nginx", icon: "../Technology/NGINX.svg" },
      { name: "HAProxy", icon: "../Technology/HAproxy.svg" },
      { name: "GraphQL", icon: "../Technology/GraphQL.svg" },
      { name: "React", icon: "../Technology/React.svg" },
      { name: "Next.js", icon: "../Technology/Next.js.svg" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySql", icon: "../Technology/MySQL.svg" },
      { name: "Microsoft SQL Server", icon: "../Technology/SQL.svg" },
      { name: "SQLite", icon: "../Technology/SQLite.svg" },
      { name: "Sqlalchemy", icon: "../Technology/SQLAlchemy.svg" },
      { name: "MongoDB", icon: "../Technology/MongoDB.svg" },
      { name: "Redis", icon: "../Technology/Redis.svg" },
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Docker", icon: "../Technology/Docker.svg" },
      { name: "Kubernetes", icon: "../Technology/Kubernetes.svg" },
      { name: "Jenkins", icon: "../Technology/Jenkins.svg" },
      { name: "Puppet", icon: "../Technology/Puppet.svg" },
      { name: "Ansible", icon: "../Technology/Ansible.svg" },
      { name: "Terraform", icon: "../Technology/Terraform.svg" },
      { name: "DataDog", icon: "../Technology/DataDog.svg" },
      { name: "Prometheus", icon: "../Technology/Prometheus.svg" },
      { name: "GitLab", icon: "../Technology/GitLab.svg" },
      { name: "Jira", icon: "../Technology/Jira.svg" },
      { name: "AWS", icon: "../Technology/AWS.svg" },
      { name: "Git", icon: "../Technology/Git.svg" },
    ],
  },
  {
    category: "Other",
    items: [
      { name: "REST APIs", icon: "../Technology/Api.svg" },
      { name: "GraphQL", icon: "../Technology/GraphQL.svg" },
      { name: "Microservices", icon: "../Technology/microservice.png" },
      { name: "RabbitMQ", icon: "../Technology/RabbitMQ.svg" },
      { name: "gRPC", icon: "../Technology/grpc.svg" },
      { name: "Socket.io", icon: "../Technology/Socket.io.svg" },
      { name: "SignalR", icon: "../Technology/NET.svg" },
      { name: "CI/CD", icon: "../Technology/CI_CD.svg" },
      { name: "Linux", icon: "../Technology/Linux.svg" },
      { name: "Bash Script", icon: "../Technology/Bash.svg" },
      { name: "tailwindcss", icon: "../Technology/Tailwind.svg" },
      { name: "Bootstrap", icon: "../Technology/Bootstrap.svg" },
      { name: "jQuery", icon: "../Technology/jQuery.svg" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-primary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 hover:transform hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-semibold text-secondary mb-4">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-gray-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                    {skill.name}
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-6 h-6 ml-2"
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;