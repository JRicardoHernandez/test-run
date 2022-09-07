import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NG_VALIDATORS, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NbWindowService, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { EntfedService } from '../../../../@core/backend/common/services/entfed.service';
import { BaseApp } from '../../../../@core/shared/base-app';

@Component({
  selector: 'ngx-entfed-detail',
  templateUrl: './entfed-detail.component.html',
  styleUrls: ['./entfed-detail.component.scss']
})
export class EntfedDetailComponent extends BaseApp {

  Form: FormGroup;
  data: any = {};

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: EntfedService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService) { 
      super();
      if (null != context.data){
        this.data = context.data;
      }
    }
    actionBtn : string = "Guardar";

    form = this.fb.group({
      id:[null],
      otKey: [null, Validators.compose([Validators.required])],
      otWorth: [null, Validators.compose([Validators.required])],
      noRegistration: [null, Validators.compose([Validators.required])],
      abbreviation: [null, Validators.compose([Validators.required])],
      risk: [null, Validators.compose([Validators.required])],
    });
  
    get validateOpinion(){
      return this.form.controls;
    }
    ngOnInit(): void {
      if(this.data.id != null){
        this.actionBtn = "Actualizar";
        this.form.patchValue(this.data);
      }
      
    }
  register(): void {
    if( this.actionBtn == "Guardar"){
      this.service.register(this.form.value).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.error(err);
      })
    }else{
      this.service.update(this.data.id,this.form.value).subscribe(data =>{
       this.windowRef.close();
      },err =>{
        console.error(err);
      })
    }
  }
}
