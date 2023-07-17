import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'My Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Kaushal',
  subtitle: "I'm the Unknown Developer.",
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am an experienced Software Engineer with over 2+ years of expertise in the IT industry. Armed with a strong background in Computer Science and a Bachelor of Engineering degree, I have successfully navigated through multiple domains and cutting-edge technologies. Throughout my journey, I have honed my skills in Software/Data Engineering, Cloud Computing, Apache Spark, and Blockchain, gaining hands-on experience through internships and real-world projects. As a Senior Software Engineer at Cloudwick Technologies, I have become proficient in leveraging AWS Serverless services and developing industry-level code. Additionally, I have acquired certifications in AWS, Data Analytics, and Hacking & Patching, further augmenting my skill set. My diverse experiences have also contributed to the development of my managerial, computing, programming, analytical, problem-solving, and communication skills, making me a well-rounded professional in the field.',
  paragraphTwo:
    'With an unwavering commitment to continuous growth and a thirst for staying at the forefront of advancements in Computer Science, I am excited to embark on the next phase of my academic journey. To complement my practical experiences, I am eager to pursue a Master of Computer Science program at Rice University, starting in Fall 2023. This pursuit reflects my dedication to expanding my expertise and pushing the boundaries of innovation in the field. As I move forward, I remain driven by the passion for making a meaningful impact, solving complex challenges, and contributing to the progress of the industry. My journey thus far has equipped me with the necessary skills and knowledge, and I am enthusiastic about embracing new challenges and exploring new horizons in the ever-evolving landscape of Computer Science.',
  paragraphThree:
    'I am always ready to adapt and work with new Technology. Security & Privacy comes first into my mind before starting anything afresh. Think More, Code Less!',
  resume: 'https://drive.google.com/file/d/1tMKKWhOf1ortURHQukP9m2QDGgcyrxeC/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Project3.png',
    title: 'BC Web Hosting Platform',
    info: 'A platform for hosting Website(1.0) using Ethereum Blockchain & IPFS Technology.',
    info2: 'Tech Stack --> Blockchain, IPFS, Metamask, Chrome Extension',
    url: 'https://youtu.be/BoGtQ4uK0-I',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project2.png',
    title: 'Web Reconnaissance',
    info: 'This tool is developed for passively scanning a Website completely with the help of many Github repositories.',
    info2: 'Tech Stack --> Python Scripting',
    url: 'https://www.youtube.com/watch?v=Bx8G4BnEbx8',
    repo: 'https://github.com/kaushalag29/Website-Scanners', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project1.png',
    title: 'Chat With Strangers',
    info: 'Simple Website Interface For Unknown Users To Chat With Each Other Using Random Nick-Name.',
    info2: 'Tech Stack --> Node.js(Express & Socket.io), MongoDB',
    url: 'https://youtu.be/8b7h7xvvCl8',
    repo: 'https://github.com/kaushalag29/Chat-WebSite', // if no repo, the button will not show up
  },
];

// CERTIFICATES DATA
export const certificatesData = [
  {
    id: nanoid(),
    img: 'Certificate1.png',
    title: 'AWS Certified SysOps Administrator Associate',
    validFrom: 'April 09, 2022',
    validUntil: 'April 09, 2025',
    url: 'https://www.credly.com/badges/9bf20796-e515-4a05-b752-8fa46dc90355/public_url',
  },
  {
    id: nanoid(),
    img: 'Certificate2.png',
    title: 'AWS Certified Solutions Architect Associate',
    validFrom: 'September 05, 2021',
    validUntil: 'September 05, 2024',
    url: 'https://www.credly.com/badges/e3e77629-f1e7-452c-b919-68fab2cc81b5/public_url',
  },
  {
    id: nanoid(),
    img: 'Certificate3.png',
    title: 'AWS Certified Developer Associate',
    validFrom: 'June 06, 2021',
    validUntil: 'June 06, 2024',
    url: 'https://www.credly.com/badges/3107e850-f35f-4060-8160-041824b9dd6e/public_url',
  },
  {
    id: nanoid(),
    img: 'Certificate4.png',
    title: 'EPFL - Big Data Analysis with Scala and Spark',
    validFrom: 'July 26, 2020',
    validUntil: 'Present',
    url: 'https://drive.google.com/file/d/1OG-2S0Y-LWHbujuq4v8umgciSJg0PA7K/view?usp=sharing',
  },
  {
    id: nanoid(),
    img: 'Certificate4.png',
    title: 'DeepLearning.AI - Neural Networks and Deep Learning',
    validFrom: 'May 10, 2020',
    validUntil: 'Present',
    url: 'https://drive.google.com/file/d/19DYxCQVq5wWedS-wi1PyJad-DeNaETjY/view?usp=sharing',
  },
  {
    id: nanoid(),
    img: 'Certificate4.png',
    title: 'University of Colorado - Hacking & Patching',
    validFrom: 'March 05, 2020',
    validUntil: 'Present',
    url: 'https://drive.google.com/file/d/1S1c-WvYZc2OalRCVCOMqRsRgqFFRMSRU/view?usp=sharing',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'work.kaushalag29@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'medium',
      url: 'https://kaushalagarwal-73962.medium.com/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/kaushal-kumar-agarwal-976854166',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/kaushalag29',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
