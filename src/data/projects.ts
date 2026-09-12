// data/projects.ts
export interface Project {
  id: string;
  name: string;
  type: string;
  description: string;
  role: string;
  technologies: string[];
  keyFeatures: string[];
  technicalHighlights?: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "futuresend",
    name: "FutureSend",
    type: "Multi-Channel Messaging & Communication Platform",
    description: "A communication platform supporting messaging, scheduling and notification workflows.",
    role: "Full-Stack Developer / Team Lead",
    technologies: ["React Native", "NestJS", "MongoDB", "Twilio", "WebSockets", "Firebase / FCM", "AWS SES (Hands-on)"],
    keyFeatures: [
      "Messaging workflows",
      "SMS communication",
      "Email communication",
      "Conversation management",
      "Inbox",
      "Chat",
      "Schedule management",
      "Drafts",
      "History",
      "Notifications"
    ],
    technicalHighlights: [
      "Real-time updates",
      "WebSocket-based communication",
      "Twilio SMS/Voice integrations",
      "Backend APIs",
      "MongoDB data management",
      "Firebase notifications"
    ]
  },
  {
    id: "servira",
    name: "Servira",
    type: "Service Management & Work-Order Platform",
    description: "A multi-role service platform connecting customers, technicians, companies and administrators.",
    role: "Full-Stack Developer / Team Lead",
    technologies: ["React", "React Native", "Refine", "Ant Design", "Redux Toolkit", "RTK Query", "NestJS", "MongoDB", "WebSockets", "Google Maps", "Payments", "Firebase"],
    keyFeatures: [
      "Customer: Service scheduling, work-order tracking, live tracking",
      "Technician: Accept work orders, location routing, status updates",
      "Company: Monitor customers and technicians",
      "Admin: Technician and customer management, analytics"
    ],
    technicalHighlights: [
      "Real-time WebSocket communication",
      "Work-order state updates",
      "Live tracking",
      "Notifications",
      "Role-based workflows",
      "API-driven architecture",
      "Responsive web/admin interfaces",
      "React Native mobile application"
    ]
  },
  {
    id: "anvianos",
    name: "AnvianOS",
    type: "Service Operations / Work-Order Management Platform",
    description: "A mobile-focused service operations platform with work-order workflows, location tracking, notifications and real-time dashboard updates.",
    role: "Full-Stack Developer",
    technologies: ["React Native", "Expo", "NestJS", "WebSockets", "Google Maps", "Firebase / FCM", "Redux Toolkit", "RTK Query"],
    keyFeatures: [
      "Work-order management",
      "Technician workflows",
      "Google Maps location tracking",
      "Work-order status updates",
      "Notifications",
      "Dashboard updates",
      "Chat"
    ],
    technicalHighlights: [
      "Real-time operational updates through WebSockets",
      "Mobile API integration",
      "Android build and deployment workflow"
    ]
  },
  {
    id: "vetri-iq",
    name: "Vetri-IQ",
    type: "Competitive Exam & AI Learning Platform",
    description: "A modern platform for learning, mock tests, and AI-assisted educational workflows.",
    role: "Full-Stack Developer",
    technologies: ["React Native", "Next.js", "OpenAI API", "PostgreSQL"],
    keyFeatures: [
      "Mock tests",
      "Previous-year questions",
      "Learning content",
      "Books/resources",
      "AI-assisted workflows",
      "AI-powered content interactions",
      "User learning experience"
    ],
    technicalHighlights: [
      "Prompt Engineering",
      "AI-assisted workflows",
      "Structured AI responses",
      "Learning/content automation"
    ]
  },
  {
    id: "clipo",
    name: "Clipo",
    type: "Video & Tournament Media Platform",
    description: "A role-based platform for managing sports/tournament video content and related workflows.",
    role: "Full-Stack Developer",
    technologies: ["React", "NestJS", "MongoDB"],
    keyFeatures: [
      "Video/content management",
      "Tournament-related workflows",
      "Role-based access",
      "Content publishing/access"
    ]
  }
];
