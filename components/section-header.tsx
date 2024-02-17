'use client';
import React from 'react'

type SectionHeadingProps = {
    children: React.ReactNode;
  };

export default function SectionHeader({children} : SectionHeadingProps) {
  return (
    <h2 className='text-3xl font-black capitalize mb-6 text-left w-full sm:text-center'>{children}</h2>
  )
}
