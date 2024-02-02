import { IAccessPointGroup } from 'app/shared/model/access-point-group.model';
import { IProvince } from 'app/shared/model/province.model';

export interface IPowerPlant {
  id?: number;
  powerPlantId?: number | null;
  powerPlantName?: string | null;
  accessPointGroup?: IAccessPointGroup | null;
  powerPlant?: IProvince | null;
}

export const defaultValue: Readonly<IPowerPlant> = {};
