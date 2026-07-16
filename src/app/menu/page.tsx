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

const heroDishes = [
    { name: 'Prawn Malai Curry', price: 499, image: '/images/menu-hero-1.jpg', veg: false },
    { name: 'Leaf Deck Meat Thali', price: 449, image: '/images/menu-hero-2.avif', veg: false },
    { name: 'Chicken Tikka Masala', price: 379, image: '/images/menu-hero-3.jpg', veg: false },
]

type MenuItem = { name: string; price: number | string; veg: boolean }
type Category = { id: string; group: string; label: string; items: MenuItem[] }

const groups = [
    { id: 'starters-snacks', label: 'Starters & Snacks' },
    { id: 'indian-mains', label: 'Indian Mains' },
    { id: 'asian-global', label: 'Asian & Global' },
    { id: 'pizza-pasta', label: 'Pizza & Pasta' },
    { id: 'wraps-burgers-group', label: 'Wraps & Burgers' },
    { id: 'desserts', label: 'Desserts' },
    { id: 'beverages', label: 'Beverages' },
]

const categories: Category[] = [
    {
        id: 'indian-specials',
        group: 'indian-mains',
        label: 'Indian Specials',
        items: [
            { name: 'Prawn Malai Curry (6)', price: 499, veg: false },
            { name: 'Mutton Rogan Josh (4)', price: 459, veg: false },
            { name: 'Leaf Deck Meat Thali', price: 449, veg: false },
            { name: 'Leaf Deck Shakahari Thali', price: 399, veg: true },
            { name: 'Chicken Mughlai Korma (4)', price: 399, veg: false },
            { name: 'Mutton Rogan Josh (2) + Veg Pulao', price: 399, veg: false },
            { name: 'Kadhai Fish (4)', price: 379, veg: false },
            { name: 'Butter Chicken/Paneer + Jeera Rice Combo', price: 379, veg: false },
            { name: 'Kadhai Chicken/Paneer + Jeera Rice Combo', price: 369, veg: false },
            { name: 'Chicken Dum Biryani w Raita & Salad', price: 299, veg: false },
        ],
    },
    {
        id: 'essentials',
        group: 'indian-mains',
        label: 'Essentials',
        items: [
            { name: 'Chicken Tikka Masala (4)', price: 379, veg: false },
            { name: 'Matar Paneer', price: 299, veg: true },
            { name: 'Kadhai Veg', price: 269, veg: true },
            { name: 'Mixed Veg / Jalfrezi', price: 259, veg: true },
            { name: 'Dal Fry', price: 179, veg: true },
            { name: 'Steam Rice', price: 129, veg: true },
            { name: 'Jeera Rice', price: 149, veg: true },
            { name: 'Fulka Roti (3)', price: 99, veg: true },
            { name: 'Green Salad', price: 89, veg: true },
            { name: 'Papad', price: 39, veg: true },
        ],
    },
    {
        id: 'indian-main-course',
        group: 'indian-mains',
        label: 'Indian Main Course (Gravy 4pc)',
        items: [
            { name: 'Do Pyaza (Mushroom / Paneer)', price: '329 / 339', veg: true },
            { name: 'Do Pyaza (Chicken / Mutton)', price: '369 / 399', veg: false },
            { name: 'Kadhai (Mushroom / Paneer)', price: '339 / 349', veg: true },
            { name: 'Kadhai (Chicken / Mutton)', price: '379 / 429', veg: false },
            { name: 'Kosha (Mushroom / Chicken / Mutton)', price: '339 / 389 / 439', veg: false },
            { name: 'Royal Masala (Mushroom / Paneer)', price: '349 / 349', veg: true },
            { name: 'Royal Masala (Chicken / Mutton)', price: '399 / 449', veg: false },
            { name: 'Punjabi Tandoor (Mushroom / Paneer)', price: '349 / 349', veg: true },
            { name: 'Punjabi Tandoor (Chicken / Mutton)', price: '399 / 449', veg: false },
            { name: 'Kohlapuri (Mushroom / Paneer)', price: '349 / 349', veg: true },
            { name: 'Kohlapuri (Chicken / Mutton)', price: '399 / 459', veg: false },
            { name: 'Lababdar (Paneer / Chicken / Mutton)', price: '379 / 419 / 459', veg: false },
            { name: 'Butter Masala Tandoor (Paneer / Chicken)', price: '379 / 429', veg: false },
            { name: 'Ghee Roast (Paneer / Chicken / Mutton)', price: '399 / 429 / 469', veg: false },
            { name: 'Bharta / Keema (Paneer / Chicken / Mutton)', price: '399 / 449 / 499', veg: false },
        ],
    },
    {
        id: 'indian-rice',
        group: 'indian-mains',
        label: 'Indian Rice',
        items: [
            { name: 'Pulao (Veg / Paneer)', price: '219 / 279', veg: true },
            { name: 'Pulao (Chicken / Mutton)', price: '299 / 339', veg: false },
            { name: 'Biryani with Raita & Salad (Paneer / Chicken / Mutton)', price: '299 / 329 / 359', veg: false },
        ],
    },
    {
        id: 'asian-specials',
        group: 'asian-global',
        label: 'Asian Specials',
        items: [
            { name: 'Chinese Sizzler', price: 499, veg: false },
            { name: 'Prawn Mixed Noodles', price: 379, veg: false },
            { name: 'Kimchi Chicken Fried Rice w Poached Egg & Fries', price: 349, veg: false },
            { name: 'Chilli (Chicken/Fish) + (Fried Rice/Hakka Noodles)', price: 349, veg: false },
            { name: 'Chinese/American Chicken Chop Suey', price: 329, veg: false },
            { name: 'Burnt Garlic Cantonese Gravy Noodles', price: 299, veg: true },
            { name: 'Leaf Deck Thukpa & Fries', price: 279, veg: true },
        ],
    },
    {
        id: 'asian-gravy',
        group: 'asian-global',
        label: 'The Classic Asian Gravy',
        items: [
            { name: 'Garlic / Hot Garlic (Mushroom / Paneer)', price: '329 / 329', veg: true },
            { name: 'Garlic / Hot Garlic (Chicken / Fish / Prawn)', price: '359 / 369 / 389', veg: false },
            { name: 'Chilli Spicy / Manchurian (Mushroom / Paneer)', price: '339 / 339', veg: true },
            { name: 'Chilli Spicy / Manchurian (Chicken / Fish / Prawn)', price: '369 / 379 / 399', veg: false },
            { name: 'Black Pepper / Sweet & Sour (Mushroom / Paneer)', price: '349 / 349', veg: true },
            { name: 'Black Pepper / Sweet & Sour (Chicken / Fish / Prawn)', price: '379 / 389 / 409', veg: false },
        ],
    },
    {
        id: 'rice-noodles',
        group: 'asian-global',
        label: 'Rice & Noodles',
        items: [
            { name: 'Classic / Burnt Garlic (Veg / Paneer / Chicken / Prawn)', price: '239 / 259 / 269 / 289', veg: true },
            { name: 'Red Chilli Garlic / Schezwan (Veg / Paneer / Chicken / Prawn)', price: '259 / 279 / 289 / 329', veg: true },
            { name: 'Street Style Soya (Veg / Paneer / Chicken / Prawn)', price: '259 / 289 / 299 / 329', veg: true },
        ],
    },
    {
        id: 'global-specials',
        group: 'asian-global',
        label: 'Global Specials',
        items: [
            { name: 'Juicy Lamb Shanks (2)', price: 429, veg: false },
            { name: 'Creamy Pepper Chicken', price: 399, veg: false },
            { name: 'Herb Rice with Poached Egg', price: 279, veg: false },
            { name: 'Italian Sizzler', price: 549, veg: true },
            { name: 'Greek Lamb Stifado', price: 499, veg: false },
            { name: 'European Rice Bowl', price: 379, veg: true },
        ],
    },
    {
        id: 'slurpy-soups',
        group: 'asian-global',
        label: 'Slurpy Soups',
        items: [
            { name: 'Classic Clear (Veg / Chicken / Prawns)', price: '159 / 169 / 189', veg: true },
            { name: 'Hot & Sour / Lemon Coriander / Sweet Corn (Veg / Chicken / Prawns)', price: '179 / 189 / 199', veg: true },
            { name: 'Manchow w Crispy Noodles (Veg / Chicken)', price: '199 / 189', veg: true },
            { name: 'Cream of Mushroom w Garlic Bread', price: '199 / 219 (Chicken option)', veg: true },
            { name: 'Tom Yum w Crispy Noodles (Veg / Chicken / Prawns)', price: '199 / 229 / 249', veg: true },
        ],
    },
    {
        id: 'steaks',
        group: 'asian-global',
        label: 'Steaks (with Herb Rice, Veggies & Mashed Potato)',
        items: [
            { name: 'Brown Sauce (Paneer / Chicken / Fish / Mutton)', price: '429 / 449 / 479 / 499', veg: false },
            { name: 'Lemon Butter Sauce (Paneer / Chicken / Fish / Mutton)', price: '429 / 449 / 479 / 499', veg: false },
            { name: 'Chef Mushroom Sauce (Paneer / Chicken / Fish / Mutton)', price: '449 / 479 / 499 / 529', veg: false },
            { name: 'Teriyaki Sauce / Indian Masala (Paneer / Chicken / Fish / Mutton)', price: '449 / 479 / 499 / 529', veg: false },
        ],
    },
    {
        id: 'passionate-pizzas',
        group: 'pizza-pasta',
        label: 'Passionate Pizzas',
        items: [
            { name: 'Butter Masala Pizza (Paneer / Chicken / Chicken+ / Mutton)', price: '449 / 479 / 499 / 549', veg: true },
            { name: 'Leaf Deck Pizza (Veg / Paneer / Chicken / Chicken+ / Mutton)', price: '379 / 399 / 429 / 449 / 499', veg: true },
            { name: 'Smokey BBQ Pizza (Paneer / Chicken / Chicken+ / Mutton)', price: '399 / 429 / 449 / 499', veg: false },
            { name: 'Mexican / Schezwan / Grilled Pizza (Veg / Paneer / Chicken / Chicken+ / Mutton)', price: '369 / 389 / 429 / 449', veg: true },
            { name: 'Margarita Pizza', price: 379, veg: true },
            { name: 'Cheese & Corn Pizza', price: 399, veg: true },
            { name: 'Farmhouse Pizza', price: 399, veg: true },
            { name: 'Chicken Reloaded Pizza', price: 429, veg: false },
        ],
    },
    {
        id: 'pastas',
        group: 'pizza-pasta',
        label: 'Pastas (Penne)',
        items: [
            { name: 'Arrabiata Red (Veggie / Chicken / Mutton)', price: '329 / 349 / 379', veg: true },
            { name: 'Alfredo White / Indian Masala (Veggie / Chicken / Mutton)', price: '349 / 379 / 399', veg: true },
            { name: 'Mixed Sauce / Aglio e Olio (Veggie / Chicken / Mutton)', price: '369 / 399 / 429', veg: true },
        ],
    },
    {
        id: 'wraps-burgers',
        group: 'wraps-burgers-group',
        label: 'Wraps, Sandwiches & Burgers',
        items: [
            { name: 'BBQ Chicken Wrap & Fries', price: 329, veg: false },
            { name: 'Mexican Chicken Wrap & Fries', price: 299, veg: false },
            { name: 'Spicy Paneer Wrap & Fries', price: 299, veg: true },
            { name: 'Chicken Masala Roll', price: 279, veg: false },
            { name: 'BBQ Chicken Roll', price: 269, veg: false },
            { name: 'Spicy Paneer Roll', price: 249, veg: true },
            { name: 'Chicken & Egg Club Sandwich', price: 349, veg: false },
            { name: 'Paneer Club Sandwich', price: 339, veg: true },
            { name: 'Roasted Chicken & Egg Sandwich', price: 299, veg: false },
            { name: 'BBQ Chicken Sandwich', price: 289, veg: false },
            { name: 'Grilled Chicken / Paneer Tikka Sandwich', price: 279, veg: false },
            { name: 'Grilled Chicken & Cheese Burger', price: 299, veg: false },
            { name: 'Chicken Steak Burger', price: 299, veg: false },
            { name: 'BBQ Chicken Burger', price: 289, veg: false },
            { name: 'Exotic Chicken Burger', price: 279, veg: false },
            { name: 'Grilled Paneer Burger', price: 269, veg: true },
            { name: 'Veggie Cheese Burger', price: 259, veg: true },
        ],
    },
    {
        id: 'leaf-deck-signatures',
        group: 'starters-snacks',
        label: 'Leaf Deck Signatures',
        items: [
            { name: 'Leaf Deck Fried Platter (Fish Finger/Strips/Fries/Popcorn)', price: 499, veg: false },
            { name: 'Leaf Deck Snacks Platter', price: 579, veg: false },
            { name: 'Piri Piri Tandoori Chicken (Half / Full)', price: '379 / 699', veg: false },
            { name: 'Seekh Kebab (Chicken / Mutton)', price: '399 / 449', veg: false },
        ],
    },
    {
        id: 'tandoori-tikkas',
        group: 'starters-snacks',
        label: 'Tandoori Tikkas (6pc)',
        items: [
            { name: 'Classic Tikka (Paneer / Chicken / Fish)', price: '359 / 369 / 379', veg: false },
            { name: 'Hariyali / Mustard Tikka (Paneer / Chicken / Fish)', price: '369 / 379 / 389', veg: false },
            { name: 'Piri-Piri / Malai Tikka (Paneer / Chicken / Fish)', price: '379 / 389 / 399', veg: false },
        ],
    },
    {
        id: 'wings-lollipops',
        group: 'starters-snacks',
        label: 'Wings & Lollipops (6pc)',
        items: [
            { name: 'Wings (Deep Fried / Spicy / Schezwan / Sweet & Spicy / BBQ)', price: '329 / 349 / 359 / 369 / 379', veg: false },
            { name: 'Lollipops (Deep Fried / Spicy / Schezwan / Sweet & Spicy / BBQ)', price: '349 / 369 / 379 / 389 / 399', veg: false },
        ],
    },
    {
        id: 'most-loved-starters',
        group: 'starters-snacks',
        label: 'Most Loved Starters',
        items: [
            { name: 'Chef Dry Fry (Paneer / Chicken / Fish)', price: '349 / 349 / 399', veg: false },
            { name: 'Chilli Dry (Paneer / Chicken / Fish)', price: '349 / 349 / 399', veg: false },
            { name: 'Indian Keema Pakoda (Paneer / Chicken / Fish) (6pc)', price: '319 / 349 / 399', veg: false },
            { name: 'Strips & Fries (12pc) (Paneer / Chicken / Fish)', price: '329 / 329 / 349', veg: false },
            { name: 'Piri-Piri Crumb Fried (4) with Fries (Paneer / Chicken / Fish)', price: '329 / 329 / 349', veg: false },
            { name: 'Popcorn (30pc) (Paneer / Chicken / Fish)', price: '299 / 299 / 329', veg: false },
        ],
    },
    {
        id: 'fries-salads-garlic-bread',
        group: 'starters-snacks',
        label: 'Fries, Salads & Garlic Bread',
        items: [
            { name: 'Classic Fries', price: 299, veg: true },
            { name: 'Cheesy Fries', price: 249, veg: true },
            { name: 'Chicken Sausage Fries', price: 279, veg: false },
            { name: 'Piri-Piri Fries', price: 229, veg: true },
            { name: 'Cheesy Chicken Fries', price: 279, veg: false },
            { name: 'Chicken Chipotle Fries', price: 299, veg: false },
            { name: 'Caesar Salad', price: 349, veg: true },
            { name: 'Chicken & Egg Caesar Salad', price: 379, veg: false },
            { name: 'Spicy Chicken Salad', price: 349, veg: false },
            { name: 'Chipotle Salad (Veg / Chicken)', price: '319 / 379', veg: true },
            { name: 'Classic Cheesy Garlic Bread (4)', price: 249, veg: true },
            { name: 'Smokey BBQ Chicken Garlic Bread (4)', price: 299, veg: false },
            { name: 'Cheesy Paneer Garlic Bread (4)', price: 279, veg: true },
        ],
    },
    {
        id: 'veg-munchies',
        group: 'starters-snacks',
        label: 'Veg Munchies',
        items: [
            { name: 'Italian Cheese Balls (6)', price: 399, veg: true },
            { name: 'Paneer Thecha Satay', price: 379, veg: true },
            { name: 'Crispy Chilli Sesame Paneer (6)', price: 369, veg: true },
            { name: 'Greeny Chilli Paneer (8)', price: 359, veg: true },
            { name: 'Crispy Chilli Babycorn', price: 339, veg: true },
            { name: 'Crispy Mushroom Dry', price: 339, veg: true },
            { name: 'Paneer Fingers & Fries (6)', price: 329, veg: true },
            { name: 'Honey Chilli Potato', price: 299, veg: true },
            { name: 'Salt & Pepper (Corn/Mushroom)', price: 299, veg: true },
            { name: 'Bruschetta (4)', price: 279, veg: true },
        ],
    },
    {
        id: 'seafood-fish',
        group: 'starters-snacks',
        label: 'Seafood & Fish',
        items: [
            { name: 'Butter Garlic Prawn (8)', price: 429, veg: false },
            { name: 'Smokey BBQ Prawn (6)', price: 399, veg: false },
            { name: 'Prawn Dry Fry', price: 399, veg: false },
            { name: 'Sauteed Prawn (6) with Fries (BBQ/Piri-Piri)', price: 399, veg: false },
            { name: 'Chilli Fish Dry', price: 389, veg: false },
            { name: 'Fish & Chips', price: 389, veg: false },
            { name: 'Fish Fingers', price: 349, veg: false },
            { name: 'Fish Chengdu', price: 349, veg: false },
        ],
    },
    {
        id: 'chicken-starters',
        group: 'starters-snacks',
        label: 'Chicken Starters',
        items: [
            { name: 'Chicken Meat Balls (6)', price: 399, veg: false },
            { name: 'LDC Fried Chicken (4 Leg)', price: 399, veg: false },
            { name: 'Honey Crispy Chicken (15)', price: 369, veg: false },
            { name: 'Flaky Fried Chicken (4)', price: 369, veg: false },
            { name: 'Green Chilli Chicken (6)', price: 369, veg: false },
            { name: 'Cajun Strip Chicken (12) w Fries', price: 339, veg: false },
            { name: 'Chicken Cheesy Nuggets (6)', price: 349, veg: false },
            { name: 'Sausages (3) & Fries', price: 289, veg: false },
        ],
    },
    {
        id: 'tandoori-breads',
        group: 'indian-mains',
        label: 'Tandoori Breads',
        items: [
            { name: 'Chicken Keema Naan', price: 179, veg: false },
            { name: 'Subz Masala Kulcha', price: 149, veg: true },
            { name: 'Garlic Naan', price: 99, veg: true },
            { name: 'Butter Naan', price: 89, veg: true },
            { name: 'Naan', price: 79, veg: true },
            { name: 'Butter Tandoori Roti', price: 79, veg: true },
            { name: 'Tandoori Roti', price: 69, veg: true },
        ],
    },
    {
        id: 'shakes',
        group: 'beverages',
        label: 'Beverages — Shakes',
        items: [
            { name: 'Empire Fruit Shake', price: 299, veg: true },
            { name: 'Frappuccino (Mango / Strawberry)', price: 299, veg: true },
            { name: 'Choco Brownie Shake', price: 289, veg: true },
            { name: 'Choco Oreo Shake', price: 279, veg: true },
            { name: 'Cold Coffee with Frosting', price: 279, veg: true },
            { name: 'Mango Delight', price: 279, veg: true },
            { name: 'Classic Choco Shake', price: 269, veg: true },
            { name: 'Strawberry Cold Coffee', price: 269, veg: true },
            { name: 'Mango Choco Shake', price: 259, veg: true },
            { name: 'Butterscotch Shake', price: 259, veg: true },
            { name: 'Classic Cold Coffee', price: 239, veg: true },
            { name: 'Flavor Milk Shake (Mango/Strawberry/Banana/Vanilla)', price: '249 / 239', veg: true },
        ],
    },
    {
        id: 'hot-beverages',
        group: 'beverages',
        label: 'Hot Beverages',
        items: [
            { name: 'Hot Chocolate', price: 249, veg: true },
            { name: 'Leaf Deck Cappuccino (Vanilla/Butterscotch)', price: 189, veg: true },
            { name: 'Ice Cream Latte', price: 189, veg: true },
            { name: 'Iced Mocha', price: 179, veg: true },
            { name: 'Cafe Mocha', price: 169, veg: true },
            { name: 'Cafe Latte', price: 159, veg: true },
            { name: 'Cappuccino', price: 149, veg: true },
            { name: 'Americano', price: 139, veg: true },
            { name: 'Iced Americano', price: 139, veg: true },
            { name: 'Espresso Shot', price: 129, veg: true },
            { name: 'Green Tea', price: 119, veg: true },
            { name: 'Milk Tea', price: 99, veg: true },
        ],
    },
    {
        id: 'refreshers-mocktails',
        group: 'beverages',
        label: 'Refreshers, LIIT & Mocktails',
        items: [
            { name: 'Classic LIIT / Peach LIIT', price: '219 / 269', veg: true },
            { name: 'Strawberry LIIT / Electric LIIT', price: '259 / 279', veg: true },
            { name: 'Virgin Mojito (Classic / Blue / Green Apple / Lavender / Peach / Watermelon)', price: '199 / 209 / 219 / 229', veg: true },
            { name: 'Virgin Pina Colada', price: 279, veg: true },
            { name: 'Out of the Blue / Peachy Delight', price: 279, veg: true },
            { name: 'Spicy Chilli Guava', price: 249, veg: true },
            { name: 'Lychee & Rose Cooler', price: 239, veg: true },
            { name: 'Arizona Sunset / Fresh Mind', price: 229, veg: true },
            { name: 'Red Rosie / Black Lady / Pink Lady / Kiwi Margarita / Orange Opulence', price: 199, veg: true },
            { name: 'Watermelon Ginger Twist', price: 199, veg: true },
            { name: 'Green Apple Soda / Blue Lagoon / Kacha Aam Panna', price: 189, veg: true },
        ],
    },
    {
        id: 'dessert',
        group: 'desserts',
        label: 'Dessert',
        items: [
            { name: 'Cream Fruity Blast Bowl', price: 249, veg: true },
            { name: 'Brownie with Ice Cream', price: 229, veg: true },
            { name: 'Choco Oreo Blast', price: 199, veg: true },
            { name: 'Sweet Valentine', price: 179, veg: true },
            { name: 'Vanilla Choco Mix', price: 149, veg: true },
            { name: 'Mango Vanilla Mix', price: 149, veg: true },
            { name: 'Vanilla Ice Cream', price: 129, veg: true },
        ],
    },
]

function VegDot({ veg }: { veg: boolean }) {
    return (
        <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-xs border transition-colors duration-300 ${veg ? 'border-emerald-500/40 bg-emerald-500/5' : 'border-rose-500/40 bg-rose-500/5'}`}>
            <span className={`h-1.5 w-1.5 rounded-full ${veg ? 'bg-emerald-500' : 'bg-rose-500'}`} />
        </span>
    )
}

const NAVBAR_OFFSET = 200

export default function MenuPage() {
    const [activeGroup, setActiveGroup] = useState(groups[0].id)
    const [query, setQuery] = useState('')
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const groupRefs = useRef<Record<string, HTMLElement | null>>({})
    const contentRef = useRef<HTMLDivElement>(null)

    const normalizedQuery = query.trim().toLowerCase()

    const filteredCategories = categories
        .map((category) => ({
            ...category,
            items: normalizedQuery ? category.items.filter((item) => item.name.toLowerCase().includes(normalizedQuery)) : category.items,
        }))
        .filter((category) => category.items.length > 0)

    const groupedCategories = groups
        .map((group) => ({
            ...group,
            categories: filteredCategories.filter((c) => c.group === group.id),
        }))
        .filter((group) => group.categories.length > 0)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter((entry) => entry.isIntersecting)
                if (visible.length > 0) {
                    setActiveGroup(visible[0].target.id)
                }
            },
            { rootMargin: `-${NAVBAR_OFFSET + 40}px 0px -70% 0px`, threshold: 0 },
        )

        Object.values(groupRefs.current).forEach((el) => {
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [query])

    useEffect(() => {
        if (normalizedQuery) {
            const el = contentRef.current
            if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - (NAVBAR_OFFSET + 24)
                lenis.scrollTo(y)
            }
        }
    }, [normalizedQuery])

    useEffect(() => {
        if (normalizedQuery && groupedCategories.length > 0) {
            setActiveGroup(groupedCategories[0].id)
        }
    }, [normalizedQuery])

    const scrollToGroup = (id: string) => {
        setMobileMenuOpen(false)

        const el = groupRefs.current[id]
        if (!el) return

        const y = el.getBoundingClientRect().top + window.scrollY - (NAVBAR_OFFSET + 24)

        const distance = Math.abs(window.scrollY - y)

        lenis.scrollTo(y, {
            duration: distance > 1800 ? 0.45 : 1,
        })

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
                <Image src='/images/menu-banner.png' alt='Leaf Deck Cafe dishes' fill priority quality={100} className='object-cover object-center saturate-110 contrast-105 brightness-90' />
                <div className='absolute inset-0 bg-linear-to-b from-black/50 via-black/35 to-[#16120E]' />
                <div className='absolute inset-0 flex flex-col items-center justify-center px-6 text-center'>
                    <span className={`${interTight.className} mb-2 text-[11px] font-bold uppercase tracking-[0.5em] text-white/75`}>Crafted Flavours</span>
                    <h1 className={`${fraunces.className} text-5xl font-black tracking-wide text-white drop-shadow-2xl sm:text-6xl md:text-7xl`}>Our Menu</h1>
                </div>
            </section>

            <section className='relative border-b border-white/5 bg-[#16120E] px-6 py-20 sm:py-24'>
                <div className='mx-auto max-w-6xl'>
                    <div className='mb-12 text-center'>
                        <span className={`${interTight.className} text-xs font-medium uppercase tracking-[0.42em] text-white/40`}>Fan Favourites</span>
                        <h2 className={`${fraunces.className} mt-4 text-4xl font-bold tracking-wide text-white sm:text-5xl`}>Where To Start</h2>
                    </div>

                    <div className='grid grid-cols-1 gap-6 sm:grid-cols-3'>
                        {heroDishes.map((dish) => (
                            <div key={dish.name} className='group'>
                                <div className='relative h-72 w-full overflow-hidden rounded-2xl'>
                                    <Image src={dish.image} alt={dish.name} fill className='object-cover transition-transform duration-500 group-hover:scale-105' />
                                </div>
                                <div className='mt-4 flex items-center justify-between gap-3'>
                                    <div className='flex items-center gap-2'>
                                        <VegDot veg={dish.veg} />
                                        <h3 className={`${fraunces.className} text-lg font-semibold text-white`}>{dish.name}</h3>
                                    </div>
                                    <span className={`${interTight.className} text-sm font-semibold text-[#C9A227]`}>₹{dish.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className='relative rounded-[30px] bg-[#F7F0DF] px-10 py-10'>
                <div className='mx-auto grid max-w-8xl grid-cols-1 gap-10 lg:grid-cols-[350px_minmax(0,1fr)]'>
                    <aside className='hidden self-start lg:sticky lg:block' style={{ top: NAVBAR_OFFSET }}>
                        <div className='flex flex-col rounded-[26px] bg-[#1B1611] px-6 py-6 shadow-[0_24px_50px_rgba(0,0,0,0.25)]'>
                            <div className='relative'>
                                <Search className='pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8E7D6E]' />
                                <input
                                    type='text'
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder='Search dishes...'
                                    className={`${interTight.className} w-full rounded-xl border border-[#3A2F28] bg-[#241D18] py-3 pl-11 pr-4 text-[14px] text-[#F4EDE1] placeholder:text-[#8E7D6E] outline-none transition-all duration-300 focus:border-[#6A5442]`}
                                />
                            </div>

                            <div className='my-6 h-px bg-white/10' />

                            <span className={`${interTight.className} mb-4 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#8E7D6E]`}>Sections</span>

                            <div className='space-y-1'>
                                {groups.map((group) => {
                                    const active = activeGroup === group.id
                                    return (
                                        <button key={group.id} onClick={() => scrollToGroup(group.id)} className='group flex w-full items-center gap-3 py-2.5 text-left'>
                                            <span className={`h-6 w-0.75 rounded-full transition-all duration-300 ${active ? 'bg-[#C9A227]' : 'bg-transparent'}`} />
                                            <span className={`${interTight.className} text-[15px] cursor-pointer font-medium tracking-[-0.01em] transition-colors duration-300 ${active ? 'text-[#F4EDE1]' : 'text-[#A89A8B] group-hover:text-[#F4EDE1]'}`}>{group.label}</span>
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                    </aside>

                    <div ref={contentRef} className='flex min-h-[60vh] flex-col'>
                        {query && groupedCategories.length > 0 && (
                            <p className={`${interTight.className} mb-8 border-b border-[#2A2420]/15 pb-4 text-sm text-[#2A2420]/60`}>
                                Showing results for <span className='font-semibold text-[#2A2420]'>&ldquo;{query}&rdquo;</span>
                            </p>
                        )}

                        <div>
                            {groupedCategories.length === 0 ? (
                                <div className='flex min-h-[60vh] items-center justify-center'>
                                    <div className='rounded-3xl border border-dashed border-[#2A2420]/15 px-12 py-10'>
                                        <p className={`${interTight.className} text-[#2A2420]/50`}>No dishes match "{query}".</p>
                                    </div>
                                </div>
                            ) : (
                                <div className='space-y-24'>
                                    {groupedCategories.map((group) => (
                                        <div
                                            key={group.id}
                                            id={group.id}
                                            ref={(el) => {
                                                groupRefs.current[group.id] = el
                                            }}
                                            className='scroll-mt-32'
                                        >
                                            <div className='mb-10 flex items-center gap-6'>
                                                <h2 className={`${fraunces.className} text-4xl font-bold tracking-wide text-[#2A2420] sm:text-5xl`}>{group.label}</h2>
                                                <div className='h-px flex-1 bg-[#2A2420]/20' />
                                            </div>

                                            <div className='space-y-12'>
                                                {group.categories.length > 0 ? (
                                                    group.categories.map((category) => (
                                                        <div key={category.id}>
                                                            <h3 className={`${interTight.className} mb-4 text-[13px] font-bold uppercase tracking-[0.2em] text-[#8B5E3C]`}>{category.label}</h3>

                                                            <div className='flex flex-col'>
                                                                {category.items.map((item) => (
                                                                    <div key={item.name} className='flex items-center justify-between gap-6 border-b border-[#2A2420]/10 py-4 last:border-none'>
                                                                        <div className='flex min-w-0 items-center gap-3'>
                                                                            <VegDot veg={item.veg} />
                                                                            <h4 className={`${interTight.className} text-[16px] text-[#2A2420]`}>{item.name}</h4>
                                                                        </div>
                                                                        <span className={`${interTight.className} shrink-0 text-[16px] font-semibold text-[#8B5E3C]`}>{typeof item.price === 'number' ? `₹${item.price}` : `₹ ${item.price}`}</span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <div className='py-10 text-[#2A2420]/35'>No matching dishes.</div>
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
                    We charge an optional <span className='text-[#C9A227] font-semibold'>5% service charge</span> to maintain the ambience. Please allow approximately <span className='text-white/80 font-semibold'>30 minutes</span> for careful preparation.
                </p>
            </section>

            <div className='fixed bottom-6 left-1/2 z-40 w-[90%] max-w-sm -translate-x-1/2 lg:hidden'>
                <div className='flex items-center gap-2 rounded-2xl border border-white/10 bg-[#1B1611]/95 p-2 shadow-2xl backdrop-blur-xl'>
                    <div className='relative flex-1'>
                        <Search className='pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40' />
                        <input type='text' value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Search items...' className={`${interTight.className} w-full rounded-xl bg-white/5 py-2.5 pl-9 pr-3 text-[13px] text-white placeholder:text-white/35 focus:outline-none`} />
                    </div>
                    <button onClick={() => setMobileMenuOpen(true)} className='flex shrink-0 items-center gap-2 rounded-xl bg-[#F4EDE1] px-4 py-2.5 text-[13px] font-semibold text-[#2A2420] active:scale-95'>
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
                            <button onClick={() => setMobileMenuOpen(false)} className='rounded-full bg-white/5 p-1.5 text-white/70'>
                                <X className='h-5 w-5' />
                            </button>
                        </div>

                        <div className='custom-sidebar-scrollbar flex-1 space-y-2 overflow-y-auto py-6 pr-2'>
                            {groups.map((group) => (
                                <button
                                    key={group.id}
                                    onClick={() => scrollToGroup(group.id)}
                                    className={`${interTight.className} flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-sm font-medium transition-all duration-300 ${activeGroup === group.id ? 'bg-white/10 text-[#F4EDE1]' : 'text-white/60'}`}
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
