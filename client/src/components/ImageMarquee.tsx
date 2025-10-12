import { motion, useMotionValue, useAnimation, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const ImageMarquee = () => {
  const images = [
    "/IMG-20251012-WA0032.jpg",
    "/IMG-20251012-WA0033.jpg",
    "/IMG-20251012-WA0034.jpg",
    "/IMG-20251012-WA0035.jpg",
    "/IMG-20251012-WA0036.jpg"
  ];

  // Duplicate images many times for seamless infinite scrolling
  const duplicated = Array.from({ length: 20 }, () => images).flat();

  const x = useMotionValue(0);
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll animation
  useEffect(() => {
    const animate = async () => {
      await controls.start({
        x: -100,
        transition: { duration: 20, ease: "linear" }
      });
      // Reset position for infinite loop
      x.set(0);
      animate();
    };
    animate();
  }, [controls, x]);

  // Mouse wheel support
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaX || e.deltaY * 0.5; // Horizontal scroll or vertical converted
      x.set(x.get() - delta * 2); // Adjust sensitivity
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
      const containerWidth = duplicated.length * 320; // Approximate image width + gap
      if (latest < -containerWidth / 2) {
        x.set(latest + containerWidth / 2);
      } else if (latest > containerWidth / 2) {
        x.set(latest - containerWidth / 2);
      }
    });
    return unsubscribe;
  }, [x, duplicated.length]);

  return (
    <div className="overflow-hidden relative py-12 bg-gradient-to-r from-gray-50 to-white">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-['Montaga'] text-transparent bg-clip-text bg-gradient-to-r from-[#2B1105] to-[#C6754D] mb-4">Our Memories</h2>
        <p className="text-[#2B1105]/60">Cherished moments captured in time</p>
      </div>
      <motion.div
        ref={containerRef}
        className="flex space-x-8 cursor-grab active:cursor-grabbing"
        style={{ x }}
        animate={controls}
        whileHover={{ animationPlayState: "paused" }}
        drag="x"
        dragConstraints={{ left: -2000, right: 2000 }}
        dragElastic={0.2}
        dragMomentum={true}
        whileDrag={{ scale: 1.02 }}
      >
        {duplicated.map((img, idx) => (
          <motion.img
            key={idx}
            src={img}
            alt={`Memory ${idx % images.length + 1}`}
            className="w-64 h-48 sm:w-80 sm:h-60 md:w-96 md:h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300 flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ImageMarquee;
