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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm transition-all duration-300 animate-fade-in">
        <div className="flex items-center justify-center gap-8 px-8 py-6">
          <a href="#home" className="text-[#2B1105] text-lg font-['Montaga'] opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 transform">Home</a>
          <a href="#our-story" className="text-[#2B1105] text-lg font-['Montaga'] opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 transform">Our Story</a>
          <a href="#venue" className="text-[#2B1105] text-lg font-['Montaga'] opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 transform">Events</a>
          
          <div className="w-10 h-10 rounded-full border-2 border-[#2B1105] flex items-center justify-center mx-4 hover:scale-110 hover:rotate-12 transition-all duration-300 transform cursor-pointer">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="7" cy="7" r="5.5" stroke="#2B1105" strokeWidth="1.5"/>
              <line x1="11" y1="11" x2="14" y2="14" stroke="#2B1105" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>

          <a href="#bridal-party" className="text-[#2B1105] text-lg font-['Montaga'] opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 transform">Guests</a>
          <a href="#registry" className="text-[#2B1105] text-lg font-['Montaga'] opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 transform">Registry</a>
          <a href="#rsvp" className="text-[#2B1105] text-lg font-['Montaga'] opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 transform">RSVP</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center py-32 px-8 mt-20 scroll-mt-24">
        <h1 className="text-8xl font-['Montaga'] text-[#2B1105] mb-16 animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
          Yatin & Nisha
        </h1>
        <div className="w-full max-w-5xl animate-fade-up opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
          <img 
            src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200&h=600&fit=crop" 
            alt="Yatin & Nisha" 
            className="w-full h-[500px] object-cover rounded-lg shadow-2xl hover:scale-105 transition-transform duration-700"
          />
        </div>
      </section>

      {/* Our Story Section */}
      <section 
        id="our-story" 
        ref={(el) => (observerRefs.current["our-story"] = el)}
        className={`bg-[#6B2C2C] py-20 px-8 scroll-mt-24 transition-all duration-1000 ${
          isVisible["our-story"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-5xl font-['Montaga'] mb-8 animate-fade-in">Our Story</h2>
            <p className="text-lg leading-relaxed mb-6 opacity-90">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p className="text-lg leading-relaxed opacity-90">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="hover:scale-105 transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=600&fit=crop" 
              alt="Our Story" 
              className="w-full h-[400px] object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section 
        id="venue" 
        ref={(el) => (observerRefs.current["venue"] = el)}
        className={`py-20 px-8 bg-white scroll-mt-24 transition-all duration-1000 ${
          isVisible["venue"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#C6754D] text-sm uppercase tracking-wider mb-4 animate-fade-in">The Venue</p>
            <h2 className="text-5xl font-['Montaga'] text-[#2B1105] mb-6">Royal Resort Banquet Hall</h2>
            <p className="text-lg text-[#2B1105] opacity-80 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-lg text-[#2B1105] opacity-80">
              123 Wedding Lane, Celebration City, CC 12345
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1519167758481-83f29da8c906?w=400&h=300&fit=crop" 
              alt="Venue 1" 
              className="w-full h-48 object-cover rounded-lg hover:scale-110 hover:rotate-2 transition-all duration-500 shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=300&fit=crop" 
              alt="Venue 2" 
              className="w-full h-48 object-cover rounded-lg hover:scale-110 hover:-rotate-2 transition-all duration-500 shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Hotels Section */}
      <section 
        id="hotels" 
        ref={(el) => (observerRefs.current["hotels"] = el)}
        className={`py-20 px-8 bg-white scroll-mt-24 transition-all duration-1000 ${
          isVisible["hotels"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((num, idx) => (
            <div 
              key={num} 
              className={`flex flex-col p-6 rounded-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-gray-50 ${
                isVisible["hotels"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <h3 className="text-3xl font-['Montaga'] text-[#2B1105] mb-6">Hotel {num}</h3>
              <p className="text-lg text-[#2B1105] opacity-80 mb-6 flex-grow">
                Feugiat pretium egestas enim blandit purus euismod. Feugiat magna aliquam lectus lectus eu amet. Eros, accumsan purus enim nascetur.
              </p>
              <button className="border-2 border-[#C6754D] text-[#C6754D] px-6 py-3 font-['Montaga'] text-lg hover:bg-[#C6754D] hover:text-white transition-all duration-300 hover:scale-105 transform">
                Learn More
              </button>
            </div>
          ))}
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
          <h2 className="text-5xl font-['Montaga'] text-[#2B1105] mb-4">The Bridal Party</h2>
          <p className="text-[#C6754D] mb-12">Groomsmen</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: "Groom's Mom", subtitle: "Mother of the Groom" },
              { name: "Best Man", subtitle: "Best Friend" },
              { name: "Maid of Honor", subtitle: "Sister" },
              { name: "Bride's Dad", subtitle: "Father of the Bride" }
            ].map((person, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col items-center group transition-all duration-500 ${
                  isVisible["bridal-party"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="w-40 h-40 rounded-full bg-gray-300 mb-6 overflow-hidden group-hover:scale-110 group-hover:shadow-2xl transition-all duration-500">
                  <img 
                    src={`https://images.unsplash.com/photo-${idx % 2 === 0 ? '1507003211169-0a1dd7228f2d' : '1506794778202-cad84cf45f1d'}?w=200&h=200&fit=crop&crop=faces`}
                    alt={person.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
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
        className={`py-20 px-8 bg-white scroll-mt-24 transition-all duration-1000 ${
          isVisible["itinerary"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-['Montaga'] text-[#2B1105] mb-16 text-center">Itinerary</h2>
          <div className="space-y-12">
            {[
              { time: "3:00 PM", title: "Ceremony", description: "Join us for the wedding ceremony at the Royal Resort Banquet Hall. Please arrive 15 minutes early to find your seat." },
              { time: "5:00 PM", title: "Cocktail Hour", description: "Enjoy drinks and hors d'oeuvres while we take photos. Relax and mingle with other guests." },
              { time: "6:30 PM", title: "Reception", description: "Dinner, dancing, and celebration! Let's party the night away and create unforgettable memories." }
            ].map((event, idx) => (
              <div 
                key={idx} 
                className={`flex gap-8 items-start group transition-all duration-700 hover:translate-x-4 ${
                  isVisible["itinerary"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="w-20 h-20 rounded-full border-2 border-[#C6754D] flex items-center justify-center flex-shrink-0 group-hover:bg-[#C6754D] group-hover:scale-110 transition-all duration-300">
                  <span className="text-[#C6754D] text-sm font-['Montaga'] group-hover:text-white transition-colors duration-300">{event.time}</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-['Montaga'] text-[#2B1105] mb-3 group-hover:text-[#C6754D] transition-colors duration-300">{event.title}</h3>
                  <p className="text-lg text-[#2B1105] opacity-80">{event.description}</p>
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
          <h2 className="text-5xl font-['Montaga'] text-[#2B1105] mb-8">Registry</h2>
          <p className="text-lg text-[#2B1105] opacity-80 mb-12">
            Your presence is the greatest gift, but if you wish to honor us with a gift, we've registered at the following stores:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Macy's", icon: "M" },
              { name: "Belara", icon: "B" },
              { name: "Chloe", icon: "C" },
              { name: "Bloomingdales", icon: "BD" }
            ].map((store, idx) => (
              <button
                key={store.name}
                className={`border-2 border-[#C6754D] p-6 hover:bg-[#C6754D] hover:text-white transition-all duration-300 group hover:scale-110 hover:shadow-xl transform ${
                  isVisible["registry"] ? "opacity-100 scale-100" : "opacity-0 scale-75"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="text-3xl font-bold text-[#C6754D] group-hover:text-white mb-2 group-hover:scale-125 transition-transform duration-300">{store.icon}</div>
                <div className="text-sm font-['Montaga'] text-[#2B1105] group-hover:text-white">{store.name}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section 
        id="rsvp" 
        ref={(el) => (observerRefs.current["rsvp"] = el)}
        className={`py-20 px-8 bg-white scroll-mt-24 transition-all duration-1000 ${
          isVisible["rsvp"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-['Montaga'] text-[#2B1105] mb-12 text-center">RSVP</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label className="block text-sm font-['Montaga'] text-[#2B1105] mb-2 group-focus-within:text-[#C6754D] transition-colors duration-300">First Name</label>
                <input 
                  type="text" 
                  className="w-full border-b-2 border-[#2B1105] bg-transparent py-2 focus:outline-none focus:border-[#C6754D] transition-all duration-300 hover:border-[#C6754D]"
                />
              </div>
              <div className="group">
                <label className="block text-sm font-['Montaga'] text-[#2B1105] mb-2 group-focus-within:text-[#C6754D] transition-colors duration-300">Last Name</label>
                <input 
                  type="text" 
                  className="w-full border-b-2 border-[#2B1105] bg-transparent py-2 focus:outline-none focus:border-[#C6754D] transition-all duration-300 hover:border-[#C6754D]"
                />
              </div>
            </div>

            <div className="group">
              <label className="block text-sm font-['Montaga'] text-[#2B1105] mb-2 group-focus-within:text-[#C6754D] transition-colors duration-300">Email</label>
              <input 
                type="email" 
                className="w-full border-b-2 border-[#2B1105] bg-transparent py-2 focus:outline-none focus:border-[#C6754D] transition-all duration-300 hover:border-[#C6754D]"
              />
            </div>

            <div>
              <label className="block text-sm font-['Montaga'] text-[#2B1105] mb-4">Will you be attending?</label>
              <div className="flex gap-6">
                <label className="flex items-center cursor-pointer group">
                  <input type="radio" name="attending" value="yes" className="mr-2 cursor-pointer" />
                  <span className="font-['Montaga'] group-hover:text-[#C6754D] transition-colors duration-300">Yes, I'll be there</span>
                </label>
                <label className="flex items-center cursor-pointer group">
                  <input type="radio" name="attending" value="no" className="mr-2 cursor-pointer" />
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
                  className="w-full border-b-2 border-[#2B1105] bg-transparent py-2 focus:outline-none focus:border-[#C6754D] transition-all duration-300 hover:border-[#C6754D]"
                />
              </div>
              <div className="group">
                <label className="block text-sm font-['Montaga'] text-[#2B1105] mb-2 group-focus-within:text-[#C6754D] transition-colors duration-300">Meal Choice</label>
                <select className="w-full border-b-2 border-[#2B1105] bg-transparent py-2 focus:outline-none focus:border-[#C6754D] transition-all duration-300 hover:border-[#C6754D] cursor-pointer">
                  <option>Chicken</option>
                  <option>Beef</option>
                  <option>Vegetarian</option>
                </select>
              </div>
              <div className="group">
                <label className="block text-sm font-['Montaga'] text-[#2B1105] mb-2 group-focus-within:text-[#C6754D] transition-colors duration-300">Dietary Restrictions</label>
                <input 
                  type="text" 
                  className="w-full border-b-2 border-[#2B1105] bg-transparent py-2 focus:outline-none focus:border-[#C6754D] transition-all duration-300 hover:border-[#C6754D]"
                />
              </div>
            </div>

            <div className="group">
              <label className="block text-sm font-['Montaga'] text-[#2B1105] mb-2 group-focus-within:text-[#C6754D] transition-colors duration-300">Special Requests or Notes</label>
              <textarea 
                rows={4}
                className="w-full border-2 border-[#2B1105] bg-transparent py-2 px-3 focus:outline-none focus:border-[#C6754D] transition-all duration-300 hover:border-[#C6754D] rounded-lg"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#C6754D] text-white py-4 font-['Montaga'] text-lg hover:bg-[#A85D3F] transition-all duration-300 hover:scale-105 hover:shadow-xl transform rounded-lg"
            >
              Submit RSVP
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 bg-white border-t border-[#2B1105]/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center gap-8 mb-6">
            <a href="#home" className="text-[#2B1105] opacity-60 hover:opacity-100 font-['Montaga'] hover:scale-110 transition-all duration-300 transform">Home</a>
            <a href="#our-story" className="text-[#2B1105] opacity-60 hover:opacity-100 font-['Montaga'] hover:scale-110 transition-all duration-300 transform">Our Story</a>
            <a href="#venue" className="text-[#2B1105] opacity-60 hover:opacity-100 font-['Montaga'] hover:scale-110 transition-all duration-300 transform">Events</a>
            <a href="#registry" className="text-[#2B1105] opacity-60 hover:opacity-100 font-['Montaga'] hover:scale-110 transition-all duration-300 transform">Registry</a>
          </div>
          <p className="text-sm text-[#2B1105] opacity-60 font-['Montaga']">
            Website Design Inspired by Webflow Template • Community
          </p>
        </div>
      </footer>
    </div>
  );
};

export default WeddingPage;
