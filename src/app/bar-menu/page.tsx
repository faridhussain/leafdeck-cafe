'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Fraunces, Inter_Tight } from 'next/font/google'
import { Search, Menu as MenuIcon, X } from 'lucide-react'
import { lenis } from '../components/layout/LenisProvider'

const interTight = Inter_Tight({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
})

const fraunces = Fraunces({
    subsets: ['latin'],
    weight: ['600', '700', '900'],
    style: ['normal', 'italic'],
})

const featuredDrinks = [
    { name: 'Jumbo LIIT', price: 999, image: '/images/jumbo-liit.jpg' },
    { name: 'LDC Electric LIIT', price: 599, image: '/images/electric-liit.jpg' },
    { name: 'Tequila Twist', price: 349, image: '/images/tequila-twist.jpg' },
    { name: 'Old Fashioned', price: 379, image: '/images/old-fashioned.jpg' },
    { name: 'Virgin Blue Lagoon', price: 199, image: '/images/blue-lagoon.jpg' },
    { name: 'Bombay Sapphire', price: '299 / 30ml', image: '/images/bombay-sapphire.jpg' },
]

type MenuItem = { name: string; price: number | string; desc?: string }
type Category = { id: string; group: string; label: string; items: MenuItem[] }

const groups = [
    { id: 'cocktails', label: 'Cocktails & Shots' },
    { id: 'mocktails', label: 'Mocktails' },
    { id: 'coffee-shakes', label: 'Coffee & Shakes' },
    { id: 'spirits', label: 'Whisky & Spirits' },
    { id: 'beer-wine', label: 'Beer & Wine' },
    { id: 'mixers', label: 'Mixers' },
]

const categories: Category[] = [
    {
        id: 'signature-cocktails',
        group: 'cocktails',
        label: 'Signature Cocktails',
        items: [
            { name: 'Jumbo LIIT', price: 999, desc: 'Vodka, gin, rum, tequila, triple sec, lime and energy — made to share.' },
            { name: 'Tequila Twist', price: 349, desc: 'Tequila, triple sec, lime juice — tangy, citrusy and slightly sweet.' },
            { name: 'LDC Electric LIIT', price: 599, desc: 'Vodka, gin, rum, tequila, blue curaçao, triple sec, lemon and lime — vibrant, electrifying and bold.' },
            { name: 'Banarasi Patiala', price: 349, desc: 'A "social" drink with sugarcane juice, black salt, bacardi white rum.' },
            { name: 'Beer Cocktail', price: '449 / 499', desc: 'Beer blended with vodka, lime, orange, and peach syrup.' },
            { name: 'Kiwi Lime Mojito', price: 349, desc: 'A hearty mix of Kiwi syrup, fresh lime and bacardi white rum.' },
            { name: 'Cina Polada', price: 429, desc: 'White rum, coconut cream, pineapple juice and grenadine — tropical and smooth.' },
            { name: 'Watermelon Rewind', price: 329, desc: 'Vodka, watermelon syrup, mint, lime juice and soda — cool, fresh and crisp.' },
            { name: 'Midnight Ember', price: 399, desc: 'Bourbon whiskey, tea, lime and Kahlua — smoky, spicy and smooth.' },
            { name: 'Golden Rose', price: 299, desc: 'Vodka, rose syrup, lemon, brown sugar and soda — floral, elegant and delicate.' },
            { name: 'Peachy Delight', price: 399, desc: 'Gin, peach syrup, orange juice and lemon — juicy, sweet and refreshing.' },
            { name: 'Gin Kaccha Aam', price: 299, desc: 'Gin, raw mango juice, lime juice, black salt and spices — tangy, bold and desi.' },
            { name: 'Jelly Welly (Pineapple/Mango)', price: 399, desc: 'White rum, pineapple/mango jelly, grenadine — fruity and playful.' },
            { name: 'Hawaien Green Apple', price: 299, desc: 'Bacardi white rum, lime juice, green apple syrup — tropical and sweet.' },
            { name: 'Vietnamese Coffeetinie', price: 369, desc: 'Vodka, Kahlua, Espresso and Condensed Milk.' },
            { name: 'Cucumber Collins', price: 299, desc: 'Gin, cucumber, lime juice, mint leaf and soda — crisp, clean and refreshing.' },
            { name: 'Twilight Kiss', price: 349, desc: 'Vodka, Yuzu liqueur, orange juice and a touch of lime and grenadine.' },
            { name: 'Cranberry Red Devil', price: 299, desc: 'Bacardi white rum, cranberry juice, grenadine, lime and topped with malta and cherry.' },
            { name: 'Out of the Blue', price: 349, desc: 'Bacardi white rum, blue curaçao, cream, pineapple juice — oceanic, bright and refreshing.' },
            { name: 'Spicy Guwahati', price: 299, desc: 'Gin, green chili, lemon, mint and soda — spicy, tangy and bold.' },
        ],
    },
    {
        id: 'classic-cocktails',
        group: 'cocktails',
        label: 'Classic Cocktails',
        items: [
            { name: 'LIIT', price: 499, desc: 'Vodka, gin, rum, tequila, triple sec, lime — strong, smooth and a classic crowd-pleaser.' },
            { name: 'Old Fashioned', price: 379, desc: 'Bourbon whiskey, sugar, Angostura bitters and orange peel — warm, smooth and timeless.' },
            { name: 'Whiskey Sour', price: 399, desc: 'Whiskey, lemon juice, sugar syrup and egg white — balanced, citrusy and smooth.' },
            { name: 'Spicy Margarita', price: 379, desc: 'Tequila, triple sec, lime juice, and salt rim — bold, spicy and refreshing.' },
            { name: "Doctor's Prescription", price: 399, desc: 'Chef styled hot spices served over whiskey and topped with lime juice.' },
            { name: 'Martini', price: 349, desc: 'Vodka, dry vermouth, olive brine — crisp, dry and iconically classic.' },
            { name: 'Pina Colada', price: 399, desc: 'White rum, coconut cream, pineapple juice — creamy, tropical and dreamy.' },
            { name: 'Negroni', price: 349, desc: 'Gin, Campari, sweet vermouth — bold, bitter and perfectly balanced.' },
            { name: 'Cosmopolitan', price: 299, desc: 'Vodka, triple sec, cranberry juice, lime — citrusy, stylish and always in vogue.' },
            { name: 'Sex on the Beach', price: 349, desc: 'Vodka, orange juice, cranberry juice — fruity, fun and beachy.' },
            { name: 'Mojito', price: 299, desc: 'White rum, mint, lime, sugar syrup and soda — light, minty and refreshing.' },
        ],
    },
    {
        id: 'shots',
        group: 'cocktails',
        label: 'Shots (Pair of 30ml)',
        items: [
            { name: 'Jagerbomb', price: 849 },
            { name: 'B-52', price: 449 },
            { name: 'Tequila Twist', price: 399 },
            { name: 'Kamikaze', price: 369 },
            { name: 'Malibu', price: 349 },
            { name: 'Woo-woo', price: 339 },
            { name: 'Shark Attack', price: 299 },
            { name: 'Cosmo', price: 299 },
        ],
    },
    {
        id: 'mocktails',
        group: 'mocktails',
        label: 'Mocktails',
        items: [
            { name: 'Virgin Cranberry LIIT', price: 279, desc: 'Cranberry juice, lime, and a touch of fizz.' },
            { name: 'Mango Blast', price: 219, desc: 'Sweet mango and lime, soda — a tropical delight.' },
            { name: 'Virgin LIIT (Classic, Peach, Electric)', price: 249, desc: 'Our signature LIIT experience — alcohol free.' },
            { name: 'Spicy Chilli Guava', price: 219, desc: 'Guava, lime and a hint of chilli for a zesty kick.' },
            { name: 'Virgin Pina Colada', price: 249, desc: 'A creamy blend of pineapple and coconut.' },
            { name: 'Virgin Blue Lagoon', price: 199, desc: 'A vibrant mix of blue curaçao and lemonade.' },
            { name: 'Watermelon Virgin Mojito', price: 229, desc: 'Watermelon, mint, lime and a splash of soda.' },
            { name: 'Green Apple Virgin Mojito', price: 199, desc: 'Green apple, mint, lime and soda.' },
            { name: 'Kiwi Slush Blast', price: 229, desc: 'Kiwi puree blended with lime and ice.' },
            { name: 'Virgin Peach Mojito', price: 199, desc: 'Peach syrup, mint, lime, soda.' },
            { name: 'Pink Lady', price: 229, desc: 'Lychee, rose and lime — delicately sweet.' },
            { name: 'Green Apple Soda', price: 199, desc: 'Green apple syrup with lime and soda.' },
            { name: 'Arizona Sunset', price: 229, desc: 'A tropical mix of orange, cranberry and grenadine.' },
            { name: 'Virgin Mojito', price: 199, desc: 'Classic mint, lime and soda — timeless and refreshing.' },
            { name: 'Fresh Mind', price: 229, desc: 'Cucumber, mint and lime — cool, crisp and refreshing.' },
            { name: 'Red Rosie', price: 199, desc: 'Rose and cranberry — floral and refreshing.' },
            { name: 'Indian Aam Panna', price: 219, desc: 'Tangy raw mango with roasted cumin and mint.' },
        ],
    },
    {
        id: 'coffee',
        group: 'coffee-shakes',
        label: 'Coffee (Freshly brewed, served with a cookie)',
        items: [
            { name: 'Leaf Deck Oreo Frappuccino', price: 279, desc: 'A creamy blend of coffee, milk and oreo.' },
            { name: 'Classic Cold Coffee', price: 249, desc: 'Smooth, chilled and perfectly balanced.' },
            { name: 'Affogato', price: 199, desc: 'A shot of espresso over vanilla ice cream.' },
            { name: 'Leaf Deck Vanilla Cappuccino', price: 189, desc: 'Smooth cappuccino with a touch of vanilla.' },
            { name: 'Ice Cream Latte', price: 179, desc: 'Cold latte served with creamy ice cream.' },
            { name: 'Iced Mocha', price: 169, desc: 'Chocolate, coffee and milk with ice.' },
            { name: 'Cafe Mocha', price: 169, desc: 'Rich espresso with chocolate.' },
            { name: 'Cafe Latte', price: 159, desc: 'Smooth espresso with steamed milk.' },
            { name: 'Iced Cappuccino', price: 159, desc: 'Chilled cappuccino over ice.' },
            { name: 'Cappuccino', price: 149, desc: 'Classic cappuccino with a creamy finish.' },
            { name: 'Iced Americano', price: 139, desc: 'Espresso diluted with cold water over ice.' },
            { name: 'Americano', price: 129, desc: 'Bold diluted hot black coffee.' },
            { name: 'Espresso Shot', price: 129, desc: 'Strong, hot and straight.' },
        ],
    },
    {
        id: 'shakes',
        group: 'coffee-shakes',
        label: 'Shakes',
        items: [
            { name: 'Choco Brownie Shake', price: 279, desc: 'Indulgent chocolate with brownie chunks.' },
            { name: 'Classic Chocolate Shake', price: 269, desc: 'Rich chocolate blended with milk and ice cream.' },
            { name: 'Choco Oreo Shake', price: 259, desc: 'Chocolate shake with oreo crunch.' },
            { name: 'Mix Fruit Shake', price: 279, desc: 'A refreshing blend of seasonal fruits.' },
            { name: 'Caramel Butterscotch Shake', price: 279, desc: 'Smooth blend of caramel and butterscotch.' },
            { name: 'Banana/Vanilla/Strawberry/Mango Shake', price: 249, desc: 'Your choice of flavours, made just right.' },
        ],
    },
    {
        id: 'single-malt',
        group: 'spirits',
        label: 'Single Malt (30ml / 60ml / 180ml / Bottle)',
        items: [
            { name: 'Glenfiddich 12 Years', price: '599 / 1149 / 3399 / 12000' },
            { name: 'Singleton 12 Years', price: '549 / 1049 / 3249 / 11000' },
            { name: 'Talisker 10 Years', price: '549 / 1049 / 3249 / 11000' },
            { name: 'Indri', price: '429 / 799 / 1499 / 9000' },
        ],
    },
    {
        id: 'scotch',
        group: 'spirits',
        label: 'Scotch (30ml / 60ml / 180ml / Bottle)',
        items: [
            { name: 'JW Gold Label', price: '549 / 1049 / 3249 / 11000' },
            { name: 'Chivas Regal 12 Years', price: '399 / 749 / 2249 / 8500' },
            { name: 'JW Black Label', price: '399 / 749 / 2249 / 8500' },
            { name: '100 Pipers 12 Years', price: '269 / 499 / 1499 / 5000' },
            { name: 'Teachers 50', price: '249 / 449 / 1299 / 4500' },
            { name: 'Teachers HC Reserved', price: '239 / 429 / 1249 / 4500' },
            { name: "Ballentine's", price: '229 / 399 / 1199 / 4300' },
            { name: 'JW Red Label', price: '229 / 399 / 1199 / 4300' },
            { name: 'William Lawsons', price: '199 / 369 / 1079 / 3500' },
            { name: 'Black & White', price: '199 / 369 / 1079 / 3500' },
            { name: "Dewar's White Label", price: '199 / 369 / 1079 / 3500' },
            { name: '100 Pipers', price: '199 / 369 / 1079 / 3500' },
            { name: 'BP Reserve', price: '159 / 299 / 849 / 3200' },
        ],
    },
    {
        id: 'bourbon',
        group: 'spirits',
        label: 'Bourbon (30ml / 60ml / 180ml / Bottle)',
        items: [
            { name: 'Jack Daniels', price: '349 / 649 / 1899 / 7000' },
            { name: 'Jim Beam', price: '249 / 449 / 1299 / 4500' },
        ],
    },
    {
        id: 'irish',
        group: 'spirits',
        label: 'Irish (30ml / 60ml / 180ml / Bottle)',
        items: [
            { name: 'Bushmill', price: '269 / 499 / 1449 / 5000' },
            { name: 'Jameson', price: '249 / 449 / 1299 / 4500' },
        ],
    },
    {
        id: 'tequila',
        group: 'spirits',
        label: 'Tequila (30ml / 60ml / 180ml / Bottle)',
        items: [
            { name: 'Jose Cuervo Silver', price: '349 / 649 / 1899 / 7000' },
            { name: 'Camino Real Blanco', price: '269 / 499 / 1499 / 5500' },
        ],
    },
    {
        id: 'gin',
        group: 'spirits',
        label: 'Gin (30ml / 60ml / 180ml / Bottle)',
        items: [
            { name: 'Bombay Sapphire', price: '299 / 649 / 1899 / 7000' },
            { name: 'Samsara Pink Gin', price: '249 / 449 / 1299 / 4500' },
            { name: 'Beefeater', price: '179 / 329 / 929 / 3500' },
        ],
    },
    {
        id: 'vodka',
        group: 'spirits',
        label: 'Vodka (30ml / 60ml / 180ml / Bottle)',
        items: [
            { name: 'Absolut Flavours', price: '209 / 399 / 1129 / 4000' },
            { name: 'Absolut', price: '199 / 379 / 1099 / 4200' },
            { name: 'Smirnoff Green Apple', price: '169 / 319 / 929 / 3000' },
            { name: 'Smirnoff', price: '159 / 299 / 879 / 2800' },
        ],
    },
    {
        id: 'rum',
        group: 'spirits',
        label: 'Rum (30ml / 60ml / 180ml / Bottle)',
        items: [
            { name: 'Old Monk Coffee XO', price: '169 / 319 / 929 / 3000' },
            { name: 'Old Monk Legend', price: '159 / 299 / 879 / 2800' },
            { name: 'Bacardi Limon', price: '159 / 299 / 879 / 2800' },
            { name: 'Bacardi White', price: '159 / 299 / 879 / 2800' },
            { name: 'Bacardi Black', price: '159 / 299 / 879 / 2800' },
        ],
    },
    {
        id: 'liquer',
        group: 'spirits',
        label: 'Liquer (30ml)',
        items: [
            { name: 'Jagermeister', price: 399 },
            { name: "Bailey's Cream", price: 279 },
            { name: 'Kalhua', price: 229 },
        ],
    },
    {
        id: 'beer',
        group: 'beer-wine',
        label: 'Beer (Single / Bucket of 4)',
        items: [
            { name: 'Budweiser Magnum', price: '479 / 1669' },
            { name: 'Hoegaarden Witbier', price: '329 / 1149' },
            { name: 'Corona Extra', price: '329 / 1149' },
            { name: 'Budweiser Premium', price: '319 / 1099' },
            { name: 'Kingfisher Ultra Lager', price: '279 / 969' },
            { name: 'Simba Wit', price: '279 / 969' },
            { name: 'Simba Premium Lager', price: '259 / 899' },
            { name: 'Breezer (275ml)', price: '229 / 799' },
        ],
    },
    {
        id: 'wine',
        group: 'beer-wine',
        label: 'Wine (150ml / Bottle)',
        items: [
            { name: "Jacob's Creek Chardonnay", price: '629 / 2999' },
            { name: "Jacob's Creek Shiraz", price: '599 / 2899' },
            { name: 'Sula Shiraz Red', price: '479 / 2299' },
            { name: 'Sula Chenin White', price: '399 / 1899' },
            { name: 'Zum Zim Peach', price: '299 / 1399' },
        ],
    },
    {
        id: 'mixers',
        group: 'mixers',
        label: 'Mixers',
        items: [
            { name: 'Packed Water (500ml)', price: 'MRP' },
            { name: 'Club Soda (Glass)', price: 49 },
            { name: 'Coke Can (330ml)', price: 99 },
            { name: 'Sprite Can (330ml)', price: 99 },
            { name: 'Schweppes Ginger Ale Can (300ml)', price: 99 },
            { name: 'Schweppes Tonic Water Can (300ml)', price: 99 },
            { name: "Real's Packed Juice (Glass)", price: 129 },
            { name: 'Redbull Can (250ml)', price: 199 },
        ],
    },
]

function formatPrice(price: number | string) {
    if (typeof price === 'string' && price.toUpperCase() === 'MRP') {
        return 'MRP'
    }
    return typeof price === 'number' ? `₹${price}` : `₹ ${price}`
}

const NAVBAR_OFFSET = 70

export default function BarMenuPage() {
    const [activeGroup, setActiveGroup] = useState(groups[0].id)
    const [query, setQuery] = useState('')
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const groupRefs = useRef<Record<string, HTMLElement | null>>({})
    const contentRef = useRef<HTMLDivElement>(null)
    const desktopSearchRef = useRef<HTMLInputElement>(null)
    const mobileSearchRef = useRef<HTMLInputElement>(null)

    const normalizedQuery = query.trim().toLowerCase()

    const filteredCategories = categories
        .map((category) => ({
            ...category,
            items: normalizedQuery ? category.items.filter((item) => item.name.toLowerCase().includes(normalizedQuery) || (item.desc ? item.desc.toLowerCase().includes(normalizedQuery) : false)) : category.items,
        }))
        .filter((category) => category.items.length > 0)

    const groupedCategories = groups
        .map((group) => ({
            ...group,
            categories: filteredCategories.filter((c) => c.group === group.id),
        }))
        .filter((group) => group.categories.length > 0)

    useEffect(() => {
        if (!normalizedQuery) return

        const el = contentRef.current
        if (!el) return

        const y = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET

        if (lenis) {
            lenis.scrollTo(y)
        } else {
            window.scrollTo({
                top: y,
                behavior: 'smooth',
            })
        }
    }, [normalizedQuery])

    useEffect(() => {
        if (normalizedQuery && groupedCategories.length > 0) {
            setActiveGroup(groupedCategories[0].id)
        }
    }, [normalizedQuery])

    useEffect(() => {
        if (normalizedQuery) return

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)

                if (!visible.length) return

                const id = visible[0].target.id

                setActiveGroup((prev) => (prev === id ? prev : id))
            },
            {
                root: null,

                // navbar
                rootMargin: `-${NAVBAR_OFFSET + 20}px 0px -65% 0px`,

                threshold: [0, 0.15, 0.3, 0.5],
            },
        )

        Object.values(groupRefs.current).forEach((el) => {
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [normalizedQuery])

    const scrollToGroup = (id: string) => {
        setMobileMenuOpen(false)

        const el = groupRefs.current[id]

        if (!el) return

        const y = el.getBoundingClientRect().top + window.scrollY - (NAVBAR_OFFSET + 24)

        const distance = Math.abs(window.scrollY - y)

        if (lenis) {
            lenis.scrollTo(y, {
                duration: distance > 1800 ? 0.45 : 1,
            })
        } else {
            window.scrollTo({
                top: y,
                behavior: 'smooth',
            })
        }

        setActiveGroup(id)
    }

    return (
        <main className='min-h-screen select-none bg-[#1B1611] text-white/95'>
            <style jsx global>{`
                .custom-sidebar-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-sidebar-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-sidebar-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.08);
                    border-radius: 99px;
                }
            `}</style>

            <section className='relative h-[45vh] overflow-hidden rounded-b-[30px] sm:h-[50vh]'>
                <Image src='/images/bar-menu-banner.avif' alt='Leaf Deck Cafe bar' fill priority quality={100} className='object-cover object-center saturate-110 contrast-105 brightness-90' />
                <div className='absolute inset-0 bg-linear-to-b from-black/50 via-black/35 to-[#16120E]' />
                <div className='absolute inset-0 flex flex-col items-center justify-center px-6 text-center'>
                    <span className={`${interTight.className} mb-2 text-[11px] font-bold uppercase tracking-[0.5em] text-white/75`}>Cocktails & Spirits</span>
                    <h1 className={`${fraunces.className} text-5xl font-black tracking-wide text-white drop-shadow-2xl sm:text-6xl md:text-7xl`}>Bar Menu</h1>
                </div>
            </section>

            <section className='relative border-b border-white/5 bg-[#16120E] sm:px-6 px-4 py-15 sm:py-24'>
                <div className='mx-auto max-w-6xl'>
                    <div className='mb-12 text-center'>
                        <span className={`${interTight.className} text-xs font-medium uppercase tracking-[0.42em] text-white/40`}>Bar Favourites</span>
                        <h2 className={`${fraunces.className} mt-2 sm:mt-4 text-4xl font-bold tracking-wide text-white sm:text-5xl`}>Signature Drinks</h2>
                    </div>
                    <div className='grid grid-cols-1 gap-6 sm:grid-cols-3'>
                        {featuredDrinks.map((drink) => (
                            <div key={drink.name} className='group'>
                                <div className='relative h-72 w-full overflow-hidden rounded-2xl'>
                                    <Image src={drink.image} alt={drink.name} fill className='object-cover transition-transform duration-500 group-hover:scale-105' />
                                </div>
                                <div className='mt-4 flex items-center justify-between gap-3'>
                                    <h3 className={`${fraunces.className} text-lg font-semibold text-white`}>{drink.name}</h3>
                                    <span className={`${interTight.className} text-sm font-semibold text-[#C9A227]`}>{formatPrice(drink.price)}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className='relative rounded-[30px] bg-[#F7F0DF] px-4 sm:px-10 sm:py-10 py-5'>
                <div className='mx-auto grid max8xl grid-cols-1 gap-10 lg:grid-cols-[350px_minmax(0,1fr)]'>
                    <div className='hidden lg:block'>
                        <div className='sticky top-0 flex h-screen items-center'>
                            <aside className='w-full'>
                                <div className='flex flex-col rounded-[26px] bg-[#1B1611] px-6 py-6 shadow-[0_18px_40px_rgba(0,0,0,0.18)]'>
                                    <div className='relative'>
                                        <Search className='pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8E7D6E]' />

                                        <input
                                            ref={desktopSearchRef}
                                            type='text'
                                            value={query}
                                            onChange={(e) => setQuery(e.target.value)}
                                            placeholder='Search cocktails, spirits...'
                                            className={`${interTight.className} w-full rounded-xl border border-[#3A2F28] bg-[#241D18] py-3 pl-11 pr-4 text-[14px] text-[#F4EDE1] placeholder:text-[#9C8B7B] outline-none transition-all duration-300 focus:border-[#6A5442]`}
                                        />
                                    </div>

                                    <div className='my-6 h-px bg-white/10' />

                                    <span className={`${interTight.className} mb-4 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#8E7D6E]`}>Sections</span>

                                    <div className='space-y-1'>
                                        {groups.map((group) => {
                                            const active = activeGroup === group.id

                                            return (
                                                <button key={group.id} onClick={() => scrollToGroup(group.id)} className='group flex w-full cursor-pointer items-center gap-3 py-2.5 text-left'>
                                                    <span className={`h-6 w-0.75 rounded-full transition-all duration-300 ${active ? 'bg-[#C9A227]' : 'bg-transparent'}`} />

                                                    <span className={`${interTight.className} text-[15px] font-semibold tracking-[-0.01em] transition-colors duration-300 ${active ? 'text-[#F4EDE1]' : 'text-[#A89A8B] group-hover:text-[#F4EDE1]'}`}>{group.label}</span>
                                                </button>
                                            )
                                        })}
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>

                    <div ref={contentRef} className='flex min-h-[60vh] flex-col'>
                        {query && groupedCategories.length > 0 && (
                            <p className={`${interTight.className} mb-8 border-b border-[#2A2420]/15 pb-4 text-sm text-[#2A2420]/60`}>
                                Showing results for <span className='font-semibold text-[#2A2420]'>&ldquo;{query}&rdquo;</span>
                            </p>
                        )}

                        <div>
                            {groupedCategories.length === 0 ? (
                                <div className='flex min-h-[60vh] items-center justify-center px-6'>
                                    <div className='mx-auto max-w-md text-center'>
                                        <div className='mx-auto flex h-18 w-18 items-center justify-center rounded-full bg-[#A06C3A]/10'>
                                            <Search className='h-8 w-8 text-[#A06C3A]/70' />
                                        </div>

                                        <h3 className={`${fraunces.className} mt-8 text-3xl font-bold text-[#2A2420]`}>No drinks found</h3>

                                        <p className={`${interTight.className} mt-3 text-[15px] leading-7 text-[#2A2420]/60`}>We couldn't find any drinks matching your search.</p>

                                        <p className={`${interTight.className} mt-5 rounded-full border border-[#2A2420]/10 bg-white/40 px-5 py-3 text-[15px] font-medium text-[#8B5E3C]`}>"{query}"</p>

                                        <button
                                            onClick={() => {
                                                setQuery('')

                                                requestAnimationFrame(() => {
                                                    if (window.innerWidth >= 1024) {
                                                        desktopSearchRef.current?.focus()
                                                    } else {
                                                        mobileSearchRef.current?.focus()
                                                    }
                                                })
                                            }}
                                            className={`${interTight.className} mt-8 cursor-pointer rounded-full bg-[#1B1611] px-7 py-3 text-[14px] font-semibold tracking-wide text-[#F7F0DF] transition-all duration-300 hover:bg-[#2A2420] active:scale-95`}
                                        >
                                            Clear Search
                                        </button>

                                        <p className={`${interTight.className} mt-8 text-[13px] text-[#2A2420]/40`}>
                                            Try searching for drinks like
                                            <span className='font-medium text-[#8B5E3C]'> Whiskey, Mojito, Beer</span>
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <div className='space-y-15'>
                                    {groupedCategories.map((group) => (
                                        <div
                                            key={group.id}
                                            id={group.id}
                                            ref={(el) => {
                                                groupRefs.current[group.id] = el
                                            }}
                                            className='scroll-mt-32'
                                        >
                                            <div className='mb-8 sm:mb-10'>
                                                <div className='flex items-center justify-center gap-4 text-center sm:justify-start sm:text-left sm:gap-6'>
                                                    <h2 className={`${fraunces.className} text-2xl font-bold text-[#62442d] sm:text-5xl`}>{group.label}</h2>

                                                    <div className='hidden h-px flex-1 bg-[#2A2420]/20 sm:block' />
                                                </div>
                                            </div>

                                            <div className='space-y-10'>
                                                {group.categories.length > 0 ? (
                                                    group.categories.map((category) => (
                                                        <div key={category.id}>
                                                            <h3 className={`${interTight.className} sm:mb-1 text-[15px] font-semibold tracking-wider uppercase text-[#8B5E3C]`}>{category.label}</h3>

                                                            <div className='flex flex-col'>
                                                                {category.items.map((item) => (
                                                                    <div key={item.name} className='border-b border-[#2A2420]/8 py-5 last:border-none'>
                                                                        <div className='flex items-start justify-between gap-3 sm:hidden'>
                                                                            <div className='min-w-0 flex-1'>
                                                                                <h4 className={`${interTight.className} text-[15px] leading-[1.8] tracking-[-0.01em] text-[#2A2420]`}>{item.name}</h4>
                                                                            </div>
                                                                            <span className={`${interTight.className} shrink-0 text-[14px] font-semibold tracking-[0.02em] text-[#A06C3A]`}>{formatPrice(item.price)}</span>
                                                                        </div>

                                                                        <div className='hidden items-start justify-between gap-8 sm:flex'>
                                                                            <div className='min-w-0 flex-1'>
                                                                                <h4 className={`${interTight.className} text-[16px] font-medium leading-8 text-[#2A2420]`}>{item.name}</h4>
                                                                            </div>
                                                                            <span className={`${interTight.className} shrink-0 pt-0.5 text-[16px] font-semibold text-[#8B5E3C]`}>{formatPrice(item.price)}</span>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <div className='py-10 text-[#2A2420]/35'>No matching items.</div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <section className='relative bg-[#1B1611] px-6 py-14 text-center'>
                <div className='mx-auto mb-5 h-px w-24 bg-[#C9A227]/30' />

                <p className={`${interTight.className} mx-auto max-w-xl text-[13px] leading-7 font-medium tracking-[0.01em] text-white/60`}>
                    We charge an optional <span className='text-[#C9A227] font-semibold'>5% service charge</span> to maintain the ambience. Please allow approximately <span className='text-white/80 font-semibold'>20 minutes</span> for careful preparation.
                </p>
            </section>

            <div className='fixed bottom-2 left-1/2 z-40 w-[95%] max-w-sm -translate-x-1/2 lg:hidden'>
                <div className='flex items-center gap-2 rounded-2xl border border-white/10 bg-[#1B1611]/95 p-2 shadow-2xl backdrop-blur-xl'>
                    <div className='relative flex-1'>
                        <Search className='pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40' />
                        <input
                            type='text'
                            value={query}
                            ref={mobileSearchRef}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder='Search items...'
                            className={`${interTight.className} w-full rounded-xl bg-white/5 py-2.5 pl-9 pr-3 text-[13px] text-white placeholder:text-white/35 focus:outline-none`}
                        />
                    </div>
                    <button onClick={() => setMobileMenuOpen(true)} className='flex cursor-pointer shrink-0 items-center gap-2 rounded-xl bg-[#F4EDE1] px-4 py-2.5 text-[13px] font-semibold text-[#2A2420] active:scale-95'>
                        <MenuIcon className='h-4 w-4' />
                        Menu
                    </button>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className='fixed inset-0 z-50 lg:hidden'>
                    <div onClick={() => setMobileMenuOpen(false)} className='absolute inset-0 bg-black/60 backdrop-blur-sm' />
                    <div className='absolute bottom-0 left-0 right-0 flex max-h-[80vh] flex-col rounded-t-4xl border-t border-white/10 bg-[#16120E] p-6 shadow-2xl'>
                        <div className='flex items-center justify-between border-b border-white/10 pb-6'>
                            <span className={`${fraunces.className} text-xl font-bold text-white`}>Categories</span>
                            <button onClick={() => setMobileMenuOpen(false)} className='rounded-full cursor-pointer bg-white/5 p-1.5 text-white/70'>
                                <X className='h-5 w-5' />
                            </button>
                        </div>

                        <div className='custom-sidebar-scrollbar flex-1 space-y-2 overflow-y-auto py-6 pr-2'>
                            {groups.map((group) => (
                                <button
                                    key={group.id}
                                    onClick={() => scrollToGroup(group.id)}
                                    className={`${interTight.className} flex w-full items-center justify-between cursor-pointer rounded-xl px-4 py-3.5 text-left text-sm font-medium transition-all duration-300 hover:text-white ${activeGroup === group.id ? 'bg-white/10 text-[#F4EDE1]' : 'text-white/60'}`}
                                >
                                    <span>{group.label}</span>
                                    {activeGroup === group.id && <span className='h-1.5 w-1.5 rounded-full bg-[#C9A227]' />}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </main>
    )
}
