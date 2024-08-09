import React from 'react'
import {EXPERIENCES} from '../data/experience.js'
import {motion} from "framer-motion"

const Experience = () => {

  return (
    <div id="Experience" className='mx-auto px-6 lg:px-10'>
        <div className='border-b border-neutral-900 pb-16'>
            <motion.h1 whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration: 1}} className='pt-14 lg:pt-20 mb-6 lg:mb-16 text-center text-4xl'>Experience</motion.h1>
            <div className="p-5 flex flex-col items-center">
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className='mb-16 flex flex-wrap lg:justify-center w-full lg:w-3/4'>
                        <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}} className="w-full lg:w-1/4 flex flex-col items-center lg:items-start">
                            <p className='mb-2 text-small'>{experience.year}</p>
                            <p className='mb-2 text-small text-neutral-400'>{experience.duration}</p>
                        </motion.div>
                        <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: 100}} transition={{duration: 1}} className="w-full lg:w-3/4 flex flex-col items-center lg:items-start">
                            <h6 className='mb-2 font-semibold'>{experience.role} - <span className='text-blue-300'>{experience.company}</span></h6>
                            <p className=' mb-4 text-neutral-400'>{experience.description}</p>
                            <div className="flex flex-wrap">
                                {experience.technologies.map((tech, index) => (
                                    <span key={index} className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-blue-300'>{tech}</span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    </div>

  )
}

export default Experience
