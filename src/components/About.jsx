import React from 'react'
import about from '../assets/About.png'
import {motion} from "framer-motion"

const About = () => {
  return (
    <div id="About" className='mx-auto px-6 lg:px-10'>
        <div className='border-b border-neutral-900 pb-10'>
            <motion.h1 whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration: 1}} className='pt-14 lg:pt-20 mb-10 lg:mb-12 text-center text-4xl'>About <span className='text-blue-300'>Me</span></motion.h1>
            <div className='flex flex-wrap'>
                <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 0.5}} className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className='w-3/4 lg:w-2/3 rounded-2xl' src={about} alt='About Me' />
                    </div>
                </motion.div>
                <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: 100}} transition={{duration: 0.5}} className="w-full lg:w-1/2">
                    <div className="flex justify-start p-10 lg:pl-0 lg:pt-8 text-base tracking-normal ">
                        <p>I am a Front-End Developer with a deep passion for building engaging and responsive web experiences. With a robust skill set in React JS, HTML, CSS, JavaScript, and Tailwind CSS, I specialize in transforming creative design ideas into dynamic, user-friendly applications. My journey in web development has been driven by a love for problem-solving and a commitment to delivering high-quality, intuitive user interfaces. Whether it's crafting intricate layouts, optimizing performance, or ensuring cross-browser compatibility, I bring a meticulous approach to every project. I thrive on staying up-to-date with the latest web technologies and best practices to create modern, efficient, and visually stunning websites. Beyond the code, I enjoy collaborating with others and am always open to new opportunities to contribute to innovative and impactful projects.</p>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default About
