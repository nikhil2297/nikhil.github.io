"use client";

import React from 'react'
import './header.css'
import { motion } from "framer-motion";
import { links } from '@/lib/data';
import Link from 'next/link';
import { ActiveSectionContext, useActiveSectionContext } from '@/context/active-section';

export default function Header() {

  const {activeSection, setActiveSection, setTimeLastClicked} =  useActiveSectionContext();

  return (<header className='z-[999] relative w-full'>
    <motion.div className='header' initial={{ y: -100, x: "-50%", opacity: 0 }} animate={{ y: 0, x: "-50%", opacity: 1 }}></motion.div>

    <nav className='nav-parent'>
      <ul className='nav-items-list'>
        {
          links.map((link) => (
            <motion.li initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} key={link.hash} className='h-3/4 flex item-center justify-center relative'>
              <Link href={link.hash} className={activeSection === link.name ? 'nav-link-item nav-link-item-active' : 'nav-link-item'} onClick={() => {
                setActiveSection(link.name);
                setTimeLastClicked(Date.now());
              }}>
                {link.name}
                {
                  activeSection === link.name && <motion.span className=' bg-gray-200 absolute rounded-full inset-0 -z-10' layoutId='activeSection' transition={
                    {
                      type: 'spring',
                      stiffness: 300,
                      damping: 30
                    }
                  }></motion.span>
                }
              </Link>
            </motion.li>
          ))
        }
      </ul>
    </nav>

  </header>);
}
