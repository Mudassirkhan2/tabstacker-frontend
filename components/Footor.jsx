import Link from 'next/link'
import React from 'react'

const Footor = () => {
  return (
    <div className='flex items-center gap-4 justify-center' >
        <a href="https://www.joincolab.io/product/tabstacker" target='_blank'> <p className='text-xl font-bold text-gray-600'>Team Behind </p></a>
        <Link href={"/privacy"}><button className='text-xl font-bold text-gray-600'>Privacy and policy</button></Link>
    </div>
  )
}

export default Footor
