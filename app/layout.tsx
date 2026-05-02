import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RefDial — Automate Reference Checks with AI Phone Calls',
  description: 'Automate candidate reference checks with AI voice calls. Standardized questions, instant transcripts, and summary reports for HR teams and recruiting agencies.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c445ffd3-4a7e-452c-93bc-5d324840f151"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
