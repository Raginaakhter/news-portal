import Link from 'next/link';
import React from 'react'

const Newspage = () => {
    return (

        <div className='grid grid-cols-2'>
            <div>
                <h1> Latest News</h1>
               <div className='space-x-4'>
                 <Link className='text-xl font-bold' href="/news/sports">Sports</Link>
                <Link className='text-xl font-bold' href="/news/health">Health</Link>
               </div>
                <div className='md:w-4/5 bg-gray-400 h-96 justify-center items-center '>
                    news
                </div>
            </div>
            <div className='md:w-1/5 bg-amber-300 h-96 justify-center items-center'>
                sidenav
            </div>
        </div>
    )
}

export default Newspage;