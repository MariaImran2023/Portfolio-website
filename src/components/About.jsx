import React from 'react'
import about from '../assets/About.png'
import { motion } from "framer-motion"

const About = () => {
  return (
    <div id="About" className='mx-auto px-6 lg:px-10'>
      <div className='border-b border-neutral-900 pb-10'>
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className='pt-14 lg:pt-20 mb-10 lg:mb-12 text-center text-4xl'
        >
          About <span className='text-blue-300'>Me</span>
        </motion.h1>
        <div className='flex flex-wrap'>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 lg:p-8"
          >
            <div className="flex items-center justify-center">
              <img className='w-3/4 lg:w-2/3 rounded-2xl' src={about} alt='About Me' />
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex justify-start p-10 lg:pl-0 lg:pt-8 text-base tracking-normal flex-col space-y-5">
              <p>
                I’m a Full-Stack Web Developer with a strong foundation in front-end design and a growing passion for building intelligent, end-to-end web applications. I specialize in crafting responsive, user-centric interfaces using React.js, Tailwind CSS, HTML, and JavaScript, while also integrating powerful back-end systems with Python (Flask) and machine learning models.
              </p>
              <p>
                What began as a love for clean code and pixel-perfect designs has evolved into a deeper curiosity for solving real-world problems through full-stack solutions. From transforming creative UI ideas into sleek, interactive web experiences to deploying smart features powered by AI, I thrive at the intersection of design and functionality.
              </p>
              <p>
                I’m always exploring the latest in modern web technologies and enjoy collaborating on projects that are innovative, meaningful, and built to last. Let’s create something impactful together!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About
