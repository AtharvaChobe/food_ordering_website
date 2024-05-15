import { selectTotalAmount } from '@/redux/slice';
import React from 'react'
import { useSelector } from 'react-redux';

const PaymentForm = () => {
    const totalAmount = useSelector(selectTotalAmount);

    return (
        <div className='flex items-center justify-center min-w-[40%]'>

            <form action="" className='flex flex-col items-start w-full'>
                <h2 className='font-bold mb-5'>Total Bill : {totalAmount}</h2>
                <h2>Name</h2>
                <input className='w-full p-2 rounded-md mt-2' type="text" placeholder='name' />
                <br />

                <h2>Email</h2>
                <input className='w-full p-2 rounded-md mt-2' type="email" placeholder='email' />
                <br />

                <h2>Card Information</h2>
                <input className='w-full p-2 rounded-md mt-2' type="text" placeholder='123 123 123 123' /><br />
                <input className='w-fit p-2 rounded-md inline' type="text" placeholder='MM/YY' /><br />
                <input className='w-fit p-2 rounded-md inline' type="text" placeholder='CVV' />
                <br />

                <h2>Shipping address</h2>
                <textarea name="" id="" rows={10} className='w-full rounded mt-2'></textarea>

                <button className='mx-auto px-3 py-2 rounded bg-black mt-6 text-white'>Make payment</button>
            </form>
        </div>
    )
}

export default PaymentForm