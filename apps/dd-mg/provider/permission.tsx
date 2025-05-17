// app/providers/wallet-provider.tsx
'use client';
import useAppRoutes from '@/config/router';
import { useRouter } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react';
import { useAccount } from 'wagmi';

type PermissionContextType = {};

const PermissionContext = createContext<PermissionContextType | undefined>(
  undefined
);

export function PermissionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isConnected } = useAccount();

  const router = useRouter();

  const { currentRoute } = useAppRoutes();

  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    if (isConnected) {
      return;
    }
    console.log('redicret=====');
    router.replace('/');
  }, [isConnected, router]);

  useEffect(() => {
    setIsEmpty(!currentRoute);
  }, [setIsEmpty, currentRoute]);

  return (
    <PermissionContext.Provider value={{}}>
      {isEmpty ? <></> : children}
    </PermissionContext.Provider>
  );
}

export const usePermission = () => {
  const context = useContext(PermissionContext);
  if (!context) throw new Error('useWallet must be used inside WalletProvider');
  return context;
};
