import type { Metadata } from "next";

import "./globals.css";
import Game from '@/components/game' 



export const metadata: Metadata = {
  title: 'admark',
  description: 'My awesome Next.js app',
}

export default function RootLayout() {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body >

        <Game />
        
      </body>
    </html>
  )
}
