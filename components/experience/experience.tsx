'use client';
import React from 'react'
import Timeline from '../timeline/timeline';
import './experience.css';
import SectionHeader from '../section-header';
import { experienceData } from '@/lib/data';
import TimelineItem from '../timeline/timeline-item';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function Experience() {
  const {ref} = useSectionInView('Experience');

  return (
    <motion.section ref={ref} id='experience' className='exp-section' initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}>
        <SectionHeader  children={'Experience'}></SectionHeader>
        <div className='exp-box-parent-container'>
          <Timeline>
            {
              experienceData.map((item : any) => (
                <TimelineItem key={item.id} children={item}></TimelineItem>
            ))
            }
          </Timeline>
        </div>
    </motion.section>
  )
}
