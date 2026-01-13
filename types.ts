
import React from 'react';

export interface KPTService {
  id: string;
  name: string;
  url: string;
  icon: string;
  color: string;
  description: string;
}

export type Theme = 'light' | 'dark';

export interface NavItem {
  label: string;
  icon: React.ReactNode;
  path: string;
}