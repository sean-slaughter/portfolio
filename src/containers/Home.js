import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Row, Col, Button } from "react-bootstrap";
import HomeImage from "../components/HomeImage";
import { Link } from "react-router-dom";

export default function Home(props) {
  return (
      <Container>
        <motion.div exit={{x: -2000}} key="home"transition={{ease: "easeInEaseOut"}} className="home-container">
            <motion.p
            class="row home-text text-center"
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
            Some of my current favorite technologies include Java, ReactJS, Rails, PostgreSQL, and MongoDB.
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
        <motion.div
         initial={{opacity: 0}}
         animate={{opacity: 1}}
         transition={{delay: 3.3, duration: 1}}>
        <Row className="justify-content-center home-buttons">
          <Link to='/resume'>
            <Button variant="outline-dark" style={{margin: 20}}size="lg">Resume</Button>
          </Link>
          <Link to='/projects'>
            <Button variant="outline-dark" style={{margin: 20}}size="lg">Projects</Button>
          </Link>
          <Link to='/contact'>
            <Button variant="outline-dark" style={{margin: 20}}size="lg">Contact</Button>
          </Link>
        </Row>
        </motion.div>
      </Container>
  );
}
