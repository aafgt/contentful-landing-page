export interface CTAProps {
  title: string;
  url: string;
  className?: string;
}

export interface ContentSectionProps {
  image: string;
  title: string;
  description: string;
  price: number;
  cta: React.ReactNode;
}

export interface CardProps {
  title: string;
  category: string;
  image: string;
  cta: React.ReactNode;
  price: number;
}

export interface CardSectionProps {
  name: string;
  cards: CardProps[];
}

export interface CategoryProps {
  title: string;
  logo: React.ReactNode;
}

export interface ImageSectionProps {
  name: string;
  category: CategoryProps[];
}
