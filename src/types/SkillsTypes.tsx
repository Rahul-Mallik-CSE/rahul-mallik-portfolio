export interface Skill {
  name: string;
  level: string;
  iconKey: string;
  color: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}