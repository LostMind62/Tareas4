import { Component, OnInit } from '@angular/core';
import { Tarea } from "src/app/models/Tarea";
@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  listTareas:Tarea[]=[];
  nombreTareas='';
  constructor() { }

  ngOnInit(): void {
  }
  agregarTarea():void{
    console.log(this.nombreTareas);
  
    // crear un objeto tarea
    const tarea:Tarea={
      nombre:this.nombreTareas,
      estado:false
    };

    
    // agregar objeto al array
    this.listTareas.push(tarea)

    // reset form
    this.nombreTareas='';
  }
  eliminarTarea(indice:number):void{
    this.listTareas.splice(indice,1);    
  }
  actualizarTarea(indice:number,tarea:Tarea):void{
    this.listTareas[indice].estado=!tarea.estado
  }

}
