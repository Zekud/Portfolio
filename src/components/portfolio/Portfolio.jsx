import React, { useRef } from "react";
import "./portfolio.scss";
import { motion, useSpring, useScroll, useTransform } from "framer-motion";
import chat from "../../assets/chat.png";
import forum from "../../assets/forum.jpg";
import booking from "../../assets/booking.jpg";
import youtube from "../../assets/youtube.jpg";
import solar from "../../assets/solar.jpg";
import jara from "../../assets/jara.png";
import thadda from "../../assets/thadda.png";
const items = [
  {
    id: 1,
    title: "Thadda Challenge Website",
    img: thadda,
    desc: "Fully responsive and dynamic arabic challenge website, built with Next.js, Tailwind CSS, and AWS. It allows user to create teams,create challenges and get rewards.",
    link: "https://www.thadda.com/",
  },
  {
    id: 2,
    title: "Jara Booking Website",
    img: jara,
    desc: "Fully responsive and dynamic booking website for Jarabeachresort with Paystack payment integration and an admin dashboard, featuring real-time booking management and seamless user experience.",
    link: "https://booking.jarabeachresort.com/",
  },
  {
    id: 3,
    title: "Zekua Chat",
    img: chat,
    desc: "Fully responsive and dynamic real-time chatting app powered by Firebase that allow users to share messages and images, with user-friendly features like email and Google authentication.",
    link: "https://zekua-chat.vercel.app/",
  },
  {
    id: 4,
    title: "Evangadi Forum",
    img: forum,
    desc: "Evangadi Forum is a Full Stack web application made with React,Tailwind CSS, Node.js, and MySQL that allow users to ask questions and give answer.",
    link: "https://evangadi-forum-client-git-main-zekuas-projects.vercel.app/login",
  },
  {
    id: 5,
    title: "Little Lemon Booking",
    img: booking,
    desc: "The Little Lemon Online Reservation System is a Front end web application that allows users to reserve a table at a restaurant. ",
    link: "https://little-lemon-git-main-zekuas-projects.vercel.app/",
  },
  {
    id: 6,
    title: "Youtube To Mp3",
    img: youtube,
    desc: "Youtube To Mp3 is a web app that helps users to download their favorite videos in mp3 format. ",
    link: "https://youtube-to-mp-3-six.vercel.app/",
  },
];
const Single = ({ item }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <motion.div className="container">
        <motion.div className="wrapper">
          <motion.div className="imgContainer" ref={ref}>
            <img src={item.img} alt="" />
          </motion.div>

          <motion.div className="titleContainer" style={{ y }}>
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <motion.a
              href={item.link}
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              See Demo
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
function Portfolio() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <motion.div className="portfolio" ref={ref}>
      <motion.div className="progress">
        <motion.h1>Featured Works</motion.h1>
        <motion.div className="progress-bar" style={{ scaleX }}></motion.div>
      </motion.div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </motion.div>
  );
}

export default Portfolio;
