import AdminNav from '@/components/admin/AdminNav'
import { auth } from '@clerk/nextjs/server';
import React from 'react'

const Page = () => {
  // const {userId} = auth();
  // console.log(userId)
  // if(userId == process.env.ADMIN_ID){
    return (
      <div>
          <AdminNav/>
      </div>
    )
  // }
}

export default Page