import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DatosFinancierosComponent} from "./datosfinancieros/datosfinancieros.component";
import {CommonModule} from "@angular/common";
import {BchileheaderComponent} from "./bchileheader/bchileheader.component";
import {PieChartComponent} from "./pie-chart/pie-chart.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DatosFinancierosComponent,RouterOutlet, CommonModule, BchileheaderComponent, PieChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontapibchile001';
}
