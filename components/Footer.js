function Footer() {
  try {
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <footer className="bg-[var(--secondary-color)] text-white" data-name="footer" data-file="components/Footer.js">
        <div className="container-width section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-[var(--primary-color)] rounded-lg flex items-center justify-center">
                  <div className="icon-hammer text-xl text-white"></div>
                </div>
                <span className="text-xl font-bold">BuildCraft Construction</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Building dreams into reality with over 20 years of experience in residential, 
                commercial, and industrial construction projects.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors">
                  <div className="icon-facebook text-lg"></div>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors">
                  <div className="icon-twitter text-lg"></div>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors">
                  <div className="icon-linkedin text-lg"></div>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors">
                  <div className="icon-instagram text-lg"></div>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <div className="space-y-3">
                <button onClick={() => scrollToSection('home')} className="block text-gray-300 hover:text-white transition-colors">Home</button>
                <button onClick={() => scrollToSection('services')} className="block text-gray-300 hover:text-white transition-colors">Services</button>
                <button onClick={() => scrollToSection('projects')} className="block text-gray-300 hover:text-white transition-colors">Projects</button>
                <button onClick={() => scrollToSection('about')} className="block text-gray-300 hover:text-white transition-colors">About Us</button>
                <button onClick={() => scrollToSection('contact')} className="block text-gray-300 hover:text-white transition-colors">Contact</button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="icon-phone text-sm"></div>
                  <span>(+91) 12345-67890</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="icon-mail text-sm"></div>
                  <span>info@buildcraft.com</span>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <div className="icon-map-pin text-sm mt-1"></div>
                  <span>123 Construction Ave<br />Builder City, ABC State</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-300 text-sm">
                © 2025 BuildCraft Construction. All rights reserved. Built by Aarshiv.ai!
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Licensing</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}
