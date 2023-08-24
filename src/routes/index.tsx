import {
  ReactNode,
} from 'react'
import {
  Navigate,
} from 'react-router-dom'
import { Menu } from '@/pages';


export interface RouteItem {
  id: string;
  element: ReactNode;
  path: string;
  redirect?: string,
  text?: string;
  icon?: ReactNode;
  permissions?: string[];
}

export const routes: Array<RouteItem> = [
  {
    id: 'home',
    element: <Navigate to="/menu" />,
    path: '/',
  },
  {
    id: 'menu',
    element: <Menu />,
    path: 'menu',
  },
  {
    id: 'not-found',
    path: '*',
    element: <Navigate to="/menu" />,
  },
]