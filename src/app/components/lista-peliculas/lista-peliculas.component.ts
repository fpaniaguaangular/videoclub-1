import { Component, OnInit } from '@angular/core';
import { IPelicula } from 'src/app/interfaces/ipelicula';

@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.css']
})
export class ListaPeliculasComponent implements OnInit {

  public peliculas:IPelicula[]|any;
  public nuevaPelicula:IPelicula={titulo:"",director:"",imagen:""};
  public peliculaDetallada:IPelicula={titulo:"",director:"",imagen:""};
  public detalleVisible:boolean=false;

  constructor() { 
    this.peliculas = [
      {titulo:"Tiburón",director:"Spielberg",imagen:"https://i.etsystatic.com/19389619/r/il/b4518b/2598217185/il_fullxfull.2598217185_8bx4.jpg"},
      {titulo:"Alien",director:"Ridley",imagen:"https://i.ebayimg.com/images/g/WYAAAOSwpXpZyodo/s-l500.jpg"},
      {titulo:"El exorcista",director:"William Friedkin",imagen:"https://m.media-amazon.com/images/I/71lXNBrOLbL._AC_SY606_.jpg"},
      {titulo:"Tiburón",director:"Spielberg",imagen:"https://i.etsystatic.com/19389619/r/il/b4518b/2598217185/il_fullxfull.2598217185_8bx4.jpg"},
      {titulo:"Alien",director:"Ridley",imagen:"https://i.ebayimg.com/images/g/WYAAAOSwpXpZyodo/s-l500.jpg"},
      {titulo:"El exorcista",director:"William Friedkin",imagen:"https://m.media-amazon.com/images/I/71lXNBrOLbL._AC_SY606_.jpg"},
      {titulo:"Tiburón",director:"Spielberg",imagen:"https://i.etsystatic.com/19389619/r/il/b4518b/2598217185/il_fullxfull.2598217185_8bx4.jpg"},
      {titulo:"Alien",director:"Ridley",imagen:"https://i.ebayimg.com/images/g/WYAAAOSwpXpZyodo/s-l500.jpg"},
      {titulo:"El exorcista",director:"William Friedkin",imagen:"https://m.media-amazon.com/images/I/71lXNBrOLbL._AC_SY606_.jpg"}
    ];
  }

  ngOnInit(): void {
  }

  agregarPelicula(){
    this.peliculas.push({...this.nuevaPelicula});
  }

  mostrarDetalle(pelicula:IPelicula){
    console.warn("Mostrando detalle..." + pelicula.titulo);
    this.detalleVisible=true;
    this.peliculaDetallada=pelicula;
  }

  eliminarPelicula(pelicula:IPelicula){
    console.error("Eliminado película..." + pelicula.titulo);
    let index = this.peliculas.indexOf(pelicula, 0);
    if (index > -1) {
      this.peliculas.splice(index, 1);
    }
  }
  
  cerrar():void{
    this.detalleVisible=false;
  }
}
