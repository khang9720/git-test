import { Component, OnInit } from '@angular/core'

import { ChartDataSets, ChartType, ChartOptions } from 'chart.js'
import { Label, ThemeService } from 'ng2-charts'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  [x: string]: any
  kq = [{ kq1: 0 }, { kq1: 0 }, { kq1: 0 }]
  x: number = 200
  bias: number = 0

  //===============scatter======================

  //===============scatter======================

  data =
    [
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
    ] || undefined

  public scatterChartOptions: ChartOptions = {
    responsive: true,
  }
  public scatterChartData: ChartDataSets[] = [
    {
      data: this.data,
      label: 'ban a ',
      pointRadius: 10,
    },
  ]
  public scatterChartLabels: Label[] = [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running',
  ]

  public scatterChartType: ChartType = 'scatter'

  erload(): void {
    this.data
  }
  //===================end scatter========================

  constructor() {}

  erro = [0, 0, 0]

  weight = [
    { weight1: 0.29988963 },
    { weight1: 0.86987547 },
    { weight1: 0.8385051 },
    { weight1: 0.9355935 },
  ]

  adjustment = [0, 0, 0]

  sum_outputAndadjiusment = [0, 0, 0, 0]

  sum = [{ sum1: 0 }, { sum1: 0 }, { sum1: 0 }]

  dulieu1 = [
    {
      chieu1: 1,
      chieu2: 1,
      chieu3: 1,
      chieu4: 0,
    },
    {
      chieu1: 1,
      chieu2: 0,
      chieu3: 0,
      chieu4: 0,
    },
    {
      chieu1: 1,
      chieu2: 0,
      chieu3: 0,
      chieu4: 1,
    },
  ]
  dauRaLyTuong = [1, 0, 1]

  ngOnInit(): void {
    this.KQ(this.x)
  }
  tam = ''
  //=========================
  // dot(input_layer, weights)
  //=========================
  Sum(): any {
    for (let index = 0; index < this.sum.length; index++) {
      this.sum[index].sum1 =
        this.dulieu1[index].chieu1 * this.weight[0].weight1 +
        this.dulieu1[index].chieu2 * this.weight[1].weight1 +
        this.dulieu1[index].chieu3 * this.weight[2].weight1 +
        this.dulieu1[index].chieu4 * this.weight[3].weight1
    }
    return this.sum
  }
  //=========================
  //update weights
  //=========================

  Sum_outputAndadjiusment(): any {
    for (let index = 0; index < this.adjustment.length; index++) {
      this.weight[0].weight1 +=
        this.adjustment[index] * this.dulieu1[index].chieu1
      this.weight[1].weight1 +=
        this.adjustment[index] * this.dulieu1[index].chieu2
      this.weight[2].weight1 +=
        this.adjustment[index] * this.dulieu1[index].chieu3
      this.weight[3].weight1 +=
        this.adjustment[index] * this.dulieu1[index].chieu4
    }

    return this.weight
  }

  // ============================================
  //==================traing=====================
  KQ(x: number): any {
    for (let index = 0; index < x; index++) {
      this.Sum()
      for (let index = 0; index < this.kq.length; index++) {
        this.kq[index].kq1 = this.Sigmoid(this.sum[index].sum1 + this.bias)
        // console.log('kq :' + this.kq[index].kq1)
        this.erro[index] = this.dauRaLyTuong[index] - this.kq[index].kq1
        // console.log('erro:' + this.erro[index])
        this.adjustment[index] =
          this.erro[index] * this.Sigmoid_Derivative(this.kq[index].kq1)
        // console.log(
        //   'Sigmoid_Derivative:' + this.Sigmoid_Derivative(this.kq[index].kq1),
        // )
        // console.log('adjusment: ' + this.adjustment[index])
        this.data[index].x = this.kq[index].kq1
        this.data[index].y = this.kq[index].kq1
      }
      // console.log('================================================')
      // console.log(this.data.datasets[index].x)

      this.Sum_outputAndadjiusment()
    }
    return this.kq
  }

  Sigmoid(bienSo: any): any {
    return 1.0 / (1.0 + Math.pow(Math.E, -bienSo))
  }

  Sigmoid_Derivative(x: any): any {
    return x * (1 - x)
  }

  ramdom_range(min: any, max: any): any {
    return (this.weight = Math.random() * (max - min) + min)
  }

  // ===================events=======================
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
  //===================end events======================
}
