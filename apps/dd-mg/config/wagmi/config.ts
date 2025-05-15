import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { ethernity } from 'viem/chains';
import { Config } from 'wagmi';

export const config: Config = getDefaultConfig({
  appName: 'dd-mg',
  projectId: '1a79a7a43f73cb909bb679f5b41b8fbf',
  chains: [ethernity],
  ssr: true, // If your dApp uses server side rendering (SSR)
});
