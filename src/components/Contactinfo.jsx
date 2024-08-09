import React from 'react'
import {motion} from "framer-motion"

const Contactinfo = () => {
  return (
    <div id="Contactinfo" className='mx-auto px-6 lg:px-10 pt-10 '>
      <div  className='border-b border-neutral-900 pb-16 text-center'>
        <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1.5}}>
          <a  href='mailto:maria.imran1682003@gmail.com' className='border-b hover:text-blue-500 hover:border-blue-500' >
            maria.imran1682003@gmail.com
          </a>
        </motion.div>
        
        <motion.p whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: 100}} transition={{duration: 1.5}} className='mt-3'>
          <a href='tel:+923378600153' className='hover:text-blue-500' >
            +92-337-8600153
          </a>
        </motion.p>
        <motion.p whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1.5}} className='mt-3'>Lahore, Pakistan</motion.p>
      </div>
    </div>
  )
}

export default Contactinfo
