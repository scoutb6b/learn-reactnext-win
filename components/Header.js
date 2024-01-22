import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export  function Header() {
    return (
    <header className='border-b-2 border-gray-600 text-orange-700 font-bold'>
        <Link href="/" className='mx-10'>
            Index
        </Link>
        <Link href="/corporate" className='mx-10'>
            Corporate
        </Link>
    </header>
        
    )
}
