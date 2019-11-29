import { Component, OnInit } from '@angular/core';
import { CopafilmesService } from 'src/app/shared/copafilmes.service';
import { Copafilmes } from 'src/app/shared/copafilmes.model';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-copafilmes',
  templateUrl: './copafilmes.component.html',
  styles: []
})
export class CopafilmesComponent implements OnInit {
  selectedRow : Number = 0;
  list: Array<Copafilmes> = [];
  constructor(private route:Router,private service:CopafilmesService) { 

}

setClickedRow(pd,event){
 
    if(this.list.indexOf(pd) == -1)
    {
      if(this.list.length > 7)
      {
        alert("O máximo de filmes selecionados já foi atingido!");
        event.preventDefault();
      }
      else
        this.list.push(pd)
     }
    else if(this.list.indexOf(pd) > -1)   
      this.list.splice(this.list.indexOf(pd), 1);   
  this.selectedRow = this.list.length;   
}
  populateForm(pd: Copafilmes[]) {
    debugger;
    this.service.formData = Object.assign({}, pd);
  }
  
  ngOnInit() {
    debugger;
    this.service.refreshList();
    this.populateForm(this.service.list)   
  }
  gerarCopaFilmes(){
    debugger; 
    this.route.navigate(['/copafilmesfinal']);
  }

}
