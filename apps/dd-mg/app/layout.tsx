import '@rainbow-me/rainbowkit/styles.css';
import '@dd-styles';
import Provider from '@/provider/index';
import Layout from '../components/Layout/Layout';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <Layout>{children}</Layout>
        </Provider>
      </body>
    </html>
  );
}
