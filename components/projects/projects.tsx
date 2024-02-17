'use client';
import React from 'react'
import SectionHeader from '../section-header'
import { projectData } from '@/lib/data'
import ProjectItem from './project-item'
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

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

export default function Project() {
  const {ref} = useSectionInView('Project');

  return (
    <section ref={ref} id='project' className="scroll-mt-28 mb-28 px-4">
      <motion.div initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}>
        <SectionHeader>My projects</SectionHeader>
      </motion.div>
      {projectData.map((project, index) => (
        <motion.div key={index} variants={fadeInAnimationVariants} initial='initial' whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={index}
        >
          <ProjectItem {...project} />
        </motion.div>
      ))}
    </section>)
}
