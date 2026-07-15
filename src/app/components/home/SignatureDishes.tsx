import Link from 'next/link'
import Image from 'next/image'
import { Fraunces } from 'next/font/google'
import { ArrowRight } from 'lucide-react'

const fraunces = Fraunces({
    subsets: ['latin'],
    weight: ['600', '700'],
})

const dishes = [
    {
        name: 'Grilled Chicken Steak',
        image: '/images/dish-1.avif',
        position: 'center',
    },
    {
        name: 'Oreo Chocolate Shake',
        image: '/images/dish-22.png',
        position: 'center top',
    },
    {
        name: 'Peri Peri Chicken',
        image: '/images/dish-33.jpg',
        position: 'center',
    },
    {
        name: 'Creamy Alfredo Pasta',
        image: '/images/dish-4.avif',
        position: 'center',
    },
    {
        name: 'Loaded Meat Pizza',
        image: '/images/dish-5.avif',
        position: 'center',
    },
    {
        name: 'Sticky BBQ Wings',
        image: '/images/dish-66.avif',
        position: 'center',
    },
    {
        name: 'Chicken Wrap',
        image: '/images/dish-7.avif',
        position: 'center',
    },
    {
        name: 'Cheesy Garlic Bread',
        image: '/images/dish-8.avif',
        position: 'center',
    },
    {
        name: 'Classic Mojito',
        image: '/images/dish-99.png',
        position: 'center top',
    },
]

export default function SignatureDishes() {
    return (
        <section id='signature-dishes' className='relative overflow-hidden bg-[#1B1611] py-24 select-none'>
            <div className='pointer-events-none absolute left-1/2 top-24 h-128 w-360 -translate-x-1/2 rounded-full bg-[#D8B45A]/6 blur-[180px]' />

            <div className='relative z-10 mx-auto w-[92%] max-w-[1800px]'>
                <div className='mb-16 text-center'>
                    <h2 className={`${fraunces.className} text-5xl font-semibold tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl`}>Our Signature Dishes</h2>

                    <p className='mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/60'>A curated selection of our most loved creations.</p>
                </div>

                <div className='grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3'>
                    {dishes.map((dish) => (
                        <div key={dish.name} className='group'>
                            <div className='relative overflow-hidden rounded-[18px] shadow-[0_18px_50px_rgba(0,0,0,0.18)]'>
                                <Image
                                    src={dish.image}
                                    alt={dish.name}
                                    width={800}
                                    height={600}
                                    quality={100}
                                    style={{
                                        objectPosition: dish.position,
                                    }}
                                    className='aspect-4/3 w-full object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.03]'
                                />

                                <div className='absolute inset-0 bg-black/0 transition-colors duration-500' />
                            </div>

                            <div className='mt-5 text-center'>
                                <h3 className='text-[1.35rem] tracking-tight text-white transition-colors duration-300 group-hover:text-[#F4EDE1]'>{dish.name}</h3>

                                <div className='mx-auto mt-3 h-px w-10 bg-[#C9A227]/45 transition-all duration-500 group-hover:w-20 group-hover:bg-[#D8B45A]' />
                            </div>
                        </div>
                    ))}
                </div>

                <div className='mt-16 flex justify-center'>
                    <Link href='/menu' className='group flex items-center gap-2 rounded-full border border-[#F4EDE1]/20 px-9 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#F4EDE1] transition-all duration-300 hover:bg-white/3'>
                        Explore Full Menu
                        <ArrowRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
                    </Link>
                </div>
            </div>
        </section>
    )
}
