import { NgModule } from '@angular/core'

import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { IconComponent } from './conponents/icon/icon.component'
import { FormComponent } from './conponents/form/form.component'
import { FooterComponent } from './conponents/footer/footer.component'
import { ChartComponent } from './conponents/chart/chart.component'
import { ChartsModule } from 'ng2-charts'

@NgModule({
  declarations: [
    AppComponent,
    IconComponent,
    FormComponent,
    FooterComponent,
    ChartComponent,
  ],
  imports: [AppRoutingModule, ChartsModule, FormsModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
