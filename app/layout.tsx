import { Nunito } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar/Navbar'



export const metadata = {
  title: 'e-worker-chowk',
  description: 'Revolutionizing Labour Chowks: Embrace the Digital Era',
}
const font = Nunito({
  subsets:["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        
        </body>
    </html>
  )
}
