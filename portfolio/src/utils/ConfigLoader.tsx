import * as cfg from "../cfg/config.json";

export interface SkillBoxInfo {
  title: string;
  description: string;
  subtitle?: string;
  skills?: string[];
}

export interface HomeInfo {
  name: string;
  currentPosition: string;
  specialization: string;
}

export interface AboutInfo {
  description: string;
  skillbox?: SkillBoxInfo[];
}

export interface ExperienceInfo {
  current: boolean;
  title: string;
  company: string;
  dates: string;
  description?: string;
  location?: string;
  website?: string;
  logo?: string;
  skills?: string[];
}

export interface ContactInfo {
  text: string;
}

export interface Config {
  email: string;
  linkedin: string;
  github: string;
  home: HomeInfo;
  about: AboutInfo;
  experiences: ExperienceInfo[];
  contact: ContactInfo;
}

export default cfg as Config;
