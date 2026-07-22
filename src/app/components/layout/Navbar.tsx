'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState, useRef, useLayoutEffect } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const navRefs = useRef<(HTMLAnchorElement | null)[]>([])

    const [indicator, setIndicator] = useState({
        left: 0,
        width: 0,
    })

    const navItems = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/menu', label: 'Menu' },
        { href: '/bar-menu', label: 'Bar Menu' },
        { href: '/catering', label: 'Catering' },
        { href: '/contact', label: 'Contact' },
    ]

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
        return () => {
            document.body.style.overflow = ''
        }
    }, [mobileMenuOpen])

    useEffect(() => {
        setMobileMenuOpen(false)
    }, [pathname])

    useLayoutEffect(() => {
        const activeIndex = navItems.findIndex((item) => item.href === pathname)

        const activeLink = navRefs.current[activeIndex]

        if (!activeLink) return

        const lineWidth = 20

        setIndicator({
            left: activeLink.offsetLeft + (activeLink.offsetWidth - lineWidth) / 2,
            width: lineWidth,
        })
    }, [pathname])

    return (
        <>
            <nav className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-[#1B1611]/60 backdrop-blur-md' : 'bg-transparent'}`}>
                <div className={`pointer-events-none absolute inset-0 -z-10 transition-opacity duration-300 ${scrolled || mobileMenuOpen ? 'opacity-0' : 'h-32 bg-linear-to-b from-black/45 via-black/15 to-transparent sm:h-36 lg:h-40'}`} />

                <div className='mx-auto flex h-15 min-[1096px]:h-18 max-w-[1600px] items-center justify-between px-2 sm:px-4 lg:px-6 xl:px-10'>
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
                            setMobileMenuOpen(false)
                        }}
                        className='relative z-50 shrink-0'
                    >
                        <Image src='/images/logo2.png' alt='Leaf Deck Logo' width={150} height={40} priority quality={100} className='h-12 w-auto cursor-pointer transition-transform duration-300 min-[1096px]:h-15' />
                    </Link>

                    <div className='relative hidden min-[850px]:flex gap-0.5 min-[1096px]:gap-1 rounded-full border border-white/15 bg-white/[0.07] px-2 min-[1096px]:px-3 py-1.5 min-[1096px]:py-2 backdrop-blur-[3px] backdrop-saturate-150 shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.2)] before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-linear-to-b before:from-white/25 before:via-white/5 before:to-transparent before:p-px'>
                        <motion.div
                            className='absolute bottom-1 h-0.5 rounded-full bg-white'
                            animate={{
                                left: indicator.left,
                                width: indicator.width,
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: 420,
                                damping: 30,
                            }}
                        />
                        {navItems.map((item, index) => {
                            const active = pathname === item.href

                            return (
                                <Link
                                    ref={(el) => {
                                        navRefs.current[index] = el
                                    }}
                                    key={item.href}
                                    href={item.href}
                                    className={`relative px-2.5 min-[1096px]:px-3.5 py-1.5 text-[12px] min-[1096px]:text-sm uppercase transition-all duration-300 ${active ? 'text-white font-semibold tracking-[0.16em]' : 'text-white/85 font-medium tracking-[0.12em] hover:text-white/85'}`}
                                >
                                    {item.label}
                                </Link>
                            )
                        })}
                    </div>

                    <button
                        type='button'
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className='relative z-50 flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors duration-300 cursor-pointer min-[850px]:hidden'
                        aria-label='Toggle navigation'
                        aria-expanded={mobileMenuOpen}
                    >
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

            <AnimatePresence>
                {mobileMenuOpen && (
                    <div className='fixed inset-0 top-0 left-0 z-40 h-dvh w-full min-[850px]:hidden'>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} onClick={() => setMobileMenuOpen(false)} className='absolute inset-0 h-full w-full bg-black/35' />

                        <motion.div initial={{ opacity: 0, y: -8, scale: 0.99 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: 0.99 }} transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }} className='absolute left-4 right-4 top-18 flex flex-col gap-2.5 z-50'>
                            <div className='rounded-3xl border border-white/10 bg-[#1B1611]/75 p-2.5 shadow-[0_30px_60px_rgba(0,0,0,0.4)] backdrop-blur-sm backdrop-saturate-120'>
                                <div className='flex flex-col gap-1.5'>
                                    {navItems.map((item, i) => {
                                        const active = pathname === item.href

                                        return (
                                            <motion.div key={item.href} initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.18, delay: 0.02 * i }}>
                                                <Link
                                                    href={item.href}
                                                    onClick={() => setMobileMenuOpen(false)}
                                                    className={`relative flex items-center justify-center rounded-xl px-4 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-200 active:scale-[0.99] ${
                                                        active ? 'bg-white/15 text-white shadow-[inset_0_1px_0px_rgba(255,255,255,0.15)]' : 'text-white/75 hover:bg-white/5 hover:text-white hover:shadow-[inset_0_1px_0px_rgba(255,255,255,0.15)] active:bg-white/5'
                                                    }`}
                                                >
                                                    {active && <span className='absolute left-4 h-1 w-1 rounded-full bg-white' />}
                                                    {item.label}
                                                </Link>
                                            </motion.div>
                                        )
                                    })}
                                </div>
                            </div>

                            <motion.a
                                href='https://www.zomato.com/guwahati/leaf-deck-cafe-dispur/order'
                                target='_blank'
                                rel='noopener noreferrer'
                                initial={{ opacity: 0, y: 4 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.18, delay: 0.02 * navItems.length }}
                                className='relative z-50 flex items-center justify-center gap-2 rounded-3xl bg-white text-black py-4 text-xs font-bold uppercase tracking-[0.16em] active:scale-[0.98] transition-transform duration-200 shadow-[0_12px_30px_rgba(0,0,0,0.25)]'
                            >
                                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.8' className='h-3.5 w-3.5 text-black'>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
                                    />
                                </svg>
                                Order Online
                            </motion.a>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    )
}
