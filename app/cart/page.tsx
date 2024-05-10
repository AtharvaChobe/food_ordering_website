"use client"
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const MyNewPage = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);

    // console.log('Cart Items:', cartItems); // Log cartItems for debugging

    if (!cartItems || cartItems.length === 0) {
        return <div>No items in cart</div>;
    }

    return (
        <div>
            <h1>My New Page</h1>
            <ul>
                {cartItems.map((item) => (
                    <li key={item._id}>{item.title} - ${item.price} - {item.quantity}</li>
                ))}
            </ul>
        </div>
    );
};

export default MyNewPage;
