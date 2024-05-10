import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { BiCart } from 'react-icons/bi'

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between w-full h-fit px-7'>
            <Link href={"/"}>
                <h1 className='text-3xl font-bold'>South<span className='text-amber-600'>&apos;s</span></h1>
            </Link>

            <div className='flex items-center justify-center gap-6 text-slate-500 text-md'>
                <Link className='hover:text-black' href={"/menu"}>Menu</Link>
                <SignedIn> <UserButton /> </SignedIn>
                <SignedIn> <Link href={"/cart"}><BiCart size={30} /></Link> </SignedIn>
                <SignedOut><Link className='hover:text-black' href={"/sign-up"}>SignIn</Link></SignedOut>
            </div>
        </nav>
    )
}

export default Navbar