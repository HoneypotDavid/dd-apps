import '@rainbow-me/rainbowkit/styles.css';
import './global.css';
import MainLayout from '@/components/MainLayout/index';
import { config } from '@/components/wagmi/config';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

export const metadata = {
  title: 'Welcome to dd-library',
  description: 'A shared library in Web3 world',
};

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider locale="en-US">
              <MainLayout>{children}</MainLayout>
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </body>
    </html>
  );
}
