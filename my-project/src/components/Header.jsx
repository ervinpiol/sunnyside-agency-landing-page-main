import React, { useState } from "react";
import ImageHeader from "../assets/desktop/image-header.jpg";
import ImageHeaderMobile from "../assets/mobile/image-header.jpg";
import Logo from "../assets/logo.svg";
import Menu from "../assets/icon-hamburger.svg";
import IconArrowDown from "../assets/icon-arrow-down.svg";
import useMobile from "../assets/hooks/useMobile";
import { motion } from "framer-motion";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu((openMenu) => !openMenu);
  };

  const isMobile = useMobile("(max-width: 768px)");

  return (
    <div className="relative">
      <img src={isMobile ? ImageHeaderMobile : ImageHeader} alt="ImageHeader" />
      <div className="absolute top-0 w-full xs:px-8 xs:py-6 md:px-12 lg:py-10 xl:px-32">
        <div className="relative w-full flex justify-between items-center">
          <motion.img
            src={Logo}
            alt="Logo"
            className="w-32 md:w-48"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          />
          <ul
            className={`items-center flex gap-16 z-[999] ${
              openMenu
                ? "absolute bg-white text-Verydarkgrayishblue flex-col top-20 py-12 gap-7 w-full"
                : "text-white xs:hidden lg:flex"
            } `}
          >
            <div className="absolute right-0 -top-6 triangle xs:block lg:hidden" />
            {["About", "Services", "Projects"].map((list, i) => {
              return (
                <motion.li
                  key={i}
                  className="cursor-pointer text-xl font-Barlow"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.1 * (i + 1), duration: 0.7 }}
                  variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  {list}
                </motion.li>
              );
            })}
            <motion.li
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <button
                className={`font-Fraunces text-black bg-White px-7 py-3.5 rounded-full text-base hover:bg-opacity-40 hover:text-white ${
                  openMenu ? "bg-Yellow" : "bg-White"
                }`}
              >
                CONTACT
              </button>
            </motion.li>
          </ul>
          <motion.img
            src={Menu}
            alt="Menu"
            className="xs:block lg:hidden"
            onClick={handleOpenMenu}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          />
        </div>
      </div>
      <div className="absolute w-full left-1/2 -translate-x-1/2 flex flex-col items-center px-10 xs:gap-20 xs:top-40 sm:top-72 sm:gap-36 md:top-32 md:gap-12 lg:top-48 xl:gap-44 xl:top-64">
        <motion.h1
          className="tracking-[14px] text-white font-Fraunces text-center xs:text-4xl sm:text-6xl md:text-5xl md:tracking-[8px] lg:text-6xl xl:text-7xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          WE ARE CREATIVES
        </motion.h1>
        <motion.img
          src={IconArrowDown}
          alt="IconArrowDown"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        />
      </div>
    </div>
  );
};

export default Header;
