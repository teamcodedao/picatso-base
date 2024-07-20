import type {Metadata} from 'next';
import {Mansalva} from 'next/font/google';
import './globals.css';

const font = Mansalva({
  weight: ['400'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Picatso',
  description: `Modern day Picasso, is a fictional meme coin created from random and meaningless doodles. Picatso exists solely for entertainment and satire.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={font.className}>{children}</body>
    </html>
  );
}
