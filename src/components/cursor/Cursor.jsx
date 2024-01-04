import React, { useEffect, useState } from "react";
import "./cursor.scss";
import { motion } from "framer-motion";

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const mouseMove = window.addEventListener("mousemove", (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    });

    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);
  return (
    <motion.div
      className="cursor"
      style={{ x: position.x + 20, y: position.y + 20 }}
    ></motion.div>
  );
}

export default Cursor;
