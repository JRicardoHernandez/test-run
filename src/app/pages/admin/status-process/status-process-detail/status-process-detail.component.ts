import { ChangeDetectorRef, Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService, NbToastrService } from '@nebular/theme';
import { DomSanitizer } from '@angular/platform-browser';
import { BaseApp } from '../../../../@core/shared/base-app';
import { STRING_PATTERN } from '../../../../@components/constants';
import { StatusProcessService } from '../../../../@core/backend/common/services/status-process.service';
import { BasePage } from '../../../../@core/shared/base-page';
import { StatusProcessModel } from '../../../../@core/interfaces/auction/status-process.model';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';

@Component({
  selector: 'ngx-status-process-detail',
  templateUrl: './status-process-detail.component.html',
  styleUrls: ['./status-process-detail.component.scss']
})
export class StatusProcessDetailComponent extends BasePage {
  public formStatusProcess: FormGroup;
  private data: StatusProcessModel;
  public actionBtn: string = "Guardar";
  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: StatusProcessService,
    public windowRef: NbWindowRef,
    public toastrService: NbToastrService,
    @Inject(NB_WINDOW_CONTEXT) context) {
    super(toastrService);
    if (null != context.data) {
      this.data = context.data;
    }
  }

  ngOnInit(): void {
    this.prepareForm();
  }
  private prepareForm() {
    this.formStatusProcess = this.fb.group({
      status: [null, Validators.compose([Validators.pattern("[a-zA-Z]((\.|_|-)?[a-zA-ZáéíóúÁÉÍÓÚ\u0020]+){0,255}"), Validators.required])],
      process: [null, Validators.compose([Validators.pattern("[a-zA-Z]((\.|_|-)?[a-zA-ZáéíóúÁÉÍÓÚ\u0020]+){0,255}"), Validators.required])],
      description: [null, Validators.compose([Validators.required])],
    });
    if (this.data) {
      this.actionBtn = "Actualizar";
      this.formStatusProcess.patchValue(this.data);
      this.estatus.disable();
    }
  }

  public get estatus() { return this.formStatusProcess.get('status'); }
  public get process() { return this.formStatusProcess.get('process'); }
  public get description() { return this.formStatusProcess.get('description'); }

  public register(): void {
    const data = this.formStatusProcess.getRawValue();
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
    this.service.update(this.data.status, data).subscribe(
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