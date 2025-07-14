export interface Project {
  title: string;
  description: string;
  longDescription: string;
  link: string;
  github: string | "private";
  images: ImageMetadata[];
  slug: string;
  class: string;
  status: "live" | "soon" | "finished";
  tech: Tech[];
  features?: string[];
  date: string;
  info?: string;
  homepage: boolean
}

export type Work = Omit<Project, "homepage" | "tech" | "longDescription"> & {
  client: string;
};

export interface Tech {
  name: string;
  class: string;
  icon: string;
  iconClass: string;
}
[];

export interface Curso {
  title: string;
  instructor: string;
  plataforma: string;
  icon: string;
  link: string;
}
