import { motion, useScroll, useTransform } from "framer-motion";

const HeroRibbons = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -100]);

  const ribbons = [
    {
      bg: "bg-rose-100",
      text: "Congratulations Yatin & Nisha",
      speed: 20,
    },
    {
      bg: "bg-amber-100",
      text: "Love & Happiness Forever",
      speed: 25,
    },
    {
      bg: "bg-emerald-100",
      text: "Best Wishes for Your Future",
      speed: 30,
    },
  ];

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ opacity, y }}
    >
      {ribbons.map((ribbon, index) => (
        <motion.div
          key={index}
          className={`absolute w-full h-16 flex items-center ${ribbon.bg} transform -rotate-12 shadow-lg`}
          style={{
            top: `${20 + index * 25}%`,
            "--speed": `${ribbon.speed}s`,
          } as any}
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: ribbon.speed,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="flex whitespace-nowrap">
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                className="text-lg font-semibold text-gray-800 mx-8"
              >
                {ribbon.text}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default HeroRibbons;
