'use client'

import { ReactNode, useEffect } from 'react'
import Lenis from 'lenis'

export const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
    touchMultiplier: 1.5,
})

export default function LenisProvider({ children }: { children: ReactNode }) {
    useEffect(() => {
        let rafId: number

        const raf = (time: number) => {
            lenis.raf(time)
            rafId = requestAnimationFrame(raf)
        }

        rafId = requestAnimationFrame(raf)

        return () => {
            cancelAnimationFrame(rafId)
            lenis.destroy()
        }
    }, [])

    return <>{children}</>
}
