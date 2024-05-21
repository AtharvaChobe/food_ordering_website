import Link from 'next/link'
import React from 'react'
import { FaBowlFood, FaSheetPlastic } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";

const AdminNav = () => {
  return (
    <div className='w-full md:w-[30%] relative h-screen flex flex-col justify-center items-center gap-3 bg-amber-300'>
      <div className='absolute top-2 left-auto right-auto font-bold'><h2>Admin Dashboard</h2></div>
      <Link className='flex gap-3 items-center justify-center' href={"/admin/create_dish"}> <h1 className='font-bold'>Create</h1><FaBowlFood size={20} /> </Link>
      <Link className='flex gap-3 items-center justify-center' href={"/admin/orders"}> <h1 className='font-bold'>Orders</h1><FaSheetPlastic size={20} /> </Link>
      <Link className='flex gap-3 items-center justify-center' href={"/admin/manage_menus"}> <h1 className='font-bold'>Manage</h1><RxAvatar size={20} /> </Link>
    </div>
  )
}

export default AdminNav