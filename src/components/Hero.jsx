import React from 'react';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";


const Hero = () => {
  
  return (
    <section className={'relative w-full h-screen mx-auto'}>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px]  max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`} >
          <span className='text-[#915EFF]'>ELIXIR</span>
          
          </h1>
          <p className={`'text-white mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]`}>
          <h1 className="text-white text-[30px]">Welcome to the Notes section of our website!</h1><br className='sm:block hidden' />
<<<<<<< HEAD
           This is where you can collect all your important notes and you can use the notes section to keep track of your work.
=======
           This is where you can collect all  your important notes, and you can use the notes section to keep track of your work.
>>>>>>> 996aafed3929229f6be2d1c9c8566ca6c280a9a4
          </p>
          <pre />
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#notes'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
      

     
    </section>
  );
};

export default Hero;




