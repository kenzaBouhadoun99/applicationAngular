import {Component, inject, OnInit} from '@angular/core';
import {MemberService} from '../../services/member.service';
import {MemberCardComponent} from '../member-card/member-card.component';
import {RouterLink} from '@angular/router';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-member-list',
  imports: [
    MemberCardComponent,
    RouterLink,
    MatButton
  ],
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.scss'
})
export class MemberListComponent implements OnInit {
  protected readonly memberService= inject(MemberService);

  ngOnInit() {
    this.memberService.getAll();
  }

}
