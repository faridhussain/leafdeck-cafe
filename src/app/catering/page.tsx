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
            <section className='relative h-[42vh] overflow-hidden rounded-b-[28px] sm:h-[50vh] lg:h-[68vh]'>
                <Image src='/images/catering-banner.png' alt='Catering spread by Leaf Deck Cafe' fill priority quality={100} className='object-cover object-center saturate-110 contrast-105 brightness-95' />

                <div className='absolute inset-0 bg-linear-to-b from-black/55 via-black/35 to-black/70' />

                <div className='absolute inset-0 flex flex-col items-center justify-center px-5 text-center text-white sm:px-6'>
                    <span className={`${interTight.className} text-[11px] font-semibold uppercase tracking-[0.45em] text-white/75 sm:text-xs md:text-sm`}>Beyond The Table</span>

                    <h1 className={`${fraunces.className} mt-3 text-[2.5rem] leading-none font-black tracking-wide drop-shadow-[0_10px_40px_rgba(0,0,0,0.9)] sm:mt-4 sm:text-6xl md:text-7xl`}>
                        Catering
                        <br className='sm:hidden' />
                        <span className='sm:ml-3'>Services</span>
                    </h1>
                </div>
            </section>

            <section className='relative overflow-hidden bg-[#1B1611] px-4 py-18 sm:px-6 sm:py-24 lg:py-28'>
                <div className='pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#C9A227]/5 blur-3xl sm:h-96 sm:w-96' />

                <div className='relative z-10 mx-auto max-w-3xl text-center'>
                    <span className={`${interTight.className} text-[11px] font-semibold uppercase tracking-[0.42em] text-[#F4EDE1]/50 sm:text-xs md:text-sm`}>For Every Occasion</span>

                    <h2 className={`${fraunces.className} mt-4 text-3xl font-bold tracking-wide text-white sm:text-5xl`}>
                        Your Event,
                        <br className='sm:hidden' />
                        <span className='sm:ml-3'>Our Kitchen</span>
                    </h2>

                    <p className={`${interTight.className} mx-auto mt-6 max-w-2xl text-[15px] leading-7 tracking-wide text-white/65 sm:text-[16px]`}>
                        From birthday parties to corporate lunches and wedding celebrations, we bring the same care to your event that we bring to every table at Leaf Deck. Every menu is crafted around your guests, your preferences, and your budget — never the other way around.
                    </p>

                    <div className='mx-auto mt-6 sm:mt-8 h-px w-20 bg-[#C9A227]/30' />

                    <p className={`${interTight.className} mx-auto sm:mt-8 mt-6 max-w-xl text-[14px] italic leading-7 text-white/45 sm:text-[15px]`}>Trusted by celebrities, bureaucrats, corporate teams, and families across Assam.</p>
                </div>
            </section>

            <section className='relative bg-[#1B1611] select-none'>
                <div className='relative overflow-hidden rounded-[28px] bg-[#EDE3D0] px-4 py-10 sm:px-8 sm:py-20 lg:px-14 lg:py-24'>
                    <div className='pointer-events-none absolute right-0 top-0 h-72 w-72 -translate-y-1/3 translate-x-1/4 rounded-full bg-[#8B5E3C]/10 blur-3xl sm:h-96 sm:w-96' />

                    <div className='relative z-10 mx-auto max-w-6xl'>
                        <div className='mb-10 text-center sm:mb-16'>
                            <span className={`${interTight.className} text-[11px] font-semibold uppercase tracking-[0.42em] text-[#8B5E3C]/70 sm:text-xs`}>What's On Offer</span>

                            <h2 className={`${fraunces.className} mt-4 text-[1.95rem] font-bold tracking-wide text-[#2A2420] sm:text-5xl`}>
                                Built Course
                                <br className='sm:hidden' />
                                <span className='sm:ml-3'>By Course</span>
                            </h2>
                        </div>

                        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8'>
                            {categories.map((category) => (
                                <div key={category.title} className='group rounded-3xl border border-[#2A2420]/8 bg-white/35 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/55 sm:p-7'>
                                    <div className='flex items-center justify-between gap-4'>
                                        <h3 className={`${fraunces.className} text-[1.55rem] leading-tight font-semibold text-[#2A2420] sm:text-2xl`}>{category.title}</h3>

                                        <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#8B5E3C]/10 sm:h-13 sm:w-13 sm:rounded-2xl'>
                                            <category.icon className='h-4.5 w-4.5 text-[#8B5E3C] sm:h-6 sm:w-6' strokeWidth={1.6} />
                                        </div>
                                    </div>

                                    <p className={`${interTight.className} mt-4 text-[13.5px] leading-6 text-[#2A2420]/65 sm:text-[15px] sm:leading-7`}>{category.copy}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className='relative overflow-hidden bg-[#1B1611] px-4 py-12 sm:px-6 sm:py-24 lg:py-28'>
                <div className='relative z-10 mx-auto max-w-6xl'>
                    <motion.div
                        className='mb-10 flex flex-col items-center gap-6 border-b border-white/10 pb-8 text-center lg:mb-16 lg:flex-row lg:items-end lg:justify-between lg:gap-8 lg:pb-10 lg:text-left'
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className='lg:text-left'>
                            <span className={`${interTight.className} text-[11px] font-semibold uppercase tracking-[0.42em] text-[#F4EDE1]/50 sm:text-xs md:text-sm`}>How It Works</span>

                            <h2 className={`${fraunces.className} mt-4 text-[1.95rem] font-bold text-white sm:text-5xl`}>
                                Three Steps,
                                <br className='sm:hidden' />
                                <span className='sm:ml-3'>Start To Finish</span>
                            </h2>
                        </div>

                        <p className={`${interTight.className} mx-auto max-w-md text-[13.5px] leading-6 text-white/50 sm:text-[15px] sm:leading-7 lg:mx-0 lg:text-left`}>
                            No fixed packages to squeeze your event into. Every catering experience is tailored around your guests, your occasion, and your budget.
                        </p>
                    </motion.div>

                    <motion.div
                        className='grid grid-cols-1 gap-5 md:grid-cols-3'
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
                        {steps.map((step, index) => (
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
                                className='group relative overflow-hidden rounded-3xl border border-white/10 bg-white/3 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A227]/25 hover:bg-white/5 sm:p-8'
                            >
                                <span className={`${fraunces.className} absolute right-6 top-6 text-[2.6rem] font-bold text-white/5 sm:text-5xl`}>0{index + 1}</span>

                                <div className='mb-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#C9A227]/10 sm:h-14 sm:w-14'>
                                    <step.icon className='h-5 w-5 text-[#C9A227] sm:h-7 sm:w-7' strokeWidth={1.5} />
                                </div>

                                <h3 className={`${fraunces.className} text-[1.45rem] font-semibold text-white sm:text-2xl`}>{step.title}</h3>

                                <p className={`${interTight.className} mt-2.5 text-[13.5px] leading-6 text-white/55 sm:mt-4 sm:text-[15px] sm:leading-7`}>{step.copy}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <motion.section className='relative bg-[#1B1611] px-4 pb-12 sm:px-6 sm:pb-24 lg:pb-28' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
                <div className='mx-auto max-w-6xl'>
                    <motion.div className='mb-8 text-center lg:mb-14' initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <span className={`${interTight.className} text-[11px] font-semibold uppercase tracking-[0.42em] text-[#F4EDE1]/50 sm:text-xs md:text-sm`}>From Past Events</span>

                        <h2 className={`${fraunces.className} mt-2 text-[1.95rem] font-bold tracking-wide text-white sm:text-5xl`}>
                            On The
                            <span className='sm:ml-3'>Table</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        className='grid grid-cols-2 gap-2.5 sm:gap-5 lg:grid-cols-4 lg:gap-6'
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
                                className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl ${i % 2 === 1 ? 'lg:mt-10' : ''}`}
                            >
                                <div className='relative h-36 sm:h-64 lg:h-80'>
                                    <Image src={image.src} alt={image.alt} fill quality={100} className='object-cover transition-transform duration-700 group-hover:scale-105' />

                                    <div className='absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100' />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            <section className='relative overflow-hidden bg-[#1B1611] px-4 pb-16 select-none sm:px-6 sm:pb-24 lg:pb-28'>
                <div className='pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A227]/5 blur-3xl sm:h-112 sm:w-md' />

                <div className='relative mx-auto max-w-5xl overflow-hidden rounded-[28px] border border-white/10 bg-linear-to-br from-white/4 via-white/2 to-transparent px-5 py-10 backdrop-blur-xl sm:px-10 sm:py-18 lg:px-16 lg:py-20'>
                    <div className='mx-auto max-w-3xl text-center'>
                        <span className={`${interTight.className} text-[11px] font-semibold uppercase tracking-[0.42em] text-[#F4EDE1]/45 sm:text-xs`}>Let's Make It Memorable</span>

                        <h2 className={`${fraunces.className} mt-3 text-[1.95rem] font-bold leading-tight text-[#F4EDE1] sm:text-5xl`}>
                            Planning Something
                            <br className='sm:hidden' />
                            <span className='sm:ml-3'>Special?</span>
                        </h2>

                        <p className={`${interTight.className} mx-auto mt-4 max-w-2xl text-[13.5px] leading-6 text-white/60 sm:mt-6 sm:text-[16px] sm:leading-8`}>
                            Whether it's an intimate gathering or a large celebration, we'll help you create a menu your guests will remember. Reach out today and let's start planning your event.
                        </p>

                        <div className='mt-7 flex flex-col gap-4 sm:flex-row sm:justify-center'>
                            <Link
                                href='/contact'
                                className='group inline-flex items-center justify-center gap-2 rounded-full bg-[#F4EDE1] px-6 py-3.5 text-[13px] font-bold uppercase tracking-[0.14em] text-[#2A2420] shadow-[0_14px_35px_rgba(0,0,0,.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-white sm:px-8 sm:py-4'
                            >
                                Enquire Now
                                <ArrowRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
                            </Link>

                            <Link
                                href='tel:+917400019024'
                                className='group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/4 px-6 py-3.5 text-[13px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md transition-all duration-300 hover:border-[#C9A227]/40 hover:bg-white/[0.07] sm:px-8 sm:py-4'
                            >
                                <Phone className='h-4 w-4 text-[#C9A227]' />
                                Call Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
