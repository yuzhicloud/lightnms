import { IPowerPlant } from 'app/shared/model/power-plant.model';
import { IAccessPoint } from 'app/shared/model/access-point.model';
import { IAccessController } from 'app/shared/model/access-controller.model';

export interface IAccessPointGroup {
  id?: number;
  apgId?: number | null;
  name?: string;
  powerPlant?: IPowerPlant | null;
  accessPoints?: IAccessPoint[] | null;
  controller?: IAccessController | null;
}

export const defaultValue: Readonly<IAccessPointGroup> = {};
