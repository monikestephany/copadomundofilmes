import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { CopafilmesComponent } from './copafilmes/copafilmes/copafilmes.component';
import { CopafilmesfinalComponent } from './copafilmes/copafilmesfinal/copafilmesfinal.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'copafilmes', component: CopafilmesComponent },
  { path: 'copafilmesfinal', component: CopafilmesfinalComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    CopafilmesComponent,
    CopafilmesfinalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes // <-- debugging purposes only)
    )
  ],
  exports: [RouterModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
