import { Metadata } from "next";  // Import Metadata from next package
import "./globals.css";            // Global styles import
import Game from '@/components/game'; // Importing the Game component

export const metadata: Metadata = {
  title: 'portfolio',
  description: 'My awesome Next.js app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* You can include more head elements here */}
      </head>
      <body>
        {/* Rendering Game component */}
        <Game />

        {/* Rendering children, this will be specific page content */}
        {children}
      </body>
    </html>
  );
}
