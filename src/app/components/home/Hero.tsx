import Image from 'next/image'
import Link from 'next/link'
import { Fraunces, Inter_Tight } from 'next/font/google'
import { ArrowRight, Phone, ChevronDown } from 'lucide-react'

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
        <section className='relative bg-[#1B1611] select-none'>
            <div className='relative h-[102vh] overflow-hidden rounded-b-[40px] sm:rounded-b-[56px]'>
                <Image src='/images/hero_image2.png' alt='Leaf Deck Cafe' fill priority quality={100} className='object-cover object-center saturate-110 contrast-105 brightness-105' />

                <div className='absolute inset-0 bg-linear-to-b from-black/35 via-black/15 to-black/60' />

                <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.50)_0%,rgba(0,0,0,0.18)_48%,transparent_80%)]' />

                <div className='absolute inset-x-0 top-0 h-40 bg-linear-to-b from-black/60 via-black/20 to-transparent' />

                <div className='absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/80 to-transparent' />

                <div className='absolute bottom-0 left-1/2 h-16 w-360 -translate-x-1/2 rounded-full bg-black/15 blur-[70px]' />

                <div className='absolute left-1/2 top-[56%] h-64 w-2xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/35 blur-[110px]' />

                <div className='absolute inset-0 z-10 flex items-center justify-center px-6'>
                    <div className='text-center text-white'>
                        <span className={`${interTight.className} text-sm font-medium uppercase tracking-[0.42em] text-white/85 md:text-lg`}>Welcome to</span>

                        <h1 className={`${fraunces.className} mt-3 text-5xl font-black tracking-wide text-white drop-shadow-[0_10px_40px_rgba(0,0,0,0.9)] sm:text-6xl md:text-7xl lg:text-8xl`}>Leaf Deck Cafe</h1>

                        <div className='mt-4 flex items-center justify-center gap-4'>
                            <span className='h-px w-10 bg-white/35' />
                            <h2 className={`${interTight.className} text-sm font-semibold uppercase tracking-[0.25em] text-white/90`}>Cafe · Bar · Dine-In</h2>
                            <span className='h-px w-10 bg-white/35' />
                        </div>

                        <p className={`${fraunces.className} mx-auto mt-5 max-w-xl text-lg italic tracking-wide text-white/85 md:text-xl`}>Crafted flavours. Memorable moments.</p>

                        <div className='mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row'>
                            <Link href='/menu' className='group flex items-center gap-2 rounded-full bg-[#F4EDE1] px-9 py-4 text-[13px] font-bold uppercase tracking-[0.14em] text-[#2A2420] shadow-[0_12px_32px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1 hover:bg-white'>
                                Explore Menu
                                <ArrowRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
                            </Link>

                            <Link href='/call-us' className='group flex items-center gap-2 rounded-full border border-white/35 bg-white/5 px-9 py-4 text-[13px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md transition-all duration-300 hover:border-white/50 hover:bg-white/10'>
                                <Phone className='h-4 w-4' />
                                Call Us
                            </Link>
                        </div>
                    </div>
                </div>

                <a href='#signature-dishes' className='group absolute bottom-6 left-1/2 z-20 -translate-x-1/2'>
                    <div className='flex flex-col items-center text-white/55 transition-all duration-300 group-hover:text-white'>
                        <span className={`${interTight.className} text-[11px] uppercase tracking-[0.35em]`}>Scroll</span>
                        <ChevronDown strokeWidth={1.5} className='mt-1 h-5 w-5 animate-gentle-bounce' />
                    </div>
                </a>
            </div>
        </section>
    )
}
