import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import AccessController from './access-controller';
import AccessPoint from './access-point';
import AccessPointGroup from './access-point-group';
import PowerPlant from './power-plant';
import Province from './province';
/* jhipster-needle-add-route-import - JHipster will add routes here */

export default () => {
  return (
    <div>
      <ErrorBoundaryRoutes>
        {/* prettier-ignore */}
        <Route path="access-controller/*" element={<AccessController />} />
        <Route path="access-point/*" element={<AccessPoint />} />
        <Route path="access-point-group/*" element={<AccessPointGroup />} />
        <Route path="power-plant/*" element={<PowerPlant />} />
        <Route path="province/*" element={<Province />} />
        {/* jhipster-needle-add-route-path - JHipster will add routes here */}
      </ErrorBoundaryRoutes>
    </div>
  );
};
