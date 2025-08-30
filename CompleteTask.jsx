import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
            <div className='flex justify-between text-sm items-center'>
                <h3 className='bg-green-600 px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl dont-semibold'>{data.title}</h2>
            <p className='text-sm mt-2'>
                {data.description}
            </p>
            <div className='mt-2'>
                <button className='w-full bg-green-600 text-white px-5 py-2 text-lg font-medium rounded-sm'>Complete</button>
            </div>
    </div>
  )
}

export default CompleteTask