import { Icon } from '@dd-shared/components';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
export default function CustomConnect({ miniSize }: { miniSize?: boolean }) {
  const { isConnected } = useAccount();

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }: any) => {
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
                boxSizing: 'border-box',
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
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                    }}
                  >
                    <Icon icon="mingcute:wallet-line" width="24" height="24" />
                    <span>Connect Wallet</span>
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

              if (isConnected && miniSize) {
                return (
                  <div style={{ display: 'flex', gap: 12 }}>
                    <button
                      onClick={openAccountModal}
                      type="button"
                      className="w-full text-[#fff] 
                        bg-[var(--dd-color-primary)] h-[36px] 
                        rounded-[6px] flex items-center justify-between
                        pl-[6px] gap-x-[6px] overflow-hidden
                        box-border"
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
                          paddingRight: '12px',
                          fontSize: '14px',
                          fontWeight: '500',
                          textAlign: 'center',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}
                      >
                        <span>{account.displayName}</span>
                        <Icon
                          icon="mingcute:exit-line"
                          width="18"
                          height="18"
                          color="var(--dd-text-color-1)"
                        />
                      </div>
                    </button>
                  </div>
                );
              }

              return null;
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}
