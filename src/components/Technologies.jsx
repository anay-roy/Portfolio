import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { BiLogoFlutter } from "react-icons/bi";
import { SiDart } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { FcAndroidOs } from "react-icons/fc";
import { motion } from 'framer-motion';

const IconVariants = (duration) =>({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
});
const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial ={{opacity: 0, y: -100}}
        transition={{duration: 1.5}}
        className='my-20 text-center text-4xl'>
            Technologies
      </motion.h2>
      <motion.div 
        whileInView={{opacity: 1, x:0}}
        initial ={{opacity: 0, x: -100}}
        transition={{duration: 1.5}}
        className='flex flex-wrap item-center justify-center gap-4'>
        <motion.div 
            variants={IconVariants(2.5)}
            initial = "initial"
            animate = "animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiReactjsLine className='text-7xl text-cyan-400'/>
        </motion.div>
        <motion.div 
            variants={IconVariants(3)}
            initial = "initial"
            animate = "animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FcAndroidOs className='text-7xl text-cyan-400'/>
        </motion.div>
        <motion.div 
            variants={IconVariants(1.3)}
            initial = "initial"
            animate = "animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <BiLogoFlutter className='text-7xl text-cyan-400'/>
        </motion.div>
        <motion.div 
            variants={IconVariants(3.7)}
            initial = "initial"
            animate = "animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiDart className='text-7xl text-cyan-400'/>
        </motion.div>
        <motion.div 
            variants={IconVariants(4)}
            initial = "initial"
            animate = "animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <IoLogoFirebase className='text-7xl text-yellow-400'/>
        </motion.div>
        <motion.div 
            variants={IconVariants(1.5)}
            initial = "initial"
            animate = "animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiMongodb className='text-7xl text-green-400'/>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
