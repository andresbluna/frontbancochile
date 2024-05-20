import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { DataService} from "../ufservice.service";
import { UfData} from "../interface/interfaceuf";


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  standalone: true,
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit, AfterViewInit {
  public chart1: any;
  public chart2: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.dataService.getUfData().subscribe((data: UfData) => {
      const labels = data.serie.map(item =>
        new Date(item.fecha).toLocaleDateString());
      const values = data.serie.map(item => item.valor);

      this.createChart('MyChart1', labels, values);
      this.createChart('MyChart2', labels, values);
    });
  }

  createChart(chartId: string, labels: string[], data:
    number[]) {
    const ctx = document.getElementById(chartId) as HTMLCanvasElement | null;
    if (ctx) {
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: 'UF',
            data: data,
            borderColor: '#3e95cd',
            fill: false,
            pointBackgroundColor: '#3e95cd',
            pointBorderColor: '#3e95cd',
            pointHoverBackgroundColor: '#3e95cd',
            pointHoverBorderColor: '#3e95cd',
            pointRadius: 2, // Ajusta el tamaño de los puntos
            pointHoverRadius: 7 // Ajusta el tamaño de los puntos al pasar el ratón
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          aspectRatio: 1, // Ajusta la proporción del gráfico
          plugins: {
            legend: {
              position: 'bottom', // Ajusta la posición de la leyenda
            }
          },
          scales: {
            x: {
              beginAtZero: true
            },
            y: {
              min: 37000,
              max: 38000, 
              beginAtZero: false
            }
          }
        }
      });
    }
  }
}
