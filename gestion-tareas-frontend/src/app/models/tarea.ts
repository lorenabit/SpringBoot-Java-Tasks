
//Clase Tarea
export class Tarea {

//Propiedades de la tarea
    id?:number;
    titulo?:string;
    description?:string;
    completado?:boolean;

    //Constructor de la clase
    constructor(id: number = 0, titulo: string = '', description: string = ''){
        this.id=id;
        this.titulo=titulo;
        this.description=description;
        this.completado=false;
    }
}

