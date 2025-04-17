import '@rainbow-me/rainbowkit/styles.css';
import '@/styles/global.css';
import '@/styles/variable.css';
import MainLayout from '@/components/MainLayout/index';
import Provider from '@/components/Provider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <MainLayout>{children}</MainLayout>
        </Provider>
      </body>
    </html>
  );
}
