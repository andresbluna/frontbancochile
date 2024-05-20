import {Component, OnInit} from '@angular/core';
import { DatosFinancierosService } from "../datosfinancieros.service";
import {KeyValuePipe} from "@angular/common";
import{CommonModule} from "@angular/common";
import {PieChartComponent} from "../pie-chart/pie-chart.component";

@Component({
  selector: 'app-datosfinancieros',
  standalone: true,
  imports: [
    KeyValuePipe, CommonModule, PieChartComponent
  ],
  templateUrl: './datosfinancieros.component.html',
  styleUrl: './datosfinancieros.component.scss'
})
export class DatosFinancierosComponent implements OnInit {
  datos: any;

  constructor(private datosFinancierosService: DatosFinancierosService) {}

  ngOnInit() {
    this.datosFinancierosService.obtenerDatosFinancieros()
      .subscribe(data => {
      this.datos = data;
    });
  }
}
