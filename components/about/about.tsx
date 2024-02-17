'use client';
import React, { useEffect } from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import Typewriter from 'react-ts-typewriter';
import Image from 'next/image';
import '@/components/about/about.css';
import { personalData } from '@/lib/data';
import { motion } from "framer-motion";
import { useSectionInView } from '@/lib/hooks';
import heroImg from '@/public/hero.png';

export default function About() {
    const {ref} = useSectionInView('About');

    return (
        <section ref={ref} id='about' className='hero-section'>
            <motion.div className='hero-avatar-container'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            >
                <Image
                    src={heroImg}
                    width={300}
                    height={300}
                    alt='Nikhil Lohar Picture'
                    className='hero-avatar'
                />
            </motion.div>
            <div className='hero-detail-container'>
                <motion.div whileInView="visible" initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}>
                    <span className='font-black text-[2.5rem] max-sm:text-[2rem]'>Hey, I'm Nikhil  </span>
                    <span className='wave-hand'>👋</span>
                </motion.div>
                <h3>
                    <motion.span className='font-extrabold text-[1.5rem] max-sm:text-[1.2rem]' initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}>
                        <Typewriter
                            text= {personalData.roles}
                            loop={true}
                            speed={150}
                        />
                    </motion.span>
                </h3>

                <motion.div initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}>
                    <span className='flex flex-wrap font-medium w-full xl:w-[32rem] tracking-wider'>{personalData.about}</span>
                </motion.div>

                <motion.div className='flex gap-3 items-center' initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }} transition={{
            delay:0.1
        }}>
                    <a className='download-cv group'>Download CV{" "}
                        <HiDownload className='opacity-60' />
                    </a>
                    <a className='linkden' href={personalData.linkden} target='_blank'>
                        <BsLinkedin />
                    </a>
                    <a className='github' href={personalData.github} target='_blank'>
                        <FaGithubSquare />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
