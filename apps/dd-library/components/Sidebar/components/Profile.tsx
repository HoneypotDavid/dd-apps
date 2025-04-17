'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from 'next/image';

import { useAccount } from 'wagmi';

export default function Profile() {
  const { address } = useAccount();

  console.log('address', address);

  return (
    <div className="profile-container h-[70px] flex items-center pr-[16px] pl-[16px] mt-[16px]">
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          authenticationStatus,
          mounted,
        }) => {
          // Note: If your app doesn't use authentication, you
          // can remove all 'authenticationStatus' checks
          const ready = mounted && authenticationStatus !== 'loading';
          const connected =
            ready &&
            account &&
            chain &&
            (!authenticationStatus || authenticationStatus === 'authenticated');

          return (
            <div
              className="connect-button w-full"
              {...(!ready && {
                'aria-hidden': true,
                style: {
                  opacity: 0,
                  pointerEvents: 'none',
                  userSelect: 'none',
                  width: '100%',
                },
              })}
            >
              {(() => {
                if (!connected) {
                  return (
                    <button
                      onClick={openConnectModal}
                      type="button"
                      className="w-full  text-[var(--dd-text-color-0)]
                      bg-[var(--dd-section-bg-3)] h-[36px] 
                      rounded-[6px]"
                      style={{
                        background: 'var(--dd-color-primary)',
                        color: '#ffffff',
                      }}
                    >
                      Connect Wallet
                    </button>
                  );
                }

                if (chain.unsupported) {
                  return (
                    <button
                      onClick={openChainModal}
                      type="button"
                      className="w-full text-[var(--dd-text-color-1)] 
                    bg-[var(--dd-function-red)] h-[36px] 
                    rounded-[6px]"
                    >
                      Wrong network
                    </button>
                  );
                }

                console.log('chain', chain);

                return (
                  <div style={{ display: 'flex', gap: 12 }}>
                    <button
                      onClick={openAccountModal}
                      type="button"
                      className="w-full text-[var(--dd-text-color-0)] 
                      bg-[var(--dd-color-primary)] h-[36px] 
                      rounded-[6px] flex items-center justify-between
                      pl-[6px] gap-x-[6px] overflow-hidden"
                    >
                      <div className="flex-shrink-0 text-[14px] font-bold">
                        ${account.displayBalance}
                      </div>
                      <div
                        className="flex-1 text-left leading-[36px]"
                        style={{
                          textWrap: 'nowrap',
                          overflow: 'hidden',
                          whiteSpace: 'nowrap',
                          background: 'var(--dd-color-primary-hover)',
                          paddingLeft: '6px',
                          paddingRight: '6px',
                          fontSize: '14px',
                          fontWeight: '500',
                          textAlign: 'center',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}
                      >
                        {account.displayName}
                      </div>
                    </button>
                  </div>
                );
              })()}
            </div>
          );
        }}
      </ConnectButton.Custom>
    </div>
  );
}
