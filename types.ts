import React from 'react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Developer {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}