import { Icon } from '@dd-shared/components';

export default function Logo() {
  return (
    <div>
      <div className="w-[250px] flex items-center gap-x-[12px]">
        <Icon icon="local-svg:mg" color="red" width={40} height={40} />
        <div>
          <div className="text-[20px] font-bold text-[var(--dd-text-color-1)]">
            DD M.G
          </div>
          <div className="text-[12px] text-[var(--dd-text-color-2)] ">
            The mercenary guild for web3
          </div>
        </div>
      </div>
    </div>
  );
}
