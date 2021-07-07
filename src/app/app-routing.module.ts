import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './conponents/footer/footer.component';
import { FormComponent } from './conponents/form/form.component';
import { IconComponent } from './conponents/icon/icon.component';
IconComponent

const routes: Routes = [
  {path:'icon', component:IconComponent},
  {path:'form', component:FormComponent},
  {path:'footer',component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
