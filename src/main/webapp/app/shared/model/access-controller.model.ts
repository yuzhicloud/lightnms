import { IAccessPoint } from 'app/shared/model/access-point.model';
import { IAccessPointGroup } from 'app/shared/model/access-point-group.model';

export interface IAccessController {
  id?: number;
  nedn?: string | null;
  neid?: number | null;
  aliasname?: string | null;
  nename?: string | null;
  necategory?: string | null;
  netype?: string | null;
  nevendorname?: string | null;
  neesn?: string | null;
  neip?: string | null;
  nemac?: string | null;
  version?: string | null;
  nestate?: number | null;
  createtime?: string | null;
  neiptype?: number | null;
  subnet?: string | null;
  neosversion?: string | null;
  accessPoints?: IAccessPoint[] | null;
  accessPointGroups?: IAccessPointGroup[] | null;
}

export const defaultValue: Readonly<IAccessController> = {};
