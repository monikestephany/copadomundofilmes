import { Component, OnInit } from '@angular/core';
import { Copafilmes } from 'src/app/shared/copafilmes.model';
import { CopafilmesService } from 'src/app/shared/copafilmes.service';

@Component({
  selector: 'app-copafilmesfinal',
  templateUrl: './copafilmesfinal.component.html',
  styles: []
})
export class CopafilmesfinalComponent implements OnInit {
  constructor(private service:CopafilmesService) {
  
  }

  ngOnInit() {
    debugger;
    this.populateForm(this.service.list) 
  }
  populateForm(pd: Copafilmes[]) {
    debugger;
    this.service.formDataFinal = Object.assign({}, pd);
  }
  
}
