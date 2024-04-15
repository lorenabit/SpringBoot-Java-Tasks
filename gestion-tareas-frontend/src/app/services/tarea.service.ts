import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Tarea } from '../models/tarea';

@Injectable({
  providedIn: 'root'
})

export class TareaService {
  private baseUrl='http://localhost:8080/api/tareas';

  constructor(private http:HttpClient) { }

  getAllTareas(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(this.baseUrl)
               .pipe(
                 catchError(this.handleError)
               );
  }

  getTareaById(id: number): Observable<Tarea> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Tarea>(url)
               .pipe(
                 catchError(this.handleError)
               );
  }

  createTarea(tarea: Tarea): Observable<Tarea> {
    return this.http.post<Tarea>(this.baseUrl, tarea)
               .pipe(
                 catchError(this.handleError)
               );
  }

  updateTarea(id: number, tarea: Tarea): Observable<Tarea> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<Tarea>(url, tarea)
               .pipe(
                 catchError(this.handleError)
               );
  }

  deleteTarea(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url)
               .pipe(
                 catchError(this.handleError)
               );
  }

  private handleError(error: any): Observable<any> {
    console.error('Ha ocurrido un error:', error);
    throw error;
  }

}

