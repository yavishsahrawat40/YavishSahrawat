import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project5 from "../assets/projects/Project-5.png";
import project6 from "../assets/projects/project-6.jpeg";
import manufacturingCover from "../assets/projects/covers/manufacturing-data-agent.svg";
import laneDetectionCover from "../assets/projects/covers/lane-detection.svg";
import knowledgeSearchCover from "../assets/projects/covers/knowledge-search.svg";
import budgetBoxCover from "../assets/projects/covers/budget-box.svg";
import trelloCloneCover from "../assets/projects/covers/trello-clone.svg";

import eliteforums_logo from "../assets/experience/eliteforums_logo.jpeg";
import d4_logo from "../assets/experience/d4-logo.png";

export const HERO_CONTENT = `Hey! I'm a data-driven builder focused on machine learning, data science, and full-stack engineering. I enjoy turning messy problems into intelligent models, RAG systems, dashboards, APIs, and polished web products.`;

export const ABOUT_TEXT = `I'm a data-driven problem solver with a strong foundation in machine learning and software engineering. I like building systems that connect useful interfaces with intelligent backend workflows, from full-stack apps to NLP, computer vision, and RAG-based AI tools.

My work spans React, Node.js, Firebase, Python, PyTorch, TensorFlow, FastAPI, LangChain, vector databases, and cloud foundations. I am especially interested in data science problems where the end result is not just a model, but a product experience that people can actually use.`;

export const EDUCATION = {
  school: "Vellore Institute of Technology, Andhra Pradesh",
  degree: "B.Tech in Computer Science",
  duration: "Sept 2022 - Jun 2026",
  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "AWS Cloud Foundations",
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
    "Operating Systems",
    "Computer Networks",
    "Fundamentals of Data Analytics",
  ],
};

export const CERTIFICATIONS = [
  "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
];

export const EXPERIENCES = [
  {
    year: "Dec 2025 - Present",
    role: "Full Stack Developer Intern",
    company: "D4-XAI",
    logo: d4_logo,
    description: `Collaborating with product and engineering teams on an Agentic AI platform. Built RAG agents using LLMs, vector databases, and retrieval pipelines, while developing React frontend components and Node.js/Express backend APIs for intelligent multi-step workflows.`,
    technologies: ["React.js", "Node.js", "Express.js", "LLMs", "RAG", "Vector Databases"],
  },
  {
    year: "Jan 2025 - Mar 2025",
    role: "Full Stack Developer Intern",
    company: "Elite Forums",
    logo: eliteforums_logo,
    description: `Developed and maintained features for a web app using React.js, Node.js, and Firebase. Improved performance bottlenecks by analyzing interaction data, resulting in a 35% faster response time, and built profile dashboard and registration workflows.`,
    technologies: ["Javascript", "React.js", "Node.js", "Firebase", "Express.js"],
  },
];

export const SKILL_GROUPS = [
  {
    title: "Data Science & Machine Learning",
    items: [
      "Python",
      "SQL",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "NLTK",
      "Matplotlib",
      "Seaborn",
      "OpenCV",
      "YOLOv8",
      "Hugging Face Transformers",
      "LLMs",
      "LangChain",
      "LangGraph",
      "Ollama",
    ],
  },
  {
    title: "Web, Cloud & Databases",
    items: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "React.js",
      "Node.js",
      "Express.js",
      "Three.js",
      "REST APIs",
      "JSON",
      "Streamlit",
      "FastAPI",
      "AWS",
      "MongoDB",
      "MySQL",
      "Firebase Firestore",
      "ChromaDB",
    ],
  },
  {
    title: "Developer Tools",
    items: ["Figma", "Canva", "MS Excel", "Git", "GitHub", "VS Code", "Agile Development", "Postman", "CI/CD Pipelines"],
  },
  {
    title: "Languages & Collaboration",
    items: ["Java", "JavaScript", "Analytical Thinking", "Problem Solving", "Requirement Analysis", "Communication", "Teamwork"],
  },
];

export const PROJECTS = [
  {
    title: "Manufacturing Data Agent",
    role: "MERN + local LLM RAG chatbot",
    image: manufacturingCover,
    imageFit: "cover",
    description:
      "A full-stack AI chatbot for manufacturing data that answers questions about suppliers, inventory, purchase orders, and production batches using local LLM inference.",
    highlights: [
      "Built a MERN application with Ollama-powered local LLM responses for privacy-friendly AI workflows.",
      "Implemented RAG-style context injection over manufacturing JSON data for grounded answers.",
      "Added a MongoDB feedback loop so users can flag poor AI responses for later analysis.",
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Ollama", "RAG"],
    githubUrl: "https://github.com/yavishsahrawat40/Manufacturing-Data-Agent",
    liveUrl: "",
  },
  {
    title: "Real-Time Lane Detection & Departure Warning System",
    role: "Deep learning computer vision system",
    image: laneDetectionCover,
    imageFit: "cover",
    description:
      "A Python-based advanced driver assistance system for real-time lane departure warnings and adjacent-lane obstacle detection.",
    highlights: [
      "Integrated U-Net for lane segmentation and YOLOv8 for object detection.",
      "Trained on combined TuSimple and CULane datasets with Albumentations data augmentation.",
      "Built an OpenCV post-processing pipeline with BEV transform and temporal smoothing, achieving 97.6% accuracy.",
    ],
    technologies: ["Python", "OpenCV", "NumPy", "PyTorch", "U-Net", "YOLOv8", "Albumentations"],
    githubUrl: "https://github.com/yavishsahrawat40/Smart-Real-Time-Lane-Detection-Departure-Warning-System-using-Deep-Learning",
    liveUrl: "",
  },
  {
    title: "Knowledge Based Search Engine",
    role: "LLM and Generative AI RAG app",
    image: knowledgeSearchCover,
    imageFit: "cover",
    description:
      "A full-stack Retrieval-Augmented Generation application for conversational Q&A over user-uploaded PDF documents.",
    highlights: [
      "Used LangChain to orchestrate document Q&A workflows.",
      "Integrated Ollama with Llama 3 and ChromaDB for local answer generation and semantic search.",
      "Built a decoupled FastAPI backend and Streamlit frontend for document processing and uploads.",
    ],
    technologies: ["Python", "FastAPI", "LangChain", "Streamlit", "Ollama", "ChromaDB", "Sentence Transformers"],
    githubUrl: "https://github.com/yavishsahrawat40/Knowledge-Based-Search-Engine",
    liveUrl: "",
  },
  {
    title: "Budget Box",
    role: "Offline-first budget analytics app",
    image: budgetBoxCover,
    imageFit: "cover",
    description:
      "A modern budget tracking app with offline-first storage, smart analytics, cloud sync, authentication, and a premium glassmorphism interface.",
    highlights: [
      "Built with Next.js, TypeScript, Tailwind CSS, Zustand, MongoDB, IndexedDB, and Recharts.",
      "Implemented auto-save and offline-first behavior so budgeting data remains usable without internet.",
      "Added analytics such as category breakdowns, burn rate, savings potential, and month-end predictions.",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "MongoDB", "IndexedDB", "Recharts"],
    githubUrl: "https://github.com/yavishsahrawat40/Budget-Box",
    liveUrl: "",
  },
  {
    title: "Trello Clone",
    role: "Type-safe project management app",
    image: trelloCloneCover,
    imageFit: "cover",
    description:
      "A full-stack Trello-style board app with drag-and-drop task management, inline editing, optimistic updates, and a polished glassmorphism UI.",
    highlights: [
      "Built type-safe frontend and backend flows using React, TypeScript, Node.js, Express, and MongoDB.",
      "Implemented drag-and-drop task reordering and cross-column movement with instant UI feedback.",
      "Added full CRUD operations for boards, columns, and tasks with responsive layouts.",
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Mongoose", "Tailwind CSS"],
    githubUrl: "https://github.com/yavishsahrawat40/Trello-Clone",
    liveUrl: "",
  },
  {
    title: "CPM-Based Hierarchical Text Classification",
    role: "Deep learning and NLP model",
    image: project6,
    imageFit: "cover",
    description:
      "A hierarchical classification system for nuanced text analysis using deep learning, prompt-aware design, and domain-specific fine-tuning.",
    highlights: [
      "Integrated pre-trained embeddings and fine-tuning with domain-specific data.",
      "Benchmarked model performance using F1-score and precision-recall.",
      "Achieved a 15% improvement over baseline results.",
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "LSTMs", "Transformers", "Cloud Platforms"],
    githubUrl: "https://github.com/yavishsahrawat40/CPM-Based-Classification",
    liveUrl: "",
  },
  {
    title: "SwiftShip",
    role: "AI-capable logistics platform",
    image: project5,
    imageFit: "contain",
    description:
      "SwiftShip is a full-stack, AI-capable logistics platform built with React and Firebase. It optimizes last-mile delivery with route automation, real-time fleet tracking, and sustainability insights.",
    highlights: [
      "Modeled route assignment and fleet tracking flows for last-mile delivery operations.",
      "Used Firebase-backed app architecture for real-time logistics workflows.",
      "Added sustainability-focused insights to connect product decisions with operational impact.",
    ],
    technologies: ["React", "Tailwind CSS", "Firebase"],
    githubUrl: "https://github.com/yavishsahrawat40/swiftShip",
    liveUrl: "",
  },
  {
    title: "Book Nest",
    role: "Full-stack bookstore platform",
    image: project2,
    imageFit: "cover",
    description:
      "A multi-role bookstore platform for browsing, purchasing, selling, and managing books through a full-stack MERN workflow.",
    highlights: [
      "Designed user, seller, and admin flows for a complete marketplace-style experience.",
      "Structured the application around browsing, purchasing, and book management tasks.",
      "Built with a React frontend and Node/Express backend connected to MongoDB.",
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDb"],
    githubUrl: "https://github.com/yavishsahrawat40/bookNest",
    liveUrl: "",
  },
  {
    title: "Portfolio Website",
    role: "Personal brand website",
    image: project3,
    imageFit: "contain",
    description:
      "A personal portfolio website showcasing projects, skills, experience, and contact information through a modern React interface.",
    highlights: [
      "Built a personal site to present projects, technical skills, and career information.",
      "Used React components to keep sections modular and easy to evolve.",
      "Refined visual presentation with responsive layouts and motion.",
    ],
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    githubUrl: "https://github.com/yavishsahrawat40/YavishSahrawat",
    liveUrl: "",
  },
];

export const CONTACT = {
  phoneNo: "+91 7814624833",
  email: "yavisahrawat@gmail.com",
  github: "https://github.com/yavishsahrawat40",
  linkedin: "https://www.linkedin.com/in/yavish-sahrawat-62017325/",
};
