export interface IImage {
  url: string;
}

export interface ILinks {
  images: IImage[];
}

export interface ISong {
  name: string;
  author: string;
  url: string;
  id: number;
  links: ILinks;
}
