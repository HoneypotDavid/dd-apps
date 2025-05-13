import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { ethernity } from 'viem/chains';
import { Config } from 'wagmi';

export const config: Config = getDefaultConfig({
  appName: 'dd-library',
  projectId: 'e6d817dc960e1d6105c32da0137365c1',
  chains: [ethernity],
  ssr: true, // If your dApp uses server side rendering (SSR)
});
