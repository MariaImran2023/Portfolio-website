import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { PROJECTS } from '../data/projects';
import {motion} from "framer-motion"

const Projects = () => {

  const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: { y: [10, -10], transition: {duration: duration, ease: 'linear', repeat: Infinity, repeatType: 'reverse'}}
  })

  return (
    <div id="Projects" className='mx-auto px-6 lg:px-10'>
      <div className='border-b border-neutral-900 pb-16'>
        <motion.h1 whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration: 1}} className='pt-14 lg:pt-20 mb-6 lg:mb-16 text-center text-4xl'>Projects</motion.h1>
        <div className="p-5 flex flex-col items-center"> 
          {PROJECTS.map((project, index) => (
            <div key={index} className='mb-16 flex flex-wrap lg:justify-center w-full lg:w-3/4'>
              <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}} className='w-full lg:w-1/4 flex flex-col items-center lg:items-start'>
                <img
                  src={project.image}
                  alt={project.title}
                  width={150}
                  height={150}
                  className='mb-6 rounded pt-2'
                />
              </motion.div>
              <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: 100}} transition={{duration: 1}} className="w-full lg:max-w-2xl lg:w-3/4 flex flex-col items-center lg:items-start">
                <div className='flex items-center'>
                  <h6 className='mb-2 font-semibold mr-4'>{project.title}</h6>
                  <a href={project.github}  target='_blank' rel='noopener noreferrer' className='mb-2.5 flex hover:scale-150 transform transition-transform duration-300' >
                    <FaGithub  size={20} className='text-blue-300' />
                  </a>
                </div>
                <p className='mb-4 text-neutral-400'>{project.description}</p>
                <div className="flex flex-wrap">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-blue-300'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
