import React from "react";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import facebook from "../../assets/facebook.png";
import telegram from "../../assets/telegram.png";
import instagram from "../../assets/instagram.png";
import "./navbar.scss";
import { motion } from "framer-motion";
import SideBar from "../sidebar/SideBar";

function Navbar() {
  return (
    <div className="navbar">
      <SideBar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Welcome!
        </motion.span>
        <div className="social">
          <motion.a
            href="http://www.linkedin.com/in/zekariyas-kumsa"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={linkedin} alt="" />
          </motion.a>
          <motion.a
            href="http://github.com/Zekud"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={github} alt="" />
          </motion.a>
          <motion.a
            href="https://t.me/Zekua12"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={telegram} alt="" />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/zekariyas.kumsa?mibextid=ZbWKwL"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={facebook} alt="" />
          </motion.a>
          <motion.a
            href="https://instagram.com/z.e.k.u.a"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={instagram} alt="" />
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
