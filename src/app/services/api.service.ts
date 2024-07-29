import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // injección de dependencias en angular 17
  private _http = inject(HttpClient);
  private urlBase = 'https://fakestoreapi.com/products';

  getAll(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this.urlBase);
  }

  getAllById(id: number): Observable<IProduct> {
    return this._http.get<IProduct>(`${this.urlBase}/${id}`);
  }
}
