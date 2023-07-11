import React from 'react';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Notes } from "../components";

const Hero = () => {
  
  return (
    <section className={'relative w-full h-screen mx-auto ' }>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px]  max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`} >
          <a href="https://www.elixircommunity.live/" target="_top"><span className='text-[#915EFF]'>ELIXIR NOTES</span></a>
          
          
          </h1>
          <p className={`'text-white mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]`}>
          <h1 className="text-white text-[30px]">Welcome to the Notes section of our website!</h1><br className='sm:block hidden' />
           This is where you can collect all your important notes and you can use the notes section to keep track of your work.
          </p>
        </div>
      </div>
      <div
        className={`${styles.paddingX} absolute inset-0 mt-[20%]  mx-auto flex flex-row`}
      > <Notes /> </div> 
     
    </section>
    
  );
};

export default Hero;




