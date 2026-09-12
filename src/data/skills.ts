// data/skills.ts
export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "SQL"]
  },
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Redux Toolkit", "RTK Query", "Ant Design", "Refine Framework", "Responsive UI"]
  },
  {
    title: "Mobile Development",
    skills: ["React Native", "Expo", "Firebase", "FCM", "Mobile API Integration", "Navigation", "Maps & Location", "Camera", "Video", "File Upload", "Android Builds", "EAS"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "NestJS", "FastAPI", "REST APIs", "WebSockets", "Microservices", "Swagger / OpenAPI", "Authentication", "Authorization", "JWT", "RBAC", "PBAC", "Cron Jobs", "File Upload", "Notifications", "Queues / BullMQ"]
  },
  {
    title: "Databases",
    skills: ["MongoDB (Aggregation, Lookup, Indexing, Transactions)", "Mongoose", "PostgreSQL (Joins, Keys, Transactions)", "Firebase", "Redis (Caching, Sessions)"]
  },
  {
    title: "AI & Integrations",
    skills: ["OpenAI APIs", "Prompt Engineering", "Resume Parsing", "JD Scoring", "Candidate Evaluation", "ATS Shortlisting", "Skill Matching", "Structured AI Responses", "Twilio (SMS, Voice, Webhooks)", "Stripe", "Razorpay"]
  },
  {
    title: "Cloud & DevOps (Hands-on)",
    skills: ["AWS", "EC2", "S3", "SES", "IAM", "CloudWatch", "Route 53", "Load Balancer", "ECR", "ECS", "RDS", "VPC", "Docker", "Kubernetes", "Terraform"]
  },
  {
    title: "Monitoring & Observability (Hands-on)",
    skills: ["Prometheus", "Grafana", "CloudWatch"]
  },
  {
    title: "Development Tools",
    skills: ["Git", "GitHub", "Postman", "Swagger", "API Testing", "Debugging"]
  }
];
