import React from 'react'
import Image from "next/image";
import '@/components/projects/project.css';

export default function ProjectItem({
    name,
    description,
    date,
    tags,
    imageUrl,
    link,
}: any) {
    return (
        <section className="project-item-section mt-4">
            <div className='project-item-container group'>
                <div className='p-4 pt-6 sm:p-0 sm:w-[50%] lg:w-[60%]'>
                    <span className='text-2xl font-bold'>{name}</span>
                    <p className='mt-2 leading-relaxed text-gray-700 '>{description}</p>
                    <ul className="flex flex-wrap gap-2 mt-8">
                        {
                            tags.map((tag: any, index: any) => (
                                <li
                                    className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                                    key={index}
                                >
                                    {tag}
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <Image
                    src={imageUrl}
                    alt="Recnn snapshot"
                    quality={95}
                    className="project-item lg:group-hover:scale-[1.04] lg:group-hover:-translate-x-3 lg:group-hover:translate-y-1 lg:group-hover:-rotate-1"
                />

            </div>

        </section>
    )
}
