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
            Sean Slaughter Thompson
            </motion.p>
            <HomeImage />
            <motion.p
            class="home-text text-center"
            initial={{ x: "200vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 1.4, type: "spring", damping: 15 }}
            >
                Full Stack Software Developer
            </motion.p>
        </motion.div>
      
  );
}
