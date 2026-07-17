'use client'

import Image from 'next/image'
import { Fraunces, Inter_Tight } from 'next/font/google'

const interTight = Inter_Tight({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
})

const fraunces = Fraunces({
    subsets: ['latin'],
    weight: ['600', '700', '900'],
    style: ['normal', 'italic'],
})

const stats = [
    { label: 'Established', value: '2020' },
    { label: 'Cuisines Served', value: '12+' },
    { label: 'Happy Guests', value: '50K+' },
]

export default function AboutSection() {
    return (
        <section className='relative bg-[#1B1611] py-12 select-none sm:py-16 lg:py-20'>
            <div className='relative overflow-hidden rounded-[30px] bg-[#EDE3D0] px-4 py-10 sm:rounded-[28px] sm:px-8 sm:py-18 lg:rounded-[30px] lg:px-14 lg:py-24'>
                <div className='pointer-events-none absolute right-0 top-0 h-60 w-60 -translate-y-1/3 translate-x-1/4 rounded-full bg-[#8B5E3C]/10 blur-[80px] sm:h-80 sm:w-80 sm:blur-[110px] lg:h-96 lg:w-96 lg:blur-[140px]' />

                <div className='relative z-10 mx-auto max-w-6xl'>
                    <div className='mb-10 text-center sm:mb-14 lg:mb-16'>
                        <h2 className={`${fraunces.className} text-[2.2rem] font-bold tracking-[-1px] text-[#2A2420] sm:text-5xl sm:tracking-[-0.03em] lg:text-6xl`}>Our Story</h2>

                        <p className={`${interTight.className} mt-1 text-[15px] text-[#2A2420]/60 sm:mt-4 sm:text-base lg:text-lg`}>More than just a meal.</p>
                    </div>

                    <div className='grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16'>
                        <div className='relative h-65 w-full overflow-hidden rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.25)] sm:h-95 sm:rounded-3xl lg:h-140'>
                            <Image src='/images/interior.avif' alt='Leaf Deck Cafe interior' fill quality={100} className='object-cover brightness-110 contrast-105 saturate-105 transition-transform duration-700 hover:scale-[1.02]' />

                            <div className='absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent' />
                        </div>

                        <div className='text-center lg:text-left'>
                            <p className={`${interTight.className} mx-auto max-w-xl text-[15px] leading-6 tracking-wider text-[#2A2420]/70 lg:mx-0 lg:text-base lg:leading-relaxed`}>
                                Nestled in the heart of Guwahati, Leaf Deck Cafe was created as a welcoming space where exceptional food, handcrafted drinks, and genuine hospitality come together. Every dish is thoughtfully prepared with fresh ingredients, creating an experience that brings
                                families, friends, and food lovers back time and again.
                            </p>

                            <p className={`${interTight.className} mx-auto mt-4 max-w-xl text-[15px] leading-7 tracking-wide text-[#2A2420]/70 lg:mx-0 lg:text-base lg:leading-relaxed`}>
                                Founded by a food enthusiast who wanted to share his passion with the city, our team works every day to make sure every guest who walks in leaves with a reason to come back.
                            </p>

                            <div className='mt-7 grid grid-cols-3 gap-4 border-t border-[#2A2420]/15 pt-6 sm:mt-12 sm:pt-8'>
                                {stats.map((stat) => (
                                    <div key={stat.label} className='text-center lg:text-left'>
                                        <span className={`${fraunces.className} block text-2xl font-semibold text-[#8B5E3C] sm:text-3xl`}>{stat.value}</span>

                                        <span className={`${interTight.className} mt-1 block text-[9px] uppercase tracking-[0.16em] text-[#2A2420]/50 sm:text-xs`}>{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
