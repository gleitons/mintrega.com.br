import type { Metadata } from 'next'



export const metadata: Metadata = {
  title: 'Comprar',
  description: 'Página de Comprar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
