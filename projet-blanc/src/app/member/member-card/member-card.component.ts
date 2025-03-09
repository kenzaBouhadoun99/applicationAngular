import {Component, input} from '@angular/core';
import {Member} from '../../models/member.model';
import {MatCardModule} from '@angular/material/card';
import {RouterLink} from '@angular/router';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-member-card',
  imports: [
    MatCardModule,
    RouterLink,
    MatButton
  ],
  templateUrl: './member-card.component.html',
  styleUrl: './member-card.component.scss'
})
export class MemberCardComponent {

  member = input.required<Member>();

}
