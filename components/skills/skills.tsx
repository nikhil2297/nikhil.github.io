'use client';
import React, { useEffect } from 'react'
import SectionHeader from '@/components/section-header'
import { skillsData } from '@/lib/data'
import { motion } from 'framer-motion';
import '@/components/skills/skills.css';
import { useSectionInView } from '@/lib/hooks';
const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};  


export default function Skills() {

    const {ref} = useSectionInView('Skills', 0.5);

    return (
        <section ref={ref} id='skills' className='skills-section'>
            <motion.div initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }} className='skills-outer-container'>
                <SectionHeader>Skills</SectionHeader>
                <div className='skills-box-parent-container'>
                    {
                        skillsData.map((data, index) => (
                            <motion.div key={data.id} className='skills-box-container' variants={fadeInAnimationVariants} initial='initial' whileInView="animate"
                                viewport={{
                                    once: true,
                                }}
                                custom={index}>
                                <span className='text-2xl font-bold text-center'>{data.name}</span>
                                <ul className='text-gray-800 text-lg flex flex-wrap gap-2'>
                                    {
                                        data.stack.map((skill) => (
                                            <li key={skill} className='bg-white bg-opacity-70 borderBlack rounded-xl px-5 py-3 '>{skill}</li>
                                        ))
                                    }
                                </ul>
                            </motion.div>
                        ))
                    }

                </div>
            </motion.div>

        </section>
    )
}
