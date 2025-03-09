import { Routes } from '@angular/router';
import {MemberListComponent} from './member/member-list/member-list.component';
import {routes as memberRoutes} from './member/member.routes';
import {NotFoundComponent} from './shared/not-found/not-found.component';
import {MemberComponent} from './member/member.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'member',
    pathMatch: 'full'
  },
  {
    path: 'member',
    children: memberRoutes,
    component: MemberComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
