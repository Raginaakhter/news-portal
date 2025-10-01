import Link from 'next/link'
import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from './ui/navigation-menu'
import { Switch } from './ui/switch'
import { Button } from "@/components/ui/button"

export const Navber = () => {
    return (
        <header className="shadow-sm border-b">
            <nav className="max-w-7xl mx-auto flex items-center justify-between p-4 font-bold text-lg">

                {/* Logo */}
                <Link href="/" className="text-2xl font-extrabold">
                    Daily News
                </Link>

                {/* Menu */}
                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList className="flex gap-6 items-center">

                        <NavigationMenuItem>
                            <NavigationMenuLink href="/news">Home</NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                            <NavigationMenuContent className="flex flex-col space-y-2 p-4">
                                <NavigationMenuLink href="/services/app">Mobile Development</NavigationMenuLink>
                                <NavigationMenuLink href="/services/web">Web Development</NavigationMenuLink>
                                <NavigationMenuLink href="/services/seo">SEO</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink href="/about">About</NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink href="/contact">Contact</NavigationMenuLink>
                        </NavigationMenuItem>

                    </NavigationMenuList>
                </NavigationMenu>

                {/* Dark Mode Switch */}
                <div className="flex items-center gap-2">
                    <span className="text-sm">Dark mode</span>
                    <Switch />
                    <div>
                        <Button variant="default">Login</Button>
                    </div>
                </div>

            </nav>
        </header>
    )
}
