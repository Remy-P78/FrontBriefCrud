import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produit.service';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],
})
export class ProduitsComponent implements OnInit {
  allProduits: Produit[] = [];

  constructor(private produitService: ProduitService) {}

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
}
