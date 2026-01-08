
import React from 'react';
import { Shield, Zap, MessageSquare, Settings, Users, Terminal } from 'lucide-react';
import { Feature, Developer, Stat } from './types';

export const FEATURES: Feature[] = [
  {
    id: '1',
    title: 'Advanced Moderation',
    description: 'Protect your community with automated anti-spam, auto-mod, and smart logging systems.',
    icon: <Shield className="w-6 h-6 text-blue-500" />,
  },
  {
    id: '2',
    title: 'Instant Automation',
    description: 'Automate repetitive tasks like welcome messages, role assignments, and server backups.',
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
  },
  {
    id: '3',
    title: 'Interactive Commands',
    description: 'Over 200+ slash commands for utility, fun, and deep server management.',
    icon: <Terminal className="w-6 h-6 text-green-500" />,
  },
  {
    id: '4',
    title: 'Community Tools',
    description: 'Foster engagement with level systems, giveaways, and economy features.',
    icon: <Users className="w-6 h-6 text-purple-500" />,
  },
  {
    id: '5',
    title: 'Seamless Integrations',
    description: 'Connect with YouTube, Twitch, and Twitter for real-time notifications.',
    icon: <MessageSquare className="w-6 h-6 text-pink-500" />,
  },
  {
    id: '6',
    title: 'Easy Dashboard',
    description: 'Manage every setting through our clean and intuitive web dashboard.',
    icon: <Settings className="w-6 h-6 text-indigo-500" />,
  }
];

export const DEVELOPERS: Developer[] = [
  { id: '1', name: 'drpablo', role: 'Founder & Lead Dev', avatar: 'https://picsum.photos/seed/pablo/200' },
  { id: '2', name: 'codeflux', role: 'Senior Architect', avatar: 'https://picsum.photos/seed/flux/200' },
  { id: '3', name: 'jkab', role: 'UI/UX Designer', avatar: 'https://picsum.photos/seed/jkab/200' },
];

export const STATS: Stat[] = [
  { label: 'Active Servers', value: 12400, suffix: '+' },
  { label: 'Total Users', value: 2.5, suffix: 'M' },
  { label: 'Uptime', value: 99.9, suffix: '%' },
  { label: 'Lines of Code', value: 850, suffix: 'K' },
];
