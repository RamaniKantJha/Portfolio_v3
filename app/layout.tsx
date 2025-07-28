import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Vishal Kumar - AI/ML Intern & Developer',
  description: 'Portfolio of Vishal Kumar: AI/ML Intern, Full-stack Developer, and Data Science Enthusiast. Specialized in React, Python, and Machine Learning.',
  keywords: ['AI/ML Intern', 'Full-stack Developer', 'React', 'Python', 'Machine Learning', 'Portfolio'],
  authors: [{ name: 'Vishal Kumar' }],
  creator: 'Vishal Kumar',
  openGraph: {
    title: 'Vishal Kumar - AI/ML Intern & Developer',
    description: 'Portfolio of Vishal Kumar: AI/ML Intern, Full-stack Developer, and Data Science Enthusiast.',
    url: 'https://vishalkumar.me',
    siteName: 'Vishal Kumar Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vishal Kumar - AI/ML Intern & Developer',
    description: 'Portfolio of Vishal Kumar: AI/ML Intern, Full-stack Developer, and Data Science Enthusiast.',
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