import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    return (
        <nav className='fixed top-0 left-0 z-50 w-full'>
            <div className='pointer-events-none absolute inset-0 -z-10 h-40 bg-linear-to-b from-black/45 via-black/15 to-transparent' />

            <div className='mx-auto flex max-w-[1600px] items-center justify-between px-6 py-2'>
                <Link href='/'>
                    <Image src='/images/logo2.png' alt='Leaf Deck Logo' width={150} height={40} priority quality={100} className='cursor-pointer' />
                </Link>

                <div className='relative flex gap-1 rounded-full py-2 px-3 bg-white/[0.07] backdrop-blur-[3px] backdrop-saturate-150 border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.2)] before:absolute before:inset-0 before:rounded-full before:p-px before:bg-linear-to-b before:from-white/25 before:via-white/5 before:to-transparent before:-z-10'>
                    {[
                        { href: '/', label: 'Home' },
                        { href: '/about', label: 'About' },
                        { href: '/menu', label: 'Menu' },
                        { href: '/bar-menu', label: 'Bar Menu' },
                        { href: '/catering', label: 'Catering' },
                        { href: '/contact', label: 'Contact' },
                    ].map((item) => (
                        <Link key={item.href} href={item.href} className='relative uppercase text-sm tracking-[0.12em] font-medium px-3.5 py-1.5 rounded-full text-white/80 transition-all duration-300 ease-out hover:text-white hover:bg-white/10 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]'>
                            {item.label}
                        </Link>
                    ))}
                </div>

                <button className='group relative flex items-center gap-2.5 rounded-full px-6 py-3 bg-black/60 hover:bg-black/80 backdrop-blur-sm border border-white/20 hover:border-white/40 shadow-[0_12px_40px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.15)] transition-all duration-300 ease-out active:scale-[0.97] cursor-pointer'>
                    <div className='absolute inset-0 rounded-full bg-linear-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' className='w-4 h-4 text-white/80 group-hover:text-white transition-all duration-300'>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
                        />
                    </svg>

                    <span className='uppercase text-sm tracking-[0.12em] font-bold text-white/90 group-hover:text-white transition-colors duration-300'>Order Online</span>
                </button>
            </div>
        </nav>
    )
}
