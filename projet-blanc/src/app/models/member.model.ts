import {Role} from './role';

export interface Member {
  id: number;
  firstName: string;
  lastName: string;
  birthday: Date;
  email: string;
  role: Role;
}
