import { Baloo_2 } from 'next/font/google'
import './globals.css'

const baloo2 = Baloo_2({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800']
})

export const metadata = {
  title: 'Sabixão',
  description: 'Jogo do Sabixão',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={baloo2.className}>{children}</body>
    </html>
  )
}
