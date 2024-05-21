"use client"
import { selectTotalAmount } from '@/redux/slice';
import { RootState } from '@/redux/store';
import { useAuth } from '@clerk/nextjs';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

const PaymentForm = () => {
    const totalAmount = useSelector(selectTotalAmount);
    const [fullname, setfullname] = useState("");
    const [phone, setphone] = useState("");
    const [address, setaddress] = useState("");
    const router = useRouter();
    const { userId } = useAuth();
    const cartItems = useSelector((state: RootState) => state.cart.items);
    // console.log(cartItems)
    const products = cartItems.map((i)=>i.title);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if(!fullname || !phone || !address){
            toast.error("All fields are required")
            return
        }

        if(!userId){
            toast.error("Please signin first")
            return
        }

        try {
            const res = await axios.post("/api/createOrder", { fullname, phone, address, userId,products,totalAmount })
            // console.log(res.data);
            toast.success("order conformed!");
            router.push("/")
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className='flex items-center justify-center min-w-[40%]'>

            <form onSubmit={handleSubmit} action="" className='flex flex-col items-start w-full'>
                <h2 className='font-bold mb-5'>Total Bill : {totalAmount}</h2>
                <h2>Name</h2>
                <input value={fullname} onChange={(e => setfullname(e.target.value))} name='fullname' className='w-full p-2 rounded-md mt-2' type="text" placeholder='name' />
                <br />

                <h2>Phone number</h2>
                <input value={phone} onChange={(e => setphone(e.target.value))} name='phone' className='w-full p-2 rounded-md mt-2' type="text" maxLength={10} placeholder='phone number' />
                <br />

                <h2>Card Information</h2>
                <input className='w-full p-2 rounded-md mt-2' type="text" placeholder='123 123 123 123' /><br />
                <input className='w-fit p-2 rounded-md inline' type="text" placeholder='MM/YY' /><br />
                <input className='w-fit p-2 rounded-md inline' maxLength={3} type="password" placeholder='CVV' />
                <br />

                <h2>Shipping address</h2>
                <textarea value={address} onChange={(e) => setaddress(e.target.value)} name="address" id="" rows={10} className='w-full rounded mt-2'></textarea>

                <button type='submit' className='mx-auto px-3 py-2 rounded bg-black mt-6 text-white'>Make payment</button>
            </form>
        </div>
    )
}

export default PaymentForm