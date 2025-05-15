import '@rainbow-me/rainbowkit/styles.css';
import '../styles/global.css';
import '../styles/variable.css';
import Provider from '@/components/Layout/index';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
