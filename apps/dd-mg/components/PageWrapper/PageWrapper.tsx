import useAppRoutes from '@/config/router';
import { useAccount } from 'wagmi';
import CustomConnect from '../ConnectButton/CustomConnect';
import { Icon } from '@dd-shared/components';

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isConnected, status } = useAccount();

  const { currentRoute } = useAppRoutes();

  if (!currentRoute || status === 'connecting' || status === 'reconnecting') {
    return <></>;
  }

  if (currentRoute.private && !isConnected) {
    return (
      <div className="flex flex-col  items-center justify-center border-[var(--dd-line-bg-1)] border-2 border-dashed rounded-md w-[80%] mx-[auto] mt-[100px] px-[24px] py-[48px]">
        <Icon
          icon="mdi:security-lock-outline"
          width="60"
          height="60"
          color="var(--dd-color-primary)"
        />
        <div className="h-[80px] flex items-center justify-center font-500 text-[var(--dd-text--color1)]">
          Wallet Connection Required
        </div>

        <div className="text-[var(--dd-text-color-2)] text-[14px] text-center mb-[24px] w-[400px]">
          To view this page, you need to connect your wallet.
        </div>

        <div className="w-[350px]">
          <CustomConnect />
        </div>
      </div>
    );
  }

  return <div className="flex flex-col">{children}</div>;
}
