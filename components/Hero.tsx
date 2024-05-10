import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <div className='w-[90%] flex justify-around items-center flex-wrap md:flex-nowrap'>
            <div className='flex flex-col items-start justify-center gap-4'>
                <h1 className=''>
                    <span className='text-8xl font-bold'>
                        Eat <span className='text-amber-600 font-bold'>South&apos;s</span>  <br />
                    </span>
                    <span className='text-8xl font-bold'>
                        Eat Healthy
                    </span>
                </h1>
                <Link className='bg-green-400 font-bold rounded shadow px-3 py-2 hover:shadow-md text-amber-200' href={"/menu"}>Order Now</Link>
            </div>
            <div>
                <Image src={"/img/idli.png"} height={500} width={500} alt='souths dosa' />
            </div>
        </div>
    )
}

export default Hero