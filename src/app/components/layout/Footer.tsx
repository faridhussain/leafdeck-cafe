import Image from 'next/image'
import Link from 'next/link'
import { Fraunces, Inter_Tight } from 'next/font/google'
import { Phone, Mail, MapPin } from 'lucide-react'
import { FaInstagram } from 'react-icons/fa'

const interTight = Inter_Tight({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
})

const fraunces = Fraunces({
    subsets: ['latin'],
    weight: ['600', '700', '900'],
    style: ['normal', 'italic'],
})

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Menu', href: '/menu' },
    { label: 'Bar Menu', href: '/bar-menu' },
    { label: 'Catering', href: '/catering' },
    { label: 'Contact', href: '/contact' },
]

export default function Footer() {
    return (
        <footer className='relative overflow-hidden bg-black pt-20 select-none'>
            <div className='pointer-events-none absolute left-1/2 top-0 h-120 w-120 -translate-x-1/2 rounded-full bg-[#D8B25A]/5 blur-[150px]' />

            <div className='relative z-10 mx-auto max-w-7xl px-6'>
                <div className='border-b border-white/15 pb-12 text-center'>
                    <h2 className={`${fraunces.className} text-3xl italic text-[#F4EDE1] md:text-4xl`}>Ready for your next meal?</h2>

                    <Link
                        href='/order-online'
                        className='mt-8 inline-flex rounded-full bg-[#F4EDE1] px-10 py-4 text-[13px] font-bold uppercase tracking-[0.14em] text-[#201A15] shadow-[0_12px_30px_rgba(0,0,0,.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_40px_rgba(0,0,0,.45)]'
                    >
                        Order Online
                    </Link>

                    <p className={`${interTight.className} mt-5 text-[11px] uppercase tracking-[0.24em] text-white/45`}>Available on Swiggy & Zomato</p>
                </div>

                <div className='grid gap-10 py-10 md:grid-cols-2 lg:grid-cols-4'>
                    <div>
                        <div className='relative h-16 w-44'>
                            <Image src='/images/logo2.png' alt='Leaf Deck Cafe' fill className='object-contain object-left' />
                        </div>

                        <p className={`${interTight.className} mt-4 max-w-xs text-[15px] leading-7 text-white/55`}>A welcoming destination in the heart of Guwahati, where handcrafted food, warm hospitality, and memorable evenings come together.</p>

                        <div className='mt-7'>
                            <p className={`${interTight.className} mb-4 text-[11px] uppercase tracking-[0.22em] text-white/40`}>Follow Us</p>

                            <Link href='https://instagram.com/leafdeckcafe' target='_blank' className='flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-[#D8B25A]/70 hover:text-[#D8B25A]'>
                                <FaInstagram className='h-5 w-5' />
                            </Link>
                        </div>
                    </div>

                    <div className='flex items-center flex-col'>
                        <h3 className={`${interTight.className} text-xs font-semibold uppercase tracking-[0.22em] text-white/65`}>Explore</h3>

                        <ul className='mt-6 space-y-4 flex flex-col items-center'>
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className={`${interTight.className} inline-block text-[15px] text-white/60 transition-all duration-300 hover:text-[#D8B25A]`}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='flex flex-col items-center'>
                        <h3 className={`${interTight.className} text-xs font-semibold uppercase tracking-[0.22em] text-white/65`}>We're Open</h3>

                        <div className={`${interTight.className} mt-6 space-y-2 text-[15px] leading-8 text-white/60 flex flex-col items-center`}>
                            <p>Open Every Day</p>

                            <p className='text-white/45'>Cafe: 11:00 AM – 11:30 PM</p>

                            <p className='text-white/45'>Bar: 12:00 PM – 10:30 PM</p>
                        </div>
                    </div>

                    <div className='flex flex-col items-center'>
                        <h3 className={`${interTight.className} text-xs font-semibold uppercase tracking-[0.22em] text-white/65`}>Get in Touch</h3>

                        <div className='mt-6 space-y-5 flex flex-col items-center'>
                            <div className='flex gap-3'>
                                <MapPin className='mt-1.5 h-4 w-4 shrink-0 text-white/40' />

                                <p className={`${interTight.className} text-[15px] leading-7 text-white/60`}>Opp. Guwahati Tea Auction Centre, GS Road, Dispur, Guwahati – 781006</p>
                            </div>

                            <div className='flex items-center gap-3'>
                                <Phone className='h-4 w-4 shrink-0 text-white/40' />

                                <a href='tel:+917400190024' className={`${interTight.className} text-[15px] text-white/60 transition-colors duration-300 hover:text-[#D8B25A]`}>
                                    +91 7400 1900 24
                                </a>
                            </div>

                            <div className='flex items-center gap-3'>
                                <Mail className='h-4 w-4 shrink-0 text-white/40' />

                                <a href='mailto:theleafdeck@gmail.com' className={`${interTight.className} text-[15px] tracking-wide text-white/60 transition-colors duration-300 hover:text-[#D8B25A]`}>
                                    theleafdeck@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-between gap-4 border-t border-white/15 py-8 sm:flex-row'>
                    <p className={`${interTight.className} text-xs text-white/35`}>© {new Date().getFullYear()} Leaf Deck Cafe. All rights reserved.</p>

                    <p className={`${interTight.className} text-xs text-white/30`}>Designed & Developed with care.</p>
                </div>
            </div>
        </footer>
    )
}
