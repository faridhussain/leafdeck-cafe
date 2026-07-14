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

export default function Catering() {
    return (
        <section className='relative overflow-hidden bg-[#1C1712] pt-20 pb-40 select-none'>
            <div className='pointer-events-none absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A227]/5 blur-3xl' />

            <div className='relative z-10 mx-auto max-w-3xl px-6 text-center'>
                <span className={`${interTight.className} text-xs font-medium uppercase tracking-[0.42em] text-[#F4EDE1]/70 md:text-sm`}>Beyond the Table</span>

                <div className='mt-5 flex items-center justify-center gap-4'>
                    <span className='h-px w-10 bg-[#F4EDE1]/25' />
                    <span className='h-1 w-1 rounded-full bg-[#F4EDE1]/40' />
                    <span className='h-px w-10 bg-[#F4EDE1]/25' />
                </div>

                <h2 className={`${fraunces.className} mt-5 text-4xl font-bold tracking-wide text-white sm:text-5xl md:text-6xl`}>Catering Services</h2>

                <p className={`${interTight.className} mt-6 text-[15px] leading-relaxed text-white/70 md:text-base tracking-wider`}>
                    From birthday parties to corporate lunches and weddings, we bring the same care and flavour to your event that we bring to every table at Leaf Deck. Every menu is customized to fit your occasion and your budget.
                </p>

                <p className={`${fraunces.className} mx-auto mt-6 max-w-xl text-lg italic text-[#F4EDE1]/80 md:text-xl`}>Trusted by celebrities, bureaucrats, and everyone in between.</p>

                <div className='mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row'>
                    <Link href='/catering' className='group flex items-center gap-2 rounded-full bg-[#F4EDE1] px-9 py-4 text-[13px] font-bold uppercase tracking-[0.14em] text-[#2A2420] shadow-[0_12px_32px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1 hover:bg-white'>
                        Enquire Now
                        <ArrowRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
                    </Link>

                    <Link href='/call-us' className='group flex items-center gap-2 rounded-full border border-white/35 bg-white/5 px-9 py-4 text-[13px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-xs transition-all duration-300 hover:border-white/40 hover:bg-white/8'>
                        <Phone className='h-4 w-4' />
                        Call Us
                    </Link>
                </div>
            </div>
        </section>
    )
}
