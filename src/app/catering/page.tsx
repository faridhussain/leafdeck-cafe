'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Fraunces, Inter_Tight } from 'next/font/google'
import { ArrowRight, Phone, UtensilsCrossed, Soup, IceCreamCone, ClipboardList, ChefHat, PartyPopper } from 'lucide-react'
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

const categories = [
    {
        icon: Soup,
        title: 'Starters',
        copy: 'Small plates built to open the table — shareable, quick to plate, and paced for guests who are still arriving.',
    },
    {
        icon: UtensilsCrossed,
        title: 'Main Course',
        copy: 'The heart of the spread. Portions and pacing are built around your headcount, not a fixed buffet line.',
    },
    {
        icon: IceCreamCone,
        title: 'Desserts',
        copy: 'A close, not an afterthought — every package ends with something worth staying in the room for.',
    },
]

const steps = [
    {
        icon: ClipboardList,
        title: 'Tell Us The Occasion',
        copy: 'Headcount, date, and the kind of event — birthday, office lunch, wedding function, anything in between.',
    },
    {
        icon: ChefHat,
        title: 'We Build The Menu',
        copy: 'A menu shaped around your budget and guest list, not a fixed package you have to fit into.',
    },
    {
        icon: PartyPopper,
        title: 'We Show Up And Serve',
        copy: 'Our team handles setup, service, and cleanup — you handle enjoying the occasion.',
    },
]

const gallery = [
    { src: '/images/catering-gallery-1.avif', alt: 'Catering spread for an event' },
    { src: '/images/catering-gallery-2.avif', alt: 'Plated starters on a table' },
    { src: '/images/catering-gallery-3.avif', alt: 'Buffet setup at a private event' },
    { src: '/images/catering-gallery-4.avif', alt: 'Dessert table at a celebration' },
]

export default function CateringPage() {
    return (
        <main className='bg-[#1B1611] select-none'>
            <section className='relative h-[60vh] overflow-hidden rounded-b-[30px] sm:h-[68vh]'>
                <Image src='/images/catering-banner.png' alt='Catering spread by Leaf Deck Cafe' fill priority quality={100} className='object-cover object-center saturate-110 contrast-105 brightness-95' />

                <div className='absolute inset-0 bg-linear-to-b from-black/55 via-black/35 to-black/70' />

                <div className='absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white'>
                    <span className={`${interTight.className} text-xs font-medium uppercase tracking-[0.42em] text-white/75 md:text-sm`}>Beyond The Table</span>

                    <h1 className={`${fraunces.className} mt-4 text-5xl font-black tracking-wide drop-shadow-[0_10px_40px_rgba(0,0,0,0.9)] sm:text-6xl md:text-7xl`}>Catering Services</h1>
                </div>
            </section>
            <section className='relative overflow-hidden bg-[#1B1611] px-6 py-24 sm:py-28'>
                <div className='pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#C9A227]/5 blur-3xl' />

                <div className='relative z-10 mx-auto max-w-3xl text-center'>
                    <span className={`${interTight.className} text-xs font-medium uppercase tracking-[0.42em] text-[#F4EDE1]/50 md:text-sm`}>For Every Occasion</span>

                    <h2 className={`${fraunces.className} mt-4 text-4xl font-bold tracking-wide text-white sm:text-5xl`}>Your Event, Our Kitchen</h2>

                    <p className={`${interTight.className} mx-auto mt-6 max-w-xl text-[16px] leading-relaxed tracking-wide text-white/60`}>
                        From birthday parties to corporate lunches and wedding functions, we bring the same care to your event that we bring to every table at Leaf Deck. Every menu is built around your guest list and your budget — not the other way around.
                    </p>

                    <p className={`${interTight.className} mx-auto mt-5 max-w-xl text-[16px] italic leading-relaxed tracking-wide text-white/50`}>Trusted by celebrities, bureaucrats, and everyone in between.</p>
                </div>
            </section>
            <section className='relative bg-[#1B1611] select-none'>
                <div className='relative overflow-hidden rounded-[30px] bg-[#EDE3D0] px-6 py-14 sm:px-10 lg:px-14'>
                    <div className='pointer-events-none absolute right-0 top-0 h-96 w-96 -translate-y-1/3 translate-x-1/4 rounded-full bg-[#8B5E3C]/10 blur-3xl' />

                    <div className='relative z-10 mx-auto max-w-6xl'>
                        <div className='mb-16 text-center'>
                            <span className={`${interTight.className} text-xs font-medium uppercase tracking-[0.42em] text-[#8B5E3C]/70`}>What&apos;s On Offer</span>

                            <h2 className={`${fraunces.className} mt-4 text-4xl font-bold tracking-wide text-[#2A2420] sm:text-5xl`}>Built Course By Course</h2>
                        </div>

                        <div className='grid grid-cols-1 divide-y divide-[#2A2420]/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0'>
                            {categories.map((category, i) => (
                                <div key={category.title} className={`flex flex-col gap-2 py-8 sm:py-0 sm:px-8 ${i === 0 ? 'sm:pl-0' : ''} ${i === categories.length - 1 ? 'sm:pr-0' : ''}`}>
                                    <category.icon className='h-6 w-6 text-[#8B5E3C]' strokeWidth={1.5} />

                                    <h3 className={`${fraunces.className} text-xl font-semibold text-[#2A2420]`}>{category.title}</h3>

                                    <p className={`${interTight.className} text-[15px] leading-relaxed text-[#2A2420]/65 mt-2`}>{category.copy}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className='relative overflow-hidden bg-[#1B1611] px-6 py-24 sm:py-28'>
                <div className='relative z-10 mx-auto max-w-6xl'>
                    <motion.div className='mb-10 flex flex-col items-start gap-6 border-b border-white/10 pb-10 sm:flex-row sm:items-end sm:justify-between' initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
                        <div>
                            <span className={`${interTight.className} text-xs font-medium uppercase tracking-[0.42em] text-[#F4EDE1]/50 md:text-sm`}>How It Works</span>

                            <h2 className={`${fraunces.className} mt-4 text-4xl font-bold text-white sm:text-5xl`}>Three Steps, Start To Finish</h2>
                        </div>

                        <p className={`${interTight.className} max-w-xs text-[15px] leading-relaxed text-white/45`}>No fixed packages to squeeze your event into — we build around you.</p>
                    </motion.div>

                    <motion.div
                        className='grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0'
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.25 }}
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: 0.12,
                                },
                            },
                        }}
                    >
                        {steps.map((step, i) => (
                            <motion.div
                                key={step.title}
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        y: 30,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 0.55,
                                            ease: 'easeOut',
                                        },
                                    },
                                }}
                                className={`flex flex-col gap-4 py-8 sm:py-0 sm:px-8 ${i === 0 ? 'sm:pl-0' : ''} ${i === steps.length - 1 ? 'sm:pr-0' : ''}`}
                            >
                                <step.icon className='h-6 w-6 text-[#C9A227]' strokeWidth={1.5} />

                                <h3 className={`${fraunces.className} text-xl font-semibold text-white`}>{step.title}</h3>

                                <p className={`${interTight.className} text-[15px] leading-relaxed text-white/55`}>{step.copy}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <motion.section className='relative bg-[#1B1611] px-6 pb-24 sm:pb-28' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
                <div className='mx-auto max-w-6xl'>
                    <motion.div className='mb-12 text-center' initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <span className={`${interTight.className} text-xs font-medium uppercase tracking-[0.42em] text-[#F4EDE1]/50 md:text-sm`}>From Past Events</span>

                        <h2 className={`${fraunces.className} mt-4 text-4xl font-bold tracking-wide text-white sm:text-5xl`}>On The Table</h2>
                    </motion.div>

                    <motion.div
                        className='grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4'
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.12,
                                },
                            },
                        }}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {gallery.map((image, i) => (
                            <motion.div
                                key={image.alt}
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        y: 40,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 0.55,
                                            ease: 'easeOut',
                                        },
                                    },
                                }}
                                className={`relative h-56 overflow-hidden rounded-2xl sm:h-72 ${i % 2 === 1 ? 'lg:mt-8' : ''}`}
                            >
                                <div className='absolute inset-0 bg-[#2A2420]' />

                                <Image src={image.src} alt={image.alt} fill quality={100} className='object-cover' />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            <section className='relative overflow-hidden bg-[#1B1611] px-6 pb-24 select-none sm:pb-28'>
                <div className='relative z-10 mx-auto max-w-2xl text-center'>
                    <h2 className={`${fraunces.className} text-3xl italic text-[#F4EDE1] md:text-4xl`}>Planning something? Let&apos;s talk menu.</h2>

                    <div className='mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row'>
                        <Link href='/enquire' className='group flex items-center gap-2 rounded-full bg-[#F4EDE1] px-9 py-4 text-[13px] font-bold uppercase tracking-[0.14em] text-[#2A2420] shadow-[0_12px_30px_rgba(0,0,0,.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-white'>
                            Enquire Now
                            <ArrowRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
                        </Link>

                        <Link href='/call-us' className='group flex items-center gap-2 rounded-full border border-white/35 bg-white/5 px-9 py-4 text-[13px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md transition-all duration-300 hover:border-white/50 hover:bg-white/10'>
                            <Phone className='h-4 w-4' />
                            Call Us
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
