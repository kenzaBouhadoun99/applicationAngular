import { Component, inject, OnInit, computed } from '@angular/core';
import { MemberService } from '../../services/member.service';
import { MemberCardComponent } from '../member-card/member-card.component';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { Member } from '../../models/member.model';

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
  protected readonly memberService = inject(MemberService);
  private readonly router = inject(Router);
  
  // Utilisation de computed() pour réagir aux changements
  members = computed(() => this.memberService.members());

  ngOnInit() {
    this.memberService.getAll(); // Charger les membres au démarrage
  }

  deleteMember(id: number) {
    if (confirm('Voulez-vous vraiment supprimer ce membre ?')) {
      this.memberService.delete(id);
    }
  }

  navigateToAddMember() {
    this.router.navigate(['/member/create']);
  }
}
