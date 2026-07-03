import type { RefObject } from 'react'

export interface ContactInfo {
  firstName: string
  lastName: string
  name: string
  email: string
}

export type SectionRef = RefObject<HTMLDivElement | null>

export interface Job {
  company: string
  title: string[]
  period: string[]
  points: string[]
}

export interface Education {
  degree: string
  school: string
  date: string
}

export type SkillGroups = Record<string, string[]>
