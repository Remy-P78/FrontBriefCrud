import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produit } from '../models/produit';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  produits: Produit[] = [];

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('access_token');
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', 'Bearer ' + token);
    }
    return headers;
  }

  getAllProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>('http://localhost:3000/api/produit', {
      headers: this.getHeaders(),
    });
  }

  getProduitById(id: number): Observable<Produit> {
    return this.http.get<Produit>(`http://localhost:3000/api/produit/${id}`, {
      headers: this.getHeaders(),
    });
  }

  addProduit(produit: Produit): Observable<Produit> {
    console.log('passage', produit);
    return this.http.post<Produit>(
      'http://localhost:3000/api/produit',
      produit,
      {
        headers: this.getHeaders(),
      }
    );
  }

  modifyProduit(
    id: number,
    updateData: Partial<Produit>
  ): Observable<Partial<Produit>> {
    return this.http.patch<Produit>(
      `http://localhost:3000/api/produit/${id}`,
      updateData,
      {
        headers: this.getHeaders(),
      }
    );
  }

  deleteProduit(id: number) {
    return this.http.delete(`http://localhost:3000/api/produit/${id}`, {
      headers: this.getHeaders(),
    });
  }
}
