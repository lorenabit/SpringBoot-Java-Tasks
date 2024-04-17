import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../models/tarea';
import { ActivatedRoute, Router } from '@angular/router';
import { TareaService } from '../../services/tarea.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-form-tasks',
  standalone: true,
  imports: [FormsModule,NgIf,CommonModule],//Importa FormsModule, NgIf y CommonModule
  templateUrl: './form-tasks.component.html',
  styleUrl: './form-tasks.component.css'
})
export class FormTasksComponent implements OnInit{

  tarea:Tarea = new Tarea();//Inicializa una nueva tarea

  constructor(private tareaService:TareaService,private router:Router,private route:ActivatedRoute){}

  ngOnInit():void{
    const tareaId = +this.route.snapshot.paramMap.get('id')!;
    if(tareaId){
      //Si hay un id trae la tarea correspondiente
      this.tareaService.getTareaById(tareaId).subscribe(tarea => {
        this.tarea = tarea;//Asigna esa tarea obtenida a la propiedad tarea
      })
    }
  }

  saveOrUpdateTask(): void {
    if (this.tarea.id !== undefined) {
      //Si tiene id llama a la función actualizar
      this.updateTarea();
    } else {
      //Si no tiene id llama a la función crear una nueva
      this.createTarea();
    }
  }

  private createTarea(): void {
    //Función para crear una tarea
    this.tareaService.createTarea(this.tarea).subscribe({
      next: savedTarea => {
        //Navega a la página de tareas después de guardar
        this.router.navigate(['/tareas']);
      },
      error: error => {
        console.error('Error al crear tarea:', error);
        
      }
    });
  }

  private updateTarea(): void {
    //Actualizar una tarea existente
    this.tareaService.updateTarea(this.tarea.id!, this.tarea).subscribe({
      next: updateTarea => {
        //Navega a la página de tareas después de actualizar
        this.router.navigate(['/tareas']);
      },
      error: error => {
        console.error('Error al actualizar tarea:', error);
        
      }
    });
  }
}