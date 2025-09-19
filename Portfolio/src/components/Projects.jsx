import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { projectData } from "../assets/assets"; // ✅ import your project data

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

// 🔹 Custom Arrow Components
const CustomLeftArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="custom-arrow left"
  >
    ◀
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="custom-arrow right"
  >
    ▶
  </button>
);

function Projects() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Section Heading */}
      <div className="text-center w-fit mx-auto mt-20">
        <h1 className="project-head text-[2.5rem] font-[700] text-[#1e293b]">
          Featured Projects
        </h1>
        <div className="hr w-[60px] h-[4px] mx-auto mt-3"></div>
      </div>

      {/* Carousel */}
      <div className="carousel">
        <Carousel
          swipeable
          draggable
        //   showDots
          responsive={responsive}
          ssr // server-side rendering
          infinite
        //   autoPlay
          autoPlaySpeed={2000}
          keyBoardControl
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          customTransition="all .5"
          transitionDuration={2500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {projectData.map((p, i) => (
            <div key={i} className="project-card bg-white rounded-[5px] shadow-md mx-3">
                
                <div className="icon-div h-[200px] flex justify-center items-center text-[3rem] relative text-white w-full">
                    {p.icon}
                </div>
                <div className="p-6">
                    <h2 className="text-xl font-bold text-[#1e293b] mb-2">{p.name}</h2>
                    <p className="text-gray-600 mb-4">{p.description}</p>
                    
                    <div className="tech-stack flex flex-wrap gap-2 mt-3">
                      {p.techStack.map((tech, index) => (
                        <div
                          key={index}
                          className="tech-item bg-[#e0e7ff] px-3 py-1 w-fit rounded-[50px] text-sm font-medium text-[#1e293b]"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex justify-between">
                        <a href={p.projectLink} target="_blank" rel="noopener noreferrer"> <span>🔗</span> Live Demo</a>

                        <a href={p.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline"> <span>📂</span>GitHub</a>
                    </div>
                </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Projects;
