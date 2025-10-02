import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import img from './../../../public/img-4.jpg'

const Bannerpage = () => {
    return (
        <div className='bg-slate-100  '>


            <div className=' grid grid-cols-2 sm: grid-col lg:grid-cols-2 items-center gap-8'>
                <div className=' mx-auto'>
                  <Image src={img} alt='banner' width={600} height={400} className='rounded-lg shadow-lg ' />
                </div>

                <div className='space-y-4 flex flex-col p-5 lg:px-8'>
                    <h4 className='text-sm font-medium text-gray-500'>Technology</h4>

                    <h2 className='text-lg font-bold text-gray-800'>openAI is growing Fast and Burning Thought and piles of Money</h2>
                    <p>A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic.
                         Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs. <br /> <br />
                         This is because paragraphs show a reader where the subdivisions of an essay begin and end,
                         and thus help the reader see the organization of the essay and grasp its main points.</p> 
                         
                         <Button variant="default">Read More</Button>
                         </div>
            </div>

        </div>
    )
}

export default Bannerpage