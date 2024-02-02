import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import AccessPointGroup from './access-point-group';
import AccessPointGroupDetail from './access-point-group-detail';
import AccessPointGroupUpdate from './access-point-group-update';
import AccessPointGroupDeleteDialog from './access-point-group-delete-dialog';

const AccessPointGroupRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<AccessPointGroup />} />
    <Route path="new" element={<AccessPointGroupUpdate />} />
    <Route path=":id">
      <Route index element={<AccessPointGroupDetail />} />
      <Route path="edit" element={<AccessPointGroupUpdate />} />
      <Route path="delete" element={<AccessPointGroupDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default AccessPointGroupRoutes;
