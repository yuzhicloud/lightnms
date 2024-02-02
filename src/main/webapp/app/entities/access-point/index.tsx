import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import AccessPoint from './access-point';
import AccessPointDetail from './access-point-detail';
import AccessPointUpdate from './access-point-update';
import AccessPointDeleteDialog from './access-point-delete-dialog';

const AccessPointRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<AccessPoint />} />
    <Route path="new" element={<AccessPointUpdate />} />
    <Route path=":id">
      <Route index element={<AccessPointDetail />} />
      <Route path="edit" element={<AccessPointUpdate />} />
      <Route path="delete" element={<AccessPointDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default AccessPointRoutes;
