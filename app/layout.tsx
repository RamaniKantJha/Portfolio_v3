import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Ramani Kant Jha - AI/ML Intern & Developer',
  description: 'Portfolio of Ramani Kant Jha: AI/ML Intern, Full-stack Developer, and Data Science Enthusiast. Specialized in React, Python, and Machine Learning.',
  keywords: ['AI/ML Intern', 'Full-stack Developer', 'React', 'Python', 'Machine Learning', 'Portfolio'],
  authors: [{ name: 'Ramani Kant Jha' }],
  creator: 'Ramani Kant Jha',
  openGraph: {
    title: 'Ramani Kant Jha - AI/ML Intern & Developer',
    description: 'Portfolio of Ramani Kant Jha: AI/ML Intern, Full-stack Developer, and Data Science Enthusiast.',
    url: 'https://ramanikantjha.me',
    siteName: 'Ramani Kant Jha Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ramani Kant Jha - AI/ML Intern & Developer',
    description: 'Portfolio of Ramani Kant Jha: AI/ML Intern, Full-stack Developer, and Data Science Enthusiast.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
} 