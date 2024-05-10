import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Reviews from '@/components/Reviews'
import TopSelling from '@/components/TopSelling'
import dbInit from '@/dbInit'
import { User } from '@/models/user'
import { currentUser } from '@clerk/nextjs/server'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  
  const addUserToDb = async () => {
    "use server"
    const user = await currentUser();
    if (user) {
      const { id, username, emailAddresses } = user;
      const email = emailAddresses[0].emailAddress;

      try {
        await dbInit();
        const check = await User.findOne({clerkId:id});
        if(!check){
          await User.create({username,email,clerkId:id});
        }
      } catch (error) {
        console.log(error)
      }
    }
    
  }
  addUserToDb();
  

  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <Hero/>
      <Features/>
      <TopSelling/>
      <Reviews/>
      <Link className='my-8 w-fit mx-auto bg-green-500 text-amber-200 font-bold rounded-md hover:shadow-md shadow px-3 py-2' href={"/menu"}>Explore Food</Link>
    </div>
  )
}

export default Page