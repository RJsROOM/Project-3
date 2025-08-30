import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
            <div className='flex justify-between text-sm items-center'>
                <h3 className='bg-yellow-600 px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl dont-semibold'>{data.title}</h2>
            <p className='text-sm mt-2'>
                {data.title}
            </p>
            <div className='mt-2'>
                <button className='w-full bg-red-600 text-white px-5 py-2 text-lg font-medium rounded-sm'>Failed</button>
            </div>
    </div>
    
  )
}

export default FailedTask