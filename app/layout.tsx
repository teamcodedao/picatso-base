import type {Metadata} from 'next';
import {Mansalva, Mali} from 'next/font/google';
import './globals.css';
import clsx from 'clsx';

const font = Mansalva({
  weight: ['400'],
  subsets: ['latin'],
});

const maliFont = Mali({
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--mali-font',
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
      <body className={clsx(font.className, maliFont.variable)}>
        {children}
      </body>
    </html>
  );
}
