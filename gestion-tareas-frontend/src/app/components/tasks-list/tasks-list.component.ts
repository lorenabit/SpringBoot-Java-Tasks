import { Component } from '@angular/core';
import { Tarea } from '../../models/tarea';
import { TareaService } from '../../services/tarea.service';
import { Observable } from 'rxjs';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [NgFor,NgIf,RouterLink,ButtonModule],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css'
})
export class TasksListComponent {

  tareas?:Tarea[];
  
  
  constructor(private tareaService:TareaService){}


  ngOnInit():void{
    //Cargar tareas al iniciar el componente
    this.chargeTareas();
  }

  //Para cargar las tareas
  chargeTareas():void{
    //Llama al servicio para traer todas las tareas y las asigna al array
    this.tareaService.getAllTareas().subscribe(tareas =>{
      this.tareas = tareas;//Asignar tareas obtenidas al array
    })
  }

  //Eliminar una tarea
  deleteTarea(id?:number):void{
    //Llama servicio para eliminar la tarea con el ID
    this.tareaService.deleteTarea(id!).subscribe(() => {
      this.chargeTareas();//Vuelve a cargar las tareas después de eliminar una
    });
  }

}
