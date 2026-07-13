import Hero from './components/home/Hero'
import SignatureDishes from './components/home/SignatureDishes'

export default function Home() {
    return (
        <div className='min-h-screen w-full bg-black'>
            <Hero />
            <SignatureDishes />
        </div>
    )
}
