function Header() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    };

    return (
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50" data-name="header" data-file="components/Header.js">
        <nav className="container-width">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[var(--primary-color)] rounded-lg flex items-center justify-center">
                <div className="icon-hammer text-xl text-white"></div>
              </div>
              <span className="text-xl font-bold text-[var(--secondary-color)]">BuildCraft</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">Services</button>
              <button onClick={() => scrollToSection('projects')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">Projects</button>
              <button onClick={() => scrollToSection('about')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">About</button>
              <button onClick={() => scrollToSection('contact')} className="btn btn-primary">
                Get Quote
              </button>
            </div>

            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className={`icon-${isMenuOpen ? 'x' : 'menu'} text-xl text-[var(--secondary-color)]`}></div>
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('home')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">Home</button>
                <button onClick={() => scrollToSection('services')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">Services</button>
                <button onClick={() => scrollToSection('projects')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">Projects</button>
                <button onClick={() => scrollToSection('about')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">About</button>
                <button onClick={() => scrollToSection('contact')} className="btn btn-primary w-fit">
                  Get Quote
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}