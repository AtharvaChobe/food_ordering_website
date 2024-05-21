"use client"
import { useUser } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { SiSnapchat } from 'react-icons/si'

const Footer = () => {

    const { user } = useUser();

    return (
        <div className='flex items-center justify-between mt-6 w-full bg-white px-3 py-3 h-fit'>
            <Link href={"/"}>
                <h1 className='text-3xl font-bold'>South<span className='text-amber-600'>&apos;s</span></h1>
            </Link>
            <div className='flex items-center justify-center gap-4'>
                <FaFacebook size={20} />
                <BsInstagram size={20} />
                <SiSnapchat size={20} />
            </div>
            {
                user?.id === process.env.NEXT_PUBLIC_ADMIN_ID
                    ?
                    <Link className='underline' href={"/admin"}>Admin</Link>
                    :
                    ""
            }
        </div>
    )
}

export default Footer