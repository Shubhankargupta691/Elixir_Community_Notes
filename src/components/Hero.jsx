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
          <h1 className={`${styles.heroHeadText} text-white`}>
          <span className='text-[#915EFF]'>ELIXIR</span>
          </h1>
          <p className={`'text-white mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]`}>
          <h1 className="text-white text-[30px]">Welcome to the Notes section of our website!</h1><br className='sm:block hidden' />
           This is where you can collect all  your important notes.
           You can use the notes section to keep track of your work, personal projects, or anything else that's important to you.
           You can also contribute by providing your stuff.
          </p>
          <pre />
        </div>
      </div>

      <ComputersCanvas />

     
    </section>
  );
};

export default Hero;




