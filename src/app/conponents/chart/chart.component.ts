import { Component, OnInit } from '@angular/core'
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js'
import { Label } from 'ng2-charts'
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  // scatter
  public scatterChartOptions: ChartOptions = {
    responsive: true,
  }
  public scatterChartLabels: Label[] = [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running',
  ]

  public scatterChartData: ChartDataSets[] = [
    {
      data: [
        { x: 1, y: 1 },
        { x: 2, y: 3 },
        { x: 3, y: -2 },
        { x: 4, y: 4 },
        { x: 5, y: -3 },
      ],
      label: 'ban a ',
      pointRadius: 10,
    },
  ]
  public scatterChartType: ChartType = 'scatter'

  constructor() {}

  ngOnInit(): void {}
  // events
  public chartClicked({
    event,
    active,
  }: {
    event: MouseEvent
    active: {}[]
  }): void {
    console.log(event, active)
  }

  public chartHovered({
    event,
    active,
  }: {
    event: MouseEvent
    active: {}[]
  }): void {
    console.log(event, active)
  }
}
