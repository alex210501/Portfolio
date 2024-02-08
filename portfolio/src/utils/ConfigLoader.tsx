import * as cfg from "../cfg/config.json";

export interface Skillbox {
  title: string;
  description: string;
  subtitle?: string;
  skills?: string[];
}

export interface Home {
  name: string;
  currentPosition: string;
  subtitle: string;
}

export interface About {
  description: string;
  skillbox?: Skillbox[];
}

export interface Experience {
  title: string;
  company: string;
  dates: string;
  description?: string;
  location?: string;
  website?: string;
  picture?: string;
  skills?: string[];
}

export interface Contact {
  text: string;
}

export interface Config {
  email: string;
  linkedin: string;
  github: string;
  home: Home;
  about: About;
  experiences: Experience[];
  contact: Contact;
}

export default cfg as Config;
