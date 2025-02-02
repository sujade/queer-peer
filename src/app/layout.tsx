'use client';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import '@fontsource/atkinson-hyperlegible/latin.css';
import '@fontsource/atkinson-hyperlegible/latin-italic.css';
import NavigationBar from '@/Components/General/NavigationBar';
import Footer from '@/Components/General/Footer';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='de'>
      <body>
        <NavigationBar />
        {children} <Footer />
      </body>
    </html>
  );
}
