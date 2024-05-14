"use client"
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Image from 'next/image';
import DeleteFromCartBtn from '@/components/RemoveFromCart';
import { BsFillBasketFill } from "react-icons/bs";
import Link from 'next/link';

const MyNewPage = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);

    // console.log('Cart Items:', cartItems); // Log cartItems for debugging

    if (!cartItems || cartItems.length === 0) {
        return <div className='flex w-full h-screen gap-4 font-bold text-xl items-center justify-center'><BsFillBasketFill size={50} /> No items in cart</div>;
    }

    return (
        <div className='flex flex-col gap-4 mt-12'>
            {cartItems.map((item) => (
                <div key={item._id} className='flex relative items-center justify-center bg-white p-4 w-[90%] md:w-1/3 mx-auto rounded shadow gap-7'>
                    <Image src={item.image} height={150} width={150} alt='souths' />
                    <div className='flex flex-col justify-center gap-4 text-start'>
                        <h1> {item.title} </h1>
                        <p> Quantity : {item.quantity} </p>
                        <p> Price : {item.quantity * item.price} </p>
                    </div>
                    <div className='absolute top-2 right-2'>
                        <DeleteFromCartBtn productId={item._id} />
                    </div>
                </div>
            ))}
            <Link href={"/checkout"}>Checkout</Link>
        </div>
    );
};

export default MyNewPage;
