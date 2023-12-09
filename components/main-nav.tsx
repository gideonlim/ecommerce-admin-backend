'use client'

import { cn } from "@/lib/utils"
import { Ghost, Menu, X } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useState } from "react";



export function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    const pathname = usePathname();
    const params = useParams();
    const [ menuOpen, setMenuOpen ] = useState(false)
   

    const routes = [
        {
            href:`/${params.storeId}` ,
            label: 'Overview',
            active: pathname === `/${params.storeId}`,
        },
        {
            href:`/${params.storeId}/billboards` ,
            label: 'Billboards',
            active: pathname === `/${params.storeId}/billboards`,
        },
        {
            href:`/${params.storeId}/categories` ,
            label: 'Categories',
            active: pathname === `/${params.storeId}/categories`,
        },
        {
            href:`/${params.storeId}/sizes` ,
            label: 'Sizes',
            active: pathname === `/${params.storeId}/sizes`,
        },
        {
            href:`/${params.storeId}/colors` ,
            label: 'Colors',
            active: pathname === `/${params.storeId}/colors`,
        },
        {
            href:`/${params.storeId}/products` ,
            label: 'Products',
            active: pathname === `/${params.storeId}/products`,
        },
        {
            href:`/${params.storeId}/orders` ,
            label: 'Orders',
            active: pathname === `/${params.storeId}/orders`,
        },
        {
            href:`/${params.storeId}/settings` ,
            label: 'Settings',
            active: pathname === `/${params.storeId}/settings`,
        }
    ];
    return (
        <>
            <nav className={cn("md:flex items-center space-x-4 lg:space-x-6 hidden", className)}>
                {routes.map((route) => (
                    <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                        "text-sm font-medium transition-colors hover:text-primary",
                        route.active ? "text-black dark:text-white" : "text-muted-foreground"
                        )}
                        >
                        {route.label}
                    </Link>
                ))}
            </nav>
            
            <DropdownMenu>
                <DropdownMenuTrigger className="md:hidden mx-3">
                    <Menu />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-screen mt-4">
                    <DropdownMenuLabel>Menu</DropdownMenuLabel>
                    <DropdownMenuSeparator/>
                    {routes.map((route) => (
                    <DropdownMenuItem  key={route.href}>  
                        <Link
                       
                        href={route.href}
                        className={cn(
                            "text-sm font-medium transition-colors hover:text-primary",
                            route.active ? "text-black dark:text-white" : "text-muted-foreground"
                            )}
                            >
                            {route.label}
                        </Link>
                    </DropdownMenuItem>  
                ))} 
                </DropdownMenuContent>
            </DropdownMenu>

            
           
        </>
    )
}
