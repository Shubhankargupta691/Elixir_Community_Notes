import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { Gdrive } from "../assets";
import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-2 rounded-2xl sm:w-[260.5px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={Gdrive}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Notes = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      
        <h2 className={`${styles.sectionHeadText}`}>
          <a href="https://www.elixircommunity.live/" target="_top">Notes</a></h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          This section could include notes for all of the courses that are typically taught in a BTech program, 
          such as engineering mathematics, engineering physics etc. 
          The notes could be in a variety of formats, such as PDFs, Word documents and Hand Written format also.
          
          
        </motion.p>
      </div>

      
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
 
      <div className='mt-20 flex justify-center'>
          <a
              href="https://www.elixircommunity.live/"
              target="_top"
              className='bg-transparent text-[#915EFF] hover:bg-[violet-gradient] hover:text-white py-2 px-4 rounded transition-colors duration-300 ease-in-out'
              style={{
              fontWeight: 'bold',
              letterSpacing: '1px',
              textDecoration: 'none',
              border: 'none',
            }}
          >
            Back Home page
          </a>
       </div>
       <div className='mt-5 flex justify-center'>
        <p>Made with love by <a href="https://www.instagram.com/geeksforgeeks_abesec/" target="_blank">GFG ABESEC</a></p>
      </div>
    </>
  );
};
export default SectionWrapper(Notes, "notes");