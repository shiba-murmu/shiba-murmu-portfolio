import profileImage from "../assets/images/profile/profile.webp";
import resume from "../assets/resume/resume.pdf";
import apnashop from "../assets/images/projects/apnashop.png";
import careerlift from "../assets/images/projects/careerlift.png";
import chichat from "../assets/images/projects/chichat.png";
import foodiemedia from "../assets/images/projects/foodiemedia.png";
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
};

export default portfolioData;
