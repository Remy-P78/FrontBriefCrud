import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],
})
export class ProduitsComponent implements OnInit {
  allProduits: Produit[] = [];

  isModifying = false;
  modifProduit!: Produit;

  constructor(private produitService: ProduitService, private router: Router) {}

  ngOnInit() {
    this.loadProduits();
  }

  loadProduits() {
    this.produitService.getAllProduits().subscribe({
      next: (response: Produit[]) => {
        this.allProduits = response;
      },
      error: (err) => {
        console.error(`Erreur lors de l'appel des produits`, err);
      },
    });
  }

  addProduit() {
    this.router.navigate(['/addProduit']);
  }

  modifyProduit(produit: Produit) {
    this.modifProduit = produit;

    this.isModifying = true;
  }

  ValidateProduit() {
    this.isModifying = false;

    this.produitService
      .modifyProduit(this.modifProduit.id!, this.modifProduit)
      .subscribe();
    this.router.navigate(['/produit']);
  }

  deleteProduit(id: number) {
    console.log(id);
    this.produitService.deleteProduit(id).subscribe(() => {
      this.loadProduits();
    });
    this.router.navigate(['/produit']);
  }
}
