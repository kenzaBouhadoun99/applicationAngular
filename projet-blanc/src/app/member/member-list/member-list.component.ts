import {Component, inject} from '@angular/core';
import {MatTable} from '@angular/material/table';
import {MemberService} from '../../services/member.service';

@Component({
  selector: 'app-member-list',
  imports: [
    MatTable
  ],
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.scss'
})
export class MemberListComponent {
  protected memberService = inject(MemberService);

}
