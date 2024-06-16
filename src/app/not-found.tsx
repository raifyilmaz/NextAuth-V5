import React from 'react';
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='w-full h-full bg-gray-400 flex flex-col'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}