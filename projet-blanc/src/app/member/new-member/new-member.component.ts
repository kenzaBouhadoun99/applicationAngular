import { Component } from '@angular/core';
import { Member } from '../../models/member.model';
import { MemberService } from '../../services/member.service';
import { Router } from '@angular/router';
import { Role } from '../../models/role';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';  
import { MatOptionModule } from '@angular/material/core'; // Importez MatOptionModule ici
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';  // Ajoutez CommonModule

@Component({
  selector: 'app-new-member',
  standalone: true,
  imports: [
    CommonModule,           // Import de CommonModule pour utiliser ngFor
    FormsModule,            // ✅ Pour utiliser ngForm
    ReactiveFormsModule,    // ✅ Pour les formulaires réactifs
    MatCardModule,          
    MatButtonModule,        
    MatInputModule,
    MatSelectModule,        
    MatOptionModule         // Ajoutez MatOptionModule pour le mat-option
  ],
  templateUrl: './new-member.component.html',
  styleUrl: './new-member.component.scss'
})
export class NewMemberComponent {
  member: Member = {
    id: 0,
    firstName: '',
    lastName: '',
    birthday: new Date(),
    email: '',
    role: Role.Admin // Valeur par défaut
  };

  // Récupérer les valeurs de l'enum pour l'affichage
  roleKeys = Object.values(Role);

  constructor(private memberService: MemberService, private router: Router) {}

  onSubmit() {
    this.memberService.create(this.member);
    this.router.navigate(['/member']);
  }

  cancel() {
    this.router.navigate(['/member']);
  }
}
