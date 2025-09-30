import Link from 'next/link'
import React from 'react'

export const Navber = () => {
    return (
        <header className='shadow-md py-1  '>

            <nav className='max-w-7xl mx-auto p-2 sm:p-4 lg:p-3 font-bold text-2xl'>
                <Link href={"/"}>Daily News</Link>

            </nav>
        </header>
    )
}
