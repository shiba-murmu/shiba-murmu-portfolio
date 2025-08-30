import React from "react";
import Urls from "../component/urls";
import HeadingText from "../component/HeadingText";
import Skill_content_card from "../component/Skill_content_card";

function Technical_skills() {
  // Data arrays for each category
  const languages = [
    { name: "Python", icon: Urls.PYTHON },
    { name: "JavaScript", icon: Urls.JAVASCRIPT },
    { name: "Java", icon: Urls.JAVA },
    { name: "C", icon: Urls.C },
  ];

  const frameworks = [
    { name: "Django", icon: Urls.DJANGO },
    { name: "React", icon: Urls.REACT },
    { name: "Tailwind CSS", icon: Urls.TAILWIND_CSS },
    { name: "Bootstrap", icon: Urls.BOOTSTRAP },
  ];

  const databases = [{ name: "MySQL", icon: Urls.MYSQL }];

  const tools = [
    { name: "Git", icon: Urls.GIT },
    { name: "GitHub", icon: Urls.GITHUB },
    { name: "VS Code", icon: Urls.VSCODE },
    { name: "Postman", icon: Urls.POSTMAN },
  ];

  return (
    <div className="md:h-[70vh] p-5">
      {/* Section Heading */}
      {/* Skills Section */}
      <div className="mt-20 mb-5 md:my-15 flex justify-center">
        <HeadingText Children={"Technical Skills"} />
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-1 gap-y-3">
        {/* Languages */}
        <Skill_content_card heading="Languages" skills={languages}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 hidden md:block md:size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
            />
          </svg>
        </Skill_content_card>

        {/* Frameworks */}
        <Skill_content_card heading="Framework & Library" skills={frameworks}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 md:size-10 hidden md:block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
            />
          </svg>
        </Skill_content_card>

        {/* Database */}
        <Skill_content_card heading="Database Skills" skills={databases}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 md:size-10 hidden md:block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
            />
          </svg>
        </Skill_content_card>

        {/* Tools */}
        <Skill_content_card heading="Tools & Technologies" skills={tools}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 md:size-10 hidden md:block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
            />
          </svg>
        </Skill_content_card>
      </div>
    </div>
  );
}

export default Technical_skills;
