function Hero() {
  try {
    const scrollToContact = () => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const scrollToProjects = () => {
      const element = document.getElementById('projects');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <section id="home" className="relative min-h-screen flex items-center justify-center" data-name="hero" data-file="components/Hero.js">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white section-padding">
          <div className="container-width">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Building Your Dreams
              <span className="block text-[var(--accent-color)]">Into Reality</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
              Professional construction services with over 20 years of experience. 
              From residential homes to commercial buildings, we deliver excellence in every project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={scrollToContact} className="btn btn-primary text-lg px-8 py-4">
                <div className="icon-phone text-lg"></div>
                Get Free Quote
              </button>
              <button onClick={scrollToProjects} className="btn btn-secondary text-lg px-8 py-4 bg-white text-[var(--secondary-color)] border-white hover:bg-gray-100">
                <div className="icon-eye text-lg"></div>
                View Projects
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="icon-chevron-down text-2xl text-white"></div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}