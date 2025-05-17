'use client';
import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@dd-shared/components';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import dayjs from 'dayjs';

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

      <div className="publish-form shadow-[0_0_1px_rgb(var(--dd-line-bg-1)/100%)_inset] rounded-[4px] min-h-[300px] bg-[var(--dd-section-bg-1)] mt-[23px] p-[20px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Your task in short words" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
