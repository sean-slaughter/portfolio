import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import HomeImage from "../components/HomeImage";
import { Link } from "react-router-dom";

export default function Home(props) {
  return (
      <Container>
        <motion.div exit={{x: -2000}} key="home"transition={{ease: "easeInEaseOut"}} className="home-container">
            <motion.div
             initial={{ x: "-200vw" }}
             animate={{ x: 0 }}
             transition={{ delay: 0.6, type: "spring", damping: 15 }}
            >
              <Image src="resume.jpeg" roundedCircle width={225}/>
            </motion.div>
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
                And I'm a Computer Science student and <br/> software developer based out of Milwaukee, WI.
            </motion.p>
            <br/>
            <motion.p
            className="home-description text-center"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 2.8, duration: 1}}
            > 
            Some of my current favorite technologies include Java, ReactJS, Rails, PostgreSQL, and MongoDB.
            </motion.p>
            <motion.p
            className="home-description text-center"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 4, duration: 1}}
            > 
            Lets connect and create something great together!
            </motion.p>
        </motion.div>
        <motion.div
         initial={{opacity: 0}}
         animate={{opacity: 1}}
         transition={{delay: 4, duration: 1}}>
        <Row className="justify-content-center home-buttons">
          <Link to='/resume'>
            <Button variant="outline-dark" style={{marginLeft: 20, marginRight: 20}}size="lg">Resume</Button>
          </Link>
          <Link to='/projects'>
            <Button variant="outline-dark" style={{marginLeft: 20, marginRight: 20}}size="lg">Projects</Button>
          </Link>
          <Link to='/contact'>
            <Button variant="outline-dark" style={{marginLeft: 20, marginRight: 20}}size="lg">Contact</Button>
          </Link>
        </Row>
        </motion.div>
      </Container>
  );
}
