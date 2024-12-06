const skills = [
  {
    category: "Backend",
    items: ["Java", "Python", "Node.js", "C#"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
  },
  {
    category: "Tools & Platforms",
    items: ["Docker", "Kubernetes", "AWS", "Git"],
  },
  {
    category: "Other",
    items: ["REST APIs", "GraphQL", "Microservices", "CI/CD"],
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
                    {skill}
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