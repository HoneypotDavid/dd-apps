export interface RouterItem {
  name: string;
  href: string;
  icon: string;
  size: number;
}

const useAppRoutes = () => {
  const routers: RouterItem[] = [
    {
      name: 'Guild Hall',
      href: '/hall',
      icon: 'map:city-hall',
      size: 22,
    },
    {
      name: 'My Tasks',
      href: '/myTasks',
      icon: 'fluent:task-list-square-sparkle-16-regular',
      size: 22,
    },
    {
      name: 'Publish Task',
      href: '/publish',
      icon: 'material-symbols:post-add',
      size: 22,
    },
  ];

  return {
    routers,
  };
};

export default useAppRoutes;
