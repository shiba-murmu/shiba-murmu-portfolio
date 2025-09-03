import React from "react";

function Skill_content_card({ children, heading, skills }) {
    return (
        <>
            {/* Heading */}
            <div>
                <div className="rounded-xl h-[1rem] md:h-[3rem] flex gap-3 justify-center items-center">
                    {children}
                    <span className="font-bold  text-2xl text-[var(--text-level-three-color)]">{heading}</span>
                </div>

                {/* Mobile view */}
                <div className="  text-[var(--smallText-color)] flex justify-center items-center my-3 h-full md:block">
                    <ul className="text-md md:text-lg  md:flex md:flex-col md:justify-center md:items-center">
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
            </div>



        </>
    );
}

export default Skill_content_card;
