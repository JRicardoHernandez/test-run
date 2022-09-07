import { Component, OnInit } from '@angular/core';  

import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 

@Component({
  selector: 'ngx-a-accumulated-assets-list',
  templateUrl: './a-accumulated-assets-list.component.html',
  styleUrls: ['./a-accumulated-assets-list.component.scss']
})
export class AAccumulatedAssetsListComponent { 


  public form: FormGroup;

  constructor(
    private fb: FormBuilder) {  
  }

  ngOnInit(): void {
    this.prepareForm();
  }
  private prepareForm() {
    this.form = this.fb.group({
      fechaInicial: ['', [Validators.required]],
      fechaFinal: ['', [Validators.required]],
      
    });}

  public get fechaInicial() { return this.form.get('fechaInicial'); }
  public get fechaFinal() { return this.form.get('fechaFinal'); }
  

mostrarInfo(): any{
  console.log(this.form.value)
}


}
