
package com.gestiontareas.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



//@Entity indica que esta clase es una entidad JPA y se mapeará a una tabla en la bd
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data

public class Tarea {
    
     //@Id marca este atributo como la clave primaria de la entidad
    @Id
     //@GeneratedValue especifica que el valor de esta clave primaria se generará automáticamente
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    // Atributo para almacenar el título de la tarea
    private String titulo;
    
    // Atributo para almacenar la descripción de la tarea
    private String description;
    
    // Atributo para indicar si la tarea está completada o no
    private boolean completado;
    
    
}