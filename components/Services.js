function Services() {
  try {
    const services = [
      {
        icon: 'home',
        title: 'Residential Construction',
        description: 'Custom homes, renovations, and residential projects built to your specifications with quality craftsmanship.'
      },
      {
        icon: 'building',
        title: 'Commercial Construction',
        description: 'Office buildings, retail spaces, and commercial facilities designed for functionality and durability.'
      },
      {
        icon: 'wrench',
        title: 'Renovations & Remodeling',
        description: 'Transform your existing space with our comprehensive renovation and remodeling services.'
      },
      {
        icon: 'truck',
        title: 'Industrial Projects',
        description: 'Warehouses, factories, and industrial facilities built to meet strict safety and efficiency standards.'
      },
      {
        icon: 'clipboard-check',
        title: 'Project Management',
        description: 'End-to-end project management ensuring timely delivery and budget adherence for all projects.'
      },
      {
        icon: 'shield-check',
        title: 'Quality Assurance',
        description: 'Rigorous quality control processes and inspections to ensure the highest construction standards.'
      }
    ];

    return (
      <section id="services" className="section-padding bg-[var(--surface)]" data-name="services" data-file="components/Services.js">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--secondary-color)] mb-4">Our Services</h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              We provide comprehensive construction services for residential, commercial, and industrial projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card p-8 text-center group hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-[var(--primary-color)] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[var(--primary-color)] transition-colors duration-300">
                  <div className={`icon-${service.icon} text-2xl text-[var(--primary-color)] group-hover:text-white transition-colors duration-300`}></div>
                </div>
                <h3 className="text-xl font-semibold text-[var(--secondary-color)] mb-4">{service.title}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Services component error:', error);
    return null;
  }
}