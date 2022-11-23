import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { Gifservice } from '../../gif.service';
import { PokeAPIResponse } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit{
  name = new FormControl('',{ nonNullable: true });
  
constructor(private gifService:Gifservice){

}

  ngOnInit(){
    this.name.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).
    subscribe(data=>{
     this.gifService.buscarGifs(data).subscribe((busqueda:PokeAPIResponse)=>{
      console.log(busqueda)
      this.gifService._mibusqueda=busqueda.data
     })
    })
  }
}
