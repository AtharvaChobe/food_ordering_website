import React from 'react'

const Reviews = () => {
  const data = [
    {
      title: "Authentic taste",
      customer: "Aman Sharma"
    },
    {
      title: "Good Food",
      customer: "Riya Gupta"
    },
    {
      title: "Best South Indian Food",
      customer: "Raj Desai"
    },
  ]
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 mt-12 gap-4 mb-4 w-[90%]'>
      {
        data.map((i, index) => (
          <div className='flex items-center justify-center flex-col p-4 bg-white rounded-md h-full shadow-md' key={index}>
            <h1 className='text-3xl font-bold text-center text-amber-800'>&quot; {i.title} &quot;</h1>
            <span className='text-slate-600'> {i.customer} </span>
          </div>
        ))
      }
    </div>
  )
}

export default Reviews