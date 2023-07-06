import React from "react";
import swoleImg from "@public/assets/projects/lfsmarkup.png";
import swoleImg2 from "@public/assets/projects/lfstest.png";
import proshopImg from "@public/assets/projects/proshopmarkup.png";
import nbaImg from "@public/assets/projects/nbamarkup.png";
import movieBookImg from "@public/assets/projects/movieAndBook.png";
import tictactoeImg from "@public/assets/projects/tiktactoe.png";
import weatherImg from "@public/assets/projects/weather.png";
import ProjectItem from "./ProjectItem";

const Projects = ({ darkMode }) => {
  return (
    <div id="projects" className={darkMode ? "w-full bg-black" : "w-full"}>
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#379237]">
          Projects
        </p>
        <h2 className={darkMode ? "py-4 text-[#fff]" : "py-4"}>
          What I've Built
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            darkMode={darkMode}
            title="LETS FIT SWOLE"
            backgroundImage={swoleImg2}
            projectUrl="/letsfitswole"
            stack="MERN Stack"
          />
          <ProjectItem
            darkMode={darkMode}
            title="PROSHOP ECOMMERCE SITE"
            backgroundImage={proshopImg}
            projectUrl="/proshop"
            stack="MERN Stack"
          />
          <ProjectItem
            darkMode={darkMode}
            title="NBA STATS APP"
            backgroundImage={nbaImg}
            projectUrl="/nbaapp"
            stack="REACT"
          />
          <ProjectItem
            darkMode={darkMode}
            title="MOVIE/BOOK SEARCH APP"
            backgroundImage={movieBookImg}
            projectUrl="/movieandbookapp"
            stack="REACT"
          />
          <ProjectItem
            darkMode={darkMode}
            title="TIC TAC TOE"
            backgroundImage={tictactoeImg}
            projectUrl="/tictactoe"
            stack="REACT"
          />
          <ProjectItem
            darkMode={darkMode}
            title="WEATHER APP"
            backgroundImage={weatherImg}
            projectUrl="/weatherapp"
            stack="REACT"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
