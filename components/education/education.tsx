"use client";

import React from 'react'
import SectionHeader from '@/components/section-header'
import Timeline from '@/components/timeline/timeline'
import TimelineItem from '@/components/timeline/timeline-item'
import { educationData } from '@/lib/data'
import '@/components/education/education.css';
import { useSectionInView } from '@/lib/hooks';

export default function Education() {
  const {ref} = useSectionInView('Education');

  return (
    <section ref={ref} id='education' className='edu-section'>
        <SectionHeader>{'Education'}</SectionHeader>
        <div className='edu-box-parent-container'>
        <Timeline>
            {
               educationData.map((data : any, index) => (
                <TimelineItem key={index} children={data}></TimelineItem>
               ))
            }
        </Timeline>
        </div>
    </section>
    // <div>Education</div>
  )
}
