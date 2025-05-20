import { CalendarIcon } from 'lucide-react';
import { Button } from './button';
import { Popover, PopoverTrigger, PopoverContent } from './popover';
import { cn } from '@dd-shared/ui/lib/utils';
import { format } from 'date-fns';
import { Calendar } from './calendar';
import { SelectSingleEventHandler } from 'react-day-picker';
import { useState } from 'react';

export default function DatePicker({
  value,
  onSelect,
  className,
  disabled = false,
}: {
  value?: Date | undefined;
  onSelect: SelectSingleEventHandler;
  className?: string;
  disabled?: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[280px] justify-start text-left font-normal',
            !value && 'text-muted-foreground',
            className
          )}
          disabled={disabled}
        >
          <CalendarIcon />
          {value ? format(value, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={value}
          onSelect={(...args) => {
            onSelect(...args);
            setOpen(false);
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
