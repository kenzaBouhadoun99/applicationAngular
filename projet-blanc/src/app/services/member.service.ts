import {Injectable, signal} from '@angular/core';
import {Member} from '../models/member.model';
import {Role} from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private members = signal<Member[]>([

    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      birthday: new Date(1990, 4, 15),
      email: 'john.doe@example.com',
      role: Role.User
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      birthday: new Date(1985, 2, 22),
      email: 'jane.smith@example.com',
      role: Role.User
    },
    {
      id: 3,
      firstName: 'Emily',
      lastName: 'Johnson',
      birthday: new Date(1992, 6, 9),
      email: 'emily.johnson@example.com',
      role: Role.Admin
    },
    {
      id: 4,
      firstName: 'Michael',
      lastName: 'Brown',
      birthday: new Date(1978, 10, 30),
      email: 'michael.brown@example.com',
      role: Role.Admin
    },
    {
      id: 5,
      firstName: 'Sarah',
      lastName: 'Wilson',
      birthday: new Date(2000, 11, 12),
      email: 'sarah.wilson@example.com',
      role: Role.User
    }
  ]);

  constructor() { }

  getAll() {
    return this.members.asReadonly();
  }

  get(id: number) {
    return this.members().find(member => member.id === id);
  }

  create(data: Member) {
    if (data === undefined || data === null) {
      console.error("Invalid data provided to create method");
      return false;
    }
    this.members.update(member => [...member, data]);
    return true;
  }

  delete(id: number) {
    const updatedMembers = this.members().filter(member => member.id !== id);
    this.members.set(updatedMembers);
  }

}
