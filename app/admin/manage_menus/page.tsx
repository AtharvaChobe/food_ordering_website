"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import AdminNav from '@/components/admin/AdminNav';
import DeleteDish from '@/components/admin/DeleteDish';
import EditDish from '@/components/admin/EditDish';
import Spinner from '@/components/Spinner';
import { useAuth } from '@clerk/nextjs';

const Page = () => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setloading] = useState(false);
    const {userId} = useAuth();
    // console.log(userId)


    useEffect(() => {
        const fetchData = async () => {
            try {
                setloading(true);
                const result = await axios.get("/api/menuList");
                setData(result.data);
                setTimeout(() => {
                    setloading(false);
                }, 1000);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    if(userId != process.env.NEXT_PUBLIC_ADMIN_ID){
        return(
            <div className='flex items-center justify-center w-full h-screen font-bold text-2xl'>Not authorised!</div>
        )
    }
    if (loading) {
        return (
            <Spinner />
        )
    }
    else {
        return (
            <div className='flex w-full h-full'>
                <AdminNav />
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 h-full'>
                    {data &&
                        data.map((i: any) => (
                            <div key={i._id} className='flex relative flex-col items-center justify-center h-96 gap-3 bg-white rounded-md hover:shadow-md p-4 mx-5'>
                                <Image src={i.image} alt='souths' height={200} width={200} />
                                <h2 className='font-bold text-2xl'> {i.title} </h2>
                                <p className='text-sm text-slate-500'> {i.details} </p>
                                <div className='flex items-center absolute bottom-2 justify-around w-full'>
                                    <span> ₹ {i.price} </span>
                                    <DeleteDish id={i._id} />
                                    <EditDish id={i._id} />
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }

};

export default Page;
