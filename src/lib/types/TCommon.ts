export interface IProductCardProps {
  title: string;
  discount: number;
  price: number;
  image: string;
}

export interface ICouponProps {
  color: string;
  discount: string;
  code: string;
}

export interface ICatalogueCardProps {
  src: string;
  title: string;
}
export interface IDealCardProps {
  src: string;
  title: string;
}
export interface ICarouselProps {
  children: React.ReactNode;
}

export interface ICarouselItemProps {
  index: number;
  heading?: string;
  title: string;
  description?: string;
  src: string;
}

export interface ISearchInputProps {}

export interface IRecipePreviewProps {
  title: string;
  description: string;
  image: string;
  url?:string;
}
