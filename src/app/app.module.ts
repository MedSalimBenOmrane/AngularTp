import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';
import { CvComponent } from './platform_cv/cv/cv.component';
import { ListCvComponent } from './platform_cv/list-cv/list-cv.component';
import { ItemCvComponent } from './platform_cv/item-cv/item-cv.component';
import { DetailCvComponent } from './platform_cv/detail-cv/detail-cv.component';


@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    CarteVisiteComponent,
    CvComponent,
    ListCvComponent,
    ItemCvComponent,
    DetailCvComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
