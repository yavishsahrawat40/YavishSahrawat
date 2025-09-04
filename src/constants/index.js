import project1 from "../assets/projects/project-1.ico";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/Project-5.png";
import project6 from "../assets/projects/project-6.jpeg";

import eliteforums_logo from "../assets/experience/eliteforums_logo.jpeg";

export const HERO_CONTENT = `Hey! I’m a Full Stack Developer who loves turning ideas into sleek, scalable web apps. I work with the MERN stack, dabble in AI/ML & cloud tech, and enjoy building projects that make an impact. When I’m not coding, I’m usually exploring new tech, brainstorming hackathon ideas, or learning something fresh every day.`;

export const ABOUT_TEXT = `I’m a Full Stack Developer passionate about building impactful web applications that blend clean design with powerful functionality. With hands-on experience in the MERN stack, cloud computing (AWS), and AI/ML integration, I thrive on solving complex problems and transforming them into seamless digital experiences.

When I’m not debugging or optimizing systems, I’m exploring cutting-edge technologies, contributing to hackathons, and continuously learning to push my skills further. My goal? To craft solutions that don’t just work — they wow.`;

export const EXPERIENCES = [
  {
    year: "Jan 2025 - Mar 2025",
    role: "Full Stack Developer Intern",
    company: "Elite Forums",
    logo: eliteforums_logo,
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, Node.js and Express.js . Implemented RESTful APIs and integrated with Firebase and its databases.`,
    technologies: ["Javascript", "React.js", "Node.js", "Firebase", "Express.js"],
  }
];

export const PROJECTS = [
  {
    title: "Book Nest",
    image: project2,
    description:
    "Book Nest is a comprehensive online bookstore platform designed for users, sellers, and administrators, offering seamless browsing, purchasing, and management of books.",
    technologies: ["React", "Node.js", "Express.js", "MongoDb"],
  },
  {
    title: "SWIFTSHIP - THE FUTURE OF LAST-MILE DELIVERY",
    image: project5,
    description:
    "SwiftShip is a full-stack, AI-capable logistics platform built with React and Firebase that optimizes last-mile delivery by automating route assignments, providing real-time fleet tracking, and offering sustainability insights to reduce operational costs",
    technologies: ["React", "Tailwind CSS", "Firebase"],
  },
  {
    title: "Hierarchical Text Classification model",
    image: project6,
    description:
    "Developed a Hierarchical Text Classification model powered by a Concept-aware Prompt Mechanism (CPM), leveraging DistilBERT to capture contextual relationships across multiple label levels, improving both accuracy and interpretability in complex text categorization tasks.",
    technologies: ["Python", "PyTorch", "Datasets","DistilBERT"],
  },
  {
    title: "PassOp - Personal Password Manager",
    image: project4,
    description:
    "A platform for storing the username, website name and passwords of the your various accounts with easy excess.",
    technologies: ["HTML", "CSS", "React", "Node.js"],
  },
  {
    title: "Spotify Clone",
    image: project1,
    description:
      "The Spotify Clone is a web-based application built using HTML, CSS, and JavaScript, designed to mimic the user interface and functionality of the popular music streaming platform.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
];

export const CONTACT = {
  phoneNo: "+91 7814624833 ",
  email: "yavisahrawat@gmail.com",
};
