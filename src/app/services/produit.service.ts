import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produit } from '../models/produit';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  produits: Produit[] = [];

  constructor(private http: HttpClient) {}

  getAllProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>('http://localhost:3000/api/produit');
  }

  getProduitById(id: number): Observable<Produit> {
    return this.http.get<Produit>(`http://localhost:3000/api/produit/${id}`);
  }

  addProduit(produit: Produit): Observable<Produit> {
    return this.http.post<Produit>(
      'http://localhost:3000/api/produit',
      produit
    );
  }

  modifyProduit(
    id: number,
    updateData: Partial<Produit>
  ): Observable<Partial<Produit>> {
    return this.http.patch<Produit>(
      `http://localhost:3000/api/produit/${id}`,
      updateData
    );
  }

  deleteProduit(id: number) {
    return this.http.delete(`http://localhost:3000/api/produit/${id}`);
  }
}
