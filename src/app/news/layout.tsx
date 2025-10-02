import Link from "next/link"


const newsLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div >
            <h1> Latest News</h1>
            <div className='space-x-4'>
                <Link className='text-xl font-bold' href="/news/sports">Sports</Link>
                <Link className='text-xl font-bold' href="/news/health">Health</Link>
                <Link className='text-xl font-bold' href="/news/tech">Technology</Link>

            </div>
            <div className='flex mx-auto sm:gap-1 text-center  '>
                <div className='md:w-4/5 lg:w-4/5 bg-gray-200 h-96 justify-center items-center text-center '>
                    {children}
                </div>
                <div className='md:w-1/5 lg:w-1/5 bg-amber-300 h-96 justify-center items-center w-96'>
                    sidenavuuuuuuuuuuu Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta pariatur quam, minus assumenda unde itaque. Ut rerum obcaecati corrupti veritatis quam. Magni officia quam tenetur autem optio eligendi mollitia molestias.
                </div>
            </div>
        </div>
    )
}

export default newsLayout