import { Component, OnInit } from '@angular/core';  
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 


@Component({
  selector: 'ngx-assets-rec-admin-list',
  templateUrl: './assets-rec-admin-list.component.html',
  styleUrls: ['./assets-rec-admin-list.component.scss']
})
export class AssetsRecAdminListComponent  {


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
      nomDeleg: ['', [Validators.required]],
      nomSubDel: ['', [Validators.required]],
      clave: ['', [Validators.required]],
      estatus: ['', []],
    });}

  public get fechaInicial() { return this.form.get('fechaInicial'); }
  public get fechaFinal() { return this.form.get('fechaFinal'); }
  public get nomDeleg() { return this.form.get('nomDeleg'); }
  public get nomSubDel() { return this.form.get('nomSubDel'); }
  public get clave() { return this.form.get('clave'); }
  public get estatus() { return this.form.get('estatus'); }

mostrarInfo(): any{
  console.log(this.form.value)
}
}
