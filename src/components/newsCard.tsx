import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import News from "./../../public/img-4.jpg"
import { Button } from './ui/button'
const NewsCard = ({ item }) => {
  return (
    <div className='border p-4 rounded-md shadow-md'>
    
<Link href={"/"} className='block'>
<Image src={ item.image} alt="news image" width={400} height={300} className='rounded-md hover:scale-105 transition-transform duration-200'/>
<h3 className='text-xl font-semibold my-2'>{item.title?.substring(0, 65)}...</h3>
<p className='text-gray-600'>{item.description}</p>

</Link>
    <Button>Read more</Button>
    </div>
  )
}

export default NewsCard