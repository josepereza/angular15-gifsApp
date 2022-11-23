import { Component } from '@angular/core';
import { Gifservice } from '../../gif.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  constructor(public  gifService:Gifservice){

  }

}
