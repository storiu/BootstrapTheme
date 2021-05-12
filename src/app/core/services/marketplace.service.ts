import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  Brand,
  ColorClass,
  MarketplaceOrder,
  PriceClass,
  Product,
  ProductCategory,
  ProductsQuery,
  SizeClass,
  TextureType,
  ComingSoonContact,
  CompanionQuery
} from '../models/marketplace';
import { setHeader } from '../utils/request.util';
import { SuccessResponse } from '../models/success-response';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarketplaceService {

  constructor(private http: HttpClient) {
  }

  sendComingSoonContact(payload: ComingSoonContact): Observable<SuccessResponse> {
    const url = environment.api + '/lead/request-marketplace-launch-date';
    return this.http.post<SuccessResponse>(url, payload);
  }

  getBrands(category: string): Observable<Brand[]> {
    const url = `${environment.api}/marketplace/brands`;
    let params = new HttpParams();
    params = params.append('category', category);
    return this.http.get<Brand[]>(url, { params });
  }

  getProducts(payload: ProductsQuery): Observable<any> {
    const url = `${environment.api}/marketplace/products`;
    let params = new HttpParams();
    params = params.append('category', payload.category);
    if (payload.brand) {
      params = params.append('brand', payload.brand);
    }
    if (payload.skip) {
      params = params.append('skip', String(payload.skip));
    }
    if (payload.take) {
      params = params.append('take', String(payload.take));
    }
    if (payload.sizeClass) {
      params = params.append('sizeClass', payload.sizeClass);
    }
    if (payload.priceClass) {
      params = params.append('priceClass', payload.priceClass);
    }
    if (payload.keyword) {
      params = params.append('keyword', payload.keyword);
    }
    return this.http.get<any>(url, { params });
  }

  getProductById(id: string): Observable<Product> {
    const url = `${environment.api}/marketplace/products/${id}`;
    return this.http.get<Product>(url);
  }

  getCompanions(payload: CompanionQuery): Observable<any> {
    const url = `${environment.api}/marketplace/products`;
    let params = new HttpParams();
    if (payload.category) {
      params = params.append('category', payload.category);
    }
    if (payload.brand) {
      params = params.append('brand', payload.brand);
    }
    if (payload.product_name) {
      params = params.append('name', payload.product_name);
    }
    return this.http.get<any>(url, { params });
  }

  registerOrder(payload: MarketplaceOrder, accessToken: string): Observable<MarketplaceOrder> {
    const url = `${environment.api}/marketplace/orders`;
    const headers = setHeader(accessToken);
    return this.http.post<MarketplaceOrder>(url, payload, { headers });
  }

  findMatches(payload: {
    category: ProductCategory,
    priceClass: PriceClass,
    colorClass: ColorClass,
    sizeClass: SizeClass,
    textureType: TextureType,
  }): Observable<Product[]> {
    const url = `${environment.api}/marketplace/find-product-matches`;
    let params = new HttpParams();
    Object.keys(payload).forEach(key => {
      params = params.append(key, payload[key]);
    });
    return this.http.get<Product[]>(url, { params });
  }
}
