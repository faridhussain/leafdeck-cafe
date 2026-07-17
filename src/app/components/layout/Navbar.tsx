'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40)
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/menu', label: 'Menu' },
        { href: '/bar-menu', label: 'Bar Menu' },
        { href: '/catering', label: 'Catering' },
        { href: '/contact', label: 'Contact' },
    ]

    return (
        <nav className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-[#1B1611]/20 backdrop-blur-md' : 'bg-transparent'}`}>
            <div className={`pointer-events-none absolute inset-0 -z-10 transition-opacity duration-300 ${scrolled ? 'opacity-0' : 'h-32 bg-linear-to-b from-black/45 via-black/15 to-transparent sm:h-36 lg:h-40'}`} />

            <div className='mx-auto flex h-15 min-[1096px]:h-18 max-w-[1600px] items-center justify-between px-4 sm:px-2 lg:px-6 xl:px-10'>
                <Link
                    href='/'
                    onClick={(e) => {
                        if (pathname === '/') {
                            e.preventDefault()

                            document.getElementById('home')?.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start',
                            })
                        }
                    }}
                    className='relative z-50 shrink-0'
                >
                    <Image src='/images/logo2.png' alt='Leaf Deck Logo' width={150} height={40} priority quality={100} className='h-12 w-auto cursor-pointer transition-transform duration-300 min-[1096px]:h-15' />
                </Link>

                <div className='relative hidden min-[850px]:flex gap-0.5 min-[1096px]:gap-1 rounded-full border border-white/15 bg-white/[0.07] px-2 min-[1096px]:px-3 py-1.5 min-[1096px]:py-2 backdrop-blur-[3px] backdrop-saturate-150 shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.2)] before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-linear-to-b before:from-white/25 before:via-white/5 before:to-transparent before:p-px'>
                    {navItems.map((item) => {
                        const active = pathname === item.href

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`relative rounded-full px-2.5 min-[1096px]:px-3.5 py-1 min-[1096px]:py-1.5 text-[12px] min-[1096px]:text-sm font-medium uppercase tracking-[0.08em] min-[1096px]:tracking-[0.12em] transition-all duration-300 ${
                                    active ? 'text-white' : 'text-white/70 hover:text-white'
                                }`}
                            >
                                {item.label}
                            </Link>
                        )
                    })}
                </div>

                <button type='button' onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className='relative z-50 flex h-11 w-11 items-center justify-center text-white transition cursor-pointer min-[850px]:hidden' aria-label='Toggle navigation'>
                    <div className='relative flex h-4 w-5 flex-col justify-between'>
                        <span className={`h-0.5 rounded-full bg-white transition-all duration-300 ease-out ${mobileMenuOpen ? 'w-5 translate-y-1.75 rotate-45' : 'w-2.5 self-end'}`} />
                        <span className={`h-0.5 w-5 rounded-full bg-white transition-all duration-300 ease-out ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                        <span className={`h-0.5 rounded-full bg-white transition-all duration-300 ease-out ${mobileMenuOpen ? 'w-5 -translate-y-1.75 -rotate-45' : 'w-2.5 self-start'}`} />
                    </div>
                </button>

                <a
                    href='https://www.zomato.com/guwahati/leaf-deck-cafe-dispur/order'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group relative hidden min-[850px]:flex cursor-pointer items-center gap-2 min-[1096px]:gap-2.5 rounded-full border border-white/20 bg-black/60 px-4 min-[1096px]:px-6 py-2.5 min-[1096px]:py-3 backdrop-blur-sm shadow-[0_12px_40px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.15)] transition-all duration-300 ease-out active:scale-[0.97] hover:border-white/40 hover:bg-black/80'
                >
                    <div className='absolute inset-0 rounded-full bg-linear-to-b from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />

                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' className='h-3.5 w-3.5 min-[1096px]:h-4 min-[1096px]:w-4 text-white/80 transition-colors duration-300 group-hover:text-white'>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
                        />
                    </svg>

                    <span className='text-[12px] min-[1096px]:text-sm font-bold uppercase tracking-[0.08em] min-[1096px]:tracking-[0.12em] text-white/90 transition-colors duration-300 group-hover:text-white'>Order Online</span>
                </a>
            </div>
        </nav>
    )
}
