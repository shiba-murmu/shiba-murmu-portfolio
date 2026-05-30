import profileImage from "../assets/images/profile/profile.webp";
import resume from "../assets/resume/resume.pdf";
import apnashop from '../assets/images/projects/apnashop.png'
const portfolioData = {
  heroData: {
    name: "Shiba Murmu",
    title: "Software Engineer",
    // heading : 'Crafting digital '
    description:
      " Computer Science Engineer | Full Stack Developer specializing in building high-performance web applications with React, modern cloud ecosystems, and optimized database pipelines.",
    image: profileImage,
    resumeLink: resume,
  },

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

  projects : {
    title : 'Ecommerce website',
    image : apnashop,
    description : '',
    techStack : ['Django', 'Tailwind CSS', 'Framer Motion', 'React 19'],
    githubLink : '',
    liveDemoLink : ''
  }




};

export default portfolioData;
