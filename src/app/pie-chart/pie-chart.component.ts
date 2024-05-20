import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  standalone: true,
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit, AfterViewInit {
  public chart1: any;
  public chart2: any;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.createChart('MyChart1', [300, 50, 100, 40, 120, 80]);
    this.createChart('MyChart2', [200, 150, 80, 60, 90, 70]);
  }

  createChart(chartId: string, data: number[]) {
    const ctx = document.getElementById(chartId) as HTMLCanvasElement | null;
    if (ctx) {
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
          datasets: [{
            label: 'UF',
            data: data,
            backgroundColor: [
              '#273880', // Azul oscuro
              '#1E3A8A', // Azul medio
              '#3B82F6', // Azul claro
              '#FFFFFF', // Blanco
              '#E5E7EB', // Gris claro
              '#10B981'  // Verde
            ]
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
          }
        }
      });
    }
  }
}
