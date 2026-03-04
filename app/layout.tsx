import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Founder Risk Score',
  description: 'Startup founder risk assessment',
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
