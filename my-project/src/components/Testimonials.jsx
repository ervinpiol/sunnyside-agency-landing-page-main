import React from "react";
import { TestimonialItems } from "../constants/items";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center xs:gap-20 xs:py-20 lg:py-40 lg:gap-28 lg:px-12 xl:gap-40 xl:px-0">
      <motion.h3
        className="font-Fraunces text-Grayishblue xs:tracking-[4px] xs:text-xl sm:text-2xl md:tracking-[8px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        variants={{
          hidden: { opacity: 0, y: -100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        CLIENT TESTIMONIALS
      </motion.h3>
      <div className="flex justify-between xs:flex-col xs:gap-16 lg:flex-row lg:gap-12 xl:gap-0 xl:w-3/4">
        {TestimonialItems.map((testimonial, i) => (
          <div
            key={i}
            className="flex flex-col items-center xs:w-4/5 xs:mx-auto  xl:w-[27%]"
          >
            <motion.img
              src={testimonial.image}
              alt={testimonial.name}
              className="rounded-full xs:w-20 md:w-24"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              variants={{
                hidden: { opacity: 0, y: -100 },
                visible: { opacity: 1, y: 0 },
              }}
            />
            <motion.p
              className="font-Barlow text-center text-xl text-Verydarkgrayishblue leading-9 xs:pt-8 lg:pt-14 lg:px-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              variants={{
                hidden: { opacity: 0, y: -100 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {testimonial.text}
            </motion.p>
            <motion.h4
              className="font-Fraunces text-Verydarkdesaturatedblue text-[22px] font-extrabold xs:pt-8 lg:pt-14"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              variants={{
                hidden: { opacity: 0, y: -100 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {testimonial.name}
            </motion.h4>
            <motion.p
              className="font-Barlow pt-3 text-lg text-Grayishblue"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              variants={{
                hidden: { opacity: 0, y: -100 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {testimonial.position}
            </motion.p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
