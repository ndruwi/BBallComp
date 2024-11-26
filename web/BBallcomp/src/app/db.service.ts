// basketball.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private apiUrl = 'http://localhost:3000/api'; // Your backend URL

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/players`);
  }
}