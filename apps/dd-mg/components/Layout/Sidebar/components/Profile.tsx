'use client';

import { Icon } from '@dd-shared/components';
import { ConnectButton, useAccountModal } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

import { useState, useEffect } from 'react';
import { emojiAvatarForAddress } from '@dd-shared/ui/lib/emoji';
import CustomConnect from '@/components/ConnectButton/CustomConnect';
export default function Profile({ open }: { open: boolean }) {
  const { address, isConnected } = useAccount();
  const { openAccountModal } = useAccountModal();

  const [backgroundColor, setBackgroundColor] = useState<string | null>(null);
  const [emoji, setEmoji] = useState<string | null>(null);

  useEffect(() => {
    if (!address || !isConnected) {
      return;
    }
    const { color: backgroundColor, emoji } = emojiAvatarForAddress(
      address as string
    );
    setBackgroundColor(backgroundColor);
    setEmoji(emoji);
  }, [address, isConnected]);

  return (
    <div className="h-[140px]  pt-[26px] pb-[26px] mt-[16px] border-t-[1px] border-solid border-[var(--dd-line-bg-2)] w-full box-border !px-[14px] flex flex-col justify-center">
      {isConnected && open && (
        <div className="h-[40px] flex items-center gap-x-[6px] text-[var(--dd-text-color-1)] text-[14px] mb-[16px]">
          {backgroundColor && emoji ? (
            <div className="w-[32px] h-[32px] rounded-[50%] bg-[var(--dd-color-primary)] flex items-center justify-center flex-shrink-0">
              <span className="text-[20px]">{emoji}</span>
            </div>
          ) : (
            <Icon
              icon="radix-icons:avatar"
              width="32"
              height="32"
              color="var(--dd-text-color-1)"
            />
          )}
          <span className="flex-1">Connected</span>
          <Icon
            className="cursor-pointer"
            icon="solar:copy-linear"
            width="18"
            height="18"
            onClick={(e) => {
              e.stopPropagation();
              navigator.clipboard.writeText(address as string);
            }}
          />
        </div>
      )}

      {isConnected && !open && (
        <div className="text-[var(--dd-text-color-1)] text-[14px] mb-[16px]">
          {backgroundColor && emoji ? (
            <div
              className="w-[32px] h-[32px] rounded-[50%] bg-[var(--dd-color-primary)] flex items-center justify-center cursor-pointer"
              onClick={() => openAccountModal?.()}
            >
              <span className="text-[20px]">{emoji}</span>
            </div>
          ) : (
            <Icon
              icon="radix-icons:avatar"
              width="32"
              height="32"
              color="var(--dd-text-color-1)"
              className="cursor-pointer"
              onClick={() => openAccountModal?.()}
            />
          )}
        </div>
      )}

      <CustomConnect miniSize={open} />
    </div>
  );
}
