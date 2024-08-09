import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { RiTailwindCssLine } from 'react-icons/ri'
import { RiCss3Line } from 'react-icons/ri'
import { RiJavascriptLine } from 'react-icons/ri'
import { LiaHtml5 } from "react-icons/lia";
import { TbBrandBootstrap } from "react-icons/tb";
import {motion} from "framer-motion"

const Technology = () => {

  const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: { y: [10, -10], transition: {duration: duration, ease: 'linear', repeat: Infinity, repeatType: 'reverse'}}
  })

  return (
    <div id="Technology" className='mx-auto px-6 lg:px-10'>
      <div className="border-b border-neutral-900 pb-16">
        <motion.h1 whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration: 1}} className="pt-14 lg:pt-20 mb-16 text-center text-4xl">Technologies</motion.h1>
        <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}}  className="flex flex-wrap items-center justify-center gap-4">
            <motion.div variants={iconVariants(2.5)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className='text-5xl text-cyan-400'/>
            </motion.div>
            <motion.div variants={iconVariants(5)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssLine className='text-5xl text-blue-400'/>
            </motion.div>
            <motion.div variants={iconVariants(2)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiCss3Line className='text-5xl text-blue-600'/>
            </motion.div>
            <motion.div variants={iconVariants(3.5)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4">
                <LiaHtml5 className='text-5xl text-orange-500'/>
            </motion.div>
            <motion.div variants={iconVariants(4)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiJavascriptLine className='text-5xl text-yellow-400'/>
            </motion.div>
            <motion.div variants={iconVariants(3)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandBootstrap className='text-5xl' style={{ color: '#6534bf' }} />
            </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Technology
