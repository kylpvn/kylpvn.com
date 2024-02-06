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
        As a web developer with experience in front-end and back-end technologies, 
        I have a deep understanding of JavaScript, Vite, and frameworks like React, 
        Node.js, and Three.js, alongside knowledge in Python, HTML, and CSS, essential 
        for versatile web development. My expertise also extends to audio editing with
        proficiency in Pro Tools, Logic Pro X, Waves, and Fabfilter, enabling me to deliver
        comprehensive solutions that include creating and modifying audio for websites or applications. 
        What sets me apart is my exceptional blend of technical and interpersonal skills. 
        My quick learning ability and close collaboration with clients ensure the creation of efficient, 
        scalable, and user-friendly solutions that address real-world problems. My exceptional communication, 
        teamwork, problem-solving, time management, and client management skills make me a valuable asset to any web development team. 
        I am eager to apply my skills and creativity to help turn your visionary projects into reality.
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
