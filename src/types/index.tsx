import type {LucideIcon} from 'lucide-react';

export interface Project {
    title: string;
    description: string;
    image: string;
    tech: string[];
    accent: string;
    demo: string;
    code: string;
}

export interface Skill {
    category: string;
    icon: LucideIcon;
    items: string[];
}