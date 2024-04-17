
package com.gestiontareas.controllers;

import com.gestiontareas.entities.Tarea;
import com.gestiontareas.services.TareaService;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/tareas")
@CrossOrigin("*")
public class TareaController {
    
    // Inyección del servicio de gestión de tareas
    @Autowired
    private TareaService tareaService;
    
    // Endpoint para obtener todas las tareas
    @GetMapping
    public List<Tarea> listarTareas(){
        return tareaService.getAllTareas();
    }
    
    // Endpoint para obtener una tarea por su ID
    @GetMapping("/{id}")
    public ResponseEntity<Tarea> ListarTareaPorId(@PathVariable Long id){
        Optional<Tarea> tarea = tareaService.getTareaById(id);
        return tarea.map(value -> ResponseEntity.ok().body(value))
                .orElse(null);
    }
    
    // Endpoint para crear una nueva tarea
    @PostMapping
    public ResponseEntity<Tarea> guardarTarea(@RequestBody Tarea tarea){
        Tarea tareaGuardada = tareaService.createTarea(tarea);
        return ResponseEntity.status(HttpStatus.CREATED).body(tareaGuardada);
    }
    
    // Endpoint para actualizar una tarea existente por su ID
    @PutMapping("/{id}")
    public ResponseEntity<Tarea> actualizarTarea(@PathVariable Long id,@RequestBody Tarea tarea){
        Tarea tareaUpdate = tareaService.updateTarea(id, tarea);
        if(tareaUpdate != null){
            return ResponseEntity.ok().body(tareaUpdate);
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }
    
     // Endpoint para eliminar una tarea por su ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarTarea(@PathVariable Long id){
        tareaService.deleteTarea(id);
        return ResponseEntity.noContent().build();
    }

}
