
package com.gestiontareas.services.impl;

import com.gestiontareas.entities.Tarea;
import com.gestiontareas.repositories.TareaRepository;
import com.gestiontareas.services.TareaService;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//Componente de servicio de Spring
@Service
public class TareaServiceImpl implements TareaService{
    
     //Inyección del repositorio de tareas
    @Autowired
    private TareaRepository tareaRepository;

    //Obtener todas las tareas
    @Override
    public List<Tarea> getAllTareas() {
        return tareaRepository.findAll();
    }

    //Obtener una tarea por su ID
    @Override
    public Optional<Tarea> getTareaById(Long id) {
        return tareaRepository.findById(id);
    }

    //Crear una nueva tarea
    @Override
    public Tarea createTarea(Tarea tarea) {
      return tareaRepository.save(tarea);
    }

    //Actualizar una tarea existente por su ID
    @Override
    public Tarea updateTarea(Long id, Tarea tarea) {
        if(tareaRepository.existsById(id)){
            return tareaRepository.save(tarea);
        }
        return null;
    }

     //Eliminar una tarea por su ID
    @Override
    public void deleteTarea(Long id) {
      tareaRepository.deleteById(id);
    }

  
}
