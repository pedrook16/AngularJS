import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProducsService {
  baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

    getProducts (): Observable<any> {
      const url  = `${this.baseUrl}/products`;

      return this.http.get<any>(url)
      .pipe(map((data: any) => data));
    }
}


