'use client'

import { ReactNode, useEffect } from 'react'
import Lenis from 'lenis'

export let lenis: Lenis | null = null

export default function LenisProvider({ children }: { children: ReactNode }) {
    useEffect(() => {
        lenis = new Lenis({
            smoothWheel: true,
            touchMultiplier: 1.5,
            lerp: 0.12,
        })

        let rafId: number

        const raf = (time: number) => {
            lenis?.raf(time)
            rafId = requestAnimationFrame(raf)
        }

        rafId = requestAnimationFrame(raf)

        return () => {
            cancelAnimationFrame(rafId)
            lenis?.destroy()
            lenis = null
        }
    }, [])

    return <>{children}</>
}
