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
  Icon,
  Input,
  Label,
  RadioGroup,
  RadioGroupItem,
  Textarea,
} from '@dd-shared/components';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import dayjs from 'dayjs';
import DatePicker from '@dd-shared/ui/components/date';

const enum Visibility {
  PUBLIC = 'public',
  PRIVATE = 'private',
}

const visibilityOptions = [
  { label: 'Public', value: Visibility.PUBLIC, icon: 'solar:global-outline' },
  {
    label: 'Private',
    value: Visibility.PRIVATE,
    icon: 'material-symbols:lock-outline',
  },
];

// Step 1: 定义校验 schema
const formSchema = z.object({
  title: z.string().min(1, 'Please enter a title'),
  description: z.string().min(1, 'Please enter a description'),
  due_date: z.date().min(new Date(), 'Please select a due date'),
  reward: z
    .number()
    .refine((val) => val > 0, 'Please enter a greater than 0 reward amount'),
  visibility: z.string().min(1, 'Visibility is required'),
});

export default function Publish() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      due_date: dayjs().add(1, 'month').toDate(),
      reward: 1,
      visibility: 'public',
    },
  });

  const { setValue, watch } = form;

  const visibility = watch('visibility');

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
          Publish a task
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

              <div className="flex items-start gap-[20px] mt-[40px]">
                <FormField
                  control={form.control}
                  name="due_date"
                  render={({ field }) => (
                    <FormItem className="w-[290px]">
                      <FormLabel className="h-[22px]">Due Date</FormLabel>
                      <FormControl>
                        <DatePicker
                          className="w-[100%] border-[1px]! border-solid! border-[var(--dd-line-bg-2)]!"
                          value={field.value}
                          onSelect={field.onChange}
                        />
                      </FormControl>
                      <FormDescription>
                        The end time of the task.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="reward"
                  render={({ field }) => (
                    <FormItem className="w-[290px]">
                      <FormLabel className="h-[22px]">
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
                          placeholder="The amount of USDT to reward the mercenary"
                          {...field}
                          className="border-[var(--dd-line-bg-2)] w-[290px]"
                          onChange={(e) => {
                            const value = e.target.value;
                            setValue('reward', Number(value));
                          }}
                        />
                      </FormControl>
                      <FormDescription>
                        The minimum amount is 0.1 USDT.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex items-start gap-[20px] mt-[40px]">
                <FormField
                  control={form.control}
                  name="visibility"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Task visibility</FormLabel>
                      <FormControl>
                        <RadioGroup
                          defaultValue={field.value}
                          className="flex gap-x-[20px]"
                          onValueChange={field.onChange}
                        >
                          {visibilityOptions.map((item) => {
                            return (
                              <div
                                key={item.value}
                                className="flex items-center space-x-2 h-[30px]"
                              >
                                <RadioGroupItem
                                  value={item.value}
                                  id={item.value}
                                  className="border-[var(--dd-line-bg-2)]"
                                />
                                <div className="flex items-center gap-x-[6px]">
                                  <Icon
                                    icon={item.icon}
                                    width="16"
                                    height="16"
                                    color="var(--dd-text-color-1)"
                                  />
                                  <Label htmlFor={item.value}>
                                    {item.label}
                                  </Label>
                                </div>
                              </div>
                            );
                          })}
                        </RadioGroup>
                      </FormControl>
                      <FormDescription>
                        {visibility === Visibility.PUBLIC ? (
                          <span>The task will be visible to everyone.</span>
                        ) : (
                          <span>
                            The task will be visible to only you or the people
                            you invite.
                          </span>
                        )}
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button
                type="submit"
                className="bg-[var(--dd-color-primary)] hover:bg-[var(--dd-color-primary-hover)]"
              >
                <Icon
                  icon="material-symbols:add-rounded"
                  width="24"
                  height="24"
                  className="text-[var(--dd-text-color-1)]"
                />
                <span className="text-[14px] font-500 text-[var(--dd-text-color-1)]">
                  Publish Task
                </span>
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
