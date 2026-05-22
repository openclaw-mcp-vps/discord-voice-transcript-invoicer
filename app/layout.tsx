import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Discord Voice Transcript Invoicer — Turn Discord Calls Into Billable Hours',
  description: 'Automatically transcribe Discord voice channels and generate client invoices with accurate meeting durations. Built for technical consultants and agencies.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c2c6f933-d468-4791-802e-afb5d0aa2ceb"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
