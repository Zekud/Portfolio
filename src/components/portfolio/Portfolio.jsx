import React, { useRef } from "react";
import "./portfolio.scss";
import { motion, useSpring, useScroll, useTransform } from "framer-motion";
const items = [
  {
    id: 1,
    title: "Zekua Chat",
    img: "https://images.unsplash.com/photo-1519069060891-f8c50519bf39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hhdCUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D",
    desc: "Fully responsive and dynamic real-time chatting app powered by Firebase that allow users to share messages and images, with user-friendly features like email and Google authentication.",
    link: "https://zekua-chat.zekua.me/",
  },
  {
    id: 2,
    title: "Little Lemon Booking",
    img: "https://media.istockphoto.com/id/937256616/photo/confident-restaurant-manager-answering-phone.jpg?s=612x612&w=0&k=20&c=8Z8A2JWvoSwg-0DNctYEQAXEZB9Tp69huK59y4qts4I=",
    desc: "The Little Lemon Online Reservation System is a Front end web application that allows users to reserve a table at a restaurant. ",
    link: "http://zekua.me/little-lemon/",
  },
  {
    id: 3,
    title: "Youtube To Mp3",
    img: "https://www.apowersoft.com/wp-content/uploads/2014/03/youtube-to-mp3.jpg",
    desc: "Youtube To Mp3 is a web app that helps users to download their favorite videos in mp3 format. ",
    link: "https://youtube2mp3.zekua.me/",
  },
  {
    id: 4,
    title: "Solar System",
    img: "https://i.pinimg.com/originals/4b/cd/fc/4bcdfc63dce3b34eed8a3b04963a7396.jpg",
    desc: "Solar System is a web app that helps users to calculate the weight of any object in the solar system.",
    link: "http://zekua.me/Solar-System/",
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
        <h1>Featured Works</h1>
        <motion.div className="progress-bar" style={{ scaleX }}></motion.div>
      </motion.div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </motion.div>
  );
}

export default Portfolio;
