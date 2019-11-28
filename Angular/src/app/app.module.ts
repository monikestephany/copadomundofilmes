import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { CopafilmesComponent } from './copafilmes/copafilmes/copafilmes.component';
import { CopafilmesfinalComponent } from './copafilmes/copafilmesfinal/copafilmesfinal.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CopafilmesComponent,
    CopafilmesfinalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
