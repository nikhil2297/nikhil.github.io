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
  roles: ["FullStack Developer", "Mobile App Developer", "Programmer"],
  linkedin: "https://www.linkedin.com/in/nikhillohar2297/", // Corrected spelling from "linkden" to "linkedin".
  github: "https://github.com/nikhil2297",
  about: `I'm an adaptable and driven developer who thrives on learning new technologies and embracing exciting challenges. Currently, I'm working on a SaaS product called Event Pub to manage and track user events, while also learning Rust to broaden my technical expertise. I consistently strive to deliver high-quality results and build impactful solutions. With a growth mindset and a passion for continuous learning, I'm committed to achieving excellence in everything I do.`,
};

export const skillsData = [
  {
    id: "id0",
    name: "Frontend",
    stack: [
      "React",
      "Redux",
      "Next.Js",
      "Angular",
      "Flutter",
      "Javascript",
      "Typescript",
      "Dart",
    ],
  },
  {
    id: "id1",
    name: "Backend",
    stack: ["NodeJs", "ExpressJs", "Flask", "Redis", "Python"],
  },
  {
    id: "id2",
    name: "Database",
    stack: ["Postgres SQL", "MySQL"], // Corrected "MySql" to "MySQL" for consistency.
  },
  {
    id: "id3",
    name: "DevOps",
    stack: ["Kubernetes", "Terraform", "Docker", "Nginx"], // Corrected "Ngnix" to "Nginx".
  },
  {
    id: "id4",
    name: "Machine Learning",
    stack: ["Jupyter Notebook", "Scikit-learn"], // Corrected "Juypter" to "Jupyter" and "Sckit learn" to "Scikit-learn".
  },
  {
    id: "id5",
    name: "Ongoing",
    stack: ["Rust", "Prometheus"],
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
    description: `During my internship at Genie AI, I spearheaded the development of a comprehensive component library, featuring dynamic elements such as the All Graph widget powered by React Charts. Currently, I am immersed in crafting a cutting-edge module within our product ecosystem. This module not only facilitates AI model training for chatbot creation but also seamlessly integrates with websites utilizing webpack technology. This project encapsulates my dedication to innovation and proficiency in software engineering, contributing significantly to Genie AI's mission of advancing AI-driven solutions.`,
    date: "Mar 2024 - November 2024",
  },
  {
    index: 2,
    id: "exp2",
    name: "Knorket AI",
    title: "Data Engineer",
    image: knorket_logo,
    location: "Toronto, CA",
    description: `Developed Python package for data validation, integrating PySpark, Trino, and Great Expectations. Allows local or hosted PySpark validation with Trino DB sourcing. Addresses data access concerns, enabling local validation. Key components include DataValidation, ColumnExpectation, and ToParquet classes. Modular architecture enables easy customization. Utilizes PySpark for distributed processing and Great Expectations for validation. Attached comprehensive report details project overview, objectives, tech stack, class descriptions, flow diagram, and learned insights. 40% project completion.`,
    date: "Sept 2023 - Feb  2024",
  },
  {
    index: 3,
    id: "exp3",
    name: "Research and Ranking",
    title: "Fullstack Developer",
    image: r_r_logo,
    location: "Mumbai, IN",
    description: `Significant strides have been made to increase productivity and accelerate processes. An appointment scheduler and calendar were created, leading to a 1.5 times boost in the sales team’s productivity. To enhance user experience and efficiency, a robust API for appointments was engineered, reducing front-end loading time by 30%. The integration of the National ID Aadhar API and OTP Service for agreement signing resulted in a remarkable 60% acceleration in client onboarding. Further streamlining was achieved through the implementation of end-to-end automation from Payment (Paytm Payment Service) to Invoice creation (JsDom). This initiative cut down processing time from 24-48 hours and reached a containment level of 92%.`,
    date: "Jan 2023 - August 2023",
  },
  {
    index: 4,
    id: "exp4",
    name: "Bitkraft Technologies",
    title: "Software Engineer",
    location: "Mumbai, IN",
    image: bitkraft_logo,
    description: `Efficiently initiated the development of a global UI component library, which remarkably boosted productivity by 40% across diverse projects. Diligently led the comprehensive development process of an EDA project, encompassing everything from meticulous requirement gathering to robust development and deployment using Docker containers. Successfully resolved a challenging file upload bug in the Ionic framework for Android.`,
    date: "Sept 2020 - July 2022",
  },
  {
    index: 5,
    id: "exp5",
    name: "Indiawyn Gaming",
    image: indiawyn,
    title: "Junior Developer",
    location: "Mumbai, IN",
    description: `Conducted research to optimize Single Page Applications using Angular.js and its lifecycle events, leading to significant enhancements in application performance. Expertly resolved website bugs, which resulted in a notable improvement in web functionality. Innovatively created an end-to-end automation testing process using Selenium, maintained via an Excel sheet, thereby streamlining the testing process.`,
    date: "Jan 2019 - July 2020",
  },
] as const;

export const projectData = [
    {
        name : "XPay",
        description: "Architected high-level system design based on research of Indian payment systems. Developed a secure Admin panel for managing offline payments, transaction statuses, and user roles. Built a UPI and bank transfer gateway with encrypted transactions. Implemented Node.js APIs with JWT and public/private key authentication for merchants. Optimized backend using RabbitMQ for 10,000+ requests, Redis for caching, and WebSockets for offline payment requests.",
        date: "June 2024 - August 2024",
        tags: ["Node.js", "RabbitMQ", "Redis", "WebSockets", "UPI", "JWT"],
        imageUrl: x_pay_ss,
        link: ""
    },
  {
    name: "ALLDIS",
    description: "Created an autonomous litter detection and collection system utilizing ROS for robot control. Employed computer vision algorithms to detect and pinpoint litter within the environment. Engineered a collection mechanism enabling the robot to effectively pick up and store litter. Additionally, developed a user interface facilitating real-time monitoring of robot status, litter detection, and drone control.",
    date: "Jan 2024 - April 2024",
    tags: ["Python", "Tkinter", "OpenCV", "Yolov8", "Tello SDK"],
    imageUrl: ALDDS,
    link: "https://github.com/TLAndrewMarkDale/CapstoneII_Group15_ALDDS.git",
  },
  {
    name: "RecNN",
    description: "Reasoning: Portmanteau of Recommendation + Nearest Neighbours and a play on reckoning. Since we're calculating or estimating recommendations for a particular song, we feel this is perfect.",
    date: "Sept 2023 - Dec 2023",
    tags: ["React", "Next.js", "Chakra UI", "Flask", "Numpy", "Pandas", "scikit-learn"],
    imageUrl: recnn,
    link: "https://github.com/nikhil2297/DataDivers_MusicRecommendationApp",
  },
] as const;

export const educationData = [
  {
    index: 0,
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
