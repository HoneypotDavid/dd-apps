export interface RouteItem {
  name: string;
  href: string;
  icon: string;
  size: number;
  private: boolean;
  alias_path?: string[];
}

export const allRoutes: RouteItem[] = [
  {
    name: 'Guild Hall',
    href: '/hall',
    icon: 'map:city-hall',
    size: 20,
    alias_path: ['/'],
    private: false,
  },
  {
    name: 'My Tasks',
    href: '/myTasks',
    icon: 'fluent:task-list-square-sparkle-16-regular',
    size: 20,
    private: true,
  },
  {
    name: 'Publish Task',
    href: '/publish',
    icon: 'material-symbols:post-add',
    size: 20,
    private: true,
  },
];
