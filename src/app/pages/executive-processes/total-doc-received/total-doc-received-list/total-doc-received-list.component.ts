import { Component, OnInit } from '@angular/core';  
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-total-doc-received-list',
  templateUrl: './total-doc-received-list.component.html',
  styleUrls: ['./total-doc-received-list.component.scss']
})
export class TotalDocReceivedListComponent  {
  
 
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
      detailReport: ['', [Validators.required]],
      
    });}

  public get fechaInicial() { return this.form.get('fechaInicial'); }
  public get fechaFinal() { return this.form.get('fechaFinal'); }
  public get detailReport() { return this.form.get('detailReport'); }
  
mostrarInfo(): any{
  console.log(this.form.value)
}

}
