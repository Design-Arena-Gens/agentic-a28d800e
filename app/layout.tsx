import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sicily Holiday Planner - Castellammare del Golfo',
  description: 'Your complete 7-day itinerary for Castellammare del Golfo, Sicily',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
