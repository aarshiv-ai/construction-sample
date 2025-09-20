function Contact() {
  try {
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      phone: '',
      project: '',
      message: ''
    });

    const [showSuccess, setShowSuccess] = React.useState(false);

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // Simulate form submission
      console.log('Quote request submitted:', formData);
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        project: '',
        message: ''
      });
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    };

    return (
      <section id="contact" className="section-padding" data-name="contact" data-file="components/Contact.js">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--secondary-color)] mb-4">Get Your Free Quote</h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              Ready to start your construction project? Contact us today for a free consultation and quote.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold text-[var(--secondary-color)] mb-6">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[var(--primary-color)] bg-opacity-10 rounded-lg flex items-center justify-center">
                    <div className="icon-phone text-xl text-[var(--primary-color)]"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--secondary-color)]">Phone</div>
                    <div className="text-[var(--text-secondary)]">(555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[var(--primary-color)] bg-opacity-10 rounded-lg flex items-center justify-center">
                    <div className="icon-mail text-xl text-[var(--primary-color)]"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--secondary-color)]">Email</div>
                    <div className="text-[var(--text-secondary)]">info@buildcraft.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[var(--primary-color)] bg-opacity-10 rounded-lg flex items-center justify-center">
                    <div className="icon-map-pin text-xl text-[var(--primary-color)]"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--secondary-color)]">Address</div>
                    <div className="text-[var(--text-secondary)]">123 Construction Ave<br />Builder City, BC 12345</div>
                  </div>
                </div>
              </div>

              <div className="bg-[var(--surface)] p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-[var(--secondary-color)] mb-3">Business Hours</h4>
                <div className="space-y-2 text-[var(--text-secondary)]">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>7:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Emergency Only</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-8">
              {showSuccess && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  Thank you for your interest! We'll contact you within 24 hours.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--secondary-color)] mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[var(--secondary-color)] mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--secondary-color)] mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--secondary-color)] mb-2">Project Type</label>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                  >
                    <option value="">Select project type</option>
                    <option value="residential">Residential Construction</option>
                    <option value="commercial">Commercial Building</option>
                    <option value="renovation">Renovation/Remodeling</option>
                    <option value="industrial">Industrial Project</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--secondary-color)] mb-2">Project Details</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                    placeholder="Tell us about your project requirements, timeline, and budget..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-full text-lg py-4">
                  <div className="icon-send text-lg"></div>
                  Request Free Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Contact component error:', error);
    return null;
  }
}
