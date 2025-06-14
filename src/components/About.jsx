import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
          <motion.div 
        variants={textVariant()}
        className="flex flex-col items-center justify-center"
      >
        <p className="text-secondary text-[17px] max-w-3xl leading-[30px] text-center">Introduction</p>
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-8">About Me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mx-auto text-center text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        With over five years of experience in audiovisual production, I specialize in audio engineering across live events,
         broadcast, and FOH mixing. I'm proficient with Pro Tools, Logic Pro X, and Waves plugins, allowing me to deliver clean, 
         impactful sound in both studio and live environments. I bring precision to live-to-air broadcast mixes and adapt quickly 
         to venue acoustics and crowd dynamics in real-time. My FOH work sharpens my focus on audience engagement, while my background 
        in music production adds depth to my creative approach.

        I combine strong technical skills with a collaborative mindset—designing practical, 
        user-friendly solutions for complex AV challenges. My strengths in communication, problem-solving, 
        and client interaction make me a reliable and versatile team player. 
        I’m passionate about turning creative ideas into high-quality audio experiences.


      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
