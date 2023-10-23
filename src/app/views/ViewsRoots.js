import { lazy } from 'react';
import Loadable from 'app/components/Loadable';

// const SellerManageGrid = Loadable(lazy(() => import('./fulltable/SellerManageGrid')));
const UserList = Loadable(lazy(() => import('./manageuser/managelist/UserList')));

const ViewsRoots = [
  { path: '/manageuser/userlist', element: <UserList /> },
];

export default ViewsRoots;
