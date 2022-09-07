import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NbWindowService, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { ThirdPartyCompanyService } from '../../../../@core/backend/common/services/third-party-company.service';
import { BaseApp } from '../../../../@core/shared/base-app';

@Component({
  selector: 'ngx-third-party-company-detail',
  templateUrl: './third-party-company-detail.component.html',
  styleUrls: ['./third-party-company-detail.component.scss']
})
export class ThirdPartyCompanyDetailComponent extends BaseApp {

  Form: FormGroup;
  data: any = {};

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: ThirdPartyCompanyService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService) { 
      super();
      if (null != context.data){
        this.data = context.data;
      }
    }
    actionBtn : string = "Guardar";

    form = this.fb.group({
      id:[null],
      keyCompany: [null, Validators.compose([Validators.required])],
      description: [null, Validators.compose([Validators.required])],
      cveZoneContract: [null, Validators.compose([Validators.required])]
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
      let params = {
        keyCompany:this.form.value.keyCompany,
        description:this.form.value.description,
        cveZoneContract:this.form.value.cveZoneContract
      }
      this.service.update(this.data.id,params).subscribe(data =>{
       this.windowRef.close();
      },err =>{
        console.error(err);
      })
    }
  }

}
