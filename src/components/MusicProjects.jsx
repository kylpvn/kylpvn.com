// MusicProjects.jsx
import React from "react";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion"; // adjust path if needed

const MusicProjects = () => {
  return (
    <section id="music-projects" className="project-wrapper__text py-10 px-4">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center justify-center"
      >
        <p className="text-secondary text-[17px] max-w-3xl leading-[30px] text-center">
          Some of my Music
        </p>
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-8">
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex justify-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          animate="show"
          className="mx-auto text-center text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase a few of my music projects. Each project is briefly described with its unique features and includes an audio player for listening.
        </motion.p>
      </div>

      <div className="music-projects-wrapper grid gap-6 mt-10 max-w-4xl mx-auto">
        {/* Track List */}
        {[
          { title: "Track 1", file: "/assets/TRACK-1.mp3", description: "An upbeat electronic track with vibrant synths and dynamic beats." },
          { title: "Track 2", file: "/assets/TRACK-2.mp3", description: "A soothing acoustic melody perfect for relaxation." },
          { title: "Track 3", file: "/assets/TRACK-3.mp3", description: "A high-energy rock anthem with powerful guitar riffs." },
          { title: "Track 4", file: "/assets/TRACK-4.mp3", description: "A soulful jazz piece with smooth saxophone tones." },
          { title: "Track 5", file: "/assets/TRACK-5.mp3", description: "A cinematic orchestral composition with dramatic crescendos." },
          { title: "Track 6", file: "/assets/TRACK-6.mp3", description: "A funky groove with catchy basslines and rhythmic drums." },
          { title: "Track 7", file: "/assets/TRACK-7.mp3", description: "An experimental ambient track with ethereal soundscapes." },
        ].map((track, index) => (
          <div key={index} className="music-project project-wrapper__text1">
            <h3 className="text-xl font-semibold mb-2">{track.title}</h3>
            <p className="text-secondary text-[15px] mb-2">{track.description}</p>
            <audio controls className="w-full">
              <source src={track.file} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MusicProjects;
