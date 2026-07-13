import Image from 'next/image'
import Link from 'next/link'
import { Fraunces, Inter_Tight } from 'next/font/google'
import { ArrowRight, Phone } from 'lucide-react'

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
        <section className='relative h-screen overflow-hidden select-none'>
            <Image src='/images/hero_image2.png' alt='Leaf Deck Cafe' fill priority quality={100} className='object-cover object-center saturate-110 contrast-105 brightness-105' />

            <div className='absolute inset-0 bg-linear-to-b from-black/35 via-black/15 to-black/45' />

            <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.58)_0%,rgba(0,0,0,0.35)_30%,rgba(0,0,0,0.12)_58%,transparent_80%)]' />

            <div className='absolute inset-x-0 top-0 h-36 bg-linear-to-b from-black/45 via-black/15 to-transparent' />

            <div className='absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black/40 to-transparent' />

            <div className='absolute inset-x-0 bottom-[16%] mx-auto h-56 w-140 max-w-[90%] rounded-full bg-black/25 blur-3xl' />

            <div className='relative z-10 flex h-full items-center justify-center px-6'>
                <div className='text-center text-white'>
                    <span className={`${interTight.className} text-sm font-medium uppercase tracking-[0.42em] text-white/85 md:text-lg`}>Welcome to</span>

                    <h1 className={`${fraunces.className} mt-3 text-5xl font-black tracking-wide text-white drop-shadow-[0_10px_40px_rgba(0,0,0,0.9)] sm:text-6xl md:text-7xl lg:text-8xl`}>Leaf Deck Cafe</h1>

                    <div className='mt-4 flex items-center justify-center gap-4'>
                        <span className='h-px w-10 bg-white/35' />

                        <h2 className={`${interTight.className} text-sm font-semibold uppercase tracking-[0.25em] text-white/90`}>Cafe &middot; Bar &middot; Dine-In</h2>

                        <span className='h-px w-10 bg-white/35' />
                    </div>

                    <p className={`${fraunces.className} mx-auto mt-5 max-w-xl tracking-wider text-lg italic font-normal text-white/85 md:text-xl`}>Crafted flavours. Memorable moments.</p>

                    <div className='mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row'>
                        <Link href='/menu' className='group flex items-center gap-2 rounded-full bg-[#F4EDE1] px-9 py-4 text-[13px] font-bold uppercase tracking-[0.14em] text-[#2A2420] shadow-[0_12px_32px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1 hover:bg-white'>
                            Explore Menu
                            <ArrowRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
                        </Link>

                        <Link href='/call-us' className='group flex items-center gap-2 rounded-full border border-white/35 bg-white/5 px-9 py-4 text-[13px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-xs transition-all duration-300 hover:border-white/30 hover:bg-white/10'>
                            <Phone className='h-4 w-4' />
                            Call Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
