'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Fraunces, Inter_Tight } from 'next/font/google'
import { ArrowRight, Star, X } from 'lucide-react'

const interTight = Inter_Tight({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
})

const fraunces = Fraunces({
    subsets: ['latin'],
    weight: ['600', '700', '900'],
    style: ['normal', 'italic'],
})

interface Review {
    name: string
    avatar: string
    rating: number
    review: string
}

const reviews: Review[] = [
    {
        name: 'Ankita Barman',
        avatar: '',
        rating: 5,
        review: 'Went there yesterday with friends. We ordered chicken biryani, burnt garlic chicken noodles, and mocktails. Food was really flavorful and fresh, portions were filling too. The noodles had a nice smoky, garlicky taste. Mocktails were super refreshing and looked amazing.',
    },
    {
        name: 'Pranoy Borah',
        avatar: '',
        rating: 5,
        review: 'I absolutely loved this place! The food was incredibly delicious, and the cozy, aesthetic ambiance made the whole experience even more enjoyable. Every item we tried tasted amazing, and everything was beautifully served. I would definitely love to visit again.',
    },
    {
        name: 'Chandrima Paul',
        avatar: '',
        rating: 4,
        review: "Been there twice,, the food quality is good.. While the prices is a bit on the higher side, the service and food is somewhat good only.. The ambience is nice... Their pizza(best), chicken lollypop is also very good... Don't miss out on the shakes...",
    },
    { name: 'Libina Goyary', avatar: '', rating: 5, review: 'Leaf Deck is a beautiful spot with a relaxing ambiance, perfect for a peaceful meal or a casual hangout. The greenery around adds to the charm, making it feel like a refreshing escape in the middle of the city. Must try- veg pulao' },
    {
        name: 'Rahman Tanvi',
        avatar: '',
        rating: 3,
        review: 'The food was good. It was really calm and quite when i visited . The fish and chips was fresh and yummmm.. the best i would say was the club sandwich , what i dint like was the bbq chicken pizza it tasted rubbery and had no taste at all. Overall the experience was good',
    },
    {
        name: 'Karshika Boruah',
        avatar: '',
        rating: 5,
        review: 'I must say this is one of the most cosiest and beautifully decorated cafes in the entire Guwahati. This place has a very pleasant and pleasurable vibe. It is small, yet every corner is beautifully decorated. The staff here are good and well mannered.',
    },
    { name: 'Ankit Newar', avatar: '', rating: 5, review: 'The food was great, Noodles were banging. The ambiance was cozy and superb. Prices were reasonable.' },
    { name: 'Kinnari Deka', avatar: '', rating: 5, review: 'The food quality and service system is very satisfying. Ambience is very good and different types of nice and cozy outdoor and indoor sitting places are there. The behaviour of the waiters and waitresses are very nice and welcoming.' },
    {
        name: 'Farin Sultana',
        avatar: '',
        rating: 4,
        review: 'Ordered Cafe Mocha, Chicken strips and Chicken Halka noodles. Cafe Mocha was okayishh, Chicken strips were pretty good but the Halka noodles were tasteless the chicken tasted so bad. O highly recommend them to improve it. Otherwise service and the atmosphere was pretty well too',
    },
    {
        name: 'Surovita Roy',
        avatar: '',
        rating: 5,
        review: 'We threw a bridal shower for our friend.. the cafe was very pretty and the staff were very helpful and the food was good and at a reasonable price.. we ordered mocktails, noodles, baby corn, pizza and cheese balls . Will surely visit again',
    },
    { name: 'Lalan Sah', avatar: '', rating: 3, review: "Nice place with good food with good vibes. But the service is poor. The staff don't respond fast and are very lenient. Otherwise good place to click photos." },
    {
        name: 'NIVA DAS',
        avatar: '',
        rating: 5,
        review: 'This cafe is my go to place from a very long time. I just love everything they serve. Had pizza, mocktail, coffe with icecream and i am drooling with each bite or sip i take. Go for it guys. This place is made for every group of people. You can date, have a family outing or chit chat with your friends. Just a perfect place and perfect food without doubt.',
    },
    { name: 'Aparna B', avatar: '', rating: 5, review: 'The food tastes are satiating. Do try their beverages- they are 10/10' },
    {
        name: 'Sairy Das',
        avatar: '',
        rating: 4,
        review: 'A warm and cosy cafe to hangout. They have an outdoor as well as indoor sitting area with nice ambience. They have a variety of mocktails and starters options to choose. Tried their bbq wings, noodles and pizza. Food was decent. Mocktails were very refreshing, specially the sunset arizona. Prices are reasonable. A must visit place 👍',
    },
    {
        name: 'Pankhi Sarma',
        avatar: '',
        rating: 2,
        review: "Went there into my sister's bday party. Really loved the ambience, the outdoor sitting. The service wad really nice and food was hot served with a good quality and portion. And yes price is reasonably well. We had a wonderful tine a dance floor there. This place is worth visiting for all people, Specially groups/friends. There we had farm house veggie pizza, chicken wings and virgin mojito.",
    },
    {
        name: 'Prakritish deka',
        avatar: '',
        rating: 4,
        review: "Such a beautiful cafe with good food and great music. You can definitely come here and spend time with your friends and family!! Both outdoor and indoor sitting facility is available. Place is very photogenic. Overall I didn't find and cons..",
    },
    { name: 'Manish Gayan', avatar: '', rating: 4, review: 'A quaint cozy cafe out of nowhere. Loved the vibe of the place, especially the outdoor area. But however, due to the humidity, we preferred to sit indoors. The decor is done nicely, with standalone outdoor seating spaces.' },
    {
        name: 'Priyam Kashyap',
        avatar: '',
        rating: 5,
        review: 'Located near the circle in dispur. We ordered Two European Rice bowl. The quantity was less for two but slightly more for two person. It consisted of herb rice, sauted veggies, French fries, a poach and a chicken gravy. The gravy tasted very good and pleasant ,not too spicy. The preparation was overall very good. The staff behavior was satisfactory. There was mosquitos both outdoor and indoor part of the cafe. Overall ambience and cleanliness was good enough.',
    },
    {
        name: 'Kakoli Roy',
        avatar: '',
        rating: 5,
        review: 'Visited this cafe with a friend. The cafe has both indoor and outdoor seating arrangements. Had a good time in the cosy ambiance of the cafe. Ordered their Veg Alfredo white sauce pasta, Cappuccino and Veggie Farmhouse pizza. The portion of the pasta was very less compared to the price. The pizza was okayish with a thick crust. The taste could have been better.',
    },
    { name: 'dolly sarma', avatar: '', rating: 5, review: 'Everything was perfect. Had a great dinner experience there. A perfect place for a lunch or dinner date, family outing or friends get-together. Their mocktails and starters are must try.' },
]

function initials(name: string) {
    return name
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0])
        .join('')
        .toUpperCase()
}

function Avatar({ name, avatar }: { name: string; avatar: string }) {
    if (avatar) {
        return <img src={avatar} alt='' className='h-10 w-10 shrink-0 rounded-full object-cover sm:h-11 sm:w-11 lg:h-12 lg:w-12' />
    }

    return (
        <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C9A227]/25 bg-linear-to-br from-[#C9A227]/20 to-[#C9A227]/5 sm:h-11 sm:w-11 lg:h-12 lg:w-12'>
            <span className={`${fraunces.className} text-[12px] font-semibold text-[#C9A227] sm:text-[13px] lg:text-sm`}>{initials(name)}</span>
        </div>
    )
}

function StarRow({ rating }: { rating: number }) {
    return (
        <div className='flex items-center gap-0.5' role='img' aria-label={`${rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-3 w-3 ${i < rating ? 'fill-[#C9A227] text-[#C9A227]' : 'fill-transparent text-white/15'}`} strokeWidth={1.5} aria-hidden='true' />
            ))}
        </div>
    )
}

function ReviewCard({ review, hidden, onClick }: { review: Review; hidden: boolean; onClick: () => void }) {
    return (
        <article
            aria-hidden={hidden}
            onClick={onClick}
            className='group relative flex h-40.5 w-65 shrink-0 cursor-pointer flex-col rounded-3xl border border-white/10 bg-white/4 p-4 backdrop-blur-md transition-all duration-300 hover:border-[#C9A227]/25 hover:bg-white/5.5 sm:h-46.5 sm:w-85 sm:p-5 lg:w-95'
        >
            <div className='pointer-events-none absolute inset-0 rounded-3xl bg-[#C9A227]/5 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100' />

            <div className='pointer-events-none absolute top-8 right-5 translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:top-9'>
                <ArrowRight className='h-4 w-4 text-[#C9A227]/80' />
            </div>

            <div className='flex items-center gap-2.5 sm:gap-3'>
                <Avatar name={review.name} avatar={review.avatar} />

                <div>
                    <p className={`${fraunces.className} text-[14px] font-semibold text-white transition-colors duration-300 group-hover:text-[#F7F2EA] sm:text-[15px]`}>{review.name}</p>

                    <div className='mt-1'>
                        <StarRow rating={review.rating} />
                    </div>
                </div>
            </div>

            <div className='mt-4 flex-1 overflow-hidden sm:mt-5'>
                <p className={`${interTight.className} line-clamp-3 text-[13px] leading-5.5 tracking-wide text-white/65 transition-colors duration-300 group-hover:text-white/80 sm:text-[14px] sm:leading-6`}>{review.review}</p>
            </div>
        </article>
    )
}

function MarqueeRow({ items, direction, duration, onReviewClick, isPaused }: { items: Review[]; direction: 'ltr' | 'rtl'; duration: number; onReviewClick: (review: Review) => void; isPaused: boolean }) {
    const [paused, setPaused] = useState(false)
    const track = [...items, ...items]

    return (
        <div className='marquee-mask relative w-full overflow-hidden' onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            <div
                className='flex w-max gap-4 sm:gap-5'
                style={{
                    animationName: direction === 'ltr' ? 'marquee-ltr' : 'marquee-rtl',
                    animationDuration: `${duration}s`,
                    animationTimingFunction: 'linear',
                    animationIterationCount: 'infinite',
                    animationPlayState: paused || isPaused ? 'paused' : 'running',
                }}
            >
                {track.map((review, i) => (
                    <ReviewCard key={`${review.name}-${i}`} review={review} hidden={i >= items.length} onClick={() => onReviewClick(review)} />
                ))}
            </div>
        </div>
    )
}

export default function Reviews() {
    const rowOne = reviews.slice(0, 10)
    const rowTwo = [...reviews.slice(10, 20)].reverse()

    const [selectedReview, setSelectedReview] = useState<Review | null>(null)

    useEffect(() => {
        if (!selectedReview) return

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setSelectedReview(null)
            }
        }

        document.body.style.overflow = 'hidden'
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            document.body.style.overflow = ''
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [selectedReview])

    return (
        <section className='relative overflow-hidden bg-[#1C1712] pt-8 pb-4 sm:pt-14 sm:pb-10 lg:pt-20 lg:pb-14'>
            <style>{`
                @keyframes marquee-ltr {
                    from { transform: translateX(-50%); }
                    to { transform: translateX(0); }
                }
                @keyframes marquee-rtl {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                .marquee-mask {
                    -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
                    mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
                }
                @media (prefers-reduced-motion: reduce) {
                    .marquee-mask > div {
                        animation: none !important;
                        transform: translateX(0) !important;
                    }
                }
            `}</style>

            <div className='pointer-events-none absolute left-1/2 top-1/3 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A227]/5 blur-[70px] sm:h-95 sm:w-95 sm:blur-[120px] lg:h-130 lg:w-130 lg:blur-[160px]' />

            <motion.div className='relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-8 lg:px-6' initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}>
                <span className={`${interTight.className} text-[9.5px] font-medium uppercase tracking-[0.28em] text-[#F4EDE1]/70 sm:text-xs sm:tracking-[0.38em] md:text-sm md:tracking-[0.42em]`}>Loved By Guests</span>

                <div className='mt-3 flex items-center justify-center gap-2.5 sm:mt-5 sm:gap-4'>
                    <span className='h-px w-6 bg-[#F4EDE1]/25 sm:w-10' />
                    <span className='h-1 w-1 rounded-full bg-[#F4EDE1]/40' />
                    <span className='h-px w-6 bg-[#F4EDE1]/25 sm:w-10' />
                </div>

                <h2 className={`${fraunces.className} mt-2 text-[1.9rem] font-bold leading-[1.08] tracking-[-0.5px] text-white sm:mt-4 sm:text-5xl sm:tracking-wide lg:text-6xl`}>
                    Every Visit
                    <br />
                    Leaves A Story
                </h2>

                <p className={`${interTight.className} mx-auto mt-3 max-w-2xl text-[13.5px] leading-6 tracking-wide text-white/70 sm:mt-6 sm:text-base sm:leading-7 lg:text-lg`}>Thousands of guests have made Leaf Deck a part of their celebrations, conversations and everyday coffee moments.</p>

                <div className='mt-7 flex flex-col items-center gap-2.5 sm:mt-10 sm:gap-3'>
                    <div className='flex items-center'>
                        <div className='flex items-center'>
                            {Array.from({ length: 4 }).map((_, i) => (
                                <Star key={i} className='h-4 w-4 fill-[#C9A227] text-[#C9A227] sm:h-5 sm:w-5' strokeWidth={1.5} />
                            ))}

                            <div className='relative h-4 w-4 sm:h-5 sm:w-5'>
                                <Star className='absolute inset-0 h-4 w-4 text-white/20 sm:h-5 sm:w-5' strokeWidth={1.5} />

                                <div className='absolute inset-0 overflow-hidden' style={{ width: '20%' }}>
                                    <Star className='h-4 w-4 fill-[#C9A227] text-[#C9A227] sm:h-5 sm:w-5' strokeWidth={1.5} />
                                </div>
                            </div>
                        </div>

                        <span className='relative mx-4 h-6 w-px bg-linear-to-b from-transparent via-white/20 to-transparent sm:mx-6 sm:h-8'>
                            <span className='absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A227] shadow-[0_0_8px_rgba(201,162,39,0.8)]' />
                        </span>

                        <span className={`${fraunces.className} text-[24px] font-semibold leading-none tracking-[-0.02em] text-white sm:text-[30px]`}>4.1</span>
                    </div>

                    <p className={`${interTight.className} text-[13px] font-medium tracking-[0.03em] text-white/60 sm:text-[15px] sm:tracking-[0.04em]`}>
                        Based on <span className='font-semibold text-[#C9A227]'>900+</span> guest reviews
                    </p>
                </div>
            </motion.div>

            <motion.div className='relative z-10 mt-10 flex flex-col gap-4 sm:mt-16 sm:gap-6' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.9, delay: 0.15 }}>
                <MarqueeRow items={rowOne} direction='ltr' duration={45} onReviewClick={setSelectedReview} isPaused={!!selectedReview} />
                <MarqueeRow items={rowTwo} direction='rtl' duration={38} onReviewClick={setSelectedReview} isPaused={!!selectedReview} />
            </motion.div>

            <motion.div className='relative z-10 mt-10 flex justify-center px-4 sm:mt-14' initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}>
                <Link
                    href='https://www.google.com/search?sca_esv=2a19c6b8f1ef7130&sxsrf=APpeQnvZcxn4KeArrCIQO8dpLUisMRyiyw:1784699903200&q=Leaf+Deck+Cafe+Guwahati&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_-Gul7Kp2StDjy2ltD221loMDCSnCfY1ij1mKYi4hsef9mHJffPUIkjqsV8Tc-SzN7--KEX4oDX4fvx6eJ8G0c7QHtOl&sa=X&ved=2ahUKEwiI2IqezeWVAxUyMtAFHUYSMZUQrrQLegQIHBAB&biw=1680&bih=866&dpr=2'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group flex w-full items-center justify-center gap-2 rounded-full bg-[#F4EDE1] px-6 py-3 text-[11.5px] font-bold uppercase tracking-[0.14em] text-[#2A2420] shadow-[0_12px_32px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1 hover:bg-white sm:w-auto sm:px-9 sm:py-4 sm:text-[13px]'
                >
                    Read More Reviews
                    <ArrowRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
                </Link>
            </motion.div>

            <div className='relative z-10 mx-auto mt-14 flex max-w-6xl items-center justify-center px-4 sm:mt-24'>
                <span className='h-px flex-1 bg-linear-to-r from-transparent via-white/10 to-transparent' />
                <span className='mx-4 h-2 w-2 rounded-full bg-[#C9A227]/70 shadow-[0_0_18px_rgba(201,162,39,0.5)] sm:mx-5' />
                <span className='h-px flex-1 bg-linear-to-r from-transparent via-white/10 to-transparent' />
            </div>

            <AnimatePresence>
                {selectedReview && (
                    <motion.div className='fixed inset-0 z-999 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md sm:p-5' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedReview(null)}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.92, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 15 }}
                            transition={{
                                duration: 0.35,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            onClick={(e) => e.stopPropagation()}
                            className='relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 p-5 shadow-[0_40px_120px_rgba(0,0,0,0.65)] sm:p-7'
                        >
                            <div className='pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#C9A227]/10 blur-[120px]' />

                            <button onClick={() => setSelectedReview(null)} className='absolute top-5 right-5 z-20 cursor-pointer rounded-full border border-white/10 bg-white/5 p-2 text-white/70 transition hover:bg-white/10 hover:text-white sm:top-6 sm:right-6'>
                                <X className='h-4 w-4 sm:h-5 sm:w-5' />
                            </button>

                            <div className='relative'>
                                <div className='flex items-center gap-3 pr-10 sm:gap-4'>
                                    <Avatar name={selectedReview.name} avatar={selectedReview.avatar} />

                                    <div>
                                        <h3 className={`${fraunces.className} text-lg text-white sm:text-2xl`}>{selectedReview.name}</h3>
                                        <div className='mt-1.5 sm:mt-2'>
                                            <StarRow rating={selectedReview.rating} />
                                        </div>
                                    </div>
                                </div>

                                <div className='my-5 h-px bg-linear-to-r from-transparent via-white/10 to-transparent sm:my-7' />

                                <p className={`${interTight.className} text-[14px] leading-6 tracking-wide text-white/80 sm:text-[16px] sm:leading-7 md:text-[17px] md:leading-8`}>{selectedReview.review}</p>

                                <div className='mt-7 flex justify-end sm:mt-10'>
                                    <Link
                                        href='https://www.google.com/search?sca_esv=2a19c6b8f1ef7130&sxsrf=APpeQnvZcxn4KeArrCIQO8dpLUisMRyiyw:1784699903200&q=Leaf+Deck+Cafe+Guwahati&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_-Gul7Kp2StDjy2ltD221loMDCSnCfY1ij1mKYi4hsef9mHJffPUIkjqsV8Tc-SzN7--KEX4oDX4fvx6eJ8G0c7QHtOl&sa=X&ved=2ahUKEwiI2IqezeWVAxUyMtAFHUYSMZUQrrQLegQIHBAB&biw=1680&bih=866&dpr=2'
                                        target='_blank'
                                        className='group inline-flex items-center gap-2 text-[13px] font-medium tracking-wide text-[#C9A227] sm:text-sm'
                                    >
                                        Read more on Google
                                        <ArrowRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
