import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import News from "./../../public/img-4.jpg"
import { Button } from './ui/button'
const NewsCard = () => {
  return (
    <div className='border p-4 rounded-md shadow-md'>
    
<Link href={"/"} className='block'>
<Image src={News} alt="news image" width={400} height={300} className='rounded-md hover:scale-105 transition-transform duration-200'/>
<h3 className='text-xl font-semibold my-2'>Exciting News Title Here</h3>
<p className='text-gray-600'>This is a brief description of the news article. It provides a quick overview to entice readers to click and read more.</p>

</Link>
    <Button className='mt-4'>Read More</Button>
    </div>
  )
}

export default NewsCard