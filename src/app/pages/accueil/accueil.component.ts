import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
})
export class AccueilComponent {
  username!: string;
  password!: string;
  connexion!: FormGroup;

  constructor(
    private utilisateurService: UtilisateurService,
    private router: Router,
    private myForm: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.initialForm();
  }

  // Méthode pour initialiser le formulaire.
  private initialForm() {
    this.connexion = this.myForm.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  OnConnect() {
    if (this.connexion.valid) {
      // Récupère le nom d'utilisateur et le mot de passe à partir du formulaire.
      
      let email = this.connexion.value.email;
      let password = this.connexion.value.password;

      // Appelle le service pour effectuer la connexion.
      this.utilisateurService.login(email, password).subscribe({
        next: (response: any) => {
          if (response && response.accessToken) {
            // Stocker le token dans le localStorage
            localStorage.setItem('access_token', response.accessToken);

            // Indique que l'utilisateur est connecté en mettant à jour l'état via le service AuthService.
            this.authService.setIsUserConnected(true);

            this.router.navigate(['/produit']);
          } else {
            console.error('Token non reçu dans la réponse.');
          }
        },
        error: (error: any) => {
          console.error('Erreur lors de la connexion:', error);
          alert('Erreur lors de la connexion:');
        },
      });
    }
  }
}
