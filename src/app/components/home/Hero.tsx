'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Fraunces, Inter_Tight } from 'next/font/google'
import { ArrowRight, Phone, ChevronDown } from 'lucide-react'
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

export default function Hero() {
    return (
        <section id='home' className='relative bg-[#1B1611]'>
            <div className='relative h-svh min-h-175 overflow-hidden rounded-b-3xl sm:rounded-b-[28px] lg:rounded-b-[30px]'>
                <motion.div
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 2,
                        ease: 'easeOut',
                    }}
                    className='absolute inset-0'
                >
                    <Image src='/images/hero_image2.png' alt='Leaf Deck Cafe' fill priority quality={100} className='object-cover object-center saturate-110 contrast-105 brightness-105' />
                </motion.div>

                <div className='absolute inset-0 bg-linear-to-b from-black/40 via-black/15 to-black/65' />
                <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.50)_0%,rgba(0,0,0,0.18)_48%,transparent_80%)]' />
                <div className='absolute inset-x-0 top-0 h-28 bg-linear-to-b from-black/60 via-black/20 to-transparent sm:h-32 lg:h-40' />
                <div className='absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black/80 to-transparent sm:h-24' />
                <div className='absolute bottom-0 left-1/2 h-14 w-[320px] -translate-x-1/2 rounded-full bg-black/15 blur-[60px] sm:h-16 sm:w-130 lg:w-360 lg:blur-[70px]' />
                <div className='absolute left-1/2 top-[56%] h-55 w-85 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/35 blur-[80px] sm:h-75 sm:w-175 lg:h-64 lg:w-225 lg:blur-[110px]' />

                <div className='absolute inset-0 z-10 flex items-center justify-center px-5 sm:px-8 lg:px-6'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.9,
                            ease: 'easeOut',
                        }}
                        className='w-full max-w-5xl text-center text-white'
                    >
                        <span className={`${interTight.className} text-[10px] font-medium uppercase tracking-[0.32em] text-white/85 sm:text-xs sm:tracking-[0.38em] md:text-sm md:tracking-[0.42em] lg:text-lg`}>Welcome to</span>

                        <h1 className={`${fraunces.className} mt-3 text-[2.5rem] leading-none font-black tracking-wide text-white drop-shadow-[0_10px_40px_rgba(0,0,0,0.9)] xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6rem]`}>Leaf Deck Cafe</h1>

                        <div className='mt-4 flex items-center justify-center gap-3 sm:gap-4'>
                            <span className='h-px w-6 bg-white/35 sm:w-10' />

                            <h2 className={`${interTight.className} text-[10px] font-semibold uppercase tracking-[0.18em] text-white/90 sm:text-xs sm:tracking-[0.22em] md:text-sm md:tracking-[0.25em]`}>Cafe · Bar · Dine-In</h2>

                            <span className='h-px w-6 bg-white/35 sm:w-10' />
                        </div>

                        <p className={`${fraunces.className} mx-auto mt-5 max-w-[320px] text-base italic leading-relaxed tracking-wide text-white/85 sm:max-w-xl sm:text-lg md:max-w-2xl md:text-xl`}>Crafted flavours. Memorable moments.</p>

                        <div className='mt-8 flex flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row sm:gap-4'>
                            <Link
                                href='/menu'
                                className='group flex w-full max-w-70 items-center justify-center gap-2 rounded-full bg-[#F4EDE1] px-8 py-3.5 text-[12px] font-bold uppercase tracking-[0.14em] text-[#2A2420] shadow-[0_12px_32px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1 hover:bg-white sm:w-auto sm:max-w-none sm:px-9 sm:py-4 sm:text-[13px]'
                            >
                                Explore Menu
                                <ArrowRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
                            </Link>

                            <a
                                href='tel:+917400190024'
                                className='group flex w-full max-w-70 items-center justify-center gap-2 rounded-full border border-white/35 bg-white/5 px-8 py-3.5 text-[12px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-[2px] transition-all duration-300 hover:border-white/30 hover:bg-white/10 sm:w-auto sm:max-w-none sm:px-9 sm:py-4 sm:text-[13px]'
                            >
                                <Phone className='h-4 w-4' />
                                Call Us
                            </a>
                        </div>
                    </motion.div>
                </div>

                <motion.a
                    href='#signature-dishes'
                    onClick={(e) => {
                        e.preventDefault()

                        document.getElementById('signature-dishes')?.scrollIntoView({
                            behavior: 'smooth',
                        })
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 1,
                        duration: 0.6,
                    }}
                    className='group absolute bottom-5 left-1/2 z-20 -translate-x-1/2 sm:bottom-6'
                >
                    <div className='flex flex-col items-center text-white/55 transition-all duration-300 group-hover:text-white'>
                        <span className={`${interTight.className} text-[10px] uppercase tracking-[0.3em] sm:text-[11px] sm:tracking-[0.35em]`}>Scroll</span>

                        <ChevronDown strokeWidth={1.5} className='mt-0.5 h-4 w-4 animate-gentle-bounce sm:h-5 sm:w-5' />
                    </div>
                </motion.a>
            </div>
        </section>
    )
}
