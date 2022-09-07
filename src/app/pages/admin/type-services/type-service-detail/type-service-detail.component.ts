import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService, NbToastrService } from '@nebular/theme';
import { TypeServicesService } from '../../../../@core/backend/common/services/type-services.service';
import { ZoneGeographicService } from '../../../../@core/backend/common/services/zone-geographic.service';
import { SweetAlertConstants, SweetalertModel } from '../../../../@core/interfaces/auction/sweetalert-model';
import { TypeServicesInterface } from '../../../../@core/interfaces/auction/typeservices.model';
import { BasePage } from '../../../../@core/shared/base-page';
import { SweetalertService } from '../../../../shared/sweetalert.service';

@Component({
  selector: 'ngx-type-service-detail',
  templateUrl: './type-service-detail.component.html',
  styleUrls: ['./type-service-detail.component.scss']
})
export class TypeServiceDetailComponent extends BasePage {

  Form: FormGroup;
  data: any = {};

  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: TypeServicesService,
    public windowRef: NbWindowRef,
    @Inject(NB_WINDOW_CONTEXT) context,
    private dom: DomSanitizer,
    private windowService: NbWindowService, public toastrService: NbToastrService,
    public sweetalertService: SweetalertService) {
    super(toastrService);
    if (null != context.data) {
      this.data = context.data;
    }
  }
  actionBtn: string = "Guardar";

  form = this.fb.group({
    id: [null],
    type: [null, Validators.compose([Validators.pattern(""), Validators.required])],
    concept: [null, Validators.compose([Validators.pattern(""), Validators.required])],
    version: [null, Validators.compose([Validators.pattern(""), Validators.required])]
  });

  get validateOpinion() {
    return this.form.controls;
  }
  ngOnInit(): void {
    if (this.data.id != null) {
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.data);
    }

  }

  register(): void {
    let params = {      
      userCreation: 'User',
      creationDate:new Date(),
      userModificatio:'User',
      modificatioDate:new Date(),      
      type:this.form.value.type,
      concept:this.form.value.concept,
      version:this.form.value.version     
    }
    if (this.actionBtn == "Guardar") {
      this.service.register(params).subscribe(
        data => {
          this.onLoadFailed('success', 'Tipo Servicio', 'Registrado Correctamente');
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
      this.service.update(this.data.id, params).subscribe(
        data => {
          this.onLoadFailed('success', 'Tipo Servicio', 'Actualizado Correctamente');
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
