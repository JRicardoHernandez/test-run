import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 

@Component({
  selector: 'ngx-file-number-shared',
  templateUrl: './file-number-shared.component.html',
  styleUrls: ['./file-number-shared.component.scss']
})
export class FileNumberSharedComponent {

  public formExpediente : FormGroup;

  constructor(
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
    this.prepareForm();
  }

  private prepareForm() {
    this.formExpediente = this.fb.group({
      noExpediente: [null, [Validators.required]],
      averigPrevia: [null, [Validators.required]],
      causaPenal: [null, [Validators.required]],
      actaCircuns: [null, [Validators.required]],
      tocaPenal: [null, [Validators.required]],
    });}

  public get noExpediente() { return this.formExpediente.get('noExpediente'); }
  public get averigPrevia() { return this.formExpediente.get('averigPrevia'); }
  public get causaPenal() { return this.formExpediente.get('causaPenal'); }
  public get actaCircuns() { return this.formExpediente.get('actaCircuns'); }
  public get tocaPenal() { return this.formExpediente.get('tocaPenal'); }

    mostrarInfo(): any{
      console.log(this.formExpediente.value)
    }


}
