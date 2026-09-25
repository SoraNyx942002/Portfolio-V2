import { useState, useEffect } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Navbar shadow on scroll
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Scroll reveal animation logic
    const revealElements = document.querySelectorAll('.reveal');
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target); 
        }
      });
    }, observerOptions);

    revealElements.forEach(el => observer.observe(el));

    // Trigger immediately visible elements
    setTimeout(() => {
      revealElements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
          el.classList.add('active');
        }
      });
    }, 100);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="antialiased selection:bg-accent-500 selection:text-white">
      
      {/* Navigation */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 backdrop-blur-xl border-b ${isScrolled || isMenuOpen ? 'bg-white/70 border-zinc-200/50 shadow-sm py-0' : 'bg-transparent border-transparent py-2'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex justify-between items-center">
          <a href="#" className="font-heading font-extrabold text-2xl tracking-tighter text-zinc-900 group">
            GS<span className="text-accent-500 group-hover:text-zinc-900 transition-colors">V.</span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-10">
            <a href="#work" className="text-sm font-semibold text-zinc-600 hover:text-zinc-900 hover-underline">Selected Work</a>
            <a href="#experience" className="text-sm font-semibold text-zinc-600 hover:text-zinc-900 hover-underline">Experience</a>
            <a href="#capabilities" className="text-sm font-semibold text-zinc-600 hover:text-zinc-900 hover-underline">Capabilities</a>
          </nav>
          
          <a href="mailto:girbaudforwork@gmail.com" className="hidden md:inline-flex items-center justify-center text-sm font-bold bg-zinc-900 text-white px-6 py-3 rounded-full hover:bg-accent-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
            Let's Talk
          </a>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-zinc-900 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} absolute top-20 left-0 w-full bg-white border-b border-zinc-200 shadow-xl`}>
          <div className="flex flex-col px-6 py-8 space-y-6">
            <a href="#work" onClick={() => setIsMenuOpen(false)} className="text-lg font-heading font-bold text-zinc-900">Selected Work</a>
            <a href="#experience" onClick={() => setIsMenuOpen(false)} className="text-lg font-heading font-bold text-zinc-900">Experience</a>
            <a href="#capabilities" onClick={() => setIsMenuOpen(false)} className="text-lg font-heading font-bold text-zinc-900">Capabilities</a>
            <a href="mailto:girbaudforwork@gmail.com" className="text-lg font-heading font-bold text-accent-600">girbaudforwork@gmail.com</a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-500/10 blur-[120px] rounded-full pointer-events-none animate-blob"></div>
          
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="reveal">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 text-zinc-600 text-xs font-bold uppercase tracking-widest rounded-full mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-500"></span> Available for new opportunities
              </span>
            </div>
            
            <h1 className="reveal delay-100 font-heading text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold text-zinc-900 tracking-tighter leading-[1.05] mb-8 max-w-5xl">
              Crafting digital experiences through <span className="text-zinc-400">intuitive design</span> & <span className="text-zinc-400">clean code.</span>
            </h1>
            
            <div className="reveal delay-200 flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-zinc-200 pt-8 mt-12">
              <div className="max-w-2xl">
                <h2 className="text-xl md:text-2xl font-heading font-bold text-zinc-900 mb-3">Girbaud Sky Villareal</h2>
                <p className="text-zinc-600 text-base md:text-lg leading-relaxed font-medium">
                  UI/UX Designer, Front-End Developer & Technical Sales. A dedicated IT professional with experience in graphic design, web development, and technical sales. Looking to apply my skills in user interface design, front end programming, and client communication to support a growing team and deliver quality results.
                </p>
              </div>
              
              <div className="flex flex-col gap-2 text-sm font-semibold text-zinc-500">
                <p className="flex items-center gap-2 justify-end">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> 
                  Bagong Pag-Asa, Quezon City
                </p>
                <p className="flex items-center gap-2 justify-end">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg> 
                  +63 920 629 0342
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Works Section */}
        <section id="work" className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="reveal mb-16 md:mb-24 flex items-end justify-between">
              <div>
                <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tight">Selected Works</h2>
              </div>
            </div>

            <div className="space-y-24 md:space-y-32">
              <div className="reveal project-card group">
                <div className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-3xl overflow-hidden bg-zinc-900 mb-8 shadow-2xl shadow-zinc-200">
                  <img src="/About Page 1.jpg" alt="Phased UI" className="project-image w-full h-full object-cover opacity-90 transition-transform duration-1000 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent"></div>
                </div>
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 max-w-5xl">
                  <div>
                    <h3 className="font-heading text-3xl md:text-4xl font-extrabold text-zinc-900 mb-3">Phased</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-zinc-100 text-zinc-700 text-xs font-bold uppercase tracking-widest rounded-full">AI System</span>
                      <span className="px-3 py-1 bg-zinc-100 text-zinc-700 text-xs font-bold uppercase tracking-widest rounded-full">MERN Stack</span>
                      <span className="px-3 py-1 bg-zinc-100 text-zinc-700 text-xs font-bold uppercase tracking-widest rounded-full">React Native</span>
                    </div>
                  </div>
                  <p className="text-zinc-600 text-lg leading-relaxed md:max-w-lg font-medium">
                    Developed an artificial intelligence system to detect phishing threats using the MERN stack and React Native.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 md:gap-16">
                <div className="reveal project-card group">
                  <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-zinc-100 mb-8 border border-zinc-200/60">
                    <div className="absolute inset-0 flex items-center justify-center p-12">
                      <h3 className="font-heading text-4xl font-extrabold text-zinc-300 group-hover:scale-105 transition-transform duration-700">UI Update</h3>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-zinc-900 mb-3">Caiantrix Grocery System</h3>
                    <p className="text-zinc-600 text-base leading-relaxed font-medium mb-4">
                      Updated the user interface for a grocery management system to improve daily operations and inventory tracking.
                    </p>
                    <span className="px-3 py-1 bg-zinc-100 text-zinc-700 text-xs font-bold uppercase tracking-widest rounded-full">System UI</span>
                  </div>
                </div>

                <div className="reveal delay-100 project-card group">
                  <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-zinc-100 mb-8 border border-zinc-200/60">
                    <div className="absolute inset-0 flex items-center justify-center p-12">
                      <h3 className="font-heading text-4xl font-extrabold text-zinc-300 group-hover:scale-105 transition-transform duration-700">Figma Prototype</h3>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-zinc-900 mb-3">Casa Amelinda Resort</h3>
                    <p className="text-zinc-600 text-base leading-relaxed font-medium mb-4">
                      Designed responsive screen layouts in Figma for a clear and simple booking interface.
                    </p>
                    <span className="px-3 py-1 bg-zinc-100 text-zinc-700 text-xs font-bold uppercase tracking-widest rounded-full">Figma Design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 md:py-32 bg-zinc-50 border-y border-zinc-200">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="reveal mb-16 md:mb-24">
              <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tight">Professional Experience</h2>
            </div>

            <div className="flex flex-col">
              <div className="reveal group border-t border-zinc-200 py-10 flex flex-col md:flex-row md:items-start gap-6 md:gap-12 hover:bg-white hover:shadow-xl hover:shadow-zinc-200/50 transition-all px-6 md:px-8 -mx-6 md:-mx-8 rounded-2xl">
                <div className="md:w-1/4 shrink-0 pt-1">
                  <span className="text-zinc-500 font-bold uppercase tracking-widest text-sm">2023 - Present</span>
                </div>
                <div className="md:w-3/4">
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-zinc-900 mb-2">Sales and Technical Executive</h3>
                  <p className="text-accent-600 font-bold text-lg mb-6">VillMan Computer Systems Inc.</p>
                  <ul className="text-zinc-600 space-y-3 font-medium text-base">
                    <li className="relative pl-5 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-zinc-300 before:rounded-full">Managed the sales cycle including quotations and promotions while translating client needs into practical hardware solutions.</li>
                    <li className="relative pl-5 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-zinc-300 before:rounded-full">Handled financial and inventory operations such as daily sales reporting and monthly tax computations.</li>
                    <li className="relative pl-5 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-zinc-300 before:rounded-full">Maintained account summary reports to ensure financial accuracy and steady daily operations.</li>
                  </ul>
                </div>
              </div>

              <div className="reveal group border-t border-zinc-200 py-10 flex flex-col md:flex-row md:items-start gap-6 md:gap-12 hover:bg-white hover:shadow-xl hover:shadow-zinc-200/50 transition-all px-6 md:px-8 -mx-6 md:-mx-8 rounded-2xl">
                <div className="md:w-1/4 shrink-0 pt-1">
                  <span className="text-zinc-500 font-bold uppercase tracking-widest text-sm">2025 - Present</span>
                </div>
                <div className="md:w-3/4">
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-zinc-900 mb-2">UI/UX Designer & Front End Dev</h3>
                  <p className="text-accent-600 font-bold text-lg mb-6">Undecide Dev Team</p>
                  <ul className="text-zinc-600 space-y-3 font-medium text-base">
                    <li className="relative pl-5 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-zinc-300 before:rounded-full">Led the design and development of user interfaces for artificial intelligence web applications using the MERN stack.</li>
                    <li className="relative pl-5 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-zinc-300 before:rounded-full">Translated project requirements into clear wireframes and responsive React components to ensure a smooth user experience.</li>
                  </ul>
                </div>
              </div>

              <div className="reveal group border-t border-zinc-200 py-10 flex flex-col md:flex-row md:items-start gap-6 md:gap-12 hover:bg-white hover:shadow-xl hover:shadow-zinc-200/50 transition-all px-6 md:px-8 -mx-6 md:-mx-8 rounded-2xl">
                <div className="md:w-1/4 shrink-0 pt-1">
                  <span className="text-zinc-500 font-bold uppercase tracking-widest text-sm">2025 - Present</span>
                </div>
                <div className="md:w-3/4">
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-zinc-900 mb-2">Freelance Graphic Designer</h3>
                  <p className="text-zinc-900 font-bold text-lg mb-6">Freelance Work</p>
                  <ul className="text-zinc-600 space-y-3 font-medium text-base">
                    <li className="relative pl-5 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-zinc-300 before:rounded-full">Created visual identities and digital branding based on varied client needs.</li>
                    <li className="relative pl-5 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-zinc-300 before:rounded-full">Managed the creative process from initial wireframes to final asset delivery.</li>
                  </ul>
                </div>
              </div>

              <div className="reveal group border-t border-zinc-200 py-10 flex flex-col md:flex-row md:items-start gap-6 md:gap-12 hover:bg-white hover:shadow-xl hover:shadow-zinc-200/50 transition-all px-6 md:px-8 -mx-6 md:-mx-8 rounded-2xl">
                <div className="md:w-1/4 shrink-0 pt-1">
                  <span className="text-zinc-500 font-bold uppercase tracking-widest text-sm">2020 - 2022</span>
                </div>
                <div className="md:w-3/4">
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-zinc-900 mb-2">Book Illustrator</h3>
                  <p className="text-zinc-900 font-bold text-lg mb-4">Golden Cronica Publishing Incorporated</p>
                  <p className="text-zinc-600 font-medium text-base">Produced professional illustrations for registered publications. Met strict publishing standards and deadlines to deliver print ready artwork.</p>
                </div>
              </div>

              <div className="reveal group border-y border-zinc-200 py-10 flex flex-col md:flex-row md:items-start gap-6 md:gap-12 hover:bg-white hover:shadow-xl hover:shadow-zinc-200/50 transition-all px-6 md:px-8 -mx-6 md:-mx-8 rounded-2xl">
                <div className="md:w-1/4 shrink-0 pt-1">
                  <span className="text-zinc-500 font-bold uppercase tracking-widest text-sm">2017 - 2024</span>
                </div>
                <div className="md:w-3/4">
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-zinc-900 mb-2">Tattoo Artist</h3>
                  <p className="text-zinc-900 font-bold text-lg mb-4">Freewill Tattoo Shop</p>
                  <p className="text-zinc-600 font-medium text-base">Communicated with clients to translate their ideas into clear technical designs. Assisted in the daily operations of a family business while ensuring strict safety protocols.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              
              <div>
                <h2 className="reveal font-heading text-3xl md:text-4xl font-extrabold text-zinc-900 mb-12 tracking-tight">Capabilities</h2>
                
                <div className="space-y-10">
                  <div className="reveal delay-100">
                    <h3 className="text-zinc-500 font-bold uppercase tracking-widest text-sm mb-4">Design</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-2 bg-zinc-100 text-zinc-900 text-sm font-semibold rounded-full border border-zinc-200">UI and UX design</span>
                      <span className="px-4 py-2 bg-zinc-100 text-zinc-900 text-sm font-semibold rounded-full border border-zinc-200">Graphic design</span>
                      <span className="px-4 py-2 bg-zinc-100 text-zinc-900 text-sm font-semibold rounded-full border border-zinc-200">Wireframing</span>
                      <span className="px-4 py-2 bg-zinc-100 text-zinc-900 text-sm font-semibold rounded-full border border-zinc-200">Figma</span>
                      <span className="px-4 py-2 bg-zinc-100 text-zinc-900 text-sm font-semibold rounded-full border border-zinc-200">Canva</span>
                      <span className="px-4 py-2 bg-zinc-100 text-zinc-900 text-sm font-semibold rounded-full border border-zinc-200">Visual Art</span>
                    </div>
                  </div>
                  
                  <div className="reveal delay-200">
                    <h3 className="text-zinc-500 font-bold uppercase tracking-widest text-sm mb-4">Development</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-2 bg-accent-50 text-accent-700 text-sm font-bold rounded-full border border-accent-100">MERN Stack</span>
                      <span className="px-4 py-2 bg-accent-50 text-accent-700 text-sm font-bold rounded-full border border-accent-100">React Native</span>
                      <span className="px-4 py-2 bg-zinc-100 text-zinc-900 text-sm font-semibold rounded-full border border-zinc-200">Front end programming</span>
                      <span className="px-4 py-2 bg-zinc-100 text-zinc-900 text-sm font-semibold rounded-full border border-zinc-200">Back end programming</span>
                      <span className="px-4 py-2 bg-zinc-100 text-zinc-900 text-sm font-semibold rounded-full border border-zinc-200">Web development</span>
                    </div>
                  </div>

                  <div className="reveal delay-300">
                    <h3 className="text-zinc-500 font-bold uppercase tracking-widest text-sm mb-4">Technical & Operations</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-2 bg-zinc-100 text-zinc-900 text-sm font-semibold rounded-full border border-zinc-200">Computer Systems Servicing</span>
                      <span className="px-4 py-2 bg-zinc-100 text-zinc-900 text-sm font-semibold rounded-full border border-zinc-200">Active Directory</span>
                      <span className="px-4 py-2 bg-zinc-100 text-zinc-900 text-sm font-semibold rounded-full border border-zinc-200">Sales accounting</span>
                      <span className="px-4 py-2 bg-zinc-100 text-zinc-900 text-sm font-semibold rounded-full border border-zinc-200">Financial reporting</span>
                      <span className="px-4 py-2 bg-zinc-100 text-zinc-900 text-sm font-semibold rounded-full border border-zinc-200">Auditing</span>
                      <span className="px-4 py-2 bg-zinc-100 text-zinc-900 text-sm font-semibold rounded-full border border-zinc-200">Social media management</span>
                      <span className="px-4 py-2 bg-zinc-100 text-zinc-900 text-sm font-semibold rounded-full border border-zinc-200">Quotations</span>
                      <span className="px-4 py-2 bg-zinc-100 text-zinc-900 text-sm font-semibold rounded-full border border-zinc-200">Microsoft Office</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="reveal font-heading text-3xl md:text-4xl font-extrabold text-zinc-900 mb-12 tracking-tight">Academic Profile</h2>
                
                <div className="space-y-12">
                  <div className="reveal delay-100 space-y-6">
                    <div>
                      <h3 className="font-heading font-bold text-xl text-zinc-900 mb-1">Bachelor of Science in Information Technology</h3>
                      <p className="text-zinc-600 font-medium flex justify-between">Quezon City University <span className="text-zinc-400 font-semibold text-sm">2022 - 2026</span></p>
                    </div>
                    <div className="border-t border-zinc-100 pt-6">
                      <h3 className="font-heading font-bold text-lg text-zinc-900 mb-1">Information and Communications Technology</h3>
                      <p className="text-zinc-600 font-medium flex justify-between">St. Clare College, Caloocan City <span className="text-zinc-400 font-semibold text-sm">2020 - 2021</span></p>
                    </div>
                    <div className="border-t border-zinc-100 pt-6">
                      <h3 className="font-heading font-bold text-lg text-zinc-900 mb-1">Junior High School | With Honors</h3>
                      <p className="text-zinc-600 font-medium flex justify-between">Cielito Zamora Junior High School <span className="text-zinc-400 font-semibold text-sm">2018 - 2019</span></p>
                    </div>
                    <div className="border-t border-zinc-100 pt-6">
                      <h3 className="font-heading font-bold text-lg text-zinc-900 mb-1">High School | With Honors</h3>
                      <p className="text-zinc-600 font-medium flex justify-between">Maligaya High School <span className="text-zinc-400 font-semibold text-sm">2015 - 2018</span></p>
                    </div>
                  </div>

                  <div className="reveal delay-200">
                    <h3 className="text-zinc-500 font-bold uppercase tracking-widest text-sm mb-6 border-b border-zinc-200 pb-3">Training & Certifications</h3>
                    <ul className="space-y-6 text-zinc-600 font-medium text-base">
                      <li>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                          <strong className="text-zinc-900">Computer Systems Servicing NC II (CSS)</strong>
                          <span className="text-sm text-zinc-500 shrink-0">Sept 2026 | TESDA</span>
                        </div>
                        <p className="text-sm leading-relaxed">Configured, diagnosed, and maintained physical computer systems and secure enterprise networks. Executed advanced Windows Server configurations, including the deployment and management of Active Directory, user account provisioning, and Group Policy implementation.</p>
                      </li>
                      <li className="flex flex-col md:flex-row md:justify-between md:items-start pt-2">
                        <strong className="text-zinc-900">Introduction to Data Science</strong>
                        <span className="text-sm text-zinc-500 shrink-0">Jan 2026 | Cisco Networking Acad.</span>
                      </li>
                      <li className="flex flex-col md:flex-row md:justify-between md:items-start pt-2">
                        <strong className="text-zinc-900">AI in Education: Responsible Exploration</strong>
                        <span className="text-sm text-zinc-500 shrink-0">Feb 2026 | NCBA - Fairview</span>
                      </li>
                    </ul>
                  </div>

                  <div className="reveal delay-300 bg-zinc-50 p-8 rounded-2xl border border-zinc-200">
                    <h3 className="text-zinc-500 font-bold uppercase tracking-widest text-sm mb-4">Volunteer Experience</h3>
                    <h4 className="font-heading font-bold text-xl text-zinc-900 mb-1">Tutor</h4>
                    <p className="text-accent-600 font-bold mb-3 flex justify-between items-center">DSWD Tara, Basa! Tutoring Program <span className="text-zinc-400 text-sm">2025</span></p>
                    <p className="text-zinc-600 font-medium">Facilitated literacy sessions for struggling readers in public elementary schools, providing targeted instructional support.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 text-white pt-24 md:pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="reveal mb-20 md:mb-32">
            <h2 className="font-heading text-5xl md:text-7xl lg:text-[6rem] font-extrabold tracking-tighter mb-8 leading-[0.9]">
              Let's create <br/> something <span className="text-zinc-500 hover:text-accent-500 transition-colors cursor-pointer">great.</span>
            </h2>
            <a href="mailto:girbaudforwork@gmail.com" className="inline-flex items-center gap-4 text-xl md:text-3xl font-bold border-b-2 border-white pb-2 hover:text-accent-400 hover:border-accent-400 transition-colors">
              girbaudforwork@gmail.com
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-t border-zinc-800 pt-8 text-sm font-medium text-zinc-400">
            <p>© 2026 Girbaud Sky Villareal. All rights reserved.</p>
            <div className="flex gap-8">
              <span className="hover:text-white transition-colors cursor-default">References Available upon request.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;