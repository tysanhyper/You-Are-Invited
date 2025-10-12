import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';

const PhotoSlideshow: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const images = [
    "https://github.com/tysanhyper/wedding-invitation/blob/main/IMG_3180.JPG?raw=true",
    "https://raw.githubusercontent.com/tysanhyper/wedding-invitation/main/main%202.jpg?raw=true",
    "https://raw.githubusercontent.com/tysanhyper/wedding-invitation/main/frame%20(1).png",
    "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npEX_A9tMAl-WBe0oo8DImWXOVj-hIzokksVM9G_tE0VEnYXfQ8Az-8APr1YmnXnEvoXlwt8IA-KbI5GZ_kjTKVbSBrUElocA2hZmxWVI6VbHkcuMX_-36228ngtWzx64DWFG5etg=s680-w680-h510-rw",
    "https://raw.githubusercontent.com/tysanhyper/wedding-invitation/645a227446626ff8d0a8e51f679af2a6dde98c61/mom.jpg",
    "https://raw.githubusercontent.com/tysanhyper/wedding-invitation/ad9dd2f4f3a11aaf91dcdbe352f3091c846aa037/me.jpg",
    "https://raw.githubusercontent.com/tysanhyper/wedding-invitation/02ff5f2dc8c5d76ba01a4af9b21424dbcae6fd57/dad.jpg"
  ];

  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-['Montaga'] text-transparent bg-clip-text bg-gradient-to-r from-[#2B1105] to-[#C6754D] mb-4">Our Memories</h2>
          <p className="text-[#2B1105]/60">A glimpse into our beautiful journey together</p>
        </div>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {images.map((src, index) => (
                <div className="flex-[0_0_100%] min-w-0" key={index}>
                  <motion.div
                    className="relative group px-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#C6754D]/30 to-[#6B2C2C]/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                    <img
                      src={src}
                      alt={`Memory ${index + 1}`}
                      className="relative w-full h-96 object-cover rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-500"
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-colors"
            onClick={scrollPrev}
          >
            ‹
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-colors"
            onClick={scrollNext}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default PhotoSlideshow;
