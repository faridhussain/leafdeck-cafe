'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Fraunces } from 'next/font/google'
import { ArrowRight } from 'lucide-react'
import { motion, Variants } from 'framer-motion'

const fraunces = Fraunces({
    subsets: ['latin'],
    weight: ['600', '700'],
})

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
}

const itemVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
}

const dishes = [
    {
        name: 'Grilled Chicken Steak',
        image: '/images/dish-1.avif',
        position: 'center',
    },
    {
        name: 'Oreo Chocolate Shake',
        image: '/images/dish-22.png',
        position: 'center top',
    },
    {
        name: 'Peri Peri Chicken',
        image: '/images/dish-33.jpg',
        position: 'center',
    },
    {
        name: 'Creamy Alfredo Pasta',
        image: '/images/dish-4.avif',
        position: 'center',
    },
    {
        name: 'Loaded Meat Pizza',
        image: '/images/dish-5.avif',
        position: 'center',
    },
    {
        name: 'Sticky BBQ Wings',
        image: '/images/dish-66.avif',
        position: 'center',
    },
    {
        name: 'Chicken Wrap',
        image: '/images/dish-7.avif',
        position: 'center',
    },
    {
        name: 'Cheesy Garlic Bread',
        image: '/images/dish-8.avif',
        position: 'center',
    },
    {
        name: 'Classic Mojito',
        image: '/images/dish-99.png',
        position: 'center top',
    },
]

export default function SignatureDishes() {
    return (
        <section id='signature-dishes' className='relative overflow-hidden bg-[#1B1611] py-15 sm:py-18 lg:py-23 select-none'>
            <div className='pointer-events-none absolute left-1/2 top-16 h-80 w-[320px] -translate-x-1/2 rounded-full bg-[#D8B45A]/6 blur-[110px] sm:top-20 sm:h-105 sm:w-175 sm:blur-[140px] lg:top-24 lg:h-130 lg:w-360 lg:blur-[180px]' />

            <div className='relative z-10 mx-auto w-[92%] max-w-[1800px]'>
                <motion.div className='mb-6 text-center sm:mb-14 lg:mb-16' initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}>
                    <h2 className={`${fraunces.className} text-[2.2rem] font-semibold tracking-[-2px] sm:tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl xl:text-7xl`}>Our Signature Dishes</h2>

                    <p className='mx-auto mt-1 max-w-xs text-[15px] leading-5 text-white/60 sm:mt-5 sm:max-w-xl sm:text-base lg:max-w-2xl lg:text-lg'>A curated selection of our most loved creations.</p>
                </motion.div>

                <motion.div className='grid grid-cols-1 gap-x-6 gap-y-7 sm:grid-cols-2 sm:gap-x-7 sm:gap-y-14 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16' variants={containerVariants} initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.15 }}>
                    {dishes.map((dish) => (
                        <motion.div key={dish.name} variants={itemVariants} className='group'>
                            <div className='relative overflow-hidden rounded-2xl shadow-[0_18px_50px_rgba(0,0,0,0.18)]'>
                                <Image
                                    src={dish.image}
                                    alt={dish.name}
                                    width={800}
                                    height={600}
                                    quality={100}
                                    style={{
                                        objectPosition: dish.position,
                                    }}
                                    className='aspect-4/3 w-full object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.03]'
                                />

                                <div className='absolute inset-0 bg-black/0 transition-colors duration-500' />
                            </div>

                            <div className='mt-4 text-center sm:mt-5'>
                                <h3 className={`${fraunces.className} text-xl tracking-tight text-white transition-colors duration-300 group-hover:text-[#F4EDE1] sm:text-2xl`}>{dish.name}</h3>

                                <div className='mx-auto mt-3 h-px w-8 bg-[#C9A227]/45 transition-all duration-500 group-hover:w-16 group-hover:bg-[#D8B45A] sm:w-10 sm:group-hover:w-20' />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.35,
                    }}
                    className='mt-10 flex justify-center sm:mt-14 lg:mt-16'
                >
                    <Link
                        href='/menu'
                        className='group flex w-full max-w-70 items-center justify-center gap-2 rounded-full border border-[#F4EDE1]/20 px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#F4EDE1] transition-all duration-300 hover:bg-white/3 sm:w-auto sm:max-w-none sm:px-9 sm:py-4 sm:text-[13px] sm:tracking-[0.18em]'
                    >
                        Explore Full Menu
                        <ArrowRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
