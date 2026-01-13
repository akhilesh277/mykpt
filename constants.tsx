
import React from 'react';
import { LayoutGrid, Search, Bell, User, BookOpen, Globe, Monitor, Code, CheckSquare, GraduationCap } from 'lucide-react';
import { KPTService } from './types';

export const KPT_SERVICES: KPTService[] = [
  {
    id: 'attendance',
    name: 'KPT Attendance',
    url: 'https://kptattendance.com',
    icon: 'CheckSquare',
    color: 'bg-blue-500',
    description: 'Track and manage your daily attendance.'
  },
  {
    id: 'official',
    name: 'Official Website',
    url: 'https://kpt.karnataka.gov.in',
    icon: 'Globe',
    color: 'bg-emerald-500',
    description: 'Main government portal for KPT Mangalore.'
  },
  {
    id: 'cs-website',
    name: 'KPT CS Website',
    url: 'https://kptcs.com',
    icon: 'Code',
    color: 'bg-indigo-500',
    description: 'Department of Computer Science portal.'
  },
  {
    id: 'modern',
    name: 'Modern Website',
    url: 'https://kptmodern.com',
    icon: 'Monitor',
    color: 'bg-purple-500',
    description: 'New interactive digital experience.'
  },
  {
    id: 'imarks',
    name: 'KPT iMarks',
    url: 'https://imarks.kpt.com',
    icon: 'GraduationCap',
    color: 'bg-amber-500',
    description: 'View examination marks and progress.'
  },
  {
    id: 'library',
    name: 'Digital Library',
    url: 'https://kptlibrary.com',
    icon: 'BookOpen',
    color: 'bg-rose-500',
    description: 'Access digital books and journals.'
  }
];

export const ICON_MAP: Record<string, any> = {
  CheckSquare,
  Globe,
  Code,
  Monitor,
  GraduationCap,
  BookOpen
};
