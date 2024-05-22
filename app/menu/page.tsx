"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import AddToCartBtn from '@/components/AddToCartBtn';

const PageClient = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("/api/menuList");
        setData(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-7 h-full'>
      {data &&
        data.map((i: any) => (
          <div key={i._id} className='flex relative flex-col items-center justify-center h-96 md:h-[30rem] gap-3 bg-white rounded-md hover:shadow-md p-4 mx-5'>
            <Image src={i.image} alt='souths' height={200} width={200} />
            <h2 className='font-bold text-2xl'> {i.title} </h2>
            <p className='text-sm text-slate-500'> {i.details} </p>
            <div className='flex items-center absolute bottom-2 justify-around w-full'>
              <AddToCartBtn product={i}/>
              <span> ₹ {i.price} </span>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default PageClient;
