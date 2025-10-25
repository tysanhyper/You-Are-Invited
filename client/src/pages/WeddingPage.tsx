import React, { useEffect, useRef, useState } from "react";
import ImageMarquee from '../components/ImageMarquee';
import ParticleBackground from '../components/ParticleBackground';
import FloralAccents from '../components/FloralAccents';
import VineAccents from '../components/VineAccents';

import MusicPlayer from '../components/MusicPlayer';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Hotel {
  name: string;
  description: React.ReactNode;
}

const WeddingPage = () => {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const observerRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const hotels: Hotel[] = [
    {
      name: "Haldi",
      description: (
        <>Join us for the Haldi ceremony on <span className="font-bold text-[#C6754D]">3rd December</span> <span className="font-bold text-[#C6754D]">10:00AM</span> in <span className="font-bold text-[#C6754D]">Aniket Garden</span> for a vibrant celebration of love, laughter, where family and friends come together to bless the couple for their beautiful journey.</>
      ),
    },
    {
      name: "Ring ceremony & Sangeet",
      description: (
        <>Celebrate with us  on <span className="font-bold text-[#C6754D]">3rd December</span> in <span className="font-bold text-[#C6754D]">Aniket Garden</span> as we begin our journey together!The Ring Ceremony marks the promise of forever, followed by the Mahila Sangeet — a joyous evening of music, dance, and laughter with our loved ones.</>
      ),
    },
    {
      name: "Phere and Reception",
      description: (
        <>Join us on <span className="font-bold text-[#C6754D]">4th December</span> in <span className="font-bold text-[#C6754D]">Royal Kesari Banquet Hall</span>, all for the sacred Phere, pledging a lifetime of love, followed by the Reception — an evening of laughter, music, and cherished memories as we begin our new chapter together.</>
      ),
    }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

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
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f9f9f9" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}>
      <ParticleBackground />
      <FloralAccents />
      <VineAccents />
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-[#C6754D]/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '4s', y: y1 }}
        ></motion.div>
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#6B2C2C]/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '6s', animationDelay: '1s', y: y2 }}
        ></motion.div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C6754D]/3 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>

        {/* Floating Stars and Hearts */}
        <div className="absolute top-10 left-1/4 text-4xl opacity-10 animate-float">✨</div>
        <div className="absolute top-20 right-1/3 text-4xl opacity-10 animate-float" style={{ animationDelay: '1s' }}>💕</div>
        <div className="absolute top-1/3 left-10 text-4xl opacity-10 animate-float" style={{ animationDelay: '2s' }}>✨</div>
        <div className="absolute top-2/3 right-20 text-4xl opacity-10 animate-float" style={{ animationDelay: '0.5s' }}>💕</div>
        <div className="absolute bottom-1/3 left-1/3 text-4xl opacity-10 animate-float" style={{ animationDelay: '1.5s' }}>✨</div>
        <div className="absolute bottom-10 right-1/4 text-4xl opacity-10 animate-float" style={{ animationDelay: '2.5s' }}>💕</div>
        <div className="absolute top-1/4 right-10 text-4xl opacity-10 animate-float" style={{ animationDelay: '3s' }}>✨</div>
        <div className="absolute top-3/4 left-1/5 text-4xl opacity-10 animate-float" style={{ animationDelay: '0.8s' }}>💕</div>
        <div className="absolute bottom-1/4 right-1/2 text-4xl opacity-10 animate-float" style={{ animationDelay: '1.2s' }}>✨</div>
        <div className="absolute top-1/2 left-2/3 text-4xl opacity-10 animate-float" style={{ animationDelay: '2.2s' }}>💕</div>
        <div className="absolute bottom-20 left-1/6 text-4xl opacity-10 animate-float" style={{ animationDelay: '0.3s' }}>✨</div>
        <div className="absolute top-40 right-1/6 text-4xl opacity-10 animate-float" style={{ animationDelay: '1.8s' }}>💕</div>
        <div className="absolute bottom-1/2 left-1/2 text-4xl opacity-10 animate-float" style={{ animationDelay: '2.8s' }}>✨</div>
        <div className="absolute top-2/5 right-2/3 text-4xl opacity-10 animate-float" style={{ animationDelay: '0.6s' }}>💕</div>
        <div className="absolute bottom-2/5 left-3/4 text-4xl opacity-10 animate-float" style={{ animationDelay: '1.4s' }}>✨</div>
        </div>

      {/* Hero Section */}
      <section id="home" className="relative flex flex-col items-center py-16 sm:py-32 px-4 sm:px-8 mt-0 scroll-mt-24">
        <div className="absolute top-10 left-1/4 text-2xl sm:text-6xl opacity-10 animate-float">✨</div>
        <div className="absolute bottom-20 right-1/4 text-2xl sm:text-6xl opacity-10 animate-float" style={{ animationDelay: '2s' }}>💕</div>

        {/* Logo above Celebrate With Us */}
        <div className="flex justify-center mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '50ms', animationFillMode: 'forwards' }}>
          <img src="https://github.com/tysanhyper/wedding-invitation/blob/main/logo3.jpg?raw=true" alt="Logo" className="w-16 sm:w-20 h-16 sm:h-20 rounded-full hover:scale-110 transition-all duration-300" />
        </div>


        <div className="text-center mb-2 opacity-0 animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
          <p className="text-[#C6754D] text-lg sm:text-4xl font-['Montaga'] tracking-widest uppercase whitespace-nowrap">Celebrate With Us</p>
          <p className="text-[#C6754D] text-lg sm:text-1xl font-['Montaga'] tracking-widest uppercase whitespace-nowrap">As we begin our Forever</p>
        </div>
        <div className="text-center mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '150ms', animationFillMode: 'forwards' }}>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-['Montaga'] text-transparent bg-clip-text bg-gradient-to-r from-[#2B1105] via-[#C6754D] to-[#2B1105] mb-1 opacity-0 animate-fade-in whitespace-nowrap" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
          Nisha & Yatin
        </h1>

        <div className="opacity-0 animate-fade-in" style={{ animationDelay: '350ms', animationFillMode: 'forwards' }}>
          <p className="text-[#6B2C2C] text-xs sm:text-sm md:text-base font-['Montaga'] tracking-wide">#NiYati</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
          <div className="w-12 sm:w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-[#C6754D] to-transparent"></div>
          <p className="text-[#2B1105] font-['Montaga'] text-sm sm:text-base md:text-lg">December 4, 2025</p>
          <div className="w-12 sm:w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-[#C6754D] to-transparent"></div>
        </div>

        <div className="w-full max-w-5xl opacity-0 animate-fade-up" style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#C6754D] via-[#6B2C2C] to-[#C6754D] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img
              src="https://github.com/tysanhyper/wedding-invitation/blob/main/IMG_3180.JPG?raw=true"
              alt="Yatin & Nisha"
              className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-700"
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
        className={`relative py-20 px-4 sm:px-8 scroll-mt-24 transition-all duration-1000 ${
          isVisible["our-story"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#6B2C2C] via-[#7B3C3C] to-[#6B2C2C]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30"></div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className={`text-white transition-all duration-1000 delay-200 ${
            isVisible["our-story"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}>
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <p className="text-sm tracking-widest uppercase text-white/80">Our Journey</p>
            </div>
            <h2 className="text-4xl sm:text-6xl font-['Montaga'] mb-8 drop-shadow-lg">Our Story</h2>
            <p className="text-base sm:text-lg leading-relaxed mb-6 opacity-90 drop-shadow">
              Ours wasn't just a match, it was meant to be.
              What started as a casual meeting soon turned into something we both couldn't imagine living without.
            </p>
            <p className="text-base sm:text-lg leading-relaxed opacity-90 drop-shadow">
              From that very first conversation, something just clicked.
              It wasn't dramatic or loud — it was the kind of comfort that feels rare, like you've known each other forever.
              Every chat turned longer, every silence softer, and somewhere between laughter and late-night talks, the line between "you" and "me" started to blur.
              We stopped being two people trying to understand each other… and became two souls who just did.
            </p>
            <br />
            <p className="text-base sm:text-lg leading-relaxed opacity-90 drop-shadow">
              Join us as we take off into a new adventure together.
            </p>
          </div>
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible["our-story"] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-1000"></div>
                <video
                  src="/Videoo.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="relative w-full h-[300px] sm:h-[400px] object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-700"
                style={{ objectFit: 'cover' }}
              >
                <img src="/our-story-fallback.gif" alt="Our Story" className="w-full h-[300px] sm:h-[400px] object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-700" />
              </video>
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
         {/* Wedding Party Section */}
      <section
        id="bridal-party"
        ref={(el) => (observerRefs.current["bridal-party"] = el)}
        className={`py-20 px-4 sm:px-8 bg-white scroll-mt-24 transition-all duration-1000 ${
          isVisible["bridal-party"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-6xl font-['Montaga'] text-transparent bg-clip-text bg-gradient-to-r from-[#2B1105] to-[#C6754D] mb-4">The Wedding Party</h2>
            <div className="flex items-center justify-center gap-4 mt-4">
              <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent to-[#C6754D]"></div>
              <p className="text-[#C6754D] font-['Montaga']"></p>
              <div className="w-12 sm:w-16 h-px bg-gradient-to-l from-transparent to-[#C6754D]"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 justify-center">
            {[
              { name: "Groom's Mom", subtitle: "" },
              { name: "Groom's Dad", subtitle: "" },
              { name: "Man of Honor", subtitle: "Brother" }
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
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden ring-4 ring-white shadow-xl group-hover:ring-[#C6754D] transition-all duration-500">
                    <img
                      src={idx === 0 ? "https://raw.githubusercontent.com/tysanhyper/wedding-invitation/645a227446626ff8d0a8e51f679af2a6dde98c61/mom.jpg" : idx === 2 ? "https://raw.githubusercontent.com/tysanhyper/wedding-invitation/ad9dd2f4f3a11aaf91dcdbe352f3091c846aa037/me.jpg" : idx === 1 ? "https://raw.githubusercontent.com/tysanhyper/wedding-invitation/02ff5f2dc8c5d76ba01a4af9b21424dbcae6fd57/dad.jpg" : `https://images.unsplash.com/photo-${idx % 2 === 0 ? '1507003211169-0a1dd7228f2d' : '1506794778202-cad84cf45f1d'}?w=200&h=200&fit=crop&crop=faces`}
                      alt={person.name}
                      className={`w-full h-full ${(idx === 0 || idx === 1 || idx === 2) ? 'object-cover object-[position:center_10%]' : 'object-cover'} group-hover:scale-110 transition-transform duration-500 mx-auto`}
                    />
                  </div>
                </div>
                <h4 className="text-lg sm:text-xl font-['Montaga'] text-[#2B1105] mb-2 group-hover:text-[#C6754D] transition-colors duration-300">{person.name}</h4>
                <p className="text-xs sm:text-sm text-[#2B1105] opacity-60">{person.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Brides Party Sections */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mt-4">
              <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent to-[#C6754D]"></div>
              <p className="text-[#C6754D] font-['Montaga']"></p>
              <div className="text-2xl animate-bounce" style={{ animationDuration: '2s' }}>🌸</div>
              <div className="w-12 sm:w-16 h-px bg-gradient-to-l from-transparent to-[#C6754D]"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 justify-center">
            {[
              { name: "Brides's Mom", subtitle: "" },
              { name: "Bride's Dad", subtitle: "" },
              { name: "Brother", subtitle: "sister-in-law" },
              { name: "Maid of Honour", subtitle: "Sister" }
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
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden ring-4 ring-white shadow-xl group-hover:ring-[#C6754D] transition-all duration-500">
                    <img
                      src={idx === 0 ? "https://raw.githubusercontent.com/tysanhyper/You-Are-Invited/refs/heads/main/client/public/her%20mother.jpg" : idx === 2 ? " https://raw.githubusercontent.com/tysanhyper/You-Are-Invited/main/client/public/her%20brother.jpg" : idx === 1 ? "https://raw.githubusercontent.com/tysanhyper/You-Are-Invited/refs/heads/main/client/public/her%20father.jpg" : idx === 3 ? "https://raw.githubusercontent.com/tysanhyper/You-Are-Invited/refs/heads/main/client/public/her%20sister.jpg" : `https://images.unsplash.com/photo-${idx % 2 === 0 ? '1507003211169-0a1dd7228f2d' : '1506794778202-cad84cf45f1d'}?w=200&h=200&fit=crop&crop=faces`}
                      alt={person.name}
                      className={`w-full h-full ${idx === 3 ? 'object-cover object-[position:50%_4%] scale-90' : (idx === 0 || idx === 1 || idx === 2) ? 'object-cover object-[position:center_10%]' : 'object-cover'} group-hover:scale-110 transition-transform duration-500 mx-auto`}
                    />
                  </div>
                </div>
                <h4 className="text-lg sm:text-xl font-['Montaga'] text-[#2B1105] mb-2 group-hover:text-[#C6754D] transition-colors duration-300">{person.name}</h4>
                <p className="text-xs sm:text-sm text-[#2B1105] opacity-60">{person.subtitle}</p>
               </div>
            ))}
          </div>
        </div>

      </section>
      {/* ceremonies sections */}
      <section
        id="hotels"
        ref={(el) => (observerRefs.current["hotels"] = el)}
        className={`py-20 px-4 sm:px-8 bg-gradient-to-b from-white to-gray-50 scroll-mt-24 transition-all duration-1000 ${
          isVisible["hotels"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-5xl font-['Montaga'] text-transparent bg-clip-text bg-gradient-to-r from-[#2B1105] to-[#C6754D] mb-4">Ceremonies</h2>
            <p className="text-sm sm:text-base text-[#2B1105]/60">We would be delighted to have your esteemed presence as we celebrate our union</p>
          </div>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {hotels.map((hotel, idx) => (
              <motion.div
                key={idx}
                className="relative group"
                variants={itemVariants}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#C6754D]/20 to-[#6B2C2C]/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#C6754D] to-[#A85D3F] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-lg sm:text-xl font-bold">{idx + 1}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-['Montaga'] text-[#2B1105] mb-6">{hotel.name}</h3>
                  <p className="text-base sm:text-lg text-[#2B1105] opacity-80 mb-6 flex-grow leading-relaxed">
                    {hotel.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
       {/* Itinerary Section */}
      <section
        id="itinerary"
        ref={(el) => (observerRefs.current["itinerary"] = el)}
        className={`py-20 px-4 sm:px-8 bg-gradient-to-b from-gray-50 to-white scroll-mt-24 transition-all duration-1000 ${
          isVisible["itinerary"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-6xl font-['Montaga'] text-transparent bg-clip-text bg-gradient-to-r from-[#2B1105] to-[#C6754D]">Itinerary</h2>
          </div>
          <div className="space-y-8 sm:space-y-12">
            {[
              { time: "9:00 AM,", title: "Haldi ", description: "On 3rd December,Join us for the Haldi celebration at the Aniket Garden for a joyful ritual where loved ones bless the couple with turmeric, laughter, and vibrant traditions for a radiant start to married life.", icon: "💛" },
              { time: "4:00 PM,", title: "Ring Ceremony ", description: "On 3rd December,Join us for the wedding ceremony at the Aniket Garden. Please arrive 15 minutes early to find your seat.", icon: "💍" },
              { time: "7:30 PM", title: "Sangeet", description: "On 3 December, Join us at the Reception in Aniket Garden for an evening filled with joy and energy of performances.", icon: "🪩" },
              { time: "11:00 AM", title: "Muscical Phere", description: "On 4th December, Join us for Melodious Phere in Royal Kesari Hall for a night where every beat, note, and harmony tells our love story.", icon: "🥂" },
              { time: "7:00 PM", title: "Reception", description: "On 4 December, Join us at the Reception in Royal Kesari Hall for an evening of love, laughter, and celebration as we begin our life together.", icon: "🎉" }
            ].map((event, idx) => (
              <div
                key={idx}
                className={`flex gap-4 sm:gap-8 items-start group transition-all duration-700 ${
                  isVisible["itinerary"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="relative flex-shrink-0">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#C6754D] to-[#6B2C2C] rounded-full blur-md opacity-0 group-hover:opacity-50 transition duration-500"></div>
                  <div className="relative w-16 h-16 sm:w-24 sm:h-24 rounded-full border-2 border-[#C6754D] bg-white flex flex-col items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#C6754D] group-hover:to-[#A85D3F] group-hover:scale-110 group-hover:border-0 transition-all duration-500 shadow-lg">
                    <span className="text-[#C6754D] text-xs font-['Montaga'] group-hover:text-white transition-colors duration-300">{event.time}</span>
                    <span className="text-lg sm:text-2xl mt-1 group-hover:scale-125 transition-transform duration-300">{event.icon}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl sm:text-3xl font-['Montaga'] text-[#2B1105] mb-3 group-hover:text-[#C6754D] transition-colors duration-300">{event.title}</h3>
                  <p className="text-base sm:text-lg text-[#2B1105] opacity-80 leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Venue Section */}
      <section
        id="venue"
        ref={(el) => (observerRefs.current["venue"] = el)}
        className={`py-20 px-4 sm:px-8 bg-white scroll-mt-24 transition-all duration-1000 ${
          isVisible["venue"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible["venue"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}>
            <div className="inline-block px-4 py-2 bg-[#C6754D]/10 rounded-full mb-4">
              <p className="text-[#C6754D] text-sm uppercase tracking-widest">The Venue</p>
            </div>
            <h2 className="text-4xl sm:text-6xl font-['Montaga'] text-transparent bg-clip-text bg-gradient-to-r from-[#2B1105] to-[#C6754D] mb-6">Aniket Garden </h2>
            <p className="text-base sm:text-lg text-[#2B1105] opacity-80 mb-4 leading-relaxed">
              the perfect stage for joy and celebration — a beautiful open space filled with charm and color.
              From the vibrant hues of the Haldi to the music and laughter of the Mahila Sangeet, and the sparkle of the Ring Ceremony,
              every moment here blooms with love and togetherness.
            </p>
            <p className="text-base sm:text-lg text-[#2B1105] opacity-80 flex items-center gap-2">
              <span className="text-xl sm:text-2xl">📍</span> The Aniket Garden, opp. Utsav Hotel, Banswara, Rajasthan 327001
            </p>
          </div>
          <div className={`grid grid-cols-2 gap-4 transition-all duration-1000 delay-400 ${
            isVisible["venue"] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#C6754D]/30 to-[#6B2C2C]/30 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <img
                src="https://raw.githubusercontent.com/tysanhyper/wedding-invitation/refs/heads/main/frame%20(2).png"
                alt="Venue 1"
                className="relative w-full h-32 sm:h-48 object-contain rounded-2xl hover:scale-110 hover:rotate-2 transition-all duration-500 shadow-xl"
              />
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#6B2C2C]/30 to-[#C6754D]/30 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <img
                src="https://content3.jdmagicbox.com/v2/comp/banswara/k4/9999p2962.2962.231222005833.f7k4/catalogue/aniket-garden-sharda-colony-banswara-banquet-halls-sa3hmazbul.jpg"
                alt="Venue 2"
                className="relative w-full h-32 sm:h-48 object-cover rounded-2xl hover:scale-110 hover:-rotate-2 transition-all duration-500 shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Venue Section */}
      <section
        id="venue2"
        ref={(el) => (observerRefs.current["venue2"] = el)}
        className={`py-20 px-4 sm:px-8 bg-white scroll-mt-24 transition-all duration-1000 ${
          isVisible["venue2"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible["venue2"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}>
            <div className="inline-block px-4 py-2 bg-[#C6754D]/10 rounded-full mb-4">
              <p className="text-[#C6754D] text-sm uppercase tracking-widest">The Venue</p>
            </div>
            <h2 className="text-4xl sm:text-6xl font-['Montaga'] text-transparent bg-clip-text bg-gradient-to-r from-[#2B1105] to-[#C6754D] mb-6">Royal Kesari Banquet Hall</h2>
            <p className="text-base sm:text-lg text-[#2B1105] opacity-80 mb-4 leading-relaxed">
              it's where our story turns into forever.
              It's where we'll look into each other's eyes and say the words that change everything.
              Where laughter will spill from every corner, where music will carry our joy, and where every face will glow with love and blessings.
            </p>
            <p className="text-base sm:text-lg text-[#2B1105] opacity-80 flex items-center gap-2">
              <span className="text-xl sm:text-2xl">📍</span> The Royal Kesari, opp. Mayur Mill, Banswara, Rajasthan 327001
            </p>
          </div>
          <div className={`grid grid-cols-2 gap-4 transition-all duration-1000 delay-400 ${
            isVisible["venue2"] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#C6754D]/30 to-[#6B2C2C]/30 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <img
                src="https://raw.githubusercontent.com/tysanhyper/wedding-invitation/main/frame%20(1).png"
                alt="Venue 1"
                className="relative w-full h-32 sm:h-48 object-contain rounded-2xl hover:scale-110 hover:rotate-2 transition-all duration-500 shadow-xl"
              />
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#6B2C2C]/30 to-[#C6754D]/30 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <img
                src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4npEX_A9tMAl-WBe0oo8DImWXOVj-hIzokksVM9G_tE0VEnYXfQ8Az-8APr1YmnXnEvoXlwt8IA-KbI5GZ_kjTKVbSBrUElocA2hZmxWVI6VbHkcuMX_-36228ngtWzx64DWFG5etg=s680-w680-h510-rw"
                alt="Venue 2"
                className="relative w-full h-32 sm:h-48 object-cover rounded-2xl hover:scale-110 hover:-rotate-2 transition-all duration-500 shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      <ImageMarquee />
      <MusicPlayer />

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-8 bg-[#2B1105] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent to-[#C6754D]"></div>
            <p className="text-[#C6754D] font-['Montaga'] text-base sm:text-lg">Nisha & Yatin</p>
            <div className="w-12 sm:w-16 h-px bg-gradient-to-l from-transparent to-[#C6754D]"></div>
          </div>
          <p className="text-xs sm:text-sm opacity-80 mb-4">December 4, 2025 • Royal Kesari Banquet Hall</p>
          <p className="text-xs sm:text-sm opacity-60">Made with <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>❤️</motion.span> for our special day</p>
        </div>
      </footer>
    </div>
  );
};

export default WeddingPage;
