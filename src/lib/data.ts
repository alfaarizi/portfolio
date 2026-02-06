// Personal Information
export const personal_info = {
  first_name: 'Muhammad Al',
  last_name: 'Farizi',
  preferred_name: 'Zizi',
  email: 'ziziyusrizal@gmail.com',
  phone: '+36-20-8034400',
  city: 'Budapest',
  country: 'Hungary',
  title: 'AI Engineer, Pythonista',
  description: 'Senior CS @ ELTE • Prev: Quantum SWE @ QNL',
  bio: 'Building autonomous multi-agent systems.',
}

// Current Work
export const currently = [
  'QNL Junior Software Eng.',
  'ELTE Teaching Instructor',
  'TMS Full Stack Intern',
]

// Leadership
export const leadership = [
  'GDG ELTE Technical Lead',
  'ELTE Data Science Mentor',
  'Student Support Sr. Mentor',
]

// Skills
export const skills = [
  'LangChain',
  'LangGraph',
  'Multi-Agent Orchestration',
  'Tool Calling',
  'Prompt Engineering',
  'RAG Systems',
  'Vector Databases',
  'Semantic Search',
  'OpenAI API',
  'Python',
  'FastAPI',
  'React',
  'TypeScript',
  'ChromaDB',
  'MongoDB',
  'Docker',
]

// Projects
export const projects = [
  {
    id: 'agentic-quiz-generator',
    name: 'Agentic Quiz Generator',
    description: '45+ online users • 3 specialized agents',
    long_description:
      'Built a multi-agent AI system with 3 specialized agents (Generator, Evaluator, Augmenter) orchestrating 10+ tools for autonomous quiz generation, answer evaluation, and question augmentation.',
    technologies: ['LangGraph', 'FastAPI', 'OpenRouter'],
    image: '/images/projects/quiz-generator.jpg',
    gridArea: '1 / 1 / 3 / 3',
    objectPosition: 'left top',
    imageScale: 1.005,
    lightImage: true,
    live_url: 'https://quizai.fly.dev',
    github_url: 'https://github.com/alfaarizi/agentic-quiz-generator',
  },
  {
    id: 'qubit',
    name: 'Qubit',
    description: 'Quantum circuit visualization',
    long_description:
      'Built a full-stack quantum circuit application to design, simulate, and visualize circuit partitions with drag-and-drop composer supporting 30+ gate types, bidirectional OpenQASM 2.0 editor, and real-time job execution via WebSocket streaming.',
    technologies: ['FastAPI', 'React', 'D3.js'],
    image: '/images/projects/qubit.jpg',
    gridArea: '1 / 3 / 3 / 4',
    objectPosition: '8% 10%',
    imageScale: 1.1,
    live_url: 'https://dfe1.elte.hu',
    github_url: 'https://github.com/alfaarizi/qubit',
  },
  {
    id: 'inner-anima',
    name: 'Inner Anima',
    description: 'Godot game with CI/CD',
    long_description:
      'Led cross-functional team of 5 building GitLab CI/CD pipeline automating cross-platform builds, C# unit testing, and deployment for continuous delivery to itch.io. Implemented A* pathfinding algorithms with dead-end detection, line-of-sight optimization, and behavior trees.',
    technologies: ['C#', 'Godot', 'GitLab CI/CD'],
    image: '/images/projects/inner-anima.jpg',
    gridArea: '3 / 1 / 4 / 2',
    objectPosition: '10% bottom',
    live_url: 'https://mkdrdscf.itch.io/inneranimamono',
    github_url: 'https://github.com/alfaarizi/godot-mono-core',
  },
  {
    id: 'squander',
    name: 'SQUANDER',
    description: 'Quantum circuit partitioning',
    long_description:
      'Developed 4 quantum circuit partitioning algorithms for SQUANDER C++ library (Kahn\'s, ILP, TDAG, GTQCP), outperforming IBM Qiskit and BQSkit benchmarks. Implemented Python ILP optimization models using Gurobi/PuLP solvers.',
    technologies: ['C++', 'Python', 'Gurobi'],
    image: '/images/projects/squander.jpg',
    gridArea: '4 / 1 / 5 / 2',
    objectPosition: '80% top',
    imageScale: 1.1,
    live_url: '',
    github_url: 'https://github.com/rakytap/sequential-quantum-gate-decomposer',
  },
  {
    id: 'agentic-writing-assistant',
    name: 'Agentic Writing Assistant',
    description: 'RAG system with ChromaDB',
    long_description:
      'Built a multi-agent AI system using LangGraph state machines with conditional routing to orchestrate 6 specialized agents (Research, Writing, Personalization, Refiner, Quality Assurance, Gap Analyzer) for generating personalized professional writing.',
    technologies: ['LangGraph', 'ChromaDB', 'RAG'],
    image: '/images/projects/writing-assistant.jpg',
    gridArea: '3 / 2 / 5 / 4',
    objectPosition: '18% bottom',
    imageScale: 1.18,
    lightImage: true,
    live_url: 'https://agentic-writing-assistant.vercel.app',
    github_url: 'https://github.com/alfaarizi/agentic-writing-assistant',
  },
]

// Experience
export const experience = [
  {
    id: 'qnl-swe',
    company: 'QNL',
    position: 'Junior Software Engineer',
    type: 'engineering',
    start_date: 'April 2025',
    end_date: 'November 2025',
    description:
      'Researching and implementing quantum circuit partitioning strategies for the SQUANDER C++ library. Building optimization models using Python solvers and maintaining Python-C++ bindings.',
    achievements: [
      'Developed 4 quantum circuit partitioning algorithms for SQUANDER C++ library (Kahn\'s, ILP, TDAG, GTQCP), outperforming IBM Qiskit and BQSkit benchmarks',
      'Led architectural redesign on Rocky Linux that eliminated 94.2% of legacy codebase (10,702 lines)',
      'Implemented Python ILP optimization models using Gurobi/PuLP solvers',
    ],
    technologies: ['Python', 'C++', 'CMake', 'CPython', 'Gurobi', 'PuLP'],
  },
  {
    id: 'elte-progtech',
    company: 'ELTE IK',
    position: 'Teaching Instructor (Programming Technology)',
    type: 'teaching',
    start_date: 'September 2025',
    end_date: 'January 2026',
    description:
      'Leading weekly lab sessions and office hours for undergraduate students. Guiding students through software design principles, testing methodologies, and project-based assignments.',
    achievements: [
      'Conducting 2 weekly lab sessions (5 hours) for 30 students with coding consultations and assignment assessment',
    ],
    technologies: ['Java', 'OOP', 'Awt', 'Swing'],
  },
  {
    id: 'tms-intern',
    company: 'TMS',
    position: 'Full Stack Engineer Intern',
    type: 'engineering',
    start_date: 'February 2025',
    end_date: 'November 2025',
    description:
      "Supporting development and maintenance of ELTE's coding examination and plagiarism detection platform. Working with Yii Framework and React/TypeScript to implement new features.",
    achievements: [
      'Delivered 16 backend and frontend features using REST APIs through Yii Framework and React/TypeScript',
      'Resolved 6 Docker deployment conflicts by implementing configurable naming for environment-aware container isolation',
      'Developed multi-institutional deployment framework with customizable branding and 20 cross-platform email templates',
    ],
    technologies: ['REST APIs', 'Yii Framework', 'React.js', 'TypeScript', 'Docker'],
  },
  {
    id: 'elte-oop',
    company: 'ELTE IK',
    position: 'Teaching Instructor (OOP)',
    type: 'teaching',
    start_date: 'February 2025',
    end_date: 'June 2025',
    description:
      'Teaching core OOP concepts and Java programming to international student groups. Preparing lesson materials, running live coding demonstrations, and providing detailed feedback on student submissions.',
    achievements: [
      'Increased course pass rates from 40% to 92.5% through curriculum redesign',
      'Delivered 24 structured lessons to international students and evaluated 270+ coding submissions',
    ],
    technologies: ['Object-Oriented Programming', 'Java'],
  },
  {
    id: 'elte-bsc',
    company: 'ELTE',
    position: 'BSc Computer Science',
    type: 'education',
    start_date: 'September 2022',
    end_date: 'February 2026',
    description: 'GPA: 4.71/5.00 • Thesis: Visual Quantum Circuit Partitioner',
    achievements: [],
    technologies: [],
  },
]

// Recognitions
export const recognitions = [
  {
    id: 'stip-hung-excellence',
    title: 'Stipendium Hungaricum Excellence Award',
    issuer: 'Tempus Public Foundation',
    date: 'November 2025',
    description: 'STEM+ Category • Top 4 from ELTE',
    image: '/images/recognitions/stip-hung-excellence.jpg',
  },
  {
    id: 'qnl-scholarship',
    title: 'QNL Research Scholarship',
    issuer: 'QNL',
    date: 'September 2025',
    description: '2x Recipient • Quantum Lab',
    image: '/images/recognitions/qnl-scholarship.jpg',
  },
  {
    id: 'stip-hung',
    title: 'Stipendium Hungaricum Scholarship',
    issuer: 'Tempus Public Foundation',
    date: 'September 2022',
    description: 'Full BSc scholarship',
    image: '/images/recognitions/stip-hung.jpg',
  },
  {
    id: 'eit-digital',
    title: 'EIT Digital Summer School',
    issuer: 'EIT Digital',
    date: 'June 2023',
    description: '1st Place • Technical Pitch',
    image: '/images/recognitions/eit-digital.jpg',
  },
  {
    id: 'gdg-elte',
    title: 'GDG ELTE Technical Lead',
    issuer: 'Google Developers Group',
    date: 'October 2025',
    description: 'DevFest Budapest 2025',
    image: '/images/recognitions/gdg-elte.jpg',
  },
]

// Testimonials
export const testimonials = [
  {
    id: 'tibor-nikovits',
    name: 'Dr. Tibor Nikovits',
    position: 'Associate Professor, ELTE',
    relationship: 'Database Lecturer and Practice Teacher',
    quote:
      'Farizi has consistently demonstrated excellent academic performance and a high intellectual curiosity.',
    message:
      'I have known Farizi since February 2024. He took two of my database theory courses, namely Databases 1 in the spring semester of 2024 and Databases 2 in the fall semester. During this time, I have observed his academic growth and have come to appreciate his character and intellectual abilities.\n\nFarizi has consistently demonstrated excellent academic performance and a high intellectual curiosity throughout his studies. He stands out as the most active participant in class, contributing insightful and thought-provoking questions that reflect his deep understanding of the materials. I hold him in high intellectual esteem and rank Farizi above his peers in database design, administration, and management skills.\n\nIn addition to his strong intellect, Farizi displays exceptional follow-through on projects, which he consistently completes with thoroughness and accuracy. He regularly seeks feedback at the end of each class and goes beyond the course requirements by completing optional exercises, which he shares via email for further discussion. His work is always of high quality, and he reliably meets deadlines. In group settings, Farizi plays a leadership role. He leads discussions, clarifies doubts, and offers solutions when conflict arises. I have seen him adapt to different work styles, ensuring the group stays on track in a positive environment. He is a team player who contributes positively to group dynamics while valuing different perspectives.\n\nOverall, I am confident that Farizi will contribute positively is his new role. He excels academically, has strong analytical skills, and works effectively in teams. His dedication, proactive learning, and strong work ethic make him an ideal candidate.\n\nFor these reasons, I strongly recommend Farizi without reservation.',
    date: 'August 2025',
  },
  {
    id: 'balazs-pinter',
    name: 'Dr. Balázs Pintér',
    position: 'Associate Professor, ELTE',
    relationship: 'OOP Demonstrator Supervisor and AI Lecturer',
    quote:
      'He was very dependable and a great help, the materials he produced were very high quality.',
    message:
      'Zizi worked with me in the 2025 Spring semester. He was a practice teacher in my Object-Oriented Programming course, where he taught students how to design and implement OOP programs. He taught his class well and with great effect, and participated in the optional teacher\'s meetings, where he made great suggestions on how to improve the course and the experience of the students.\n\nMoreover, he volunteered to help me compile the teaching materials for the course. Most of the materials were newly introduced, so there was a lot of work to do. He was very dependable and a great help, the materials he produced were very high quality and needed only minor changes.\n\nI was his teacher in Software Technology class, where he had to build a complex Safari Management game in a four-person team. When the team started to get behind schedule he stepped up as the leader, assigned tasks according to the team member\'s strengths, offered mentorship, and organized discussions. Thanks to this they managed to get the excellent grade despite the initial hiccups. I can recommend him without reservation for future opportunities, and I am confident he will excel in his new role.',
    date: 'August 2025',
  },
  {
    id: 'asel-temiralieva',
    name: 'Asel Temiralieva',
    position: 'BSc ELTE Graduate',
    relationship: 'Colleague',
    quote:
      'One of the qualities that most stands out about Muhammad is his exceptional discipline and hard-working nature.',
    message:
      'I am writing to recommend my peer, Muhammad Al Farizi, with whom I studied for two years in the Computer Science B.Sc. program at Eötvös Loránd University (ELTE). I had the opportunity to observe his work ethic and character throughout our studies, and I believe he deserves strong recognition.\n\nOne of the qualities that most stands out about Muhammad is his exceptional discipline and hard-working nature. While most students at ELTE aim to complete the standard credit load, Muhammad consistently took on around 20% more coursework than average and, impressively, completed it successfully with excellent results. This reflects not only his intelligence but also his dedication and ability to manage a heavy workload effectively.\n\nI often saw Muhammad late at night in the university library, still studying long after many of us had gone home. His commitment to learning, even beyond regular class hours, demonstrated his persistence and genuine passion for Computer Science.\n\nBeyond his academic performance, Muhammad is also a respected and well-liked member of the student community. He is approachable, open-minded, and quick to make friends with both local and international students. His communication skills make him easy to talk to, and it is clear that many students hold him in high regard. He has a natural ability to connect with others, which adds to the positive atmosphere of our program.\n\nFrom my perspective, Muhammad is the kind of student who not only excels individually but also elevates the environment around him. His combination of discipline, intellectual curiosity, and interpersonal skills makes him a valuable peer and a promising professional.\n\nI strongly recommend Muhammad Al Farizi for any opportunity he seeks.',
    date: 'August 2025',
  },
]

// Social Links
export const social_links = {
  github: 'https://github.com/alfaarizi',
  gitlab: 'https://gitlab.com/alfaarizi',
  linkedin: 'https://linkedin.com/in/alfaarizi',
  twitter: 'https://x.com/alfaarizi04',
  instagram: 'https://www.instagram.com/al.faarizi',
}

// Contact
export const contact = {
  email: 'ziziyusrizal@gmail.com',
  description:
    "I'm always open to discussing AI engineering opportunities, multi-agent systems, or research collaborations. Feel free to reach out.",
}
