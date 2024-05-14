"use client"
import AdminNav from '@/components/admin/AdminNav';
import { useEdgeStore } from '@/lib/edgestore';
import { useAuth } from '@clerk/nextjs';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const Page = () => {
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setimage] = useState("")
    const [file, setFile] = React.useState<File>();
    const params = useParams<{ id: string }>();
    // console.log(params.id)
    const { edgestore } = useEdgeStore();
    const {userId} = useAuth();

    useEffect(() => {
        const a = async () => {
            try {
                const res = await axios.get(`/admin/api/getDish?id=${params.id}`);
                // console.log(res.data);
                setTitle(res.data.title)
                setDetails(res.data.details)
                setPrice(res.data.price)
                setimage(res.data.image)
            } catch (error) {
                console.log(error)
            }
        }
        a();
    }, [])


    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        switch (name) {
            case 'title':
                setTitle(value);
                break;
            case 'details':
                setDetails(value);
                break;
            case 'price':
                setPrice(value);
                break;
            default:
                break;
        }
    };

    const handleImageChange = (event: any) => {
        setFile(event.target.files?.[0])

    };


    const handleSubmit = async (event: any) => {
        event.preventDefault();

        if (!title || !details || !price || !file) {
            toast.error("all fields are required")
            return;
        }
        try {
            if (file) {
                var res = await edgestore.publicFiles.upload({ file, options: {
                    replaceTargetUrl: image,
                  },})
                const response = await axios.put(`/admin/api/editDish?id=${params.id}`, { title, details, price, image: res.url })
                // console.log(response.data)
                toast.success("updated sucessfully");
                setTitle("");
                setDetails("");
                setPrice(0);
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error("An unexpected error occurred. Please try again later.")
        }
    };
    
    if(userId != process.env.NEXT_PUBLIC_ADMIN_ID){
        return(
            <div className='flex items-center justify-center w-full h-screen font-bold text-2xl'>Not authorised!</div>
        )
    }

    return (
        <div className='flex items-center justify-center'>
            <AdminNav />
            <div className='flex items-center justify-center w-full h-screen'>
                <form className='flex flex-col items-center justify-center p-4 rounded shadow-md bg-white gap-3' onSubmit={handleSubmit}>
                    <input
                        className='rounded shadow border-2 w-full px-3 py-2 text-lg placeholder:text-lg'
                        name="title"
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={handleInputChange}
                    />
                    <input
                        className='rounded shadow border-2 w-full px-3 py-2 text-lg placeholder:text-lg'
                        name="details"
                        type="text"
                        placeholder="Details"
                        value={details}
                        onChange={handleInputChange}
                    />
                    <input
                        className='rounded shadow border-2 w-full px-3 py-2 text-lg placeholder:text-lg'
                        name="price"
                        type="number"
                        placeholder="Price"
                        value={price}
                        onChange={handleInputChange}
                    />
                    <input type="file" name="image" id="image" onChange={handleImageChange} />
                    <button className='font-bold rounded mt-7 hover:shadow px-3 py-2 bg-black text-white' type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Page;
