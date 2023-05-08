import React from "react";
import DarkLogo from "../assets/dark-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faInstagram,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  return (
    <footer className="bg-DarkmoderatecyanFooter flex items-center flex-col py-24 gap-12">
      <motion.img
        ref={ref}
        src={DarkLogo}
        alt="DarkLogo"
        className="xs:w-40 md:w-48"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 1 }}
      />
      <ul
        className="flex gap-16 text-GraphicText font-Barlow md:text-xl xs:text-lg"
        ref={ref}
      >
        {["About", "Services", "Projects"].map((list, i) => {
          return (
            <motion.li
              key={i}
              className="cursor-pointer hover:text-white opacity-70"
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.2 * (i + 1), duration: 0.5 }}
            >
              {list}
            </motion.li>
          );
        })}
      </ul>
      <ul className="flex gap-10 mt-12" ref={ref}>
        {[faSquareFacebook, faInstagram, faTwitter, faPinterest].map(
          (icon, i) => (
            <motion.li
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.3 * (i + 1), duration: 0.5 }}
            >
              <FontAwesomeIcon
                key={i}
                icon={icon}
                className="text-2xl text-GraphicText hover:text-white cursor-pointer"
              />
            </motion.li>
          )
        )}
      </ul>
    </footer>
  );
};

export default Footer;
