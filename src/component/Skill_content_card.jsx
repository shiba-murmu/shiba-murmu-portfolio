import React from "react";

function Skill_content_card({ children, heading, skills }) {
  return (
    <>
      {/* Heading */}
      <div className="rounded-xl h-[1rem] md:h-[3rem] flex gap-3 justify-center items-center">
        {children}
        <span className="font-bold text-2xl text-[var(--text-level-three-color)]">{heading}</span>
      </div>

      {/* Mobile view */}
      <div className="text-[var(--smallText-color)] flex justify-center items-center my-3 md:block">
        <ul className="text-md md:text-lg ">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="mb-2 w-30 flex items-center justify-between"
            >
              <span>{skill.name}</span>
              <img
                src={skill.icon}
                alt={skill.name}
                className="inline-block w-5 h-5"
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop view */}
      {/* <div className="hidden md:flex justify-center items-center gap-3 rounded-xl">
        <ul className="text-lg">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-center">
              <img
                src={skill.icon}
                alt={skill.name}
                className="inline-block w-6 h-6 mr-2"
              />
              {skill.name}
            </li>
          ))}
        </ul>
      </div> */}
      {/* <div className="hidden md:flex justify-center items-center gap-3 rounded-xl">
        <ul className="text-lg">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-center">
              <img
                src={skill.icon}
                alt={skill.name}
                className="inline-block w-6 h-6 mr-2"
              />
              {skill.name}
            </li>
          ))}
        </ul>
      </div> */}
    </>
  );
}

export default Skill_content_card;
