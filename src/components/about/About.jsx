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
            UI/UX enthusiast, dedicated to crafting visually stunning,
            user-friendly experiences. With a love for creativity and
            innovation, I specialize in brand identities, social media content,
            and intuitive web designs. Let’s collaborate to bring your vision to
            life with impactful, thoughtful design solutions!
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
