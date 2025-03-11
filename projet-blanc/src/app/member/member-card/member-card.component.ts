import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Member } from '../../models/member.model';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-member-card',
  standalone: true,
  imports: [
    MatCardModule,
    RouterLink,
    MatButton,
    CommonModule
  ],
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss']
})
export class MemberCardComponent {
  @Input() member!: Member;
  @Output() deleteMember = new EventEmitter<number>(); // <-- Événement pour la suppression
  isExpanded = false;

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }

  onDelete() {
      this.deleteMember.emit(this.member.id); // <-- Émet l'ID du membre à supprimer
  }
}
