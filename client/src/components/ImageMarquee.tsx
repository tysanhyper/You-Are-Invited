import { motion } from "framer-motion";

const ImageMarquee = () => {
  const images = [
    "/IMG-20251012-WA0032.jpg",
    "/IMG-20251012-WA0033.jpg",
    "/IMG-20251012-WA0034.jpg",
    "/IMG-20251012-WA0035.jpg",
    "/IMG-20251012-WA0036.jpg"
  ];

  // Duplicate images multiple times for seamless infinite loop
  const duplicated = [...images, ...images, ...images, ...images];

  return (
    <div className="overflow-hidden relative py-12 bg-gradient-to-r from-gray-50 to-white">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-['Montaga'] text-transparent bg-clip-text bg-gradient-to-r from-[#2B1105] to-[#C6754D] mb-4">Our Memories</h2>
        <p className="text-[#2B1105]/60">Cherished moments captured in time</p>
      </div>
      <motion.div
        className="flex space-x-8"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {duplicated.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Memory ${idx % images.length + 1}`}
            className="w-64 h-48 sm:w-80 sm:h-60 md:w-96 md:h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300 flex-shrink-0"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ImageMarquee;
