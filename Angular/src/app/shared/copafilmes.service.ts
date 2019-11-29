import { Injectable } from '@angular/core';
import { Copafilmes } from './copafilmes.model';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CopafilmesService {
 formData:Copafilmes[]
 formDataFinal:Copafilmes[]
 readonly rootURL = 'http://localhost:4000/api';
 list : Copafilmes[];
 listFinal : Copafilmes[];
  constructor(private http: HttpClient) { }

  refreshList(){
    this.http.get(this.rootURL + '/CopaFilmes')
    .toPromise()
    .then(res => this.list = res as Copafilmes[]);
  }
   postCopaFilmes(copaFilmes : Copafilmes []){
    debugger;
    this.http.post<Copafilmes []>(this.rootURL + '/CopaFilmes',copaFilmes)
    .toPromise()
    .then(res => this.list = res as Copafilmes[]);
  }
}
