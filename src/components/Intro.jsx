import React from 'react';
import intro from '../assets/React.png';
import {motion} from "framer-motion"

const Intro = () => {

  const container = (delay) =>
  ({ 
      hidden: {x: -100, opacity: 0},
      visible: {x :0, opacity: 1, transition: {duration: 0.5, delay: delay}}
  })

  return (
    <div className=" mx-auto px-6 lg:px-10 ">
      <div className=" border-b border-neutral-900 pb-10 lg:mb-35">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left"> 
              <motion.h1 variants={container(0)} initial='hidden' animate='visible' className="text-4xl md:text-6xl lg:text-8xl tracking-tight lg:mt-20">Maria Imran</motion.h1>

              <motion.span variants={container(0.5)} initial='hidden' animate='visible' className="my-3 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl md:text-5xl tracking-tight text-transparent">
                Full-Stack Web Developer | UI Designer | ML Enthusiast
              </motion.span>

              <motion.p variants={container(1)} initial='hidden' animate='visible' className="my-2 max-w-2xl lg:text-xl py-6 font-light">
                Hi, I’m a passionate web developer who blends creative front-end design with powerful back-end logic. While I specialize in building visually stunning and user-friendly interfaces using React, I also integrate Python-based back-end systems using Flask, and have hands-on experience with machine learning models. I love crafting seamless web apps that are not just beautiful but also intelligent and scalable.          
              </motion.p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <motion.img initial={{x: 100, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 1, delay: 1.5}} src={intro} alt="profile" className="w-3/4 lg:w-2/3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
