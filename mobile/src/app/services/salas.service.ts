import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sala, CreateSalaRequest, Questao } from '../models/models';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SalasService {
  private readonly API_URL = `${environment.apiUrl}/salas`;

  constructor(private http: HttpClient) {}

  getSalas(creatorId?: string): Observable<Sala[]> {
    const url = creatorId ? `${this.API_URL}?creatorId=${creatorId}` : this.API_URL;
    return this.http.get<Sala[]>(url);
  }

  getSalaById(id: string): Observable<Sala> {
    return this.http.get<Sala>(`${this.API_URL}/${id}`);
  }

  getSalaByPin(pin: string): Observable<Sala> {
    return this.http.get<Sala>(`${this.API_URL}/pin/${pin}`);
  }

  createSala(data: CreateSalaRequest): Observable<Sala> {
    return this.http.post<Sala>(this.API_URL, data);
  }

  getQuestoes(salaId: string): Observable<Questao[]> {
    return this.http.get<Questao[]>(`${this.API_URL}/${salaId}/questoes`);
  }

  createQuestao(salaId: string, questao: any): Observable<Questao> {
    return this.http.post<Questao>(`${this.API_URL}/${salaId}/questoes`, questao);
  }
}
