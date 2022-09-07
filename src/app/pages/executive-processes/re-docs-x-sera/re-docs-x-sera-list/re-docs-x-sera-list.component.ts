import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-re-docs-x-sera-list',
  templateUrl: './re-docs-x-sera-list.component.html',
  styleUrls: ['./re-docs-x-sera-list.component.scss']
})
export class ReDocsXSeraListComponent  {

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
      noAreaDestino: ['', [Validators.required]],
      claveAreaDestino: ['', [Validators.required]],
      descriptionAreaDestino: ['', [Validators.required]],
      nameAreaDestino: ['', [Validators.required]],
    });}

  public get fechaInicial() { return this.form.get('fechaInicial'); }
  public get fechaFinal() { return this.form.get('fechaFinal'); }
  public get nomDeleg() { return this.form.get('nomDeleg'); }
  public get nomSubDel() { return this.form.get('nomSubDel'); }
  public get noAreaDestino() { return this.form.get('noAreaDestino'); }
  public get claveAreaDestino() { return this.form.get('claveAreaDestino'); }
  public get descriptionAreaDestino() { return this.form.get('descriptionAreaDestino'); }
  public get nameAreaDestino() { return this.form.get('nameAreaDestino'); }

mostrarInfo(): any{
  console.log(this.form.value)
}

}
