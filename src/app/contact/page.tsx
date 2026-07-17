'use client'

import { lenis } from '../components/layout/LenisProvider'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Fraunces, Inter_Tight } from 'next/font/google'
import { MapPin, Phone, Mail, Clock, Send, AlertCircle, MapPinned, ArrowUpRight, ArrowRight } from 'lucide-react'

const interTight = Inter_Tight({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
})

const fraunces = Fraunces({
    subsets: ['latin'],
    weight: ['600', '700', '900'],
    style: ['normal', 'italic'],
})

const details = [
    {
        icon: MapPin,
        title: 'Find Us',
        copy: 'Opp. Guwahati Tea Auction Centre, GS Road, Dispur, Guwahati - 06',
    },
    {
        icon: Phone,
        title: 'Call Us',
        copy: '+91 74000 19024',
    },
    {
        icon: Clock,
        title: 'Hours',
        copy: 'Open all days — 11:00 AM to 11:30 PM',
    },
]

const NAME_REGEX = /^[A-Za-z]+(?:['-][A-Za-z]+)*(?:\s+[A-Za-z]+(?:['-][A-Za-z]+)*){0,4}$/
const PHONE_REGEX = /^(\+91[\s-]?)?[6-9]\d{9}$/
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/

type FieldName = 'firstName' | 'phone' | 'email' | 'message'

interface FormState {
    firstName: string
    phone: string
    email: string
    message: string
}

const initialForm: FormState = { firstName: '', phone: '', email: '', message: '' }

function validateField(name: FieldName, value: string): string {
    const trimmed = value.trim()

    switch (name) {
        case 'firstName':
            if (!trimmed) return 'Please enter your name.'
            if (trimmed.length < 2 || trimmed.length > 40) return 'Name must be between 2 and 40 characters.'
            if (!NAME_REGEX.test(trimmed)) return 'Each word should be 2-20 letters — no numbers or symbols.'
            return ''

        case 'phone':
            if (!trimmed) return 'Please enter your phone number.'
            if (!PHONE_REGEX.test(trimmed.replace(/\s/g, ''))) return 'Enter a valid 10-digit Indian mobile number.'
            return ''

        case 'email':
            if (!trimmed) return 'Please enter your email.'
            if (!EMAIL_REGEX.test(trimmed)) return 'Enter a valid email address, e.g. name@example.com.'
            return ''

        case 'message':
            if (!trimmed) return 'Please add a short message.'
            if (trimmed.length < 10) return 'Message should be at least 10 characters.'
            if (trimmed.length > 500) return 'Message should be under 500 characters.'
            return ''

        default:
            return ''
    }
}

const fieldBaseClass = `${interTight.className} border-b bg-transparent pb-3 text-[15px] text-[#2A2420] placeholder:text-[#2A2420]/35 focus:outline-none [&:-webkit-autofill]:[-webkit-text-fill-color:#2A2420] [&:-webkit-autofill]:[transition:background-color_9999s_ease-in-out_0s] [&:-webkit-autofill]:shadow-[inset_0_0_0px_1000px_#EDE3D0]`

export default function ContactPage() {
    const [form, setForm] = useState<FormState>(initialForm)
    const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({})
    const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({})
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (name: FieldName, value: string) => {
        setSubmitted(false)

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }))

        if (touched[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: validateField(name, value),
            }))
        }
    }

    const handleBlur = (name: FieldName) => {
        setTouched((prev) => ({ ...prev, [name]: true }))
        setErrors((prev) => ({ ...prev, [name]: validateField(name, form[name]) }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const fieldNames: FieldName[] = ['firstName', 'phone', 'email', 'message']
        const nextErrors: Partial<Record<FieldName, string>> = {}
        fieldNames.forEach((name) => {
            const error = validateField(name, form[name])
            if (error) nextErrors[name] = error
        })

        setErrors(nextErrors)
        setTouched({ firstName: true, phone: true, email: true, message: true })

        if (Object.keys(nextErrors).length === 0) {
            setSubmitted(true)
            setForm(initialForm)
            setTouched({})
        }
    }

    return (
        <main className='bg-[#1B1611] select-none'>
            <section className='relative h-[50vh] overflow-hidden rounded-b-[30px] sm:h-[56vh]'>
                <Image src='/images/contact-banner.avif' alt='Leaf Deck Cafe interior' fill priority quality={100} className='object-cover object-center saturate-110 contrast-105 brightness-95' />

                <div className='absolute inset-0 bg-linear-to-b from-black/55 via-black/35 to-black/70' />

                <div className='absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white'>
                    <span className={`${interTight.className} text-xs font-medium uppercase tracking-[0.42em] text-white/75 md:text-sm`}>Get In Touch</span>

                    <h1 className={`${fraunces.className} mt-4 text-5xl font-black tracking-wide drop-shadow-[0_10px_40px_rgba(0,0,0,0.9)] sm:text-6xl md:text-7xl`}>Contact Us</h1>
                </div>
            </section>

            <section className='relative overflow-hidden bg-[#1B1611] px-6 py-24 sm:py-28'>
                <div className='pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#C9A227]/5 blur-3xl' />

                <div className='relative z-10 mx-auto max-w-3xl text-center'>
                    <span className={`${interTight.className} text-xs font-medium uppercase tracking-[0.42em] text-[#F4EDE1]/50 md:text-sm`}>We&apos;d Love To Hear From You</span>

                    <h2 className={`${fraunces.className} mt-4 text-4xl font-bold tracking-wide text-white sm:text-5xl`}>Questions, Bookings, Anything Else</h2>

                    <p className={`${interTight.className} mx-auto mt-6 max-w-xl text-[16px] leading-relaxed tracking-wide text-white/60`}>Whether it&apos;s a reservation, a catering enquiry, or just a question about the menu — send us a note and we&apos;ll get back to you as soon as we can.</p>
                </div>
            </section>

            <section className='relative bg-[#1B1611] select-none'>
                <div className='relative overflow-hidden rounded-[30px] bg-[#EDE3D0] px-6 pt-20 pb-14 sm:px-10 sm:pt-24 sm:pb-16 lg:px-14'>
                    <div className='pointer-events-none absolute right-0 top-0 h-96 w-96 -translate-y-1/3 translate-x-1/4 rounded-full bg-[#8B5E3C]/10 blur-3xl' />

                    <div className='relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr]'>
                        <div>
                            <span className={`${interTight.className} text-xs font-medium uppercase tracking-[0.42em] text-[#8B5E3C]/70`}>Reach Us Directly</span>

                            <h2 className={`${fraunces.className} mt-4 text-3xl font-bold tracking-wide text-[#2A2420] sm:text-4xl`}>Come Say Hello</h2>

                            <div className='mt-10 flex flex-col divide-y divide-[#2A2420]/15'>
                                {details.map((item) => (
                                    <div key={item.title} className='flex gap-4 py-6 first:pt-0 last:pb-0'>
                                        <item.icon className='mt-1 h-5 w-5 shrink-0 text-[#8B5E3C]' strokeWidth={1.5} />

                                        <div>
                                            <h3 className={`${fraunces.className} text-lg font-semibold text-[#2A2420]`}>{item.title}</h3>
                                            <p className={`${interTight.className} mt-1 text-[15px] leading-relaxed text-[#2A2420]/65`}>{item.copy}</p>
                                        </div>
                                    </div>
                                ))}

                                <div className='flex gap-4 py-6 first:pt-0 last:pb-0'>
                                    <Mail className='mt-1 h-5 w-5 shrink-0 text-[#8B5E3C]' strokeWidth={1.5} />

                                    <div>
                                        <h3 className={`${fraunces.className} text-lg font-semibold text-[#2A2420]`}>Email</h3>
                                        <p className={`${interTight.className} mt-1 text-[15px] leading-relaxed text-[#2A2420]/65`}>hello@leafdeck.in</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} noValidate className='flex flex-col gap-6'>
                            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor='firstName' className={`${interTight.className} text-xs font-semibold uppercase tracking-[0.14em] text-[#2A2420]/70`}>
                                        First Name
                                    </label>
                                    <input
                                        id='firstName'
                                        type='text'
                                        name='firstName'
                                        placeholder='Your first name'
                                        value={form.firstName}
                                        onChange={(e) => handleChange('firstName', e.target.value)}
                                        onBlur={() => handleBlur('firstName')}
                                        aria-invalid={!!errors.firstName}
                                        aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                                        className={`${fieldBaseClass} ${errors.firstName ? 'border-[#B3432B] focus:border-[#B3432B]' : 'border-[#2A2420]/25 focus:border-[#8B5E3C]'}`}
                                    />
                                    {errors.firstName && (
                                        <span id='firstName-error' className={`${interTight.className} flex items-center gap-1.5 text-[13px] text-[#B3432B]`}>
                                            <AlertCircle className='h-3.5 w-3.5 shrink-0' strokeWidth={2} />
                                            {errors.firstName}
                                        </span>
                                    )}
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <label htmlFor='phone' className={`${interTight.className} text-xs font-semibold uppercase tracking-[0.14em] text-[#2A2420]/70`}>
                                        Phone
                                    </label>
                                    <input
                                        id='phone'
                                        type='tel'
                                        name='phone'
                                        placeholder='10-digit mobile number'
                                        value={form.phone}
                                        onChange={(e) => handleChange('phone', e.target.value)}
                                        onBlur={() => handleBlur('phone')}
                                        aria-invalid={!!errors.phone}
                                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                                        className={`${fieldBaseClass} ${errors.phone ? 'border-[#B3432B] focus:border-[#B3432B]' : 'border-[#2A2420]/25 focus:border-[#8B5E3C]'}`}
                                    />
                                    {errors.phone && (
                                        <span id='phone-error' className={`${interTight.className} flex items-center gap-1.5 text-[13px] text-[#B3432B]`}>
                                            <AlertCircle className='h-3.5 w-3.5 shrink-0' strokeWidth={2} />
                                            {errors.phone}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <label htmlFor='email' className={`${interTight.className} text-xs font-semibold uppercase tracking-[0.14em] text-[#2A2420]/70`}>
                                    Email
                                </label>
                                <input
                                    id='email'
                                    type='email'
                                    name='email'
                                    placeholder='your@email.com'
                                    value={form.email}
                                    onChange={(e) => handleChange('email', e.target.value)}
                                    onBlur={() => handleBlur('email')}
                                    aria-invalid={!!errors.email}
                                    aria-describedby={errors.email ? 'email-error' : undefined}
                                    className={`${fieldBaseClass} ${errors.email ? 'border-[#B3432B] focus:border-[#B3432B]' : 'border-[#2A2420]/25 focus:border-[#8B5E3C]'}`}
                                />
                                {errors.email && (
                                    <span id='email-error' className={`${interTight.className} flex items-center gap-1.5 text-[13px] text-[#B3432B]`}>
                                        <AlertCircle className='h-3.5 w-3.5 shrink-0' strokeWidth={2} />
                                        {errors.email}
                                    </span>
                                )}
                            </div>

                            <div className='flex flex-col gap-2'>
                                <label htmlFor='message' className={`${interTight.className} text-xs font-semibold uppercase tracking-[0.14em] text-[#2A2420]/70`}>
                                    Message
                                </label>
                                <textarea
                                    id='message'
                                    name='message'
                                    rows={5}
                                    placeholder='Tell us what you need...'
                                    value={form.message}
                                    onChange={(e) => handleChange('message', e.target.value)}
                                    onBlur={() => handleBlur('message')}
                                    aria-invalid={!!errors.message}
                                    aria-describedby={errors.message ? 'message-error' : undefined}
                                    className={`${interTight.className} resize-none border-b bg-transparent pb-3 text-[15px] text-[#2A2420] placeholder:text-[#2A2420]/35 focus:outline-none ${errors.message ? 'border-[#B3432B] focus:border-[#B3432B]' : 'border-[#2A2420]/25 focus:border-[#8B5E3C]'}`}
                                />
                                {errors.message && (
                                    <span id='message-error' className={`${interTight.className} flex items-center gap-1.5 text-[13px] text-[#B3432B]`}>
                                        <AlertCircle className='h-3.5 w-3.5 shrink-0' strokeWidth={2} />
                                        {errors.message}
                                    </span>
                                )}
                            </div>

                            <button
                                type='submit'
                                className='group mt-4 flex w-fit cursor-pointer items-center gap-2 rounded-full bg-[#2A2420] px-9 py-4 text-[13px] font-bold uppercase tracking-[0.14em] text-[#F4EDE1] shadow-[0_12px_30px_rgba(0,0,0,.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#1B1611]'
                            >
                                Send Message
                                <Send className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
                            </button>

                            {submitted && <p className={`${interTight.className} text-[14px] text-[#3D6B4A]`}>Thanks — your message has been sent. We&apos;ll be in touch shortly.</p>}
                        </form>
                    </div>
                </div>
            </section>

            <section className='relative bg-[#1B1611] px-6 py-24 sm:py-28'>
                <div className='mx-auto max-w-6xl'>
                    <div className='mb-12 text-center'>
                        <span className={`${interTight.className} text-xs font-medium uppercase tracking-[0.42em] text-[#F4EDE1]/50 md:text-sm`}>Where To Find Us</span>

                        <h2 className={`${fraunces.className} mt-4 text-4xl font-bold tracking-wide text-white sm:text-5xl`}>On GS Road, Dispur</h2>
                    </div>

                    <div className='relative h-100 overflow-hidden rounded-[30px] sm:h-115'>
                        <iframe
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.559669025879!2d91.78772437624063!3d26.145896477112572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a59ff7ccf3fa1%3A0x27d18bd386e8d896!2sLeaf%20Deck%20Caf%C3%A9!5e0!3m2!1sen!2sin!4v1784125667231!5m2!1sen!2sin'
                            className='h-full w-full will-change-transform'
                            style={{ border: 0 }}
                            allowFullScreen
                            loading='eager'
                            referrerPolicy='strict-origin-when-cross-origin'
                        ></iframe>
                    </div>
                    <Link
                        href='https://www.google.com/maps/place/Leaf+Deck+Caf%C3%A9/@26.1458965,91.7877244,17z/data=!4m6!3m5!1s0x375a59ff7ccf3fa1:0x27d18bd386e8d896!8m2!3d26.1458965!4d91.7902993!16s%2Fg%2F11n13vjrfz?entry=ttu&g_ep=EgoyMDI2MDcxMi4wIKXMDSoASAFQAw%3D%3D'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='group mx-auto mt-10 flex w-fit items-center gap-3 rounded-full border border-[#F4EDE1]/20 bg-white/5 px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#F4EDE1] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A227]/60 hover:bg-white/10'
                    >
                        <MapPinned className='h-5 w-5 transition-transform duration-300 group-hover:scale-110' />
                        Open in Google Maps
                        <ArrowUpRight className='h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
                    </Link>
                </div>
            </section>

            <section className='relative overflow-hidden bg-[#1B1611] px-6 pb-24 select-none sm:pb-28'>
                <div className='pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D8B25A]/5 blur-[130px]' />

                <div className='relative z-10 mx-auto max-w-2xl text-center'>
                    <h2 className={`${fraunces.className} text-3xl italic text-[#F4EDE1] md:text-4xl`}>Rather just call? We&apos;re one ring away.</h2>

                    <div className='mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row'>
                        <Link href='tel:+917400019024' className='group flex items-center gap-2 rounded-full bg-[#F4EDE1] px-9 py-4 text-[13px] font-bold uppercase tracking-[0.14em] text-[#2A2420] shadow-[0_12px_30px_rgba(0,0,0,.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-white'>
                            <Phone className='h-4 w-4' />
                            Call Us
                        </Link>

                        <a
                            href='https://www.zomato.com/guwahati/leaf-deck-cafe-dispur/order'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='group flex items-center gap-2 rounded-full border border-white/35 bg-white/5 px-9 py-4 text-[13px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md transition-all duration-300 hover:border-white/50 hover:bg-white/10'
                        >
                            Order Online
                            <ArrowRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}
