'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Fraunces, Inter_Tight } from 'next/font/google'
import { ArrowRight, Leaf, HeartHandshake, UtensilsCrossed } from 'lucide-react'
import { motion, Variants } from 'framer-motion'

const interTight = Inter_Tight({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
})

const fraunces = Fraunces({
    subsets: ['latin'],
    weight: ['600', '700', '900'],
    style: ['normal', 'italic'],
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

const values = [
    {
        icon: Leaf,
        title: 'Fresh, Always',
        copy: 'Ingredients sourced daily — nothing sits in a walk-in longer than it has to.',
    },
    {
        icon: HeartHandshake,
        title: 'Genuine Hospitality',
        copy: 'Every guest is greeted like a regular, whether it is their first visit or fiftieth.',
    },
    {
        icon: UtensilsCrossed,
        title: 'Made With Intent',
        copy: 'Every dish on the menu earns its place — nothing is there just to fill a page.',
    },
]

const gallery = [
    { src: '/images/about-gallery-1.jpg', alt: 'Leaf Deck Cafe seating area' },
    { src: '/images/about-gallery-2.avif', alt: 'Chef plating a dish' },
    { src: '/images/about-gallery-3.avif', alt: 'Bar counter at Leaf Deck' },
    { src: '/images/about-gallery-4.avif', alt: 'Guests enjoying a meal' },
]

export default function AboutPage() {
    return (
        <main className='bg-[#1B1611]'>
            <section className='relative h-[52svh] min-h-105 overflow-hidden rounded-b-3xl sm:h-[60svh] sm:min-h-130 sm:rounded-b-[28px] lg:h-[68svh] lg:rounded-b-[30px]'>
                <Image src='/images/about-banner.avif' alt='Inside Leaf Deck Cafe' fill priority quality={100} className='object-cover object-center saturate-110 contrast-105 brightness-95' />

                <div className='absolute inset-0 bg-linear-to-b from-black/55 via-black/35 to-black/70' />

                <div className='absolute inset-x-0 top-0 h-28 bg-linear-to-b from-black/60 via-black/20 to-transparent sm:h-32 lg:h-40' />

                <div className='absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black/80 to-transparent sm:h-24' />

                <div className='absolute left-1/2 top-[56%] h-55 w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/35 blur-[80px] sm:h-75 sm:w-162.5 lg:h-64 lg:w-225 lg:blur-[110px]' />

                <div className='absolute inset-0 flex items-center justify-center px-5 text-center text-white sm:px-8 lg:px-6'>
                    <div className='max-w-4xl'>
                        <span className={`${interTight.className} text-[10px] font-medium uppercase tracking-[0.32em] text-white/75 sm:text-xs sm:tracking-[0.38em] md:text-sm md:tracking-[0.42em]`}>The People Behind The Plates</span>

                        <h1 className={`${fraunces.className} mt-3 text-[2.8rem] font-black tracking-wide text-white drop-shadow-[0_10px_40px_rgba(0,0,0,0.9)] sm:mt-4 sm:text-6xl lg:text-7xl`}>About Us</h1>
                    </div>
                </div>
            </section>

            <section className='relative overflow-hidden bg-[#1B1611] px-4 py-16 sm:px-8 sm:py-20 lg:px-6 lg:py-24'>
                <div className='pointer-events-none absolute left-1/2 top-0 h-70 w-70 -translate-x-1/2 rounded-full bg-[#C9A227]/5 blur-[100px] sm:h-95 sm:w-95 sm:blur-[130px] lg:h-120 lg:w-120 lg:blur-[160px]' />

                <div className='relative z-10 mx-auto max-w-3xl text-center'>
                    <span className={`${interTight.className} text-[10px] font-medium uppercase tracking-[0.32em] text-[#F4EDE1]/50 sm:text-xs sm:tracking-[0.38em] md:text-sm md:tracking-[0.42em]`}>How It Started</span>

                    <h2 className={`${fraunces.className} mt-4 text-[2rem] font-bold tracking-tight text-white sm:text-5xl sm:tracking-[-0.03em] lg:text-6xl`}>A Table Worth Coming Back To</h2>

                    <p className={`${interTight.className} mx-auto mt-5 max-w-xl text-[15px] leading-6 tracking-wide text-white/60 sm:mt-6 sm:text-base sm:leading-relaxed lg:max-w-2xl lg:text-lg`}>
                        Leaf Deck Cafe began as a single idea: build a place where a quick coffee, a long lunch, and a late-night drink all feel equally at home. No pretense, no rush — just a room that knows how to hold people well, and a kitchen that treats every order with the same care.
                    </p>

                    <p className={`${interTight.className} mx-auto mt-5 max-w-xl text-[15px] leading-6 tracking-wide text-white/60 sm:text-base sm:leading-relaxed lg:max-w-2xl lg:text-lg`}>
                        Since opening in Guwahati, that idea has stayed the same even as the menu, the space, and the crowd have grown. What hasn&apos;t changed is the standard: if it isn&apos;t good enough to serve a friend, it doesn&apos;t leave the kitchen.
                    </p>
                </div>
            </section>

            <section className='relative bg-[#1B1611]'>
                <div className='relative overflow-hidden rounded-3xl bg-[#EDE3D0] px-4 py-6 sm:rounded-[28px] sm:px-8 sm:py-18 lg:rounded-[30px] lg:px-14 lg:py-24'>
                    <div className='pointer-events-none absolute right-0 top-0 h-60 w-60 -translate-y-1/3 translate-x-1/4 rounded-full bg-[#8B5E3C]/10 blur-[80px] sm:h-80 sm:w-80 sm:blur-[110px] lg:h-96 lg:w-96 lg:blur-[140px]' />

                    <div className='relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16'>
                        <div className='relative h-75 w-full overflow-hidden rounded-2xl bg-[#DDD0B4] shadow-[0_30px_60px_rgba(0,0,0,0.2)] sm:h-115 sm:rounded-3xl lg:h-140'>
                            <Image src='/images/founder-placeholder.avif' alt='Founder of Leaf Deck Cafe' fill quality={100} className='object-cover object-[center_18%]' />
                        </div>

                        <div className='text-center lg:text-left'>
                            <span className={`${interTight.className} text-[10px] font-medium uppercase tracking-[0.32em] text-[#8B5E3C]/70 sm:text-xs sm:tracking-[0.38em] md:text-sm md:tracking-[0.42em]`}>From The Founder</span>

                            <h2 className={`${fraunces.className} mt-1 text-[2rem] font-bold tracking-tighter sm:leading-13 leading-9 text-[#2A2420] sm:text-5xl sm:tracking-[-0.03em] lg:text-6xl`}>A Passion Project, Still</h2>

                            <p className={`${interTight.className} mx-auto mt-5 max-w-xl text-[15px] leading-6 tracking-wider text-[#2A2420]/70 lg:mx-0 lg:text-base lg:leading-relaxed`}>
                                &quot;I didn&apos;t open Leaf Deck to build a brand — I opened it to share food I actually love with a city I actually love. Every table we set is still personal to me.&quot;
                            </p>

                            <p className={`${interTight.className} mx-auto mt-5 max-w-xl text-[15px] leading-6 tracking-wider text-[#2A2420]/70 lg:mx-0 lg:text-base lg:leading-relaxed`}>
                                That mindset is what our whole team carries into the kitchen and onto the floor every single day — treat the guest like they walked into your own home, because in a lot of ways, they did.
                            </p>

                            <div className='mt-5 border-t border-[#2A2420]/15 pt-6'>
                                <span className={`${fraunces.className} block text-lg font-semibold italic text-[#2A2420] sm:text-xl`}>Founder, Leaf Deck Cafe</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='relative overflow-hidden bg-[#1B1611] px-4 py-15 sm:px-8 sm:py-20 lg:px-6 lg:py-24'>
                <div className='relative z-10 mx-auto max-w-6xl'>
                    <div className='mb-10 flex flex-col gap-5 border-b border-white/10 pb-8 text-center sm:mb-12 sm:pb-10 lg:flex-row lg:items-end lg:justify-between lg:text-left'>
                        <div>
                            <span className={`${interTight.className} text-[10px] font-medium uppercase tracking-[0.32em] text-[#F4EDE1]/50 sm:text-xs sm:tracking-[0.38em] md:text-sm md:tracking-[0.42em]`}>What We Stand For</span>

                            <h2 className={`${fraunces.className} mt-2 text-[2.2rem] font-bold tracking-[-1px] text-white sm:text-5xl sm:tracking-[-0.03em] lg:text-6xl`}>The Leaf Deck Way</h2>
                        </div>

                        <p className={`${interTight.className} mx-auto max-w-sm text-[15px] leading-7 text-white/45 lg:mx-0 lg:text-right font-medium`}>Three things we don&apos;t compromise on, no matter how busy the room gets.</p>
                    </div>

                    <motion.div className='grid grid-cols-1 gap-6 sm:mt-0 -mt-5.5 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/10' variants={containerVariants} initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.2 }}>
                        {values.map((value, i) => (
                            <motion.div key={value.title} variants={itemVariants} className={`rounded-2xl border border-white/10 bg-white/2 p-6 sm:border-0 sm:bg-transparent sm:p-8 ${i === 0 ? 'sm:pl-0' : ''} ${i === values.length - 1 ? 'sm:pr-0' : ''}`}>
                                <value.icon className='mx-auto h-7 w-7 text-[#C9A227] lg:mx-0' strokeWidth={1.5} />

                                <h3 className={`${fraunces.className} mt-3 text-center text-xl font-semibold text-white lg:text-left`}>{value.title}</h3>

                                <p className={`${interTight.className} mt-3 text-center text-[15px] leading-7 text-white/55 lg:text-left`}>{value.copy}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className='relative bg-[#1B1611] px-4 pb-14 sm:px-8 sm:pb-20 lg:px-6 lg:pb-24'>
                <div className='mx-auto max-w-6xl'>
                    <div className='mb-6 text-center sm:mb-12'>
                        <span className={`${interTight.className} text-[10px] font-medium uppercase tracking-[0.32em] text-[#F4EDE1]/50 sm:text-xs sm:tracking-[0.38em] md:text-sm md:tracking-[0.42em]`}>A Look Inside</span>

                        <h2 className={`${fraunces.className} sm:mt-4 mt-1 text-[2.2rem] font-bold tracking-[-1px] text-white sm:text-5xl sm:tracking-[-0.03em] lg:text-6xl`}>The Space</h2>
                    </div>

                    <motion.div className='grid grid-cols-2 gap-2 sm:gap-5 lg:grid-cols-4 lg:gap-6' variants={containerVariants} initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.2 }}>
                        {gallery.map((image, i) => (
                            <motion.div key={image.alt} variants={itemVariants} className={`group relative overflow-hidden rounded-2xl bg-[#2A2420] shadow-[0_20px_50px_rgba(0,0,0,0.18)] ${i % 2 === 1 ? 'lg:mt-8' : ''} h-44 sm:h-60 lg:h-80`}>
                                <Image src={image.src} alt={image.alt} fill quality={100} className='object-cover transition-transform duration-700 group-hover:scale-105' />

                                <div className='absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent opacity-80' />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className='relative overflow-hidden bg-[#1B1611] px-4 pb-16 sm:px-8 sm:pb-20 lg:px-6 lg:pb-28'>
                <div className='pointer-events-none absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A227]/5 blur-[90px] sm:h-80 sm:w-80 sm:blur-[120px] lg:h-105 lg:w-105 lg:blur-[160px]' />

                <div className='relative z-10 mx-auto max-w-3xl text-center'>
                    <h2 className={`${fraunces.className} text-[2rem] font-semibold italic leading-tight text-[#F4EDE1] sm:text-5xl lg:text-6xl`}>Come see the space for yourself.</h2>

                    <p className={`${interTight.className} mx-auto mt-5 max-w-xl text-[15px] leading-6 tracking-wider text-white/55 sm:mt-6 sm:text-base sm:leading-relaxed lg:text-lg`}>
                        Great food is only part of the experience. Step inside, find your favorite corner, and enjoy the atmosphere that keeps people coming back.
                    </p>

                    <Link
                        href='/menu'
                        className='group mt-6 inline-flex w-fit items-center justify-center gap-2 rounded-full bg-[#F4EDE1] px-8 py-3 text-[12px] font-bold uppercase tracking-[0.16em] text-[#2A2420] shadow-[0_12px_30px_rgba(0,0,0,.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-white sm:mt-10 sm:w-auto sm:px-10 sm:py-4 sm:text-[13px]'
                    >
                        View The Menu
                        <ArrowRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
                    </Link>
                </div>
            </section>
        </main>
    )
}
