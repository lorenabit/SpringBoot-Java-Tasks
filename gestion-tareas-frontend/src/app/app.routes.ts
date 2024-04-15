import { Routes } from '@angular/router';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { FormTasksComponent } from './components/form-tasks/form-tasks.component';

export const routes: Routes = [
    {path: '',redirectTo:'/tasks',pathMatch:'full'},
    {path:'tareas',component:TasksListComponent},
    {path:'tareas/new',component: FormTasksComponent},
    {path:'tareas/:id/edit', component: FormTasksComponent}
];
