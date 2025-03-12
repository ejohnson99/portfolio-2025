import { InsertMessage, InsertProject, Message, Project } from "@shared/schema";

export interface IStorage {
  getProjects(): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;
  createMessage(message: InsertMessage): Promise<Message>;
}

export class MemStorage implements IStorage {
  private projects: Map<number, Project>;
  private messages: Map<number, Message>;
  private currentProjectId: number;
  private currentMessageId: number;

  constructor() {
    this.projects = new Map();
    this.messages = new Map();
    this.currentProjectId = 1;
    this.currentMessageId = 1;
    this.initializeProjects();
  }

  private initializeProjects() {
    const sampleProjects: InsertProject[] = [
      {
        title: "Mobile Banking App Redesign",
        description: "A complete redesign of a major bank's mobile application",
        imageUrl: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
        category: "Mobile App",
        details: {
          challenge: "Modernize the banking experience while maintaining security",
          solution: "User-centered design approach with extensive testing",
          outcome: "35% increase in user engagement"
        }
      },
      {
        title: "E-commerce Dashboard",
        description: "Analytics dashboard for online retailers",
        imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
        category: "Web App",
        details: {
          challenge: "Complex data visualization needs",
          solution: "Modular dashboard with customizable widgets",
          outcome: "Reduced decision-making time by 40%"
        }
      },
      // Add remaining 6 projects with corresponding images
    ];

    sampleProjects.forEach(project => {
      const id = this.currentProjectId++;
      this.projects.set(id, { ...project, id });
    });
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getProject(id: number): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async createMessage(message: InsertMessage): Promise<Message> {
    const id = this.currentMessageId++;
    const newMessage = { ...message, id };
    this.messages.set(id, newMessage);
    return newMessage;
  }
}

export const storage = new MemStorage();
