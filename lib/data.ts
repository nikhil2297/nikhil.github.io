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
  roles: ["Full Stack Engineer", "Data Engineer", "Cloud Engineer"],
  linkedin: "https://www.linkedin.com/in/nikhillohar2297/", // Corrected spelling from "linkden" to "linkedin".
  github: "https://github.com/nikhil2297",
  about: `I'm a versatile Full Stack Engineer with 4 years of experience specializing in Java and TypeScript, with expertise in Microservice Architecture and Distributed Systems. Completed Cloud Computing and AI studies at Durham College, I combine technical prowess with a passion for innovation. My experience spans across various domains including AI-driven solutions, data engineering, and cloud architecture, enabling me to deliver robust and scalable solutions.`,
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
    stack: ["Java", "Node.js", "FastAPI", "Python"],
  },
  {
    id: "id2",
    name: "Database",
    stack: ["PostgreSQL", "MongoDB"],
  },
  {
    id: "id3",
    name: "DevOps",
    stack: ["AWS", "Docker", "Kubernetes", "Terraform", "Apache Kafka"],
  },
  // {
  //   id: "id4",
  //   name: "Machine Learning",
  //   stack: ["Jupyter Notebook", "Scikit-learn"], // Corrected "Juypter" to "Jupyter" and "Sckit learn" to "Scikit-learn".
  // },
  // {
  //   id: "id5",
  //   name: "Ongoing",
  //   stack: ["Rust", "Prometheus"],
  // },
] as const;

export const experienceData = [
  {
    index: 1,
    id: "exp1",
    name: "Genie AI",
    title: "Software Engineer",
    image: genie_ai,
    location: "Toronto, CA",
    description: `Designed and implemented a component library using Atomic Design principles, creating reusable React components for cross-project standardization. Developed event-driven API architecture using FastAPI and SSE, optimizing real-time data delivery with 30% improved latency.`,
    date: "Mar 2024 - August 2024",
  },
  {
    index: 2,
    id: "exp2",
    name: "Knorket AI",
    title: "Data Engineer",
    image: knorket_logo,
    location: "Toronto, CA",
    description: `Designed a distributed data validation framework using PySpark for large-scale data processing. Created a framework-agnostic data expectation system with customizable validation rules.`,
    date: "Feb 2023 - April 2024",
  },
  {
    index: 3,
    id: "exp3",
    name: "Research and Ranking",
    title: "Fullstack Developer",
    image: r_r_logo,
    location: "Mumbai, IN",
    description: `Created and maintained Serverless APIs over an event-driven architecture on AWS and microservices for lead funneling via marketing campaigns, scaling to over 5000 requests per second. Implemented user session management, invoice generation, pdf utility, and Portfolio Execution unit microservices using event-driven architecture.`,    date: "Jan 2023 - August 2023",
  },
  {
    index: 4,
    id: "exp4",
    name: "Bitkraft Technologies",
    title: "Software Engineer",
    location: "Mumbai, IN",
    image: bitkraft_logo,
    description: `Developed and maintained global UI component library with automated CI/CD pipeline. Led development of EDA platform from system design to production deployment. Created platform-agnostic file upload service resolving critical Android compatibility issues.`,
    date: "Sept 2020 - July 2022",
  },
  {
    index: 5,
    id: "exp5",
    name: "Indiawyn Gaming",
    image: indiawyn,
    title: "Junior Developer",
    location: "Mumbai, IN",
    description: `Enhanced SPA performance through optimization of Angular lifecycle events. Built automated testing service using Selenium with Excel-based reporting. Developed WebSocket service for real-time gaming updates.`,
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
        description: "Designed high-throughput payment system handling 10,000+ concurrent requests. Built message queue system using BullMQ for payment status management. Implemented secure authentication microservice using JWT and public/private key encryption. Created distributed caching service using Redis for optimal performance.",
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
    description: "Built scalable music recommendation platform using Next.js and Flask, implementing KNN-based recommendation engine with Spotify API integration for personalized playlist generation.",
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
