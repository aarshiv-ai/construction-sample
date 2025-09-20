function Projects() {
  try {
    const projects = [
      {
        id: 1,
        title: 'Modern Residential Complex',
        category: 'Residential',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: '150-unit luxury apartment complex with modern amenities'
      },
      {
        id: 2,
        title: 'Corporate Office Building',
        category: 'Commercial',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: '20-story office tower with sustainable design features'
      },
      {
        id: 3,
        title: 'Luxury Family Home',
        category: 'Residential',
        image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Custom 4,500 sq ft home with premium finishes'
      },
      {
        id: 4,
        title: 'Shopping Center Renovation',
        category: 'Commercial',
        image: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Complete renovation of 200,000 sq ft retail space'
      },
      {
        id: 5,
        title: 'Industrial Warehouse',
        category: 'Industrial',
        image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: '100,000 sq ft distribution center with loading docks'
      },
      {
        id: 6,
        title: 'Hospital Extension',
        category: 'Healthcare',
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'New wing addition with specialized medical facilities'
      }
    ];

    const [selectedCategory, setSelectedCategory] = React.useState('All');
    const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Healthcare'];

    const filteredProjects = selectedCategory === 'All' 
      ? projects 
      : projects.filter(project => project.category === selectedCategory);

    return (
      <section id="projects" className="section-padding" data-name="projects" data-file="components/Projects.js">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--secondary-color)] mb-4">Our Projects</h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
              Explore our portfolio of successful construction projects across various sectors
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-[var(--primary-color)] text-white'
                      : 'bg-gray-100 text-[var(--text-secondary)] hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div key={project.id} className="project-card group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="project-overlay">
                  <div className="p-6 text-white">
                    <span className="inline-block px-3 py-1 bg-[var(--primary-color)] rounded-full text-sm font-medium mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-200">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Projects component error:', error);
    return null;
  }
}