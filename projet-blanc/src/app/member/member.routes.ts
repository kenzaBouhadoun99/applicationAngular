import {Routes} from '@angular/router';
import {MemberListComponent} from './member-list/member-list.component';
import {NewMemberComponent} from './new-member/new-member.component';
import {MemberDetailsComponent} from './member-details/member-details.component';

export const routes: Routes = [
  {
    path: '',
    component: MemberListComponent
  },
  {
    path: 'create',
    component: NewMemberComponent
  },
  {
    path: ':id',
    component: MemberDetailsComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
