"use client"
import AdminNav from '@/components/admin/AdminNav';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { BiPencil } from 'react-icons/bi';

const Page = () => {
  const [res, setres] = useState<any[]>([])

  const getOrders = async () => {
    const data = await axios.get("api/findOrders");
    setres(data.data);
    // console.log(data.data);
  }

  useEffect(() => {
    getOrders()
  }, [])

  // console.log(res)

  const changeStatus = async (id: any) => {
    // console.log(id);
    const res = await axios.put(`api/changeStatus?id=${id}`);
    if (res.data) {
      alert("Confirm?")
      location.reload();
      toast.success("Edited status")
    }
  }

  return (
    <div className='flex w-full h-fit md:flex-row flex-col'>
      <AdminNav />
      <div className='w-full p-4'>
        <table className='w-full border-collapse border border-gray-200 shadow-md'>
          <thead className='bg-gray-100'>
            <tr>
              <th className='border border-gray-300 p-2'>Sr. no.</th>
              <th className='border border-gray-300 p-2'>Status</th>
              <th className='border border-gray-300 p-2'>Dishes</th>
              <th className='border border-gray-300 p-2'>Customer&#39;s Name</th>
              <th className='border border-gray-300 p-2'>Phone Number</th>
              <th className='border border-gray-300 p-2'>Address</th>
              <th className='border border-gray-300 p-2'>Total</th>
            </tr>
          </thead>
          <tbody>
            {
              res.length > 0 ? res.map((order: any, index) => (
                <tr key={order._id.toString()} className='odd:bg-white even:bg-gray-50'>
                  <td className='border border-gray-300 p-2'>{index + 1}</td>
                  <td className='border flex gap-3 border-gray-300 p-2'>
                    {order.completed ? (
                      "Completed"
                    ) : (
                      <>
                        Pending
                        <button onClick={() => changeStatus(order._id)}>
                          <BiPencil />
                        </button>
                      </>
                    )}
                  </td>
                  <td className='border border-gray-300 p-2'>{order.products.join(', ')}</td>
                  <td className='border border-gray-300 p-2'>{order.fullname}</td>
                  <td className='border border-gray-300 p-2'>{order.phone}</td>
                  <td className='border border-gray-300 p-2'>{order.address}</td>
                  <td className='border border-gray-300 p-2'>{order.totalAmount}</td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={5} className='border border-gray-300 p-2 text-center'>No orders found</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Page;
