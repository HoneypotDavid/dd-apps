import * as React from 'react';

import { cn } from '@dd-shared/ui/lib/utils';

function Textarea({
  className,
  showCount = false,
  ...props
}: React.ComponentProps<'textarea'> & { showCount?: boolean }) {
  const value = props.value as string;

  return (
    <div className="relative w-full">
      <textarea
        data-slot="textarea"
        className={cn(
          'border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          className
        )}
        {...props}
      />
      {showCount && (
        <div className="text-sm text-[var(--dd-text-color-3)] absolute bottom-[-26px] right-[6px]">
          {value.length || 0} / {props.maxLength}
        </div>
      )}
    </div>
  );
}

export { Textarea };
