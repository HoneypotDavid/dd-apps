import '@rainbow-me/rainbowkit/styles.css';
import '@dd-styles';

import Provider from '@/provider/index';
import Layout from '../components/Layout/Layout';
import RouteProgress from '@dd-shared/ui/components/nprogress';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <RouteProgress />
        <Provider>
          <Layout>{children}</Layout>
        </Provider>
      </body>
    </html>
  );
}
