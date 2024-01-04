import React from "react";
import { motion } from "framer-motion";

function Links() {
  const items = ["Homepage", "Services", "Portfolio", "Contact"];

  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
}

export default Links;
