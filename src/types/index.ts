export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'E-Commerce' | 'Software' | 'Healthcare' | 'ServiceNow' | 'Recruitment' | 'EdTech';
  domain: string;
  overview: string;
  challenge: string;
  approach: string;
  built: string[];
  tech: string[];
  link?: string;
  color: string;
  video?: string;
  image?: string;
  metrics?: { label: string; value: string }[];
  pipeline?: string[];
}

export interface Service {
  id: string;
  num: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  capabilities: string[];
  techStack: string[];
  highlight?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  service: string;
  budget?: string;
  message: string;
}
