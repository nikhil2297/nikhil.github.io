import React from 'react'
import { useFormStatus } from 'react-dom';
import { FaPaperPlane } from 'react-icons/fa'

export default function SubmitBtn() {
    const { pending } = useFormStatus();
  return (
    <button className='submit-btn flex gap-3 justify-center group disabled:scale-100 disabled:bg-opacity-65' type='submit'  disabled={pending}>

    {
      pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>

      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="mt-1 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )
    }</button>
  )
}
