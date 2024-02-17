"use client";
import React from 'react'
import SectionHeader from '../section-header'
import './contact.css';
import { motion } from "framer-motion";
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import { Bounce, toast } from 'react-toastify';
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from 'react-dom';
import SubmitBtn from '../submitBtn';


export default function Contact() {
  const { ref } = useSectionInView('Contact');
  const { pending } = useFormStatus();

  return (
    <motion.section ref={ref} id='contact' className='contact-section'
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <div>
        <SectionHeader>Contact me</SectionHeader>
        <p className="text-gray-700">
          Please contact me directly at{" "}
          <a className="underline" href="mailto:nikhillohar2297@gmail.com">
            nikhillohar2297@gmail.com
          </a>{" "}
          or through this form.
        </p>

        <form className='contact-form' action={
          async (formData) => {
            const { data, error } = await sendEmail(formData);
            
            if (error) {
              toast.error(error, {
                position: "bottom-center",
                autoClose: 5000,
                closeOnClick: true,
                hideProgressBar: false,
                progress: undefined,
                theme: 'colored',
                transition: Bounce
              })

              return;
            }

            toast.success("Email Sent successfully!", {
              position: "bottom-center",
              autoClose: 5000,
              closeOnClick: true,
              hideProgressBar: false,
              progress: undefined,
              theme: 'colored',
              transition: Bounce
            })
          }
        }>
          <input type="email" className='email-input' maxLength={500} placeholder='Your Email' name='senderEmail' required />
          <textarea className='message-text' maxLength={5000} placeholder='Your Message' name='message' required />

          <SubmitBtn/>
        </form>
      </div>
    </motion.section>
  )
}
