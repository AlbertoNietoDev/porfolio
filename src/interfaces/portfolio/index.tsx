interface ITechnology {
  name: string,
  icon?: string
}

export interface IProjectCard {
  id: number;
  title: string;
  company: string;
  technologies: Array<ITechnology>;
  img: string;
}

export interface ICarousel {
  items: Array<IProjectCard>;
  autoPlay?: boolean;
}

export interface IPortfolioProps {
  mainStyle: any;
  texts: any;
}
