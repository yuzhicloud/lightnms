import { IPowerPlant } from 'app/shared/model/power-plant.model';

export interface IProvince {
  id?: number;
  provinceCode?: number | null;
  provinceName?: string | null;
  provinces?: IPowerPlant[] | null;
}

export const defaultValue: Readonly<IProvince> = {};
