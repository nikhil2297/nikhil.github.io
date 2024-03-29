"use client";
import { SectionHeadingProps } from '@/lib/type';
import React from 'react'
import { motion } from 'framer-motion';

export default function Timeline({children} : SectionHeadingProps) {
    return (
<motion.ol className="relative border-s border-gray-700" initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}>                  
    {children}
</motion.ol>


    )
}
