const Footer = () => {
  return (
    <footer className="bg-primary py-8">
      <div className="container mx-auto px-6">
        <div className="text-center text-gray-300">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;