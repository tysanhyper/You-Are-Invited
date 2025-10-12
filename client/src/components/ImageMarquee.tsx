import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

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

  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initial position: start in the middle set to avoid empty space
  useEffect(() => {
    const imageWidth = 200; // Approximate width including gap for mobile
    const offset = -(images.length * imageWidth);
    x.set(offset);
  }, [x]);

  // Auto-scroll animation: move left continuously (2x faster)
  useEffect(() => {
    const animate = () => {
      x.set(x.get() - 2); // Move 2px every frame for 2x faster animation
      requestAnimationFrame(animate);
    };
    animate();
  }, [x]);

  // Mouse wheel support
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaX || -e.deltaY * 0.5; // Support horizontal and vertical wheel
      x.set(x.get() + delta * 0.5); // Adjust sensitivity
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
      return () => container.removeEventListener("wheel", handleWheel);
    }
  }, [x]);

  // Infinite loop reset
  useEffect(() => {
    const unsubscribe = x.on("change", (latest) => {
      const imageWidth = 200; // Match the initial position width
      const totalWidth = images.length * imageWidth;
      if (latest <= -totalWidth) {
        x.set(latest + totalWidth);
      } else if (latest >= 0) {
        x.set(latest - totalWidth);
      }
    });
    return unsubscribe;
  }, [x]);

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
        style={{ x }}
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
