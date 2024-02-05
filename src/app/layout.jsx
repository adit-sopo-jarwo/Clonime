import '@/app/globals.css'
import Navbar from '@/components/Navbar'
import { Caveat } from 'next/font/google'

const caveat = Caveat ({ subsets: ['latin'] })

export const metadata = {
  title: 'Clonime',
  description: 'Aditya Anime',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={'${caveat.className} bg-color-secondary' } suppressHydrationWarning={true}>
       <Navbar />
        {children}
        </body>
    </html>
  )
}
