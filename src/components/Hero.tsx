import { useEffect, useState } from 'react';

const Hero = () => {
  const [borderColor, setBorderColor] = useState('');

  useEffect(() => {
    const randomColor = () => {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 8; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    const intervalId = setInterval(() => {
      setBorderColor(randomColor());
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <section id="about" className="pt-24 pb-16 bg-primary/80 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hi, I'm <span className="text-accent font-serif italic">Mohamed Gomaa</span> <span className="wave">👋</span>
            </h1>
            <p className="text-lg text-gray-300 mb-4">
              Welcome to my portfolio! I'm passionate about crafting innovative solutions and building scalable applications.
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-4">
              Software Engineer & Backend Developer
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                <span className="font-semibold text-white">
                <span className="text-accent text-2xl animate-bounce ">H</span>ello!
                </span>I’m <span className="text-accent font-serif italic">Mohamed Gomaa</span>, and I welcome you to my profile. 
              I am a <span className="font-semibold text-secondary">software engineer</span> specializing in <span className="text-secondary">backend development</span>, with a strong focus on building scalable and efficient applications. 
              I enjoy working with <span className="font-semibold text-secondary">DevOps tools</span> and <span className="font-semibold text-secondary">cloud technologies</span> to enhance deployment and manage infrastructure effectively. 
              In addition to my backend expertise, I have a passion for <span className="font-semibold text-secondary">front-end development</span>, allowing me to create full-stack solutions that improve user experiences. 
              My goal is to build <span className="font-semibold text-secondary">robust</span> and <span className="font-semibold text-secondary">maintainable systems</span> that address real-world problems and make a positive impact. 
              Feel free to connect with me to discuss exciting opportunities or collaborations. Let’s create something <span className="font-semibold text-accent">amazing</span> together!
            </p>
            <a
              href="#contact"
              className="inline-block bg-secondary text-primary font-semibold px-6 py-3 rounded-lg hover:bg-accent transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="https://drive.google.com/file/d/1RPpRWVYUynt1zs2OLiwT4y-VOlYV8Djg/view?usp=sharing"
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
          className="rounded-full w-full h-full object-cover border-4 shadow-xl transition-colors duration-400"
          style={{ 
        borderColor: borderColor, 
        borderWidth: '8px',  
        transition: 'border-color 0.5s',
        filter: 'drop-shadow(0 0 8px ' + borderColor + ')'
          }}
        />
        <div className="relative flex flex-col items-center justify-between py-4 lg:py-12"></div>
      </div>
    </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
