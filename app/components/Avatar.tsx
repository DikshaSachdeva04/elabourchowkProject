'use client';
import Image from 'next/image';
import React from 'react'

function Avatar() {
  return (
    <Image
    className='rounded-full'
    width="30"
    height="30"
    alt='avatar'
    src="/images/placeholder.jpg"
    
    
    />
  )
}

export default Avatar
