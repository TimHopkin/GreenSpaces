import React from 'react';

export enum ServiceType {
  GARDEN_ROOM = "Garden Room",
  KITCHEN = "Kitchen & Bathroom",
  FENCING = "Fencing & Structures",
  GENERAL_REPAIRS = "General Repairs",
  OTHER = "Other"
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}