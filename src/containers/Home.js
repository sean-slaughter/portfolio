import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import HomeImage from "../components/HomeImage";

export default function Home(props) {
  return (
        <motion.div exit={{x: -2000}} key="home"transition={{ease: "easeInEaseOut"}} className="home-container">
            <motion.p
            class="home-text text-center"
            initial={{ x: "-200vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.6, type: "spring", damping: 15 }}
            >
            Hi! I'm Sean Thompson
            </motion.p>
            <motion.p
            class="home-text text-center"
            initial={{ x: "200vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 1.4, type: "spring", damping: 15 }}
            >
                And I'm a Computer Science student and <br/> Full Stack Software Developer based out of Milwaukee, WI.
            </motion.p>
            <br/>
            <motion.p
            className="home-description text-center"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 2.6, duration: 1}}
            > 
            Some of my favorite current technologies include Java, ReactJS, Rails, PostgreSQL, and MongoDB.
            </motion.p>
            <motion.p
            className="home-description text-center"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 3.3, duration: 1}}
            > 
            Lets connect and create something great together!
            </motion.p>
        </motion.div>
      
  );
}
