const Hero = () => {
  return (
    <section id="about" className="pt-24 pb-16 bg-primary/80 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Backend Software Engineer
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Hello! I'm a passionate backend developer with expertise in building
              scalable and efficient server-side applications. I specialize in
              creating robust APIs and managing databases.
            </p>
            <a
              href="#contact"
              className="inline-block bg-secondary text-primary font-semibold px-6 py-3 rounded-lg hover:bg-accent transition-colors"
            >
              Get in Touch
            </a>
          </div>
          <div className="flex-1 animate-slide-in">
            <div className="relative w-64 h-64 mx-auto md:w-80 md:h-80">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                alt="Profile"
                className="rounded-full w-full h-full object-cover border-4 border-secondary shadow-xl"
              />
              <div className="absolute inset-0 rounded-full bg-secondary/20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;