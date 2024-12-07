import { Mail, Github, Linkedin } from "lucide-react";
const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-card">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Get in Touch
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-primary rounded-lg p-8">
            <p className="text-gray-300 text-center mb-8">
              I'm always open to discussing new projects, opportunities, and
              collaborations.
            </p>
            <div className="flex flex-col space-y-4">
              <a
                href="mailto:mo7amed.gom3a.7moda@gmail.com"
                className="flex items-center justify-center space-x-3 bg-secondary text-primary px-6 py-3 rounded-lg hover:bg-accent transition-colors"
              >
                <Mail size={20} />
                <span>mo7amed.gom3a.7moda@gmail.com</span>
              </a>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://github.com/mo7amedgom3a"
                  className="text-white hover:text-secondary transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohamed-gomaa-626a18249"
                  className="text-white hover:text-secondary transition-colors"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;