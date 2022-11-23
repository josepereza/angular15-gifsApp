import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatInputModule} from '@angular/material/input'; 
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ListadoComponent } from './components/listado/listado.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavComponent,
    BusquedaComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    ReactiveFormsModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule
  ],
  exports:[NavComponent]

})
export class GifsModule { }
