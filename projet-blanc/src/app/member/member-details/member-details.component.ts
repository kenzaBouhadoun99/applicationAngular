import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from '../../services/member.service';
import { Member } from '../../models/member.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';  
import { MatOptionModule } from '@angular/material/core'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';  


@Component({
  selector: 'app-member-details',
  standalone: true,  // Important si c'est un composant autonome
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,   // Assure-toi que MatCardModule est bien ici
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    RouterModule,
    RouterModule
  ],
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.scss']
})
export class MemberDetailsComponent implements OnInit {
  member!: Member;

  constructor(
    private memberService: MemberService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const memberId = +this.route.snapshot.paramMap.get('id')!;
    this.member = this.memberService.get(memberId)!;
    if (!this.member) {
      console.error('Membre non trouvé');
    }
  }
  
  onDelete() {
    this.memberService.delete(this.member.id);
    this.router.navigate(['/member']); // Redirige sans demander de confirmation
  }
  
}
