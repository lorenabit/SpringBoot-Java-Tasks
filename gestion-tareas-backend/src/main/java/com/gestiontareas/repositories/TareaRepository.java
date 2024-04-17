
package com.gestiontareas.repositories;

import com.gestiontareas.entities.Tarea;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//@Repository indica que esta interfaz es un componente de repositorio de Spring
@Repository
public interface TareaRepository extends JpaRepository<Tarea,Long>{
    
    // Buscar una tarea por criterio específico.
    public Optional<Tarea> findBy();
    
}
