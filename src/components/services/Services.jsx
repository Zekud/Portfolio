import React, { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import img from "../../assets/people.webp";

function Services() {
  const ref = useRef(null);
  const isInview = useInView(ref, { margin: "-100px" });
  const variants = {
    initial: {
      x: -500,
      y: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      whileInView="animate"
      //animate="animate"
      ref={ref}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br />
          and move forward{" "}
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src={img} alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business
          </h1>
          <button>WHAT I DO</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box">
          <h1>Web Development</h1>
          <p>
            Build responsive and scalable web applications using modern
            technologies.
          </p>
          <button></button>
        </motion.div>
        <motion.div className="box">
          <h1>Digital Marketing</h1>
          <p>
            Amplify your online presence and connect with your target audience
            effectively.
          </p>
          <button></button>
        </motion.div>
        <motion.div className="box">
          <h1>UI/UX</h1>
          <p>
            Create beautiful and intuitive user interfaces that help your brand
            stand out.
          </p>
          <button></button>
        </motion.div>
        <motion.div className="box">
          <h1>Branding</h1>
          <p>
            Create a strong and consistent brand identity that sets you apart
            from your competitors.
          </p>
          <button></button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Services;
