import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import { allRoutes, RouteItem } from './constants';
import { usePathname } from 'next/navigation';

const useAppRoutes = () => {
  const { isConnected } = useAccount();

  const pathName = usePathname();

  const [routes, setRoutes] = useState<RouteItem[]>([]);

  const [currentRoute, setCurrentRoute] = useState<RouteItem | null>();

  useEffect(() => {
    const list = allRoutes.filter((route) => {
      return isConnected ? true : !route.private;
    });
    setRoutes(list);
  }, [isConnected]);

  useEffect(() => {
    const current = routes.find(
      (item) => item.href === pathName || item.alias_path?.includes(pathName)
    );
    setCurrentRoute(current || null);
  }, [currentRoute, routes, pathName]);

  return {
    routes,
    currentRoute,
  };
};

export default useAppRoutes;
