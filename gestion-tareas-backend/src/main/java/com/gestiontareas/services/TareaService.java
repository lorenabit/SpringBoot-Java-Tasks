
package com.gestiontareas.services;

import com.gestiontareas.entities.Tarea;
import java.util.List;
import java.util.Optional;

// Definir operaciones para gestionar tareas
public interface TareaService {
    
    //Obtener todas las tareas
    List<Tarea> getAllTareas();
    
    //Obtener una tarea por su ID
    Optional<Tarea> getTareaById(Long id);
    
    //Crear una nueva tarea
    Tarea createTarea(Tarea tarea);
    
    //Actualizar una tarea existente por su ID
    Tarea updateTarea(Long id, Tarea tarea);
    
    //Eliminar una tarea por su ID
    void deleteTarea(Long id);

     
}
