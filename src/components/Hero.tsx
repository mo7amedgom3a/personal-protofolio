const Hero = () => {
  return (
    <section id="about" className="pt-24 pb-16 bg-primary/80 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hi, I'm Mohamed Gomaa <span className="wave">👋</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-4">
              Software Engineer & Backend Developer
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Adept software engineer specializing in backend development with
              strong knowledge of backend and frontend technologies and the full
              web stack. Proficient in designing large-scale applications using
              best practices, microservices, and event-driven systems. Skilled
              in code optimization, DevOps, and version control for seamless
              CI/CD. Strong communication skills and experience working
              collaboratively with crossfunctional teams to deliver scalable,
              clean, and robust solutions.{" "}
            </p>
            <a
              href="#contact"
              className="inline-block bg-secondary text-primary font-semibold px-6 py-3 rounded-lg hover:bg-accent transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="https://drive.google.com/file/d/158CQa1bnDAd23PILJhutH3rxIsJSrjmb/view?usp=sharing"
              target="_blank"
              className="inline-block bg-secondary text-primary font-semibold px-6 py-3 rounded-lg hover:bg-accent transition-colors ml-4"
            >
              Resume
            </a>
            </div>
          <div className="flex-1 animate-slide-in">
            <div className="relative w-64 h-64 mx-auto md:w-80 md:h-80">
              <img
                src="../me.png"
                alt="Profile"
                className="rounded-full w-full h-full object-cover border-4 border-secondary shadow-xl"
              />
              <div  className="relative flex flex-col items-center justify-between py-4 lg:py-12"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
