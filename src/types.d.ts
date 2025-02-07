export interface Project {
  title: string;
  description: string;
  longDescription: string;
  link: string;
  github: string;
  images: ImageMetadata[];
  slug: string;
  class: string;
  status: "live" | "soon" | "finished";
  tags: Tag[];
  features?: string[];
  date: string;
  info?: string;
}

export interface Tag {
  name: string;
  class: string;
  icon: string;
  iconClass: string;
} []

export interface Curso {
  title: string;
  instructor: string;
  plataforma: string;
  icon:string;
  link: string
}
