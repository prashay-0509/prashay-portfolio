import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.span>
        {/* <div className="social">
          <motion.a
            href="#"
            onClick={() =>
              window.open(
                "http://www.linkedin.com/in/prashay-sandheliya-a2a95a251",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            <img src="/linkedin.png" alt="" />
          </motion.a>
          <a href="#">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="" />
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
