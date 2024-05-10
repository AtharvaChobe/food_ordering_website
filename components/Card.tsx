import Image from 'next/image'
import React from 'react'

const Card = ({ data }: any) => {
    return (
        <>
            <Image src={data.img} alt='souths' height={200} width={300} />
            <h2> {data.title} </h2>
            <p> {data.details} </p>
            <div>
                <button>Add to cart</button>
                <span> {data.price} </span>
            </div>
        </>
    )
}

export default Card