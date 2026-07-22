'use client'

import Link from 'next/link'
import { Fraunces, Inter_Tight } from 'next/font/google'
import { ArrowRight, Phone } from 'lucide-react'
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

export default function Catering() {
    return (
        <section className='relative overflow-hidden bg-[#1C1712] px-4 py-10 sm:px-8 lg:px-6 sm:pb-20 sm:pt-10'>
            <div className='pointer-events-none absolute left-1/2 top-1/2 h-65 w-65 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A227]/5 blur-[90px] sm:h-95 sm:w-95 sm:blur-[120px] lg:h-130 lg:w-130 lg:blur-[160px]' />

            <motion.div className='relative z-10 mx-auto max-w-4xl text-center' initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}>
                <span className={`${interTight.className} text-[10px] font-medium uppercase tracking-[0.32em] text-[#F4EDE1]/70 sm:text-xs sm:tracking-[0.38em] md:text-sm md:tracking-[0.42em]`}>Beyond the Table</span>

                <div className='mt-4 flex items-center justify-center gap-3 sm:mt-5 sm:gap-4'>
                    <span className='h-px w-8 bg-[#F4EDE1]/25 sm:w-10' />
                    <span className='h-1 w-1 rounded-full bg-[#F4EDE1]/40' />
                    <span className='h-px w-8 bg-[#F4EDE1]/25 sm:w-10' />
                </div>

                <h2 className={`${fraunces.className} mt-2 text-[2.3rem] font-bold tracking-[-1px] text-white sm:text-5xl sm:tracking-[-0.03em] lg:text-6xl`}>Catering Services</h2>

                <p className={`${interTight.className} mx-auto mt-4 max-w-2xl text-[15px] leading-7 tracking-wide text-white/70 sm:mt-6 sm:text-base lg:text-lg`}>
                    From birthday parties to corporate lunches and weddings, we bring the same care and flavour to your event that we bring to every table at Leaf Deck. Every menu is customized to fit your occasion and your budget.
                </p>

                <p className={`${fraunces.className} mx-auto mt-5 max-w-xl text-base italic text-[#F4EDE1]/80 sm:mt-6 sm:text-lg lg:text-xl`}>Trusted by celebrities, bureaucrats, and everyone in between.</p>

                <motion.div
                    className='mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4 mb-8'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        delay: 0.3,
                        duration: 0.6,
                    }}
                >
                    <Link
                        href='/catering'
                        className='group flex w-full max-w-70 items-center justify-center gap-2 rounded-full bg-[#F4EDE1] px-8 py-3.5 text-[12px] font-bold uppercase tracking-[0.14em] text-[#2A2420] shadow-[0_12px_32px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1 hover:bg-white sm:w-auto sm:max-w-none sm:px-9 sm:py-4 sm:text-[13px]'
                    >
                        Enquire Now
                        <ArrowRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
                    </Link>

                    <a
                        href='tel:+917400190024'
                        className='group flex w-full max-w-70 items-center justify-center gap-2 rounded-full border border-white/35 bg-white/5 px-8 py-3.5 text-[12px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-[2px] transition-all duration-300 hover:border-white/40 hover:bg-white/10 sm:w-auto sm:max-w-none sm:px-9 sm:py-4 sm:text-[13px]'
                    >
                        <Phone className='h-4 w-4' />
                        Call Us
                    </a>
                </motion.div>
            </motion.div>
        </section>
    )
}
