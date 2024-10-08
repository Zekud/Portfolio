import React from "react";
import "./hero.scss";
import hero from "../../assets/zekua_port.png";
import scroll from "../../assets/scroll.png";
import { motion } from "framer-motion";
function Hero() {
  const variants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };
  const sliderVariants = {
    initial: {
      x: window.innerWidth < 760 ? "150%" : "100%",
    },
    animate: {
      x: window.innerWidth < 760 ? "-150%" : "-100%",
      transition: {
        delay: 1,
        duration: 25,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={variants}>ZEKARIYAS KUMSA</motion.h2>
          <motion.h1 variants={variants}>Full Stack Web Developer</motion.h1>
          <motion.div className="buttons" variants={variants}>
            <motion.a
              href="#Portfolio"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Portfolio
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/19eftkhrRFT-8mm8JzfaVHcEwdgdJxprf/view?usp=sharing"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Resume
            </motion.a>
          </motion.div>
          <motion.img
            src={scroll}
            alt=""
            variants={variants}
            animate="scrollButton"
            className="scroll"
          />
        </motion.div>
      </div>
      <motion.div
        className="sliderTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        {/** Html Css Javascript React Firebase Figma Sass Bootstrap Git**/}

        <i class="devicon-html5-plain-wordmark colored"></i>
        <i class="devicon-css3-plain-wordmark colored"></i>
        <i class="devicon-javascript-plain colored"></i>
        <i>
          {" "}
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            alt="tailwindcss-original"
            style={{ height: "50px", width: "50px" }}
          />
        </i>
        <i class="devicon-react-original-wordmark colored"></i>
        <i class="devicon-firebase-plain-wordmark colored"></i>
        <i class="devicon-nodejs-plain-wordmark colored"></i>
        <i class="devicon-express-original"></i>
        <i class="devicon-mysql-plain-wordmark colored"></i>
        <i class="devicon-git-plain-wordmark colored"></i>
        <i class="devicon-figma-plain-wordmark colored"></i>
        <i class="devicon-sass-original colored"></i>
        <i class="devicon-bootstrap-plain-wordmark colored"></i>
      </motion.div>
      <div className="imageContainer">
        <img src={hero} alt="" />
      </div>
    </div>
  );
}

export default Hero;
