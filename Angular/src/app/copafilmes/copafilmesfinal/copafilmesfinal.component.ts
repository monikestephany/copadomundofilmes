import { Component, OnInit } from '@angular/core';
import { Copafilmes } from 'src/app/shared/copafilmes.model';
import { CopafilmesService } from 'src/app/shared/copafilmes.service';

@Component({
  selector: 'app-copafilmesfinal',
  templateUrl: './copafilmesfinal.component.html',
  styles: []
})
export class CopafilmesfinalComponent implements OnInit {
  copa: Copafilmes;
  copa2: Copafilmes;
  listTest: Copafilmes[];
  constructor(private service:CopafilmesService) {
    
  }

  ngOnInit() {
    debugger;
    this.listTest = [];
    this.copa = { Titulo : "Teste 1"} as Copafilmes;
    this.copa2 = { Titulo : "Teste 2"} as Copafilmes;
    this.listTest.push(this.copa);
    this.listTest.push(this.copa2);
    this.populateForm(this.listTest) 
  }
  populateForm(pd: Copafilmes[]) {
    debugger;
    this.service.formDataFinal = Object.assign({}, pd);
  }
  
}
