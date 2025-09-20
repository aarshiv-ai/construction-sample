function About() {
  try {
    const stats = [
      { number: '20+', label: 'Years Experience' },
      { number: '500+', label: 'Projects Completed' },
      { number: '50+', label: 'Expert Team Members' },
      { number: '98%', label: 'Client Satisfaction' }
    ];

    return (
      <section id="about" className="section-padding bg-[var(--surface)]" data-name="about" data-file="components/About.js">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[var(--secondary-color)] mb-6">
                Building Excellence Since 2005
              </h2>
              <p className="text-lg text-[var(--text-secondary)] mb-6 leading-relaxed">
                BuildCraft Construction has been a trusted name in the construction industry for over two decades. 
                We specialize in delivering high-quality construction services that exceed our clients' expectations.
              </p>
              <p className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed">
                Our team of experienced professionals combines traditional craftsmanship with modern technology 
                to create structures that stand the test of time. From concept to completion, we're committed 
                to excellence in every project.
              </p>

              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-[var(--primary-color)] mb-2">{stat.number}</div>
                    <div className="text-[var(--text-secondary)] font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Construction team at work"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[var(--primary-color)] rounded-full flex items-center justify-center">
                <div className="icon-award text-3xl text-white"></div>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h3 className="text-2xl font-bold text-[var(--secondary-color)] text-center mb-12">Why Choose BuildCraft?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--primary-color)] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="icon-users text-2xl text-[var(--primary-color)]"></div>
                </div>
                <h4 className="text-xl font-semibold text-[var(--secondary-color)] mb-3">Expert Team</h4>
                <p className="text-[var(--text-secondary)]">Skilled professionals with decades of combined experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--primary-color)] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="icon-clock text-2xl text-[var(--primary-color)]"></div>
                </div>
                <h4 className="text-xl font-semibold text-[var(--secondary-color)] mb-3">On-Time Delivery</h4>
                <p className="text-[var(--text-secondary)]">We respect your timeline and deliver projects on schedule</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--primary-color)] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="icon-dollar-sign text-2xl text-[var(--primary-color)]"></div>
                </div>
                <h4 className="text-xl font-semibold text-[var(--secondary-color)] mb-3">Fair Pricing</h4>
                <p className="text-[var(--text-secondary)]">Transparent pricing with no hidden costs or surprises</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}