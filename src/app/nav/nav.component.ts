import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Gifservice } from '../gifs/gif.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{

@ViewChild('drawer') drawer!:any;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    abierto!:boolean;
ngOnInit(){
  this.isHandset$.subscribe(data=>{
    this.abierto=data;
  })
}
  constructor(private breakpointObserver: BreakpointObserver, public gifService:Gifservice) {}
enviar(dato:any){
this.gifService.buscarGifs(dato).subscribe((busquedas:any)=>{
  this.gifService._mibusqueda=busquedas.data
})
}
cerrar(){
  if(this.abierto){
   this.drawer.toggle()
  }
}
}
