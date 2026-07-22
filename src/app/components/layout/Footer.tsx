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
        <footer className='relative overflow-hidden rounded-t-[30px] bg-black pt-14 select-none sm:rounded-t-[28px] sm:pt-18 lg:rounded-t-[30px] lg:pt-20'>
            <div className='pointer-events-none absolute left-1/2 top-0 h-70 w-70 -translate-x-1/2 rounded-full bg-[#D8B25A]/5 blur-[110px] sm:h-95 sm:w-95 sm:blur-[130px] lg:h-120 lg:w-120 lg:blur-[150px]' />

            <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-8 lg:px-6'>
                <div className='border-b border-white/15 pb-10 text-center sm:pb-12'>
                    <h2 className={`${fraunces.className} text-[1.7rem] sm:tracking-normal tracking-tight italic text-[#F4EDE1] sm:text-4xl`}>Ready for your next meal?</h2>

                    <a
                        href='https://www.zomato.com/guwahati/leaf-deck-cafe-dispur/order'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='sm:mt-6 mt-4 inline-flex w-full max-w-70 items-center justify-center rounded-full bg-[#F4EDE1] px-8 py-3.5 text-[12px] font-bold uppercase tracking-[0.14em] text-[#201A15] shadow-[0_12px_30px_rgba(0,0,0,.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_40px_rgba(0,0,0,.45)] sm:w-auto sm:max-w-none sm:px-10 sm:py-4 sm:text-[13px]'
                    >
                        Order Online
                    </a>

                    <p className={`${interTight.className} mt-4 text-[9px] uppercase tracking-[0.22em] text-white/45 sm:text-[11px] sm:tracking-[0.24em]`}>Available on Swiggy & Zomato</p>
                </div>

                <div className='grid gap-15 py-7 text-center sm:gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <div className='relative h-14 w-40 sm:h-16 sm:w-44'>
                            <Image src='/images/logo2.png' alt='Leaf Deck Cafe' fill className='object-contain object-center lg:object-left' />
                        </div>

                        <p className={`${interTight.className} mt-4 max-w-xs text-[15px] leading-7 text-white/55`}>A welcoming destination in the heart of Guwahati, where handcrafted food, warm hospitality, and memorable evenings come together.</p>

                        <div className='mt-6 flex w-full flex-col items-center lg:items-start'>
                            <p className={`${interTight.className} mb-4 text-center text-[11px] uppercase tracking-[0.22em] text-white/40 lg:text-left`}>Follow Us</p>

                            <Link
                                href='https://instagram.com/leafdeckcafe'
                                target='_blank'
                                className='flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-[#D8B25A]/70 hover:text-[#D8B25A] sm:h-12 sm:w-12'
                            >
                                <FaInstagram className='h-5 w-5' />
                            </Link>
                        </div>
                    </div>

                    <div className='flex flex-col items-center'>
                        <h3 className={`${interTight.className} text-xs font-semibold uppercase tracking-[0.22em] text-white/65`}>Explore</h3>

                        <ul className='mt-5 space-y-2 sm:space-y-3'>
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className={`${interTight.className} text-[15px] text-white/60 transition-all duration-300 hover:text-[#D8B25A]`}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='flex flex-col items-center'>
                        <h3 className={`${interTight.className} text-xs font-semibold uppercase tracking-[0.22em] text-white/65`}>We're Open</h3>

                        <div className={`${interTight.className} mt-5 text-[15px] leading-7 text-white/60`}>
                            <p>Open Every Day</p>
                            <p className='text-white/45'>Cafe: 11:00 AM - 11:30 PM</p>
                            <p className='text-white/45'>Bar: 12:00 PM - 10:30 PM</p>
                        </div>
                    </div>

                    <div className='flex flex-col items-center'>
                        <h3 className={`${interTight.className} text-xs font-semibold uppercase tracking-[0.22em] text-white/65`}>Get in Touch</h3>

                        <div className='mt-5 flex flex-col items-center space-y-4'>
                            <div className='flex max-w-sm items-start justify-center gap-1'>
                                <MapPin className='mt-1.5 h-4 w-4 shrink-0 text-white/40' />

                                <p className={`${interTight.className} text-center text-[15px] leading-7 text-white/60`}>Opp. Guwahati Tea Auction Centre, GS Road, Dispur, Guwahati – 781006</p>
                            </div>
                            
                            <div className='w-full max-w-xs overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md'>
                                <iframe
                                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.559669025879!2d91.78772437624063!3d26.145896477112572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a59ff7ccf3fa1%3A0x27d18bd386e8d896!2sLeaf%20Deck%20Caf%C3%A9!5e0!3m2!1sen!2sin!4v1784125667231!5m2!1sen!2sin'
                                    className='h-40 w-full rounded-xl border-0'
                                    loading='lazy'
                                    allowFullScreen
                                    referrerPolicy='strict-origin-when-cross-origin'
                                />
                            </div>

                            <div className='flex items-center gap-3'>
                                <Phone className='h-4 w-4 shrink-0 text-white/40' />

                                <a href='tel:+917400190024' className={`${interTight.className} text-[15px] text-white/60 transition-colors duration-300 hover:text-[#D8B25A]`}>
                                    +91 7400 1900 24
                                </a>
                            </div>

                            <div className='flex items-center gap-3'>
                                <Mail className='h-4 w-4 shrink-0 text-white/40' />

                                <a href='mailto:theleafdeck@gmail.com' className={`${interTight.className} text-[15px] text-white/60 transition-colors duration-300 hover:text-[#D8B25A]`}>
                                    theleafdeck@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='border-t border-white/15 py-6 text-center sm:py-8'>
                    <p className={`${interTight.className} text-[11px] tracking-wide text-white/35 sm:text-xs`}>© {new Date().getFullYear()} Leaf Deck Cafe. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
