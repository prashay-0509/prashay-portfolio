import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "COVID Info Hub",
    img: "/covid.png",
    desc: "My first project was a COVID-based website that provided comprehensive information about the pandemic, including safety guidelines, statistics, and preventive measures. This project also showcased my website designing skills, where I focused on creating a user-friendly interface, intuitive navigation, and visually appealing layouts to enhance user engagement.",
    link: "https://www.behance.net/gallery/216954649/COVID-Info-Hub",
  },
  {
    id: 2,
    title: "IRCTC Redesign",
    img: "/irctc.png",
    desc: "For my second project, I took on the challenge of redesigning the IRCTC website. The original version lacked proper alignment and provided a suboptimal user experience. After the redesign, I introduced a more appealing layout, improved navigation, and enhanced the overall user experience, making the platform more accessible and visually cohesive. This project highlights my ability to identify design flaws and implement effective UI/UX improvements.",
    link: "https://www.behance.net/gallery/216452185/IRCTC-Website-Redesign",
  },
  {
    id: 3,
    title: "EchoVibe Website",
    img: "/headphones.png",
    desc: "My third project involved designing a website for a fictional headphone company named 'Echovibe'. I applied various advanced techniques, including scroll-down animations, carousel animations, and the use of the morphism design style. The website features a sleek and modern color palette that enhances visual appeal and provides an engaging user experience. This project demonstrates my expertise in creating interactive and visually captivating websites that resonate with users.",
    link: "https://www.behance.net/gallery/216879489/Website-Design-for-Headphones",
  },
  {
    id: 4,
    title: "Nike Product Design",
    img: "/nike.png",
    desc: "In this project, I transformed a Nike shoe poster into a fully functional landing page for a website. The original poster provided inspiration for the layout, and I implemented various web design techniques to create a visually appealing and responsive page. This project highlights my ability to turn static designs into dynamic digital experiences, with a focus on aesthetics and user engagement.",
    link: "https://www.behance.net/gallery/216452559/Nike-Landing-Page",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button
              onClick={() => {
                window.open(item.link, "_blank");
              }}
            >
              See Demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
