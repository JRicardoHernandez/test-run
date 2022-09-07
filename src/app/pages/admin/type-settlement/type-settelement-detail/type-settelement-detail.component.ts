import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbToastrService, NbWindowRef, NbWindowService, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { TypeSettelementService } from '../../../../@core/backend/common/services/type-settelement.service';
import { SweetAlertConstants, SweetalertModel } from '../../../../@core/interfaces/auction/sweetalert-model';
import { TypeSettelementInterface } from '../../../../@core/interfaces/auction/type-settelement.model';
import { BaseApp } from '../../../../@core/shared/base-app';
import { BasePage } from '../../../../@core/shared/base-page';
import { SweetalertService } from '../../../../shared/sweetalert.service';

@Component({
  selector: 'ngx-type-settelement-detail',
  templateUrl: './type-settelement-detail.component.html',
  styleUrls: ['./type-settelement-detail.component.scss']
})
export class TypeSettelementDetailComponent extends BasePage {

  Form: FormGroup;
  data: TypeSettelementInterface;

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: TypeSettelementService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer, private windowService: NbWindowService, public toastrService: NbToastrService, public sweetalertService: SweetalertService) {
    super(toastrService);
    if (null != context.data) {
      this.data = context.data;
    }
  }
  actionBtn: string = "Guardar";

  form = this.fb.group({
    cve: [null, Validators.compose([Validators.required])],
    name: [null, Validators.compose([Validators.pattern(""), Validators.required])],
    version: [null, Validators.compose([Validators.pattern(""), Validators.required])],
  });

  get validateOpinion() {
    return this.form.controls;
  }

  ngOnInit(): void {
    if (this.data.cve != null) {
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.data);
      this.form.controls['cve'].disable();
    }
  }

  register(): void {
    let params = {
      userCreation: 'User',
      creationDate: new Date(),
      userModificatio: 'User',
      modificatioDate: new Date(),
      cve: this.form.value.cve,
      name: this.form.value.name,
      version: this.form.value.version      
    }
    if (this.actionBtn == "Guardar") {
      this.service.register(params).subscribe(data => {
        this.onLoadFailed('success', 'Tipo Asentamiento', 'Registrado Correctamente');
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
    } else {
      this.service.update(this.data.cve, params).subscribe(data => {
        this.onLoadFailed('success', 'Tipo Asentamiento', 'Actualizado Correctamente');
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
