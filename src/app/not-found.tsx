'use client'

import Link from 'next/link'
import { Fraunces, Inter_Tight } from 'next/font/google'
import { ArrowRight, UtensilsCrossed } from 'lucide-react'
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

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: 'easeOut' as const },
    },
}

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.18,
        },
    },
}

export default function NotFound() {
    return (
        <main className='relative flex min-h-screen items-center justify-center overflow-hidden bg-[#1B1611] px-5 py-20 sm:px-6'>
            <div className='pointer-events-none absolute left-1/2 top-[38%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A227]/10 blur-[100px] sm:h-125 sm:w-125 sm:blur-[150px]' />

            <div className='pointer-events-none absolute right-0 bottom-0 h-64 w-64 translate-x-1/4 translate-y-1/4 rounded-full bg-[#8B5E3C]/10 blur-[90px] sm:h-96 sm:w-96 sm:blur-[130px]' />

            <div className='pointer-events-none absolute left-0 top-0 h-56 w-56 -translate-x-1/3 -translate-y-1/3 rounded-full bg-[#F4EDE1]/3 blur-[90px] sm:h-80 sm:w-80' />

            <div
                className='pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay'
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                }}
            />

            <section className='relative z-10 mx-auto flex max-w-2xl flex-col items-center text-center'>
                <motion.div variants={container} initial='hidden' animate='visible'>
                    <motion.h1 variants={fadeUp} className={`${fraunces.className} bg-linear-to-b from-[#F4EDE1] via-[#F4EDE1]/85 to-[#F4EDE1]/40 bg-clip-text text-7xl font-black leading-none tracking-wide text-transparent drop-shadow-[0_10px_50px_rgba(201,162,39,0.25)] sm:text-8xl lg:text-9xl`}>
                        404
                    </motion.h1>

                    <motion.h2 variants={fadeUp} className={`${fraunces.className} mx-auto mt-5 max-w-xl text-[1.85rem] font-bold leading-tight tracking-wide text-white sm:mt-7 sm:text-5xl lg:text-6xl`}>
                        We Couldn&apos;t Find
                        <br />
                        <span>This Page</span>
                    </motion.h2>

                    <motion.p variants={fadeUp} className={`${interTight.className} mx-auto mt-5 max-w-md text-[13.5px] leading-6 tracking-wide text-white/55 sm:mt-6 sm:text-[16px] sm:leading-relaxed`}>
                        Looks like the page you&apos;re looking for has wandered away. Let&apos;s get you back to Leaf Deck Café.
                    </motion.p>

                    <motion.div variants={fadeUp} className='mt-8 flex w-full flex-col items-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:justify-center sm:gap-4'>
                        <Link
                            href='/'
                            className='group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#F4EDE1] px-7 py-3.5 text-[12.5px] font-bold uppercase tracking-[0.14em] text-[#2A2420] shadow-[0_14px_35px_rgba(0,0,0,.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1B1611] sm:w-auto sm:px-9 sm:py-4 sm:text-[13px]'
                        >
                            Return Home
                            <ArrowRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
                        </Link>

                        <Link
                            href='/menu'
                            className='group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-[12.5px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A227]/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1B1611] sm:w-auto sm:px-9 sm:py-4 sm:text-[13px]'
                        >
                            <UtensilsCrossed className='h-4 w-4 text-[#C9A227]' />
                            Explore Menu
                        </Link>
                    </motion.div>
                </motion.div>
            </section>
        </main>
    )
}
