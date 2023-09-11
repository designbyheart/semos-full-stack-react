import './globals.css'
import '@/styles/app.scss'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
// import { useEffect, useState } from 'react'

export const metadata = {
    title: 'Semos Akademija',
    description: 'Generated by create next app'
}

export default function RootLayout({ children, pageProps }) {
    // const [isClient, setIsClient] = useState(false)
    // useEffect(() => {
    //     setIsClient(true)
    // }, [])

    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
