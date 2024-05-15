"use client"
import PaymentForm from '@/components/PaymentForm';
import { RootState } from '@/redux/store';
import Image from 'next/image';
import React from 'react'
import { useSelector } from 'react-redux';

const Page = () => {

  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <div className='flex items-center justify-center gap-10'>
      <div className='flex flex-col items-center justify-center'>
        {
          cartItems.map((i) => (
            <div key={i._id} className='border-2 my-2 p-4'>
              <Image src={i.image} height={150} width={150} alt='souths' />
              <div className='flex flex-col justify-center gap-4 text-start'>
                <h1> {i.title} </h1>
                <p> Quantity : {i.quantity} </p>
                <p> Price : {i.quantity * i.price} </p>
              </div>
            </div>
          ))
        }
      </div>

      <PaymentForm />

    </div>
  )

}

export default Page