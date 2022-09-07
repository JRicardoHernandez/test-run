import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbToastrService, NbWindowRef, NbWindowService, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { TypeDoctoService } from '../../../../@core/backend/common/services/type-docto.service';
import { TypeGoodstService } from '../../../../@core/backend/common/services/type-goods.service';
import { SweetAlertConstants, SweetalertModel } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BaseApp } from '../../../../@core/shared/base-app';
import { BasePage } from '../../../../@core/shared/base-page';
import { SweetalertService } from '../../../../shared/sweetalert.service';

@Component({
  selector: 'ngx-type-docto-detail',
  templateUrl: './type-docto-detail.component.html',
  styleUrls: ['./type-docto-detail.component.scss']
})
export class TypeDoctoDetailComponent extends BasePage {

  Form: FormGroup;
  data: any = {};

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: TypeDoctoService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService, public toastrService: NbToastrService, public sweetalertService: SweetalertService) { 
      super(toastrService);
      if (null != context.data){
        this.data = context.data;
      }
    }
    actionBtn : string = "Guardar";

    form = this.fb.group({
      id:[null,Validators.compose([Validators.pattern(""), Validators.required])],
      description: [null, Validators.compose([Validators.pattern(""), Validators.required])],
      version: [null, Validators.compose([Validators.pattern(""),Validators.required])],
      estatus: [null, Validators.compose([Validators.pattern(""),Validators.required])]
    });
  
    get validateOpinion(){
      return this.form.controls;
    }

    ngOnInit(): void {
      if(this.data.id != null){
        this.actionBtn = "Actualizar";
       this.form.patchValue(this.data);
       this.form.controls['id'].disable();
      }      
    }

  register(): void {
    let params = {
      userCreation: 'User',
      creationDate:new Date(),
      userModificatio:'User',
      modificatioDate:new Date(),
      id: this.form.value.id,
      description: this.form.value.description,
      version: this.form.value.version,
      estatus:this.form.value.estatus
    }
    if( this.actionBtn == "Guardar"){      
      this.service.register(params).subscribe(data =>{
        this.onLoadFailed('success', 'Tipo Docto', 'Registrado Correctamente');
      }, err => {
        let error = '';
        if (err.status === 0) {
          error = SweetAlertConstants.noConexion;
        } else {
          error = err.message;
        }
        this.onLoadFailed('danger', 'Error', error);
      }, () => {
        this.windowRef.close();
      });
    }else{
      this.service.update(this.data.id,params).subscribe(data =>{
        this.onLoadFailed('success', 'Tipo Docto', 'Actualizado Correctamente');
      }, err => {
        let error = '';
        if (err.status === 0) {
          error = SweetAlertConstants.noConexion;
        } else {
          error = err.message;
        }
        this.onLoadFailed('danger', 'Error', error);
      }, () => {
        this.windowRef.close();
      });
    }
  }
}
