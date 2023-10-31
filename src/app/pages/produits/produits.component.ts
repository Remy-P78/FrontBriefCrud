import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produit.service';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],
})
export class ProduitsComponent implements OnInit, OnChanges {
  allProduits: Produit[] = [];
  isEditing = false;
  recupProduitId!: number;
  modifiedProduit!: Produit;
  recupProduit!: Produit;
  index: number = 0;

  constructor(private produitService: ProduitService, private router: Router) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.modifiedProduit = this.recupProduit;
  }

  ngOnInit() {
    this.produitService.getAllProduits().subscribe({
      next: (response: Produit[]) => {
        this.allProduits = response;
      },
      error: (err) => {
        console.error(`erreur lors de l'appel des produits`, err);
      },
    });
  }

  addProduit() {
    this.router.navigate(['/addProduit']);
  }

  toggleEdit(produit: Produit) {console.log('bouge', produit);
    this.isEditing = !this.isEditing;

    if (!this.isEditing) {
      
      this.produitService
        .modifyProduit(this.recupProduitId, this.modifiedProduit)
        .subscribe({});
    }
  }

  incrementIndex() {
    this.index++;
  }

  deleteProduit() {
    this.router.navigate(['/addProduit']);
  }
}
