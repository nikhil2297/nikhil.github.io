"use client";
import { SectionHeadingProps } from '@/lib/type'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        x: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
}; 

export default function TimelineItem({children} : SectionHeadingProps ) {
  return (
    <li className="mb-10 ms-6 ">            
        <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ">
            <div className="w-4 h-4 rounded-full border border-white bg-gray-950"></div>
        </span>
        <motion.div className='p-6 border-[0.15rem] border-black/20 rounded-xl bg-gray-200' variants={fadeInAnimationVariants} initial='initial' whileInView="animate"
    viewport={{
        once: true,
    }}
    custom={children.index}>
            <div className='flex flex-wrap gap-6'>
                <Image src={children.image} width={100} height={100} alt={children.name} className='h-[5rem] w-[5rem]'></Image>

                <div className='flex flex-col'>
                    <h3 className="text-lg font-bold text-gray-900">{children.title}</h3>
                    <h3 className="text-md font-bold text-gray-800">{children.name}, <span className='text-gray-800/70'>{children.location}</span></h3>
                    <h3 className="text-sm font-medium text-gray-600 mt-2" >{children.date}</h3>
                </div>
            </div>
            <p className="mt-4 line-clamp-8 sm:line-clamp-5 xl:line-clamp-none hover:line-clamp-none hover:transition">{children.description}</p>
        </motion.div>
    </li>  )
}
