import NewsCard from "@/components/newsCard";
import Bannerpage from "@/components/shared/Banner";
import { newsdataProps, NewsItem } from "./news";



export default async function Home({ item }: newsdataProps) {

const data = await fetch('https://jsonplaceholder.typicode.com/photos')
const news = await data.json();
console.log(news);






  return (
   <div className="py-12">
<Bannerpage></Bannerpage>
<div className="my-12">
<h2 className="text-2xl font-bold">Latest News</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
{
  news.slice(0,3).map((item: NewsItem) => (
    <NewsCard key={item?.id} item ={item} />
  ))
}
</div>
</div>
   </div>
   
  );
}
