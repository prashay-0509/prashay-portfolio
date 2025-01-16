import { useRef } from "react";
import "./about.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="about"
      variants={variants}
      initial="initial"
      animate="animate"
      whileInView="animate"
      ref={ref}
    >
      <div className="progress">
        <h1>About Me</h1>
      </div>
      <div className="sectionContainer">
        <div className="imageContainer">
          <img src="/hero1.png" alt="" />
        </div>
        <div className="textContainer">
          <p>
            Welcome to my creative space! I'm a passionate graphic designer and
            UI/UX enthusiast, dedicated to transforming ideas into visually
            stunning and user-friendly experiences. With a keen eye for detail
            and a deep understanding of design principles, I craft solutions
            that are not only aesthetically pleasing but also highly functional.
            My journey in design has been fueled by a love for creativity and
            innovation, allowing me to deliver impactful results that resonate
            with clients and audiences alike. Whether it's creating compelling
            brand identities, engaging social media content, or intuitive web
            designs, I believe in the power of design to tell stories and make
            lasting impressions. Let's collaborate and bring your vision to life
            through thoughtful and creative design solutions.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
