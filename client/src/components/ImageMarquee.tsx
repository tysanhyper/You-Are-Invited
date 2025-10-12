import { motion } from "framer-motion";
import { useRef } from "react";

const ImageMarquee = () => {
  const images = [
    "/IMG-20251012-WA0032.jpg",
    "/IMG-20251012-WA0035.jpg",
    "/IMG-20251012-WA0036.jpg",
    "/1.jpg",
    "/2.jpg"
  ];

  // Duplicate images for infinite loop: duplicates on both ends
  const duplicated = [...images, ...images, ...images]; // 15 images total

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="overflow-hidden relative py-12 bg-gradient-to-r from-gray-50 to-white">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-['Montaga'] text-transparent bg-clip-text bg-gradient-to-r from-[#2B1105] to-[#C6754D] mb-4">
          Our Memories
        </h2>
        <p className="text-[#2B1105]/60">Cherished moments captured in time</p>
      </div>
      <motion.div
        ref={containerRef}
        className="flex space-x-8 cursor-grab active:cursor-grabbing"
        animate={{
          x: ["0%", "-33.33%"],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          },
        }}
        drag="x"
        dragElastic={0.1}
        dragMomentum={true}
        whileDrag={{ scale: 1.02 }}
      >
        {duplicated.map((img, idx) => (
          <motion.img
            key={idx}
            src={img}
            alt={`Memory ${((idx % images.length) + 1)}`}
            className="w-48 h-36 sm:w-64 sm:h-48 md:w-80 md:h-60 lg:w-96 lg:h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300 flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ImageMarquee;
