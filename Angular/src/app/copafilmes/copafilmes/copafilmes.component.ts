import { Component, OnInit } from '@angular/core';
import { CopafilmesService } from 'src/app/shared/copafilmes.service';
import { Copafilmes } from 'src/app/shared/copafilmes.model';
import { NgForm } from '@angular/forms';
import { debug } from 'util';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-copafilmes',
  templateUrl: './copafilmes.component.html',
  styles: []
})
export class CopafilmesComponent implements OnInit {
  selectedRow : Number = 0;
  list: Array<String> = [];
  constructor(private service:CopafilmesService) { 

}

setClickedRow(pd,event){
 
    if(this.list.indexOf(pd.id) == -1)
    {
      if(this.list.length > 7)
      {
        alert("O máximo de filmes selecionados já foi atingido!");
        event.preventDefault();
      }
      else
        this.list.push(pd.id.toString())
     }
    else if(this.list.indexOf(pd.id) > -1)   
      this.list.splice(this.list.indexOf(pd.id), 1);   
  this.selectedRow = this.list.length;   
}
  populateForm(pd: Copafilmes[]) {
    debugger;
    this.service.formData = Object.assign({}, pd);
  }
  
  ngOnInit() {
    this.service.refreshList();
    this.populateForm(this.service.list)   
  }

}
