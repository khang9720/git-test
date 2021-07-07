import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { IconComponent } from './conponents/icon/icon.component'
import { FormComponent } from './conponents/form/form.component'
import { FooterComponent } from './conponents/footer/footer.component'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [AppComponent, IconComponent, FormComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
