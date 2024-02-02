import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import PowerPlant from './power-plant';
import PowerPlantDetail from './power-plant-detail';
import PowerPlantUpdate from './power-plant-update';
import PowerPlantDeleteDialog from './power-plant-delete-dialog';

const PowerPlantRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<PowerPlant />} />
    <Route path="new" element={<PowerPlantUpdate />} />
    <Route path=":id">
      <Route index element={<PowerPlantDetail />} />
      <Route path="edit" element={<PowerPlantUpdate />} />
      <Route path="delete" element={<PowerPlantDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default PowerPlantRoutes;
