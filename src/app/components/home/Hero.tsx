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
        <section id='home' className='relative bg-[#1B1611] select-none'>
            <div className='relative h-[102vh] overflow-hidden rounded-b-[30px] sm:rounded-b-[30px]'>
                <Image src='/images/hero_image2.png' alt='Leaf Deck Cafe' fill priority quality={100} className='object-cover object-center saturate-110 contrast-105 brightness-105' />

                <div className='absolute inset-0 bg-linear-to-b from-black/35 via-black/15 to-black/60' />
                <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.50)_0%,rgba(0,0,0,0.18)_48%,transparent_80%)]' />
                <div className='absolute inset-x-0 top-0 h-40 bg-linear-to-b from-black/60 via-black/20 to-transparent' />
                <div className='absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/80 to-transparent' />
                <div className='absolute bottom-0 left-1/2 h-16 w-360 -translate-x-1/2 rounded-full bg-black/15 blur-[70px]' />
                <div className='absolute left-1/2 top-[56%] h-64 w-2xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/35 blur-[110px]' />

                <div className='absolute inset-0 z-10 flex items-center justify-center px-6'>
                    <div className='text-center text-white'>
                        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className={`${interTight.className} text-sm font-medium uppercase tracking-[0.42em] text-white/85 md:text-lg`}>
                            Welcome to
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.2,
                            }}
                            className={`${fraunces.className} mt-3 text-5xl font-black tracking-wide text-white drop-shadow-[0_10px_40px_rgba(0,0,0,0.9)] sm:text-6xl md:text-7xl lg:text-8xl`}
                        >
                            Leaf Deck Cafe
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                delay: 0.45,
                                duration: 0.6,
                            }}
                            className='mt-4 flex items-center justify-center gap-4'
                        >
                            <span className='h-px w-10 bg-white/35' />
                            <h2 className={`${interTight.className} text-sm font-semibold uppercase tracking-[0.25em] text-white/90`}>Cafe · Bar · Dine-In</h2>
                            <span className='h-px w-10 bg-white/35' />
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.6,
                                duration: 0.6,
                            }}
                            className={`${fraunces.className} mx-auto mt-5 max-w-xl text-lg italic tracking-wide text-white/85 md:text-xl`}
                        >
                            Crafted flavours. Memorable moments.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.8,
                                duration: 0.6,
                            }}
                            className='mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row'
                        >
                            <Link href='/menu' className='group flex items-center gap-2 rounded-full bg-[#F4EDE1] px-9 py-4 text-[13px] font-bold uppercase tracking-[0.14em] text-[#2A2420] shadow-[0_12px_32px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1 hover:bg-white'>
                                Explore Menu
                                <ArrowRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
                            </Link>

                            <a
                                href='tel:+917400190024'
                                className='group flex items-center gap-2 rounded-full border border-white/35 bg-white/5 px-9 py-4 text-[13px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-[2px] transition-all duration-300 hover:border-white/30 hover:bg-white/10'
                            >
                                <Phone className='h-4 w-4' />
                                Call Us
                            </a>
                        </motion.div>
                    </div>
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
                        delay: 1.1,
                        duration: 0.6,
                    }}
                    className='group absolute bottom-6 left-1/2 z-20 -translate-x-1/2'
                >
                    <div className='flex flex-col items-center text-white/55 transition-all duration-300 group-hover:text-white'>
                        <span className={`${interTight.className} text-[11px] uppercase tracking-[0.35em]`}>Scroll</span>
                        <ChevronDown strokeWidth={1.5} className='mt-0.5 h-5 w-5 animate-gentle-bounce' />
                    </div>
                </motion.a>
            </div>
        </section>
    )
}
