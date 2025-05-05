import { Metadata } from "next";  // Import Metadata from next package
import "./globals.css";            // Global styles import
import Game from '@/components/game'; // Importing the Game component

export const metadata: Metadata = {
  title: 'portfolio',
  description: 'My awesome Next.js app',
};

export default function RootLayout() {
  return (
    <html lang="en">
      <head>
      
      </head>
      <body>
        
        <Game />

       
      </body>
    </html>
  );
}
