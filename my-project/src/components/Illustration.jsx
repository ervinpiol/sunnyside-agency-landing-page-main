import React from "react";
import { FirstIllustration, SecondIllustration } from "../constants/items";
import useMobile from "../assets/hooks/useMobile";
import { motion } from "framer-motion";

const Illustration = () => {
  const isMobile = useMobile("(max-width: 992px)");

  return (
    <div>
      {FirstIllustration.map((item, i) => (
        <div
          key={i}
          className={`flex w-full xs:flex-col-reverse md:flex-row ${
            i === 1 && "md:flex-row-reverse"
          }`}
        >
          <div className="flex-1 flex items-center">
            <div className="mx-auto flex flex-col xs:items-center md:items-start xs:gap-5 xs:py-20 xs:px-8 md:p-10 xl:w-[53%] lg:gap-8">
              <motion.h2
                className="font-Fraunces  text-Verydarkdesaturatedblue xs:text-4xl xs:text-center md:text-start md:text-3xl lg:text-5xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {item.bigText}
              </motion.h2>
              <motion.p
                className="font-Barlow  text-Darkgrayishblue xs:text-center xs:text-xl md:text-start md:text-lg md:leading-7 lg:text-xl lg:leading-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {item.smallText}
              </motion.p>
              <motion.button
                className="font-Fraunces font-extrabold text-Verydarkdesaturatedblue tracking-wider relative text-[17px] button-border"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <span className="px-2.5">LEARN MORE</span>
                <div
                  className={`absolute w-[148px] h-2.5 bottom-0 z-[-1] rounded-full bg-opacity-30 ${
                    i === 0 ? "bg-Softred" : "bg-Yellow"
                  }`}
                />
              </motion.button>
            </div>
          </div>
          <img
            src={isMobile ? item.mobileImage : item.desktopImage}
            alt=""
            className="xs:w-full md:w-1/2"
          />
        </div>
      ))}
      <div className="flex w-full xs:flex-col md:flex-row">
        {SecondIllustration.map((item, i) => (
          <div key={i} className="relative flex-1">
            <img
              src={isMobile ? item.mobileImage : item.desktopImage}
              alt={item.bigText}
              className="w-full"
            />
            <div className="absolute w-full xs:top-[400px] md:top-[420px] lg:top-[280px] xl:top-[510px]">
              <div
                className={`flex items-center flex-col  mx-auto xs:px-8 xs:w-full xs:gap-6 md:gap-3 lg:gap-5 xl:w-3/5 xl:p-0 xl:gap-12 ${
                  i === 0 ? "text-GraphicText" : "text-PhotographyText"
                }`}
              >
                <motion.h3
                  className="font-Fraunces xs:text-3xl md:text-2xl lg:text-4xl"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  {item.bigText}{" "}
                </motion.h3>
                <motion.p
                  className="text-center font-Barlow xs:text-xl md:text-lg lg:text-xl"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  {item.smallText}
                </motion.p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Illustration;
