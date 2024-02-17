import recnn from "@/public/recnn.png"
import xie from '@/public/xie.png';
import dc from '@/public/durham.svg';
import indiawyn from '@/public/indiawyn.jpeg'
import bitkraft_logo from '@/public/bitkraft_logo.jpeg'
import r_r_logo from '@/public/r_r_logo.jpeg'

export const links = [
    {
        name: "About",
        hash: "#about"
    },
    {
        name: "Skills",
        hash: "#skills"
    },
    {
        name: "Experience",
        hash: "#experience"
    },
    {
        name: "Project",
        hash: "#project"
    },
    {
        name: "Education",
        hash: "#education"
    },{
        name: "Contact",
        hash: "#contact"
    }
] as const;

export const personalData = {
    roles: ["FullStack Developer", "Mobile App Developer", "Programmer"],
    linkden: "https://www.linkedin.com/in/nikhillohar2297/",
    github: "https://github.com/nikhil2297",
    about: `I'm a versatile and motivated developer who loves to learn new things and take on exciting challenges. I'm currently exploring Rust, Web3 and backend technologies to expand my skills and create innovative solutions. I always strive to deliver high-quality results and make a positive impact with my work. I have a growth mindset and a passion for learning that drives me to achieve great things`
};

export const skillsData = [
    {   
        id: "id0",
        name : "Frontend",
        stack: [
            "React",
            "Redux",
            "Next.Js",
            "Angular",
            "Flutter",
            "Javascript",
            "Typescript",
            "Dart",
        ] 
    },
    {
        id: "id1",
        name: "Backend",
        stack: [
            "NodeJs",
            "ExpressJs",
            "Flask",
            "Redis",
            "Python",
        ]
    },
    {
        id: "id2",
        name: "Database",
        stack: [
            "Postgres SQL",
            "MySql"
        ]
    },
    {
        id: "id3",
        name: "DevOps",
        stack: [
            "Docker",
            "Ngnix"
        ]
    },
    {
        id: "id4",
        name: "Machine Learning",
        stack: [
            "Juypter Notebook",
            "Sckit learn"
        ]
    },
    {
        id: "id5",
        name: "Ongoing",
        stack: [
            "Rust",
            "Kubernets",
            "Prometheus"
        ]
    }
] as const;

export const experienceData = [
    {   
        index: 1,
        id: 'exp1',
        name: "Research and Ranking",
        title: "Fullstack Developer",
        image: r_r_logo,
        location: "Mumbai, IN",
        description: `Significant strides have been made to increase productivity and accelerate processes. An appointment scheduler and calendar were created, leading to a 1.5 times boost in the sales team’s productivity. To enhance user experience and efficiency, a robust API for appointments was engineered, reducing front-end loading time by 30%. The integration of the National ID Aadhar API and OTP Service for agreement signing resulted in a remarkable 60% acceleration in client onboarding. Further streamlining was achieved through the implementation of end-to-end automation from Payment (Paytm Payment Service) to Invoice creation (JsDom). This initiative cut down processing time from 24-48 hours and reached a containment level of 92%.`,
        date: "Jan 2023 - August 2023",
    },
    {
        index: 2,
        id: 'exp2',
        name: "Bitkraft Technologies",
        title: "Software Engineer",
        location: "Mumbai, IN",
        image: bitkraft_logo,
        description: `Efficiently initiated the development of a global UI component library, which remarkably boosted productivity by 40% across diverse projects. Diligently led the comprehensive development process of an EDA project, encompassing everything from meticulous requirement gathering to robust development and deployment using Docker containers. Successfully resolved a challenging file upload bug in the Ionic framework for Android.`,
        date: "Sept 2020 - July 2022",
    },
    {
        index: 3,
        id: 'exp3',
        name: "Indiawyn Gaming",
        image: indiawyn,
        title: "Junior Developer",
        location: "Mumbai, IN",
        description: `Conducted research to optimize Single Page Applications using Angular.js and its lifecycle events, leading to significant enhancements in application performance. Expertly resolved website bugs, which resulted in a notable improvement in web functionality. Innovatively created an end-to-end automation testing process using Selenium, maintained via an Excel sheet, thereby streamlining the testing process.`,
        date: "Jan 2019 - July 2020",
    }
] as const;

export const projectData = [
    {
        name: "RecNN",
        description: "Reasoning: Portmanteau of Recommendation + Nearest Neighbours and a play on reckoning. Since we're calculating or estimating recommendations for a particular song, we feel this is perfect",
        date: "Sept 2023 - Dec 2023",
        tags: ["React", "Next.js", "Chakra UI", "Flask", "Numpy", "Pandas", "scikit-learn"],
        imageUrl: recnn,
        link: "https://github.com/nikhilohardc/DataDivers_MusicRecommendationApp"
    },
] as const;

export const educationData = [
    {
        index: 0,
        id: 'edu1',
        title: "Durham College",
        location : "Oshawa, ON, Canada",
        date: "Sept 2023 - Present",
        image: dc,
        name : "Postgraduate in Artificial Intelligence and Machine Learning",
        description: ""
    },
    {
        index: 1,
        id: 'edu2',
        title: "Xavier Institute of Engineering",
        location : "Mumbai, India",
        image: xie,
        date: "Jun 2014 - May 2018",
        name : "Bachelors of Engineering in Information Technology",
        description: ""
    }
]