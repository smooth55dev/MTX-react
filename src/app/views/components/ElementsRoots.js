import { lazy } from 'react';
import Loadable from 'app/components/Loadable';

const SellerManageGrid = Loadable(lazy(() => import('./fulltable/SellerManageGrid')));
const Htmleditor = Loadable(lazy(() => import('./htmleditor/Htmleditor')));

const ElementRoots = [
  { path: '/fulltable', element: <SellerManageGrid /> },
  { path: '/htmleditor', element: <Htmleditor /> }
];

export default ElementRoots;
