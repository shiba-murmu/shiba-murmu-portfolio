import React, { useState, useRef } from "react";
import profileImage from "../assets/images/profile/profile.webp";
import resume from "../assets/resume/resume.pdf";
import apnashop from "../assets/images/projects/apnashop.png";
import careerlift from "../assets/images/projects/careerlift.png";
import chichat from "../assets/images/projects/chichat.png";
import foodiemedia from "../assets/images/projects/foodiemedia.png";
import buyme from "../assets/images/projects/buyme.png";
import { Layout, Cpu, Database, GitBranch } from "lucide-react";
import { backIn } from "framer-motion";
const portfolioData = {
  // Hero.jsx section showcase .
  heroData: {
    name: "Shiba Murmu",
    title: "Software Engineer",
    // heading : 'Crafting digital '
    description:
      " Computer Science Engineer | Full Stack Developer specializing in building high-performance web applications with React, modern cloud ecosystems, and optimized database pipelines.",
    image: profileImage,
    resumeLink: resume,
  },

  //   About sections showcase : About.jsx
  //   This data is for using about section in about.jsx file
  aboutSectionData: {
    aboutHiglight_stack: [
      "Python",
      "Django",
      "Tailwind CSS",
      "Framer Motion",
      "React 19",
    ],
    cardOne: {
      title: "The Stack and Execution",
      d1: "As a Computer Science Engineering graduate and Full Stack Developer, I don't just write scripts; I build robust digital infrastructure. My technical approach bridges scalable API architectures with highly interactive user interfaces.",
      d2: " Whether deploying backend features with Django and optimizing database indexing or engineering smooth, responsive frontends in React 19, I focus entirely on system efficiency, clean component architecture, and optimal user experiences.",
    },
    cardTwo: {
      title: "COMPUTER SCIENCE",
      course: "B.Tech",
    },
    cardThree: {
      title: "COMPONENT DRIVEN",
      text: "100%",
    },
    cardFour: {
      title: "Frontend Layer",
      des: "Engineering highly performant dynamic rendering systems using React 19, custom hooks, and smooth layout systems like Framer Motion.",
    },
    cardFive: {
      title: "Backend Logic",
      des: " Building highly modular enterprise logic systems, secure custom JWT auth flows, and clean multi-tenant backend engines.",
    },
    cardSix: {
      title: "Data Optimization",
      des: "Designing structural data layouts, handling migrations smoothly, and executing precise cross-platform API queries.",
    },
  },

  //   Production showcase : projects sections
  //   In this section we will show the projects that we have done in the past and we will show the project name, description, tech stack, github link and live demo link.

  // use just add the project in the projects array and it will be displayed in the projects section of the website. we can add as many projects as we want and it will be displayed in the projects section of the website.
  projects: [
    {
      title: "APNA SHOPPING",
      type: "Ecommerce Web Application",
      description:
        "Developed a full-stack ecommerce platform with a React 19 frontend and Django backend. Engineered a dynamic product catalog, secure user authentication, and seamless checkout flow, optimizing performance and user experience across devices.",
      image: apnashop,
      metrics: ["Token Latency Reduced by 40%", "Context Window Optimization"],
      tags: ["React 19", "Django", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://apna-shop-eta.vercel.app/",
      githubUrl: "https://github.com/shiba-murmu/Apna-shop",
    },
    {
      title: "CAREERLIFT SYSTEM MANAGEMENT",
      type: "Full-Stack Resource Platform",
      description:
        "Designed a secure career management portal featuring multi-tier user workflows. Built a responsive frontend connected to a robust data engine, utilizing strict token access systems to protect user records.",
      image: careerlift,
      metrics: ["Secure State Management", "JWT Session Management"],
      tags: [
        "React 19",
        "react-toastify",
        "gsap",
        "material ui",
        "flowbite-react",
        "Tailwind CSS",
        "Framer Motion",
        "swipper",
        "tsparticles",
      ],
      liveUrl: "https://career-lift-system.vercel.app/",
      githubUrl: "https://github.com/shiba-murmu/career-lift-system-project",
    },
    {
      title: "CHICHAT",
      type: "Real-time messaging web Application",
      description:
        "Built a real-time chat application with a modern UI, enabling seamless communication between users with features like message persistence and user authentication.",
      image: chichat,
      metrics: ["Real-time Messaging", "User Authentication"],
      tags: ["React 19", "react-toastify", "Tailwind CSS"],
      liveUrl: "https://new-version-chichat.vercel.app/",
      githubUrl: "https://github.com/shiba-murmu/ChiChat",
    },
    {
      title: "FOODIE MEDIA",
      type: "Food Delivery Web Application",
      description:
        "Developed a full-stack food delivery platform with a React 19 frontend and Django backend. Engineered a dynamic menu system, secure user authentication, and seamless order processing flow, optimizing performance and user experience across devices.",
      image: foodiemedia,
      metrics: ["Token Latency Reduced by 40%", "Context Window Optimization"],
      tags: ["React 19", "Tailwind CSS", "React-slick", "Slick-carousel"],
      liveUrl: "https://foodiemedia.vercel.app/home",
      githubUrl: "https://github.com/shiba-murmu/Discover-your-recipe",
    },
    {
      title: "BUYME",
      type: "Ecommerce website [ internship project ]",
      description:
        "Developed a full-stack ecommerce platform with a React 19 frontend and Django backend. Engineered a dynamic product catalog, secure user authentication, and seamless checkout flow, optimizing performance and user experience across devices.",
      image: buyme,
      metrics: ["Token Latency Reduced by 40%", "Context Window Optimization"],
      tags: ["Html", "css", "Php", "Bootstrap"],
      liveUrl: "not found",
      githubUrl: "https://github.com/shiba-murmu/buyme-project",
    },
  ],

  //   Contact section data : Contact.jsx
  contactData: {
    email: "shibamurmu001@gmail.com",
    phone: "+91 620447413",
    location: "Jamshedpur, Jharkhand, IN",
    socialLinks: {
      github: "https://github.com/shiba-murmu",
      linkedin: "https://www.linkedin.com/in/shibamurmu/",
      instagram: "https://www.instagram.com/shibajsr/",
    },
  },

  //   Education and experience data will display here

  //   education data will be displayed in the education section of the website. we can add as many education as we want and it will be displayed in the education section of the website. we can also add milestones for each education and it will be displayed in the education section of the website.
  educationData: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Jharkhand University of Technology",
      duration: "2021 — 2025",
      borderColor: "from-purple-500/30 to-pink-500/10",
      glowColor: "rgba(147, 51, 234, 0.12)",
      iconColor: "text-purple-400",
      description:
        "Successfully completed full 8th Semester core computer science curriculum requirements. Specialization focus tailored toward algorithms, advanced engineering architectures, database logic, and scalable web routing scripts.",
      milestones: [
        "Completed 8th Sem CSE academic requirements",
        "Core architecture thesis tailored to web applications",
      ],
    },
    {
      degree: "Intermediate in Science",
      institution: "Central Board of Secondary Education (CBSE)",
      duration: "2019 — 2021",
      borderColor: "from-purple-500/30 to-pink-500/10",
      glowColor: "rgba(147, 51, 234, 0.12)",
      iconColor: "text-purple-400",
      description:
        "Successfully completed the intermediate science curriculum with a focus on mathematics, physics, and Physical education. Developed a strong foundation in scientific principles and analytical thinking, preparing for advanced studies in computer science engineering.",
      milestones: [
        "Completed intermediate science curriculum with a focus on mathematics, physics, and Physical education",
        "Developed a strong foundation in scientific principles and analytical thinking",
      ],
    },
    {
      degree: "Matriculation",
      institution: "Central Board of Secondary Education (CBSE)",
      duration: "2009 - 2019",
      borderColor: "from-purple-500/30 to-pink-500/10",
      glowColor: "rgba(147, 51, 234, 0.12)",
      iconColor: "text-purple-400",
      description:
        "Successfully completed the matriculation curriculum with a focus on core sciences and mathematics. Built a solid academic foundation for further studies in computer science and engineering.",
      milestones: [
        "Completed matriculation curriculum with a focus on core sciences and mathematics",
        "Built a solid academic foundation for further studies in computer science and engineering",
      ],
    },
  ],

  //   Experience data will be displayed in the experience section of the website. we can add as many experience as we want and it will be displayed in the experience section of the website. we can also add milestones for each experience and it will be displayed in the experience section of the website.
  experienceData: [
    {
      role: "Web Development Internship",
      organization: "Generix info tech",
      duration: "Jun 2025 — Aug 2025",
      borderColor: "from-cyan-500/30 to-blue-500/10",
      glowColor: "rgba(6, 182, 212, 0.12)",
      iconColor: "text-cyan-400",
      description:
        "Successfully processed comprehensive skill evaluations and integrated modern web interface systems. Collaborating on system performance optimizations and building clean, responsive functional modules.",
      milestones: [
        "Completed targeted tech skill assessments",
        "Maintained highly responsive front-end components",
      ],
    },
    // {
    //   role: "Professional Internship Program",
    //   organization: "Perpex",
    //   duration: "Sep 2025 — Oct 2025",
    //   borderColor: "from-cyan-500/30 to-blue-500/10",
    //   glowColor: "rgba(6, 182, 212, 0.12)",
    //   iconColor: "text-cyan-400",
    //   description:
    //     "Selected to participate in professional agile sprint environments. Successfully configured enterprise version control parameters, localized remote code bases, and managed repository branch workflows safely.",
    //   milestones: [
    //     "Configured multi-branch repository cloning workflows",
    //     "Reviewed code base logic loops in fast-paced sprints",
    //   ],
    // },
    // {
    //   role: "Junior Web Developer",
    //   organization: "Mello",
    //   duration: "Jun 2025 — Aug 2025",
    //   borderColor: "from-cyan-500/30 to-blue-500/10",
    //   glowColor: "rgba(6, 182, 212, 0.12)",
    //   iconColor: "text-cyan-400",
    //   description:
    //     "Secured placement engineering role following standard application sprints. Built full-stack responsive web systems and refined interactive application interfaces using micro-component patterns.",
    //   milestones: [
    //     "Cracked technical candidate evaluation track",
    //     "Designed lightweight UI states to handle variable user data",
    //   ],
    // },
  ],

  //   this data is belongs to skills group set,
  skillSet: {
    frontend: [
      "React 19",
      "Vite",
      "Tailwind CSS v4",
      "Framer Motion",
      "Bootstrap 5",
    ],
    backend: ["Python", "Django", "RESTful APIs", "JWT Auth Engine"],
    database: ["PostgreSQL", "Firebase", "MySQL", "Vercel Systems"],
    tooling: [
      "Git / GitHub",
      "Lucide Architecture",
      "Lenis Smooth Scroll",
      "Vibe Coding Assets",
      "Clean Architecture",
      "Post man",
    ],
  },
};

export default portfolioData;
