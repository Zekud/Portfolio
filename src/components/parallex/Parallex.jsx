import { useRef } from "react";
import "./parallex.scss";
import { motion, useTransform, useScroll } from "framer-motion";

function Parallex({ type }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const txtbg = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  return (
    <div
      ref={ref}
      className="parallex"
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132,#0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: txtbg }}>
        {type === "services" ? "What I Do" : "What I DID"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className={type === "services" ? "sun planets" : "planet planets"}
        style={{
          x: bg,
        }}
      ></motion.div>
      <motion.div className="stars" style={{ x: bg }}></motion.div>
    </div>
  );
}

export default Parallex;
