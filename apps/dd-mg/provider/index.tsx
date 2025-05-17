'use client';

import { config } from '@/config/wagmi/config';
import { darkTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import React from 'react';
import { ThemeProvider } from './theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retryDelay: 1000,
      retry: 12,
      gcTime: 1000 * 60,
      staleTime: 1000 * 5,
    },
  },
});

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider locale="en-US" theme={darkTheme()}>
            {children}
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </ThemeProvider>
  );
}
