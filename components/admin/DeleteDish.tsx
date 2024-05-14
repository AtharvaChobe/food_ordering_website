import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';
import { MdDeleteForever } from "react-icons/md";

const DeleteDish = ({id}:any) => {
    // console.log(id)

    const handleDelete = async () =>{
        alert("Are you sure you want to delete?")
        try {
            const res = await axios.delete(`api/deleteMenu?id=${id}`)
            if(res.data.message == "deleted"){
                toast.success("Deleted successfully");
                window.location.reload()
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <button onClick={()=>handleDelete()} className='text-red-500'>
        <MdDeleteForever size={25}/>
    </button>
  )
}

export default DeleteDish