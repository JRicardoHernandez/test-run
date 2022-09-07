import { Component, OnInit } from '@angular/core';    

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-q-accumulated-goods-list',
  templateUrl: './q-accumulated-goods-list.component.html',
  styleUrls: ['./q-accumulated-goods-list.component.scss']
})
export class QAccumulatedGoodsListComponent  {

  public formDelegation: FormGroup;

  constructor(
    private fb: FormBuilder) {  
  }

  ngOnInit(): void {
    this.prepareForm();
  }
  private prepareForm() {
    this.formDelegation = this.fb.group({
      fechaInicial: ['', [Validators.required]],
      fechaFinal: ['', [Validators.required]],
      nomDeleg: ['', [Validators.required]],
      nomSubDel: ['', [Validators.required]],
    });}

  public get fechaInicial() { return this.formDelegation.get('fechaInicial'); }
  public get fechaFinal() { return this.formDelegation.get('fechaFinal'); }
  public get nomDeleg() { return this.formDelegation.get('nomDeleg'); }
  public get nomSubDel() { return this.formDelegation.get('nomSubDel'); }

mostrarInfo(): any{
  console.log(this.formDelegation.value)
}


}

