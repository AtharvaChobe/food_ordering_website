"use client"
import { checkoutCredits } from '@/actions/checkout.actions';
import { selectTotalAmount } from '@/redux/slice';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Checkout = () => {
    const totalAmount = useSelector(selectTotalAmount);

    useEffect(() => {
        loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
    }, []);

    const onCheckout = async () => {
        const res = await checkoutCredits(totalAmount);
        console.log(res);
        // 1. add name, addres, number to metadata of clerk
        // 2. create a orders model
        // 3. if the res is true add order into the orders collection
        // 4. show the latest orders on the admin dashboard, client dashboard
    };

    return (
        <div>
            Total Amount: {totalAmount}
            <form action={onCheckout} method='POST'>
                <button type='submit'>submit</button>
            </form>
        </div>
    );
};

export default Checkout;
