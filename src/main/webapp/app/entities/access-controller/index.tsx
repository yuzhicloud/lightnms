import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import AccessController from './access-controller';
import AccessControllerDetail from './access-controller-detail';
import AccessControllerUpdate from './access-controller-update';
import AccessControllerDeleteDialog from './access-controller-delete-dialog';

const AccessControllerRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<AccessController />} />
    <Route path="new" element={<AccessControllerUpdate />} />
    <Route path=":id">
      <Route index element={<AccessControllerDetail />} />
      <Route path="edit" element={<AccessControllerUpdate />} />
      <Route path="delete" element={<AccessControllerDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default AccessControllerRoutes;
