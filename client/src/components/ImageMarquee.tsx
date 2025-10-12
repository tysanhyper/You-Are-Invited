import { motion } from "framer-motion";

const ImageMarquee = () => {
  const images = [
    "/IMG-20251012-WA0032.jpg",
    "/IMG-20251012-WA0033.jpg",
    "/IMG-20251012-WA0034.jpg",
    "/IMG-20251012-WA0035.jpg",
    "/IMG-20251012-WA0036.jpg"
  ];

  return (
    <div className="overflow-hidden relative py-12 bg-gradient-to-r from-gray-50 to-white">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-['Montaga'] text-transparent bg-clip-text bg-gradient-to-r from-[#2B1105] to-[#C6754D] mb-4">Our Memories</h2>
        <p className="text-[#2B1105]/60">Cherished moments captured in time</p>
      </div>
      <motion.div
        className="flex space-x-8 cursor-grab active:cursor-grabbing"
        animate={{ x: [0, "-50%"] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
        drag="x"
        dragConstraints={{ left: -20000, right: 20000 }}
        dragElastic={0.1}
        whileDrag={{ scale: 1.05 }}
      >
        {Array.from({ length: 10 }, (_, i) =>
          images.map((img, idx) => (
            <img
              key={`${i}-${idx}`}
              src={img}
              alt={`Marquee ${i}-${idx}`}
              className="w-96 h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
          ))
        )}
      </motion.div>
    </div>
  );
};

export default ImageMarquee;
