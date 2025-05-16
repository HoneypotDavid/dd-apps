'use client';
import { Button, Input } from '@dd-apps/ui';
import { z } from 'zod';

// Step 1: 定义校验 schema
const formSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  due_date: z.date().min(new Date(), 'Due date must be in the future'),
  reward: z.number().min(0.1, 'Reward is required'),
});

export default function Publish() {
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
        <div className="form-item">
          <div className="dd-label-1 mb-[8px]">Task Title</div>
          <Input />
          <Button>Publish</Button>
        </div>
      </div>
    </div>
  );
}
