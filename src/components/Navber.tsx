import Link from 'next/link'
import React from 'react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, Tr } from './ui/navigation-menu'

export const Navber = () => {
    return (
        <header className='shadow-md py-1  '>

            <nav className='max-w-7xl mx-auto p-2 sm:p-4 lg:p-3 font-bold text-2xl'>
                <Link href={"/"}>Daily News</Link>


                <div>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>


                                <NavigationMenuLink href='/news'>Home</NavigationMenuLink>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger >Services</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <NavigationMenuLink href='/services'>Mobile Development</NavigationMenuLink>
                                        <NavigationMenuLink>Web Development</NavigationMenuLink>
                                        <NavigationMenuLink>SEO</NavigationMenuLink>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

            </nav>
        </header>
    )
}
