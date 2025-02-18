import recnn from "@/public/recnn.png";
import ALDDS from "@/public/ALDDS_frontpage.png";
import xie from "@/public/xie.png";
import dc from "@/public/durham.svg";
import indiawyn from "@/public/indiawyn.jpeg";
import bitkraft_logo from "@/public/bitkraft_logo.jpeg";
import r_r_logo from "@/public/r_r_logo.jpeg";
import genie_ai from "@/public/genie_ai_logo.jpeg";
import knorket_logo from "@/public/knorket_logo.jpeg";
import x_pay_ss from "@/public/x_pay_ss.png";
import finplay_diagram from "@/public/finplay_diagram.png";

export const links = [
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects", // Corrected "Project" to "Projects" to match plural usage elsewhere.
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const personalData = {
  roles: ["Full Stack Engineer", "Frontend Engineer", "Cloud Engineer"],
  linkedin: "https://www.linkedin.com/in/nikhillohar2297/", // Corrected spelling from "linkden" to "linkedin".
  github: "https://github.com/nikhil2297",
  about: `Full Stack Developer with 4+ years of experience, specializing in React, TypeScript, and cloud technologies. Strong background in building scalable, accessible web applications and microservice architectures. Passionate about distributed systems, DevOps, and real-time data processing.`,
};

export const skillsData = [
  {
    id: "id0",
    name: "Frontend",
    stack: ["React", "Angular", "TypeScript"],

  },
  {
    id: "id1",
    name: "Backend",
    stack: ["Node.js", "Express.js"],
  },
  {
    id: "id2",
    name: "Database",
    stack: ["PostgreSQL"],
  },
  {
    id: "id3",
    name: "DevOps",
    stack: ["AWS", "Docker", "Kubernetes", "Apache Kafka", "Redis","Nginx", "Jmeter"],
  },
  {
    id: "id4",
    name: "Version Control",
    stack: ["Git", "Github-Action"], // Corrected "Juypter" to "Jupyter" and "Sckit learn" to "Scikit-learn".
  },
  {
    id: "id5",
    name: "Ongoing",
    stack: ["Rust", "Java"],
  },
] as const;


export const experienceData = [
  {
    index: 1,
    id: "exp1",
    name: "Genie AI",
    title: "Software Engineer",
    image: genie_ai,
    location: "Toronto, CA",
    description: `Architected and developed a comprehensive component library using React, TypeScript, and Atomic Design principles, creating reusable UI components that reduced development time by 30% and enabled cross-project standardization
                  . Implemented pixel-perfect responsive UI components from Figma designs while integrating accessibility features following WCAG guidelines, significantly improving application usability for all users
                  . Developed event-driven API architecture using FastAPI and Server-Sent Events (SSE), resulting in 30% improved latency for real-time data delivery
                  . Collaborated with UX team to establish and maintain frontend development standards, participating in code reviews and contributing to technical documentation`,
    date: "Mar 2024 - August 2024",
  },
  {
    index: 2,
    id: "exp2",
    name: "Knorket AI",
    title: "Data Engineer",
    image: knorket_logo,
    location: "Toronto, CA",
    description: `Architected and implemented a distributed data validation framework using PySpark, creating a framework-agnostic expectation system that enabled customizable validation rules for large-scale data processing
. Developed a React-based data visualization dashboard with TypeScript, implementing a frontend validation system using custom hooks and Context API to streamline data interpretation
. Collaborated cross-functionally with design teams to maintain consistent UI/UX, ensuring seamless integration between backend validation framework and frontend components`,
    date: "Feb 2023 - April 2024",
  },
  {
    index: 3,
    id: "exp3",
    name: "Research and Ranking",
    title: "Fullstack Developer",
    image: r_r_logo,
    location: "Mumbai, IN",
    description: `Architected and developed a comprehensive serverless infrastructure on AWS, scaling APIs to handle over 5,000 requests/second for lead funneling, while implementing domain-driven microservices for onboarding, invoice generation, and PDF utilities. Developed a responsive frontend interface using React and TypeScript, creating modular, reusable components that reduced code duplication by 40%. Enhanced application performance through lazy loading and code splitting techniques, while implementing robust CI/CD pipelines using GitHub Actions for streamlined frontend deployments.`,    date: "Jan 2023 - August 2023",
  },
  {
    index: 4,
    id: "exp4",
    name: "Bitkraft Technologies",
    title: "Software Engineer",
    location: "Mumbai, IN",
    image: bitkraft_logo,
    description: `Developed and maintained a comprehensive global UI component library with automated CI/CD pipeline and extensive documentation, achieving 98% accessibility score in Lighthouse audits. Led development of EDA platform from system design to production deployment, while creating a platform-agnostic file upload service that resolved critical Android compatibility issues. Implemented robust frontend testing initiatives using Jest and React Testing Library, achieving 85% test coverage, while mentoring junior developers in React best practices and modern frontend development patterns.`,
    date: "Sept 2020 - July 2022",
  },
  {
    index: 5,
    id: "exp5",
    name: "Indiawyn Gaming",
    image: indiawyn,
    title: "Junior Developer",
    location: "Mumbai, IN",
    description: `Significantly enhanced web application performance through optimization of React and Angular lifecycle events, reducing initial load time by 45% and implementing responsive design patterns for cross-browser compatibility. Developed comprehensive automated testing infrastructure using Selenium with Excel-based reporting and detailed test coverage analysis. Engineered WebSocket service to enable real-time gaming updates while maintaining optimal performance across the application stack.`,
    date: "Jan 2019 - July 2020",
  },
] as const;

export const projectData = [
  {
    name : "FinPlay",
    description : "Developed a financial trading platform using Angular and Spring Boot, integrating stocks using Yahoo Finance API. Implemented authentication using AWS Congnito and JWT for secure user access. With microservice AWS architecture.",
    date: "Sept 2024 - Dec 2024",
    tags: ["Angular", "Spring Boot", "Flask", "Docker", "AWS", "AWS Congnito", "ECS", "RDS"],
    imageUrl: finplay_diagram,
    link: "https://medium.com/@nikhillohar2297/finplay-cloud-architecture-a-scalable-and-secure-design-699828c3de08"
  },
    {
        name : "XPay",
        description: "Designed and implemented a high-throughput payment system capable of handling 10,000+ concurrent requests, utilizing BullMQ for payment status management and WebSocket integration for real-time updates. Developed a responsive, mobile-first frontend interface using React and TypeScript with custom hooks for state management and API integration. Built secure authentication microservice using JWT and public/private key encryption, while implementing a distributed caching service using Redis to optimize system performance.",
        date: "June 2024 - August 2024",
        tags: ["Node.js", "RabbitMQ", "Redis", "WebSockets", "UPI", "JWT"],
        imageUrl: x_pay_ss,
        link: ""
    },
  {
    name: "ALLDIS",
    description: "Developed an autonomous waste management system integrating ROS for robot control, YOLOv8 for real-time litter detection, and Django-based interface for drone monitoring and navigation.",
    date: "Jan 2024 - April 2024",
    tags: ["Python", "Tkinter", "OpenCV", "Yolov8", "Tello SDK"],
    imageUrl: ALDDS,
    link: "https://github.com/TLAndrewMarkDale/CapstoneII_Group15_ALDDS.git",
  },
  {
    name: "RecNN",
    description: "Developed a scalable music recommendation platform using Next.js and Flask, implementing a KNN-based recommendation engine with Spotify API integration for personalized playlist generation. Created an intuitive, responsive user interface featuring an accessible custom audio player component with keyboard controls, while implementing client-side caching to optimize performance and enhance user experience.",
    date: "Sept 2023 - Dec 2023",
    tags: ["React", "Next.js", "Chakra UI", "Flask", "Numpy", "Pandas", "scikit-learn"],
    imageUrl: recnn,
    link: "https://github.com/nikhil2297/DataDivers_MusicRecommendationApp",
  },
] as const;

export const educationData = [
    {
    index: 0,
    id: "edu0",
    title: "Durham College",
    location: "Oshawa, Canada",
    date: "May 2024 - Dec 2024",
    image: dc,
    name: "Post Graduate in Cloud Computing",
    description: "",
  },
  {
    index: 1,
    id: "edu1",
    title: "Durham College",
    location: "Oshawa, ON, Canada",
    date: "Sept 2023 - April 2024",
    image: dc,
    name: "Postgraduate in Artificial Intelligence and Machine Learning",
    description: "",
  },
  {
    index: 1,
    id: "edu2",
    title: "Xavier Institute of Engineering",
    location: "Mumbai, India",
    image: xie,
    date: "Jun 2014 - May 2018",
    name: "Bachelor of Engineering in Information Technology", // Corrected "Bachelors" to "Bachelor" for grammar accuracy.
    description: "",
  },
];
