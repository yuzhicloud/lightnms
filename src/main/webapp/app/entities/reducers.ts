import accessController from 'app/entities/access-controller/access-controller.reducer';
import accessPoint from 'app/entities/access-point/access-point.reducer';
import accessPointGroup from 'app/entities/access-point-group/access-point-group.reducer';
import powerPlant from 'app/entities/power-plant/power-plant.reducer';
import province from 'app/entities/province/province.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

const entitiesReducers = {
  accessController,
  accessPoint,
  accessPointGroup,
  powerPlant,
  province,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
};

export default entitiesReducers;
