"use client"
import React from 'react';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { BiCart } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { selectCartItemCount } from '../lib/selector'; // Adjust import path

const Navbar = () => {
    const cartItemCount = useSelector(selectCartItemCount);

    return (
        <nav className='flex items-center justify-between w-full h-fit px-7 py-3'>
            <Link href={"/"}>
                <h1 className='text-3xl font-bold'>South<span className='text-amber-600'>&apos;s</span></h1>
            </Link>
            <div className='flex items-center justify-center gap-6 text-slate-500 text-md'>
                <Link className='hover:text-black' href={"/menu"}>Menu</Link>
                <SignedIn> <UserButton /> </SignedIn>
                <SignedIn>
                    <Link href={"/cart"}>
                        <div className='w-fit h-fit flex gap-3 items-center justify-center'>
                            <BiCart size={30} />
                            <span className='px-2 py-1 rounded-full bg-white'>{cartItemCount}</span>
                        </div>
                    </Link>
                </SignedIn>
                <SignedOut><Link className='hover:text-black' href={"/sign-up"}>SignIn</Link></SignedOut>
            </div>
        </nav>
    );
};

export default Navbar;
