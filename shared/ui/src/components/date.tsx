// import { CalendarIcon } from 'lucide-react';
// import { Button } from './button';
// import { Popover, PopoverTrigger, PopoverContent } from './popover';
// import { cn } from '@dd-shared/ui/lib/utils';
// import { format } from 'date-fns';
// import { Calendar } from './calendar';
// import { SelectSingleEventHandler } from 'react-day-picker';

// export default function DatePicker({
//   value,
//   onSelect,
// }: {
//   value?: Date | undefined;
//   onSelect: SelectSingleEventHandler;
// }) {
//   return (
//     <Popover>
//       <PopoverTrigger asChild>
//         <Button
//           variant={'outline'}
//           className={cn(
//             'w-[280px] justify-start text-left font-normal',
//             !value && 'text-muted-foreground'
//           )}
//         >
//           <CalendarIcon />
//           {value ? format(value, 'PPP') : <span>Pick a date</span>}
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent className="w-auto p-0">
//         <Calendar
//           mode="single"
//           selected={value}
//           onSelect={onSelect}
//           initialFocus
//         />
//       </PopoverContent>
//     </Popover>
//   );
// }

export default function DatePicker() {
  return <div>DatePicker</div>;
}
