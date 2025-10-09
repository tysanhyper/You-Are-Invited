import React, { useEffect, useRef, useState } from "react";

const WeddingPage = () => {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const observerRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(observerRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#C6754D]/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#6B2C2C]/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C6754D]/3 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100 transition-all duration-300 animate-fade-in">
        <div className="flex items-center justify-center gap-8 px-8 py-6">
          <a href="#home" className="text-[#2B1105] text-lg font-['Montaga'] opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 transform relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C6754D] hover:after:w-full after:transition-all after:duration-300">Home</a>
          <a href="#our-story" className="text-[#2B1105] text-lg font-['Montaga'] opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 transform relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C6754D] hover:after:w-full after:transition-all after:duration-300">Our Story</a>
          <a href="#venue" className="text-[#2B1105] text-lg font-['Montaga'] opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 transform relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C6754D] hover:after:w-full after:transition-all after:duration-300">Events</a>
          
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C6754D] to-[#A85D3F] flex items-center justify-center mx-4 hover:scale-110 hover:rotate-12 transition-all duration-300 transform cursor-pointer shadow-lg animate-pulse" style={{ animationDuration: '3s' }}>
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z" fill="white"/>
            </svg>
          </div>

          <a href="#bridal-party" className="text-[#2B1105] text-lg font-['Montaga'] opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 transform relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C6754D] hover:after:w-full after:transition-all after:duration-300">Guests</a>
          <a href="#registry" className="text-[#2B1105] text-lg font-['Montaga'] opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 transform relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C6754D] hover:after:w-full after:transition-all after:duration-300">Registry</a>
          <a href="#rsvp" className="text-[#2B1105] text-lg font-['Montaga'] opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 transform relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C6754D] hover:after:w-full after:transition-all after:duration-300">RSVP</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative flex flex-col items-center py-32 px-8 mt-20 scroll-mt-24">
        <div className="absolute top-10 left-1/4 text-6xl opacity-10 animate-float">✨</div>
        <div className="absolute bottom-20 right-1/4 text-6xl opacity-10 animate-float" style={{ animationDelay: '2s' }}>💕</div>
        
        <div className="text-center mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
          <p className="text-[#C6754D] text-xl font-['Montaga'] tracking-widest uppercase">Celebrate With Us</p>
        </div>
        
        <h1 className="text-8xl font-['Montaga'] text-transparent bg-clip-text bg-gradient-to-r from-[#2B1105] via-[#C6754D] to-[#2B1105] mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
          Yatin & Nisha
        </h1>
        
        <div className="flex items-center gap-4 mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#C6754D] to-transparent"></div>
          <p className="text-[#2B1105] font-['Montaga'] text-lg">December 5, 2025</p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#C6754D] to-transparent"></div>
        </div>
        
        <div className="w-full max-w-5xl opacity-0 animate-fade-up" style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#C6754D] via-[#6B2C2C] to-[#C6754D] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img 
              src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200&h=600&fit=crop" 
              alt="Yatin & Nisha" 
              className="relative w-full h-[500px] object-cover rounded-2xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="flex items-center justify-center py-8">
        <div className="flex items-center gap-4">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#C6754D]"></div>
          <div className="text-2xl animate-pulse" style={{ animationDuration: '2s' }}>❤️</div>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#C6754D]"></div>
        </div>
      </div>

      {/* Our Story Section */}
      <section 
        id="our-story" 
        ref={(el) => (observerRefs.current["our-story"] = el)}
        className={`relative py-20 px-8 scroll-mt-24 transition-all duration-1000 ${
          isVisible["our-story"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#6B2C2C] via-[#7B3C3C] to-[#6B2C2C]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`text-white transition-all duration-1000 delay-200 ${
            isVisible["our-story"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}>
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <p className="text-sm tracking-widest uppercase text-white/80">Our Journey</p>
            </div>
            <h2 className="text-6xl font-['Montaga'] mb-8 drop-shadow-lg">Our Story</h2>
            <p className="text-lg leading-relaxed mb-6 opacity-90 drop-shadow">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p className="text-lg leading-relaxed opacity-90 drop-shadow">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible["our-story"] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-1000"></div>
              <img 
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=600&fit=crop" 
                alt="Our Story" 
                className="relative w-full h-[400px] object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="flex items-center justify-center py-8">
        <div className="flex items-center gap-4">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#C6754D]"></div>
          <div className="text-2xl animate-bounce" style={{ animationDuration: '2s' }}>🌸</div>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#C6754D]"></div>
        </div>
      </div>

      {/* Venue Section */}
      <section 
        id="venue" 
        ref={(el) => (observerRefs.current["venue"] = el)}
        className={`py-20 px-8 bg-white scroll-mt-24 transition-all duration-1000 ${
          isVisible["venue"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible["venue"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}>
            <div className="inline-block px-4 py-2 bg-[#C6754D]/10 rounded-full mb-4">
              <p className="text-[#C6754D] text-sm uppercase tracking-widest">The Venue</p>
            </div>
            <h2 className="text-6xl font-['Montaga'] text-transparent bg-clip-text bg-gradient-to-r from-[#2B1105] to-[#C6754D] mb-6">Royal Resort Banquet Hall</h2>
            <p className="text-lg text-[#2B1105] opacity-80 mb-4 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-lg text-[#2B1105] opacity-80 flex items-center gap-2">
              <span className="text-2xl">📍</span> 123 Wedding Lane, Celebration City, CC 12345
            </p>
          </div>
          <div className={`grid grid-cols-2 gap-4 transition-all duration-1000 delay-400 ${
            isVisible["venue"] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#C6754D]/30 to-[#6B2C2C]/30 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1519167758481-83f29da8c906?w=400&h=300&fit=crop" 
                alt="Venue 1" 
                className="relative w-full h-48 object-cover rounded-2xl hover:scale-110 hover:rotate-2 transition-all duration-500 shadow-xl"
              />
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#6B2C2C]/30 to-[#C6754D]/30 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=300&fit=crop" 
                alt="Venue 2" 
                className="relative w-full h-48 object-cover rounded-2xl hover:scale-110 hover:-rotate-2 transition-all duration-500 shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hotels Section */}
      <section 
        id="hotels" 
        ref={(el) => (observerRefs.current["hotels"] = el)}
        className={`py-20 px-8 bg-gradient-to-b from-white to-gray-50 scroll-mt-24 transition-all duration-1000 ${
          isVisible["hotels"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-['Montaga'] text-transparent bg-clip-text bg-gradient-to-r from-[#2B1105] to-[#C6754D] mb-4">Accommodations</h2>
            <p className="text-[#2B1105]/60">We've reserved blocks at these lovely hotels</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((num, idx) => (
              <div 
                key={num} 
                className={`relative group transition-all duration-700 ${
                  isVisible["hotels"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#C6754D]/20 to-[#6B2C2C]/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#C6754D] to-[#A85D3F] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-xl font-bold">{num}</span>
                  </div>
                  <h3 className="text-3xl font-['Montaga'] text-[#2B1105] mb-6">Hotel {num}</h3>
                  <p className="text-lg text-[#2B1105] opacity-80 mb-6 flex-grow leading-relaxed">
                    Feugiat pretium egestas enim blandit purus euismod. Feugiat magna aliquam lectus lectus eu amet. Eros, accumsan purus enim nascetur.
                  </p>
                  <button className="w-full border-2 border-[#C6754D] text-[#C6754D] px-6 py-3 font-['Montaga'] text-lg rounded-full hover:bg-[#C6754D] hover:text-white transition-all duration-300 hover:scale-105 transform shadow-md hover:shadow-xl">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bridal Party Section */}
      <section 
        id="bridal-party" 
        ref={(el) => (observerRefs.current["bridal-party"] = el)}
        className={`py-20 px-8 bg-white scroll-mt-24 transition-all duration-1000 ${
          isVisible["bridal-party"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-6xl font-['Montaga'] text-transparent bg-clip-text bg-gradient-to-r from-[#2B1105] to-[#C6754D] mb-4">The Bridal Party</h2>
            <div className="flex items-center justify-center gap-4 mt-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#C6754D]"></div>
              <p className="text-[#C6754D] font-['Montaga']">Groomsmen</p>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#C6754D]"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: "Groom's Mom", subtitle: "Mother of the Groom" },
              { name: "Best Man", subtitle: "Best Friend" },
              { name: "Maid of Honor", subtitle: "Sister" },
              { name: "Bride's Dad", subtitle: "Father of the Bride" }
            ].map((person, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col items-center group transition-all duration-700 ${
                  isVisible["bridal-party"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="relative mb-6">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#C6754D] to-[#6B2C2C] rounded-full blur-md opacity-0 group-hover:opacity-50 transition duration-500"></div>
                  <div className="relative w-40 h-40 rounded-full overflow-hidden ring-4 ring-white shadow-xl group-hover:ring-[#C6754D] transition-all duration-500">
                    <img 
                      src={`https://images.unsplash.com/photo-${idx % 2 === 0 ? '1507003211169-0a1dd7228f2d' : '1506794778202-cad84cf45f1d'}?w=200&h=200&fit=crop&crop=faces`}
                      alt={person.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <h4 className="text-xl font-['Montaga'] text-[#2B1105] mb-2 group-hover:text-[#C6754D] transition-colors duration-300">{person.name}</h4>
                <p className="text-sm text-[#2B1105] opacity-60">{person.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary Section */}
      <section 
        id="itinerary" 
        ref={(el) => (observerRefs.current["itinerary"] = el)}
        className={`py-20 px-8 bg-gradient-to-b from-gray-50 to-white scroll-mt-24 transition-all duration-1000 ${
          isVisible["itinerary"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-['Montaga'] text-transparent bg-clip-text bg-gradient-to-r from-[#2B1105] to-[#C6754D]">Itinerary</h2>
          </div>
          <div className="space-y-12">
            {[
              { time: "3:00 PM", title: "Ceremony", description: "Join us for the wedding ceremony at the Royal Resort Banquet Hall. Please arrive 15 minutes early to find your seat.", icon: "💍" },
              { time: "5:00 PM", title: "Cocktail Hour", description: "Enjoy drinks and hors d'oeuvres while we take photos. Relax and mingle with other guests.", icon: "🥂" },
              { time: "6:30 PM", title: "Reception", description: "Dinner, dancing, and celebration! Let's party the night away and create unforgettable memories.", icon: "🎉" }
            ].map((event, idx) => (
              <div 
                key={idx} 
                className={`flex gap-8 items-start group transition-all duration-700 ${
                  isVisible["itinerary"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="relative flex-shrink-0">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#C6754D] to-[#6B2C2C] rounded-full blur-md opacity-0 group-hover:opacity-50 transition duration-500"></div>
                  <div className="relative w-24 h-24 rounded-full border-2 border-[#C6754D] bg-white flex flex-col items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#C6754D] group-hover:to-[#A85D3F] group-hover:scale-110 group-hover:border-0 transition-all duration-500 shadow-lg">
                    <span className="text-[#C6754D] text-xs font-['Montaga'] group-hover:text-white transition-colors duration-300">{event.time}</span>
                    <span className="text-2xl mt-1 group-hover:scale-125 transition-transform duration-300">{event.icon}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-3xl font-['Montaga'] text-[#2B1105] mb-3 group-hover:text-[#C6754D] transition-colors duration-300">{event.title}</h3>
                  <p className="text-lg text-[#2B1105] opacity-80 leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registry Section */}
      <section 
        id="registry" 
        ref={(el) => (observerRefs.current["registry"] = el)}
        className={`py-20 px-8 bg-white scroll-mt-24 transition-all duration-1000 ${
          isVisible["registry"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl font-['Montaga'] text-transparent bg-clip-text bg-gradient-to-r from-[#2B1105] to-[#C6754D] mb-8">Registry</h2>
          <p className="text-lg text-[#2B1105] opacity-80 mb-12 leading-relaxed max-w-2xl mx-auto">
            Your presence is the greatest gift, but if you wish to honor us with a gift, we've registered at the following stores:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Macy's", icon: "M", gradient: "from-red-500 to-pink-500" },
              { name: "Belara", icon: "B", gradient: "from-purple-500 to-indigo-500" },
              { name: "Chloe", icon: "C", gradient: "from-blue-500 to-cyan-500" },
              { name: "Bloomingdales", icon: "BD", gradient: "from-amber-500 to-orange-500" }
            ].map((store, idx) => (
              <div
                key={store.name}
                className={`relative group transition-all duration-700 ${
                  isVisible["registry"] ? "opacity-100 scale-100" : "opacity-0 scale-75"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${store.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`}></div>
                <button className="relative w-full border-2 border-[#C6754D] bg-white p-8 rounded-2xl hover:bg-gradient-to-br hover:from-[#C6754D] hover:to-[#A85D3F] hover:text-white hover:border-0 transition-all duration-500 hover:scale-110 hover:shadow-2xl transform">
                  <div className="text-4xl font-bold text-[#C6754D] group-hover:text-white mb-3 group-hover:scale-125 transition-all duration-300">{store.icon}</div>
                  <div className="text-sm font-['Montaga'] text-[#2B1105] group-hover:text-white transition-colors duration-300">{store.name}</div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section 
        id="rsvp" 
        ref={(el) => (observerRefs.current["rsvp"] = el)}
        className={`py-20 px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 scroll-mt-24 transition-all duration-1000 ${
          isVisible["rsvp"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-6xl font-['Montaga'] text-transparent bg-clip-text bg-gradient-to-r from-[#2B1105] to-[#C6754D] mb-4">RSVP</h2>
            <p className="text-[#2B1105]/60">We'd love to have you join us!</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#C6754D]/10 to-[#6B2C2C]/10 rounded-3xl blur-2xl"></div>
            <form className="relative bg-white p-8 rounded-3xl shadow-2xl space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-['Montaga'] text-[#2B1105] mb-2 group-focus-within:text-[#C6754D] transition-colors duration-300">First Name</label>
                  <input 
                    type="text" 
                    className="w-full border-b-2 border-gray-200 bg-transparent py-3 focus:outline-none focus:border-[#C6754D] transition-all duration-300 hover:border-[#C6754D]/50"
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-['Montaga'] text-[#2B1105] mb-2 group-focus-within:text-[#C6754D] transition-colors duration-300">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full border-b-2 border-gray-200 bg-transparent py-3 focus:outline-none focus:border-[#C6754D] transition-all duration-300 hover:border-[#C6754D]/50"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-sm font-['Montaga'] text-[#2B1105] mb-2 group-focus-within:text-[#C6754D] transition-colors duration-300">Email</label>
                <input 
                  type="email" 
                  className="w-full border-b-2 border-gray-200 bg-transparent py-3 focus:outline-none focus:border-[#C6754D] transition-all duration-300 hover:border-[#C6754D]/50"
                />
              </div>

              <div>
                <label className="block text-sm font-['Montaga'] text-[#2B1105] mb-4">Will you be attending?</label>
                <div className="flex gap-6">
                  <label className="flex items-center cursor-pointer group">
                    <input type="radio" name="attending" value="yes" className="mr-3 w-5 h-5 cursor-pointer accent-[#C6754D]" />
                    <span className="font-['Montaga'] group-hover:text-[#C6754D] transition-colors duration-300">Yes, I'll be there</span>
                  </label>
                  <label className="flex items-center cursor-pointer group">
                    <input type="radio" name="attending" value="no" className="mr-3 w-5 h-5 cursor-pointer accent-[#C6754D]" />
                    <span className="font-['Montaga'] group-hover:text-[#C6754D] transition-colors duration-300">Sorry, can't make it</span>
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="group">
                  <label className="block text-sm font-['Montaga'] text-[#2B1105] mb-2 group-focus-within:text-[#C6754D] transition-colors duration-300">Number of Guests</label>
                  <input 
                    type="number" 
                    min="1" 
                    className="w-full border-b-2 border-gray-200 bg-transparent py-3 focus:outline-none focus:border-[#C6754D] transition-all duration-300 hover:border-[#C6754D]/50"
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-['Montaga'] text-[#2B1105] mb-2 group-focus-within:text-[#C6754D] transition-colors duration-300">Meal Choice</label>
                  <select className="w-full border-b-2 border-gray-200 bg-transparent py-3 focus:outline-none focus:border-[#C6754D] transition-all duration-300 hover:border-[#C6754D]/50 cursor-pointer">
                    <option>Chicken</option>
                    <option>Beef</option>
                    <option>Vegetarian</option>
                  </select>
                </div>
                <div className="group">
                  <label className="block text-sm font-['Montaga'] text-[#2B1105] mb-2 group-focus-within:text-[#C6754D] transition-colors duration-300">Dietary Restrictions</label>
                  <input 
                    type="text" 
                    className="w-full border-b-2 border-gray-200 bg-transparent py-3 focus:outline-none focus:border-[#C6754D] transition-all duration-300 hover:border-[#C6754D]/50"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-sm font-['Montaga'] text-[#2B1105] mb-2 group-focus-within:text-[#C6754D] transition-colors duration-300">Special Requests or Notes</label>
                <textarea 
                  rows={4}
                  className="w-full border-2 border-gray-200 bg-transparent py-3 px-4 focus:outline-none focus:border-[#C6754D] transition-all duration-300 hover:border-[#C6754D]/50 rounded-xl"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="relative w-full bg-gradient-to-r from-[#C6754D] to-[#A85D3F] text-white py-4 font-['Montaga'] text-lg rounded-full transition-all duration-500 hover:scale-105 hover:shadow-2xl transform overflow-hidden group"
              >
                <span className="relative z-10">Submit RSVP</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#A85D3F] to-[#C6754D] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center gap-8 mb-6">
            <a href="#home" className="text-[#2B1105] opacity-60 hover:opacity-100 font-['Montaga'] hover:scale-110 transition-all duration-300 transform">Home</a>
            <a href="#our-story" className="text-[#2B1105] opacity-60 hover:opacity-100 font-['Montaga'] hover:scale-110 transition-all duration-300 transform">Our Story</a>
            <a href="#venue" className="text-[#2B1105] opacity-60 hover:opacity-100 font-['Montaga'] hover:scale-110 transition-all duration-300 transform">Events</a>
            <a href="#registry" className="text-[#2B1105] opacity-60 hover:opacity-100 font-['Montaga'] hover:scale-110 transition-all duration-300 transform">Registry</a>
          </div>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#C6754D]"></div>
            <span className="text-2xl animate-pulse" style={{ animationDuration: '2s' }}>💕</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#C6754D]"></div>
          </div>
          <p className="text-sm text-[#2B1105] opacity-60 font-['Montaga']">
            Website Design Inspired by Webflow Template • Community
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default WeddingPage;
