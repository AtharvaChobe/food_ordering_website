import Link from 'next/link';
import React from 'react'
import { FaEdit } from "react-icons/fa";

const EditDish = ({ id }: any) => {
  return (
    <Link href={`/admin/edit_dish/${id}`}>
      <button className='text-green-500'>
        <FaEdit size={23} />
      </button>
    </Link>
  )
}

export default EditDish