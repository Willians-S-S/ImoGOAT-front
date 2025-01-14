import "./global.css"
// import 'flowbite/dist/flowbite.css';

import Header from "../components/layout/Header"
import Footer from "@/components/layout/Footer"

export const metadata = {
  title: 'ImoGOAT',
  description: 'Generated by Next.js',
  icons:{
    icon:['/favicon.ico?v=4'],
    apple:['/favicon.png?v=4'],
    shortcut:['/favicon.png']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="m-auto min-h-screen sm:w-11/12 w-97p">
            {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
