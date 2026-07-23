'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Fraunces, Inter_Tight } from 'next/font/google'
import { ArrowRight, Phone, UtensilsCrossed, Soup, IceCreamCone } from 'lucide-react'
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
        title: 'Tell Us The Occasion',
        copy: 'Headcount, date, and the kind of event — birthday, office lunch, wedding function, anything in between.',
    },
    {
        title: 'We Build The Menu',
        copy: 'A menu shaped around your budget and guest list, not a fixed package you have to fit into.',
    },
    {
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
        <main className='bg-[#1B1611]'>
            <section className='relative h-[42vh] overflow-hidden rounded-b-3xl sm:h-[50vh] lg:h-[68vh]'>
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

            <section className='relative bg-[#1B1611]'>
                <div className='relative overflow-hidden rounded-3xl bg-[#EDE3D0] px-4 py-10 sm:px-8 sm:py-20 lg:px-14 lg:py-24'>
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

                                        <div className='flex h-10 w-10 shrink-0 items-center justify-center bg-[#8B5E3C]/10 sm:h-13 sm:w-13 rounded-xl'>
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

            <section className='relative bg-[#1B1611] px-4 py-20 sm:px-6 sm:py-28 lg:py-32'>
                <div className='mx-auto max-w-5xl'>
                    <motion.div
                        className='mb-14 flex flex-col items-center gap-3 border-b border-white/10 pb-10 text-center sm:mb-16 sm:flex-row sm:items-end sm:justify-between sm:pb-12 sm:text-left'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className='text-center sm:text-left'>
                            <span className={`${interTight.className} text-[11px] font-semibold uppercase tracking-[0.42em] text-[#F4EDE1]/50 sm:text-xs md:text-sm`}>How It Works</span>
                            <h2 className={`${fraunces.className} mt-4 text-[1.85rem] font-bold text-white sm:text-4xl`}>Three Steps, Start To Finish</h2>
                        </div>

                        <p className={`${interTight.className} mx-auto max-w-xs text-center text-[13.5px] leading-6 text-white/50 sm:mx-0 sm:text-right sm:text-[14.5px] sm:leading-7`}>
                            No fixed packages to squeeze your event into. Every experience is tailored around your guests, your occasion, and your budget.
                        </p>
                    </motion.div>

                    <motion.div className='grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6' initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.2 }} variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                variants={{
                                    hidden: { opacity: 0, y: 18 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
                                }}
                                className='group flex h-full flex-col rounded-2xl border border-white/12 bg-white/1.5 p-7 text-left transition-colors duration-300 hover:border-[#C9A227]/35 hover:bg-white/3 sm:p-8'
                            >
                                <div className='flex items-center gap-3'>
                                    <span className={`${interTight.className} shrink-0 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C9A227]/70`}>Step 0{index + 1}</span>
                                    <span className='h-px flex-1 bg-white/10 transition-colors duration-300 group-hover:bg-[#C9A227]/25' />
                                </div>

                                <h3 className={`${fraunces.className} mt-6 text-[1.3rem] font-semibold leading-tight text-white sm:text-[1.4rem]`}>{step.title}</h3>

                                <p className={`${interTight.className} mt-3 flex-1 text-[14px] leading-6 tracking-wide text-white/55 sm:text-[14.5px] sm:leading-7`}>{step.copy}</p>
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
                                className={`group relative overflow-hidden rounded2xl ${i % 2 === 1 ? 'lg:mt-10' : ''}`}
                            >
                                <div className='relative h-36 sm:h-64 lg:h-80'>
                                    <Image src={image.src} alt={image.alt} fill quality={100} className='object-cover transition-transform duration-700 rounded-xl group-hover:scale-105' />

                                    <div className='absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100' />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            <section className='relative overflow-hidden bg-[#1B1611] px-4 py-10 sm:px-6 sm:py-15 lg:py-20'>
                <div className='pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A227]/5 blur-3xl' />

                <div className='relative mx-auto max-w-5xl'>
                    <div className='text-center'>
                        <span className={`${interTight.className} text-[11px] font-semibold uppercase tracking-[0.42em] text-[#F4EDE1]/45 sm:text-xs`}>Trusted Across Assam</span>

                        <h2 className={`${fraunces.className} mt-4 text-[2rem] font-bold leading-tight text-white sm:text-5xl`}>
                            Events We've Been
                            <br className='sm:hidden' />
                            <span className='sm:ml-3'>Proud To Serve</span>
                        </h2>

                        <p className={`${interTight.className} mx-auto mt-6 max-w-3xl text-[15px] leading-7 tracking-wide text-white/70 sm:text-base lg:text-lg`}>
                            From intimate celebrations to large corporate gatherings, Leaf Deck Café has proudly catered memorable occasions across Assam. Our catering has been trusted for events featuring <span className='font-semibold text-[#C9A227]'>Zubeen Garg</span>,{' '}
                            <span className='font-semibold text-[#C9A227]'>Yankee Parasar</span>, <span className='font-semibold text-[#C9A227]'>Achurya Borpatra</span>, along with many renowned celebrities, bureaucrats, corporate teams, weddings, birthdays, and family celebrations.
                        </p>
                    </div>
                </div>
            </section>

            <section className='relative overflow-hidden bg-[#1B1611] px-4 pb-16 sm:px-6 sm:pb-24 lg:pb-28'>
                <div className='pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A227]/5 blur-3xl sm:h-112 sm:w-md' />

                <div className='relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-white/4 via-white/2 to-transparent px-5 py-10 backdrop-blur-xl sm:px-10 sm:py-18 lg:px-16 lg:py-20'>
                    <div className='mx-auto max-w-3xl text-center'>
                        <span className={`${interTight.className} text-[11px] font-semibold uppercase tracking-[0.42em] text-[#F4EDE1]/45 sm:text-xs`}>Let's Make It Memorable</span>

                        <h2 className={`${fraunces.className} mt-3 text-[1.50rem] tracking-wide font-bold leading-tight text-[#F4EDE1] sm:text-5xl`}>
                            Planning Something
                            <br className='sm:hidden' />
                            <span className='sm:ml-3'>Special?</span>
                        </h2>

                        <p className={`${interTight.className} mx-auto mt-4 max-w-2xl tracking-wide text-[13.5px] leading-6 text-white/60 sm:mt-6 sm:text-[16px] sm:leading-7`}>
                            Whether it's an intimate gathering or a large celebration, we'll help you create a menu your guests will remember. Reach out today and let's start planning your event.
                        </p>

                        <div className='mt-7 flex flex-col gap-4 sm:flex-row sm:justify-center'>
                            <Link
                                href='/contact'
                                className='group inline-flex items-center justify-center gap-2 rounded-full bg-[#F4EDE1] px-5 py-3 text-[12px] font-bold uppercase tracking-[0.12em] text-[#2A2420] shadow-[0_14px_35px_rgba(0,0,0,.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-white sm:px-8 sm:py-4 sm:text-[13px] sm:tracking-[0.14em]'
                            >
                                Enquire Now
                                <ArrowRight className='h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4' />
                            </Link>

                            <Link
                                href='tel:+917400019024'
                                className='group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/4 px-5 py-3 text-[12px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-md transition-all duration-300 hover:border-[#C9A227]/40 hover:bg-white/[0.07] sm:px-8 sm:py-4 sm:text-[13px] sm:tracking-[0.14em]'
                            >
                                <Phone className='h-3.5 w-3.5 text-[#C9A227] sm:h-4 sm:w-4' />
                                Call Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
