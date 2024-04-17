import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Tarea } from '../models/tarea';

//Injectable para declarar el servicio
@Injectable({
  providedIn: 'root'//Servicio estará disponible en toda la aplicación
})

export class TareaService {
  //URL base para peticiones
  private baseUrl='http://localhost:8080/api/tareas';

  constructor(private http:HttpClient) { }


  //Traer todas las tareas
  getAllTareas(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(this.baseUrl)
               .pipe(
                 catchError(this.handleError)
               );
  }

  //Traer tarea por ID
  getTareaById(id: number): Observable<Tarea> {
    console.log('ID de la tarea:', id);
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Tarea>(url)
               .pipe(
                 catchError(this.handleError)
               );
  }

  //Crear una nueva tarea
  createTarea(tarea: Tarea): Observable<Tarea> {
    return this.http.post<Tarea>(this.baseUrl, tarea)
               .pipe(
                 catchError(this.handleError)
               );
  }

  //Actualizar una tarea existente
  updateTarea(id: number, tarea: Tarea): Observable<Tarea> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<Tarea>(url, tarea)
               .pipe(
                 catchError(this.handleError)
               );
  }

  //Eliminar una tarea por su ID
  deleteTarea(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url)
               .pipe(
                 catchError(this.handleError)
               );
  }

  //Método privado para manejar errores de las peticiones HTTP
  private handleError(error: any): Observable<any> {
    console.error('Ha ocurrido un error:', error);
    throw error;
  }

}

