import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  listaProductos: IProduct[] = [];
  loading: boolean = true;
  // injección de dependencias
  private _apiService = inject(ApiService);
  private _router = inject(Router);

  ngOnInit(): void {
    this._apiService.getAll().subscribe((data: IProduct[]) => {
      console.log(data);
      this.listaProductos = data;
      this.loading = false;
    });
  }

  goDetailProduct(id: number) {
    this._router.navigate(['/products/', id]);
  }
}
