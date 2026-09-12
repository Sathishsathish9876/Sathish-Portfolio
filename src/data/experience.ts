// data/experience.ts
export interface Experience {
  id: string;
  company: string;
  designation: string;
  duration: string;
  experience: string;
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    id: "vidmagin",
    company: "Vidmagin Innovations Private Limited",
    designation: "MTS-I | Full-Stack Developer / Team Lead",
    duration: "August 2024 – Present",
    experience: "2+ years",
    responsibilities: [
      "Developed and maintained production web, mobile and admin applications across multiple business workflows.",
      "Worked across frontend, backend, mobile development, databases, APIs, debugging, testing, deployment support and client requirements.",
      "Built and integrated 100+ APIs using NestJS/Node.js, MongoDB and PostgreSQL.",
      "Developed responsive web applications using React.js, Next.js, Redux Toolkit, RTK Query, Ant Design and Refine.",
      "Developed cross-platform mobile applications using React Native and Expo.",
      "Implemented real-time features using WebSockets for work-order updates, live tracking, notifications, dashboard updates and chat.",
      "Implemented service workflows including scheduling, work-order assignment, technician availability, customer tracking, job execution and completion updates.",
      "Integrated Google Maps and location-based workflows.",
      "Integrated Twilio for SMS and voice communication.",
      "Implemented Firebase/FCM notifications.",
      "Implemented Stripe and Razorpay payment workflows including checkout, payment verification, status handling and webhooks.",
      "Built AI-powered workflows using OpenAI APIs including prompt engineering, JD scoring, candidate evaluation, skill matching and ATS shortlisting.",
      "Worked with MongoDB, PostgreSQL and Redis for application data, queries, transactions, indexing, caching and sessions.",
      "Participated in requirements analysis, development, debugging, testing, code reviews, Git workflows and deployment coordination.",
      "Worked as a Team Lead for a 5-member team, handling task allocation, technical guidance, code reviews, requirement analysis, bug prioritization, client communication, delivery coordination and mentoring."
    ]
  }
];
