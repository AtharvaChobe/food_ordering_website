import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '@/redux/slice';
import { TiDelete } from "react-icons/ti";

interface DeleteFromCartBtnProps {
  productId: string; // Unique identifier of the product
}

const DeleteFromCartBtn: React.FC<DeleteFromCartBtnProps> = ({ productId }) => {
  const dispatch = useDispatch();

  const handleDeleteFromCart = () => {
    dispatch(removeFromCart({ _id: productId }));
  };

  return (
    <button onClick={handleDeleteFromCart} className="font-bold px-2 py-1 rounded-md shadow-sm hover:shadow-md duration-200 bg-red-300">
      <TiDelete />
    </button>
  );
};

export default DeleteFromCartBtn;
