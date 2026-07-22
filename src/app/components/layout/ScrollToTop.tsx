'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { lenis } from './LenisProvider'

export default function ScrollToTop() {
    const pathname = usePathname()

    useEffect(() => {
        requestAnimationFrame(() => {
            if (lenis) {
                lenis.scrollTo(0, {
                    immediate: true,
                })
            } else {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'instant',
                })
            }
        })
    }, [pathname])

    return null
}
