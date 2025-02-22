import { Routes } from '@angular/router';
import {MemberListComponent} from './member/member-list/member-list.component';
import {routes as memberRoutes} from './member/member.routes';
import {NotFoundComponent} from './shared/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: MemberListComponent
  },
  {
    path: 'member',
    children: memberRoutes
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
