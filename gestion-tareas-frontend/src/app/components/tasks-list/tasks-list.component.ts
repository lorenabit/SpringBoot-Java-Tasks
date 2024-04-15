import { Component } from '@angular/core';
import { Tarea } from '../../models/tarea';
import { TareaService } from '../../services/tarea.service';
import { Observable } from 'rxjs';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css'
})
export class TasksListComponent {

  tareas?:Tarea[];


  constructor(private tareaService:TareaService){}


  ngOnInit():void{
    this.cargarTareas();
  }

  cargarTareas():void{
    this.tareaService.getAllTareas().subscribe(tareas =>{
      this.tareas = tareas;
    })
  }

  eliminarTarea(id?:number):void{
    this.tareaService.deleteTarea(id!).subscribe(() => {
      this.cargarTareas();
    })
  }

}
