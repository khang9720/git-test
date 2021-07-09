import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor() {}

  bias: number = 0
  weight = [
    { weight1: this.ramdom_range(-0.9999999, 0.9999999) },
    { weight1: this.ramdom_range(-0.9999999, 0.9999999) },
    { weight1: this.ramdom_range(-0.9999999, 0.9999999) },
    { weight1: this.ramdom_range(-0.9999999, 0.9999999) },
  ]

  sum = [{ sum1: 0 }, { sum1: 0 }, { sum1: 0 }]
  kq = [{ kq1: 0 }, { kq1: 0 }, { kq1: 0 }]

  // dulieu1 = [
  //   {
  //     chieu1: 1,
  //     chieu2: 1,
  //     chieu3: 1,
  //     chieu4: 0,
  //   },
  //   {
  //     chieu1: 1,
  //     chieu2: 1,
  //     chieu3: 0,
  //     chieu4: 0,
  //   },
  //   {
  //     chieu1: 1,
  //     chieu2: 0,
  //     chieu3: 0,
  //     chieu4: 0,
  //   },
  // ]

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
    this.Sum()
    // this.KQ()
  }

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

  KQ(): any {
    for (let index = 0; index < this.kq.length; index++) {
      this.kq[index].kq1 = this.Sigmoid(this.sum[index].sum1 + this.bias)
    }
    return this.kq
  }

  Sigmoid(bienSo: any): any {
    return 1.0 / (1.0 + Math.pow(Math.E, -bienSo))
  }
  ramdom_range(min: any, max: any): any {
    return (this.weight = Math.random() * (max - min) + min)
  }
}
