import { ChangeDetectorRef, Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService, NbToastrService } from '@nebular/theme';
import { DomSanitizer } from '@angular/platform-browser';
import { BaseApp } from '../../../../@core/shared/base-app';
import { STRING_PATTERN } from '../../../../@components/constants';
import { NonDeliveryReasonsService } from '../../../../@core/backend/common/services/non-delivery-reasons.service';
import { BasePage } from '../../../../@core/shared/base-page';
import { NonDeliveryReasonsModel } from '../../../../@core/interfaces/auction/non-delivery-reasons.model';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';


@Component({
  selector: 'ngx-non-delivery-reasons-detail',
  templateUrl: './non-delivery-reasons-detail.component.html',
  styleUrls: ['./non-delivery-reasons-detail.component.scss']
})
export class NonDeliveryReasonsDetailComponent extends BasePage {
  public formReason: FormGroup;
  private data: NonDeliveryReasonsModel;
  public actionBtn: string = "Guardar";
  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: NonDeliveryReasonsService,
    public windowRef: NbWindowRef,
    public toastrService: NbToastrService,
    @Inject(NB_WINDOW_CONTEXT) context) {
    super(toastrService);
    if (null != context.reason) {
      this.data = context.reason;
    }
  }

  ngOnInit(): void {
    this.prepareForm();
  }
  private prepareForm() {
    this.formReason = this.fb.group({
      id:[null],
      reasonType: [null, Validators.compose([Validators.pattern("^[a-zA-Z]{1,50}"), Validators.required])],
      eventType: [null, Validators.compose([Validators.pattern(""), Validators.required])],
      reason: [null, Validators.compose([Validators.pattern(""), Validators.required])],
      version: [null, Validators.compose([Validators.pattern(""), Validators.required])],
      status: [0, Validators.compose([Validators.required])],
    });
    if (this.data) {
      this.actionBtn = "Actualizar";
      this.formReason.patchValue(this.data)

    }
  }

  public get reasonType() { return this.formReason.get('reasonType'); }
  public get eventType() { return this.formReason.get('eventType'); }
  public get reason() { return this.formReason.get('reason'); }
  public get version() { return this.formReason.get('version'); }
  public get estatus() { return this.formReason.get('status'); }

  public register(): void {
    const data = this.formReason.getRawValue();
    this.actionBtn == "Guardar" ? this.createRegister(data) : this.updateRegister(data);
  }
  private createRegister(data): void {
    this.service.register(data).subscribe(
      () => {
        this.onLoadFailed('success', 'Despacho', 'Registrado Correctamente');
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
  private updateRegister(data): void {
    this.service.update(this.data.id, data).subscribe(
      () => {
        this.onLoadFailed('success', 'Despacho', 'Actualizado Correctamente');
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
