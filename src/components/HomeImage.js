import React from 'react'
import {motion} from 'framer-motion'
import { Button, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function HomeImage() {
    return (
        <motion.div  
        initial={{ opacity: 0}}
        animate={{opacity: 0.3}}
        transition={{ duration: 1.5 }}
        whileHover={{ opacity: 1}}
        className="home-image"
        >
            <Image  src="/IMG-1778.jpg" rounded fluid style={{ maxWidth:350}}/>
            <Link to="/about">
                <Button size="lg" className="pic-button" variant="outline-light">About Me</Button>
            </Link>
          
        </motion.div>
    )
}
