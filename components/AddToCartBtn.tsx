import { addToCart } from '@/redux/slice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store'; 
import toast from 'react-hot-toast';
import { useUser } from '@clerk/nextjs';

const AddToCartBtn = ({ product }: { product: any }) => {
    const dispatch = useDispatch();
    const {isSignedIn} = useUser();
    
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const handleAddToCart = () => {
        if(!isSignedIn){
            toast.error("Please signIn first");
            return;
        }
        dispatch(addToCart(product));
        toast.success("Dish added!")
    }


    return (
        <button onClick={handleAddToCart} className='font-bold px-2 py-1 rounded-md shadow-sm hover:shadow-md duration-200 bg-amber-300'>
            Add to Basket
        </button>
    );
}

export default AddToCartBtn;
