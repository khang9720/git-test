import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor() {}

  bias: any
  kq: any
  dulieu1 = [
    {
      chieu1: 1,
      chieu2: 1,
      chieu3: 1,
      chieu4: 0,
      chieu5: 1,
      chieu6: 1,
      chieu7: 1,
      chieu8: 0,
      chieu9: 1,
      chieu10: 0,
    },
  ]
  duLieu2 = [
    {
      chieu1: 0,
      chieu2: 1,
      chieu3: 0,
      chieu4: 0,
      chieu5: 1,
      chieu6: 0,
      chieu7: 1,
      chieu8: 0,
      chieu9: 1,
      chieu10: 0,
    },
  ]
  test = [1, 0, 1]
  test2 = [1, 0, 1]

  ngOnInit(): void {}
  sum: any
  Sum(): any {
    // for (let chieu of this.duLieu2) {
    //   this.sum = chieu.chieu4 + chieu.chieu9 + chieu.chieu7
    // }
    var testkq = this.test.concat(this.test2)
    return testkq
  }
  Sigmoid(bienSo: any): any {
    return 1.0 / (1.0 + Math.pow(Math.E, -bienSo))
  }
}
