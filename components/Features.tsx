import React from 'react'
import { FaHandSparkles } from 'react-icons/fa'
import { SiCodefresh } from 'react-icons/si'
import { TbTruckDelivery } from 'react-icons/tb'

const Features = () => {
    const feat = [
        {
            icon: <SiCodefresh size={50} />,
            title: "Fresh Food",
            desc: "lorem ipsum pipsum de felreo alfred mos de co de bhgtf jhjhg isto veducon per hkjuiuyf"
        },
        {
            icon: <TbTruckDelivery size={50}/>,
            title: "Home delivery",
            desc: "lorem ipsum pipsum de felreo alfred mos de co de bhgtf jhjhg isto veducon per hkjuiuyf"
        },
        {
            icon: <FaHandSparkles size={50}/>,
            title: "100% hygenic",
            desc: "lorem ipsum pipsum de felreo alfred mos de co de bhgtf jhjhg isto veducon per hkjuiuyf"
        },
    ]
    return (
        <div className='grid w-[80%] px-12 py-8 sm:grid-cols-1 gap-8 md:grid-cols-3 grid-cols-1 bg-white'>
            {
                feat.map((i, index) => (
                    <div className='flex items-center justify-center gap-5' key={index}>
                        <p className='p-4 rounded-full bg-slate-300'>{i.icon}</p>
                        <div>
                            <h3 className='text-md font-bold'>{i.title}</h3>
                            <p className='text-sm mt-2'>{i.desc}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Features