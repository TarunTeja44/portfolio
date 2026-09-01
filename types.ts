import React from 'react';

export type ProjectCategory = 'all' | 'ai' | 'systems' | 'web';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  tagline: string;
  description: string;
  fullOverview?: string;
  tags: string[];
  metrics?: { label: string; value: string }[];
  keyFeatures?: string[];
  imageUrl: string;
  link?: string;
  github?: string;
  stars?: number;
  featured?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level: number; highlighted?: boolean }[];
}

export interface SocialLink {
  id: string;
  name: string;
  handle: string;
  url: string;
  icon: React.ReactNode;
}