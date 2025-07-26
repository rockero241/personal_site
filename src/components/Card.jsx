// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const Card = ({ style, text, image, containerRef }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (containerRef?.current) {
      setMounted(true);
    } else {
      const timer = setTimeout(() => setMounted(true), 100);
      return () => clearTimeout(timer);
    }
  }, [containerRef]);

  if (!mounted) return null;
  return image && !text ? (
    <motion.img
      className="absolute w-12 md:w-16 cursor-grab"
      src={image}
      alt={text || "Card image"}
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    />
  ) : (
    <motion.div
      className="absolute px-1 py-2 text-base md:py-4 md:text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[9rem] md:w-[12rem] cursor-grab"
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    >
      {text}
    </motion.div>
  );
};

export default Card;