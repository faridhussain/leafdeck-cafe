import About from './components/home/About'
import Hero from './components/home/Hero'
import SignatureDishes from './components/home/SignatureDishes'

export default function Home() {
    return (
        <div className='min-h-screen w-full bg-black'>
            <Hero />
            <SignatureDishes />
            <About />
        </div>
    )
}
