'use client';
import {
  Button,
  Calendar,
  cn,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Icon,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from '@dd-shared/components';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import dayjs from 'dayjs';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';

// Step 1: 定义校验 schema
const formSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  due_date: z.date().min(new Date(), 'Due date must be in the future'),
  reward: z.number().min(0.1, 'Reward is required'),
});

export default function Publish() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      due_date: dayjs().add(1, 'month').toDate(),
      reward: 1,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="p-[24px] box-border">
      <div className="publish-header ">
        <div className="title text-[var(--dd-text-color-1)] text-[22px] font-500">
          Post a task
        </div>
        <div className="desc text-[var(--dd-text-color-2)] text-[14px] font-400">
          Detail the task you need completed. The more information you provide,
          the better mercenaries you wil attract.
        </div>
      </div>

      <div className="publish-form shadow-[0_0_1px_rgb(var(--dd-line-bg-1)/100%)_inset] rounded-[4px] min-h-[300px] bg-[var(--dd-section-bg-1)] mt-[23px] p-[20px] w-[100%]">
        <div className="max-w-[600px]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Task Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. Build a wev3 apps"
                        {...field}
                        className="border-[var(--dd-line-bg-2)]"
                      />
                    </FormControl>
                    <FormDescription>
                      A clear and concise title for your task.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="mt-[40px]">
                    <FormLabel>Task Description</FormLabel>
                    <FormControl>
                      <div className="w-[600px]">
                        <Textarea
                          showCount={true}
                          rows={20}
                          placeholder="Provide detailed requirements, deliverables, and any other relevant information"
                          {...field}
                          className="border-[var(--dd-line-bg-2)] h-[150px] scrollbar"
                          maxLength={5000}
                        />
                      </div>
                    </FormControl>
                    <FormDescription>
                      Be as specific as possible to attract the right
                      mercenaries.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center gap-[20px] mt-[40px]">
                <FormField
                  control={form.control}
                  name="due_date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Due Date</FormLabel>
                      <FormControl>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={'outline'}
                                className={cn(
                                  'w-[240px] pl-3  font-normal',
                                  !field.value && 'text-muted-foreground',
                                  'flex items-center justify-start'
                                )}
                              >
                                <CalendarIcon className="h-4 w-4 opacity-50" />
                                {field.value ? (
                                  format(field.value, 'PPP')
                                ) : (
                                  <span>Pick a date</span>
                                )}
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) => date < new Date()}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </FormControl>
                      <FormDescription>
                        A clear and concise title for your task.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <Icon
                          icon="token:usdd"
                          width="20"
                          height="20"
                          color="rgb(234,179,8)"
                        />
                        Reward Amount (USDT)
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min={0.1}
                          placeholder="The amount of USDT to reward the mercenary"
                          {...field}
                          className="border-[var(--dd-line-bg-2)] w-[290px]"
                        />
                      </FormControl>
                      <FormDescription>0.1 USDT or more</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
