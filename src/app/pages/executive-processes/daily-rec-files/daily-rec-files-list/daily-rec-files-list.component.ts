import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-daily-rec-files-list',
  templateUrl: './daily-rec-files-list.component.html',
  styleUrls: ['./daily-rec-files-list.component.scss']
})
export class DailyRecFilesListComponent {
  

  public form: FormGroup;

  constructor(
    private fb: FormBuilder) {  
  }

  ngOnInit(): void {
    this.prepareForm();
  }
  private prepareForm() {
    this.form = this.fb.group({
      nomDeleg: ['', [Validators.required]],
      nomSubDel: ['', [Validators.required]],
      year: ['', [Validators.required]],
      month: ['', [Validators.required]],
    });}

  public get nomDeleg() { return this.form.get('nomDeleg'); }
  public get nomSubDel() { return this.form.get('nomSubDel'); }
  public get year() { return this.form.get('year'); }
  public get month() { return this.form.get('month'); }

mostrarInfo(): any{
  console.log(this.form.value)
}
}


