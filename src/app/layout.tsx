import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HR-Management',
  description: 'hr-management',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main className={"flex pb-10 px-0  container mx-auto max-w-5xl items-stretch flex-col  sm:px-0  min-h-screen "}>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
