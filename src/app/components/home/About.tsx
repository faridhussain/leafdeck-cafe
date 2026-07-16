'use client'

import Image from 'next/image'
import { Fraunces, Inter_Tight } from 'next/font/google'
import { motion } from 'framer-motion'

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
        <section className='relative bg-[#1B1611] py-10 select-none'>
            <div className='relative overflow-hidden rounded-[30px] bg-[#EDE3D0] px-6 py-20 sm:px-10 md:py-24 lg:px-14 lg:py-28'>
                <div className='pointer-events-none absolute right-0 top-0 h-96 w-96 -translate-y-1/3 translate-x-1/4 rounded-full bg-[#8B5E3C]/10 blur-3xl' />

                <div className='relative z-10 mx-auto max-w-6xl'>
                    <motion.div className='mb-16 text-center' initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}>
                        <h2 className={`${fraunces.className} text-4xl font-bold text-[#2A2420] sm:text-5xl md:text-6xl`}>Our Story</h2>

                        <p className={`${interTight.className} mt-4 text-base text-[#2A2420]/60 md:text-lg`}>More than just a meal.</p>
                    </motion.div>

                    <div className='grid grid-cols-1 items-center gap-16 lg:grid-cols-2'>
                        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }} className='relative h-105 w-full overflow-hidden rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.25)] sm:h-120 lg:h-140'>
                            <Image src='/images/interior.avif' alt='Leaf Deck Cafe interior' fill className='object-cover brightness-110 contrast-105 saturate-105' />
                            <div className='absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent' />
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, delay: 0.15 }}>
                            <p className={`${interTight.className} max-w-md text-[16px] leading-relaxed tracking-wide text-[#2A2420]/70`}>
                                Nestled in the heart of Guwahati, Leaf Deck Cafe was created as a welcoming space where exceptional food, handcrafted drinks, and genuine hospitality come together. Every dish is thoughtfully prepared with fresh ingredients, creating an experience that brings
                                families, friends, and food lovers back time and again.
                            </p>

                            <p className={`${interTight.className} mt-5 max-w-md text-[16px] leading-relaxed tracking-wide text-[#2A2420]/70`}>
                                Founded by a food enthusiast who wanted to share his passion with the city, our team works every day to make sure every guest who walks in leaves with a reason to come back.
                            </p>

                            <div className='mt-15 flex flex-wrap gap-x-10 gap-y-6 border-t border-[#2A2420]/15 pt-8'>
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.2 + index * 0.1,
                                        }}
                                    >
                                        <span className={`${fraunces.className} block text-3xl font-semibold text-[#8B5E3C]`}>{stat.value}</span>
                                        <span className={`${interTight.className} mt-1 block text-xs uppercase tracking-[0.15em] text-[#2A2420]/50`}>{stat.label}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
