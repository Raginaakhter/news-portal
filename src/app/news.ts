
export interface NewsItem {
  albumId: number;
  price: number;
  title: string;
  image: string;      
  description: string;
}


export interface NewsDataProps {
  item: NewsItem;
}
