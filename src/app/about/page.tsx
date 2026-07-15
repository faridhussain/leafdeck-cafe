import Image from 'next/image'
import Link from 'next/link'
import { Fraunces, Inter_Tight } from 'next/font/google'
import { ArrowRight, Leaf, HeartHandshake, UtensilsCrossed } from 'lucide-react'

const interTight = Inter_Tight({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
})

const fraunces = Fraunces({
    subsets: ['latin'],
    weight: ['600', '700', '900'],
    style: ['normal', 'italic'],
})

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
        <main className='bg-[#1B1611] select-none'>
            <section className='relative h-[60vh] overflow-hidden sm:h-[68vh] rounded-b-[30px]'>
                <Image src='/images/about-banner.avif' alt='Inside Leaf Deck Cafe' fill priority quality={100} className='object-cover object-center saturate-110 contrast-105 brightness-95' />

                <div className='absolute inset-0 bg-linear-to-b from-black/55 via-black/35 to-black/70' />

                <div className='absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white'>
                    <span className={`${interTight.className} text-xs font-medium uppercase tracking-[0.42em] text-white/75 md:text-sm`}>The People Behind The Plates</span>

                    <h1 className={`${fraunces.className} mt-4 text-5xl font-black tracking-wide drop-shadow-[0_10px_40px_rgba(0,0,0,0.9)] sm:text-6xl md:text-7xl`}>About Us</h1>
                </div>
            </section>

            <section className='relative overflow-hidden bg-[#1B1611] px-6 py-24 sm:py-28'>
                <div className='pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#C9A227]/5 blur-3xl' />

                <div className='relative z-10 mx-auto max-w-3xl text-center'>
                    <span className={`${interTight.className} text-xs font-medium uppercase tracking-[0.42em] text-[#F4EDE1]/50 md:text-sm`}>How It Started</span>

                    <h2 className={`${fraunces.className} mt-4 text-4xl font-bold tracking-wide text-white sm:text-5xl`}>A Table Worth Coming Back To</h2>

                    <p className={`${interTight.className} mx-auto mt-6 max-w-xl text-[16px] leading-relaxed tracking-wide text-white/60`}>
                        Leaf Deck Cafe began as a single idea: build a place where a quick coffee, a long lunch, and a late-night drink all feel equally at home. No pretense, no rush — just a room that knows how to hold people well, and a kitchen that treats every order with the same care.
                    </p>

                    <p className={`${interTight.className} mx-auto mt-5 max-w-xl text-[16px] leading-relaxed tracking-wide text-white/60`}>
                        Since opening in Guwahati, that idea has stayed the same even as the menu, the space, and the crowd have grown. What hasn&apos;t changed is the standard: if it isn&apos;t good enough to serve a friend, it doesn&apos;t leave the kitchen.
                    </p>
                </div>
            </section>

            <section className='relative bg-[#1B1611] select-none'>
                <div className='relative overflow-hidden rounded-[30px] bg-[#EDE3D0] px-6 py-20 sm:px-10 sm:py-24 lg:px-14'>
                    <div className='pointer-events-none absolute right-0 top-0 h-96 w-96 -translate-y-1/3 translate-x-1/4 rounded-full bg-[#8B5E3C]/10 blur-3xl' />

                    <div className='relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-2'>
                        <div className='relative h-96 w-full overflow-hidden rounded-3xl bg-[#DDD0B4] shadow-[0_30px_60px_rgba(0,0,0,0.2)] sm:h-112'>
                            <Image src='/images/founder-placeholder.avif' alt='Founder of Leaf Deck Cafe' fill className='object-cover object-top' />
                        </div>

                        <div>
                            <span className={`${interTight.className} text-xs font-medium uppercase tracking-[0.42em] text-[#8B5E3C]/70`}>From The Founder</span>

                            <h2 className={`${fraunces.className} mt-4 text-4xl font-bold tracking-wide text-[#2A2420] sm:text-5xl`}>A Passion Project, Still</h2>

                            <p className={`${interTight.className} mt-6 max-w-md text-[16px] leading-relaxed tracking-wide text-[#2A2420]/70`}>
                                &quot;I didn&apos;t open Leaf Deck to build a brand — I opened it to share food I actually love with a city I actually love. Every table we set is still personal to me.&quot;
                            </p>

                            <p className={`${interTight.className} mt-5 max-w-md text-[16px] leading-relaxed tracking-wide text-[#2A2420]/70`}>
                                That mindset is what our whole team carries into the kitchen and onto the floor every single day — treat the guest like they walked into your own home, because in a lot of ways, they did.
                            </p>

                            <div className='mt-8 border-t border-[#2A2420]/15 pt-6'>
                                <span className={`${fraunces.className} block text-xl font-semibold italic text-[#2A2420]`}>Founder, Leaf Deck Cafe</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='relative overflow-hidden bg-[#1B1611] px-6 py-24 sm:py-28'>
                <div className='relative z-10 mx-auto max-w-6xl'>
                    <div className='mb-10 flex flex-col items-start gap-6 border-b border-white/10 pb-10 sm:flex-row sm:items-end sm:justify-between'>
                        <div>
                            <span className={`${interTight.className} text-xs font-medium uppercase tracking-[0.42em] text-[#F4EDE1]/50 md:text-sm`}>What We Stand For</span>

                            <h2 className={`${fraunces.className} mt-4 text-4xl font-bold tracking-wide text-white sm:text-5xl`}>The Leaf Deck Way</h2>
                        </div>

                        <p className={`${interTight.className} max-w-xs text-[15px] leading-relaxed text-white/45`}>Three things we don&apos;t compromise on, no matter how busy the room gets.</p>
                    </div>

                    <div className='grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0'>
                        {values.map((value, i) => (
                            <div key={value.title} className={`flex flex-col gap-4 py-8 sm:py-0 sm:px-8 ${i === 0 ? 'sm:pl-0' : ''} ${i === values.length - 1 ? 'sm:pr-0' : ''}`}>
                                <value.icon className='h-6 w-6 text-[#C9A227]' strokeWidth={1.5} />

                                <h3 className={`${fraunces.className} text-xl font-semibold text-white`}>{value.title}</h3>

                                <p className={`${interTight.className} text-[15px] leading-relaxed text-white/55`}>{value.copy}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className='relative bg-[#1B1611] px-6 pb-24 sm:pb-28'>
                <div className='mx-auto max-w-6xl'>
                    <div className='mb-12 text-center'>
                        <span className={`${interTight.className} text-xs font-medium uppercase tracking-[0.42em] text-[#F4EDE1]/50 md:text-sm`}>A Look Inside</span>

                        <h2 className={`${fraunces.className} mt-4 text-4xl font-bold tracking-wide text-white sm:text-5xl`}>The Space</h2>
                    </div>

                    <div className='grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4'>
                        {gallery.map((image, i) => (
                            <div key={image.alt} className={`relative h-56 overflow-hidden rounded-2xl sm:h-72 ${i % 2 === 1 ? 'lg:mt-8' : ''}`}>
                                <div className='absolute inset-0 bg-[#2A2420]' />
                                <Image src={image.src} alt={image.alt} fill className='object-cover' />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className='relative overflow-hidden bg-[#1B1611] px-6 pb-24 select-none sm:pb-28'>
                <div className='pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D8B25A]/5 blur-[130px]' />

                <div className='relative z-10 mx-auto max-w-2xl text-center'>
                    <h2 className={`${fraunces.className} text-3xl italic text-[#F4EDE1] md:text-4xl`}>Come see the space for yourself.</h2>

                    <Link href='/menu' className='group mt-8 inline-flex items-center gap-2 rounded-full bg-[#F4EDE1] px-9 py-4 text-[13px] font-bold uppercase tracking-[0.14em] text-[#2A2420] shadow-[0_12px_30px_rgba(0,0,0,.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-white'>
                        View The Menu
                        <ArrowRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
                    </Link>
                </div>
            </section>
        </main>
    )
}