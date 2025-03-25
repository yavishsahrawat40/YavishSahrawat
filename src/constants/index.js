import project1 from "../assets/projects/project-1.ico";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import eliteforums_logo from "../assets/experience/eliteforums_logo.jpeg";

export const HERO_CONTENT = `I am a skilled Full Stack Developer with expertise in the MERN stack (MongoDB, Express.js, React, and Node.js). Having completed a comprehensive industrial certification course by SmartInternz, I am proficient in building dynamic, responsive web applications. My technical acumen extends to database design, API development, and creating user-centric interfaces. With a passion for continuous learning and problem-solving, I am eager to contribute to innovative projects and drive impactful solutions.`;

export const ABOUT_TEXT = `I am a dedicated Full Stack Developer with expertise in the MERN stack (MongoDB, Express.js, React, and Node.js), complemented by an industrial certification in Full Stack Development from SmartInternz. I have a strong foundation in creating scalable, dynamic, and user-friendly web applications, with a focus on both front-end and back-end development. My skills include designing robust databases, building RESTful APIs, and developing responsive interfaces that enhance user experiences. Passionate about technology and continuous learning, I thrive on solving complex problems and contributing to impactful projects that make a difference.`;

export const EXPERIENCES = [
  {
    year: "Jan 2025 - Mar 2025",
    role: "Full Stack Developer Intern",
    company: "Elite Forums",
    logo: eliteforums_logo,
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, Node.js and Express.js . Implemented RESTful APIs and integrated with Firebase and its databases.`,
    technologies: ["Javascript", "React.js", "Node.js", "Firebase", "Express.js"],
  },
//   {
//     year: "2022 - 2023",
//     role: "Frontend Developer",
//     company: "Adobe",
//     description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
//     technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
//   },
//   {
//     year: "2021 - 2022",
//     role: "Full Stack Developer",
//     company: "Facebook",
//     description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
//     technologies: ["Python", "Svelte", "Three.js", "Postgres"],
//   },
//   {
//     year: "2020 - 2021",
//     role: "Software Engineer",
//     company: "Paypal",
//     description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
//     technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
//   },
];

export const PROJECTS = [
  {
    title: "Spotify Clone",
    image: project1,
    description:
      "The Spotify Clone is a web-based application built using HTML, CSS, and JavaScript, designed to mimic the user interface and functionality of the popular music streaming platform.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Book Next",
    image: project2,
    description:
      "Book Nest is a comprehensive online bookstore platform designed for users, sellers, and administrators, offering seamless browsing, purchasing, and management of books.",
    technologies: ["React", "Node.js", "Express.js", "MongoDb"],
  },
  {
    title: "PassOp - Personal Password Manager",
    image: project4,
    description:
      "A platform for storing the username, website name and passwords of the your various accounts with easy excess.",
    technologies: ["HTML", "CSS", "React", "Node.js"],
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
  // address: " ",
  phoneNo: "+91 7814624833 ",
  email: "yavisahrawat@gmail.com",
};
