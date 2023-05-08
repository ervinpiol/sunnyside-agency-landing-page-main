import React from "react";
import { GalleryItems } from "../constants/items";
import useMobile from "../assets/hooks/useMobile";
import { motion } from "framer-motion";

const Gallery = () => {
  const isMobile = useMobile("(max-width: 768px)");

  return (
    <div className="xs:grid xs:grid-cols-2 md:flex">
      {GalleryItems.map((item, i) => (
        <motion.img
          key={i}
          src={isMobile ? item.mobile : item.desktop}
          alt=""
          className={isMobile ? "w-full" : "w-1/4"}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2 * (i + 1), duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: i % 2 === 0 ? -100 : 100 },
            visible: { opacity: 1, y: 0 },
          }}
        />
      ))}
    </div>
  );
};

export default Gallery;
