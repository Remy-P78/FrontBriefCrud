import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css'],
})
export class AddProduitComponent {
  newProduit!: Produit;

  constructor(private produitService: ProduitService, private router: Router) {}

  onSubmit(myForm: { form: { value: Produit } }) {
    this.newProduit = myForm.form.value;  
    this.produitService.addProduit(this.newProduit).subscribe({
      next: () => {
        alert('Le produit a été ajouté !');

        this.router.navigate(['/produit']);
      },
      error: (error) => {
        console.error("Erreur lors de l'ajout du produit", error);
      },
    });
  }
}
