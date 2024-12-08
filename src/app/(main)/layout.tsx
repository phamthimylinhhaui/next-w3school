import Header from '@/components/Header';
import ThemeRegistry from '@/components/ThemeRegistry';

export const metadata = {
  title: 'W3School Learning Platform',
  description: 'Learn coding with interactive courses and challenges',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Header />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
