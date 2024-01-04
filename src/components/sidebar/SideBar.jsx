import { useState } from "react";
import Links from "../links/Links";
import ToggleButoon from "../togglebutton/ToggleButoon";
import "./sidebar.scss";
import { motion } from "framer-motion";
function SideBar() {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1800px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        type: "spring",
        delay: 0.2,
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <motion.div
      className="sideBar"
      initial="closed"
      animate={open ? "open" : "closed"}
    >
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButoon setOpen={setOpen} />
    </motion.div>
  );
}

export default SideBar;
