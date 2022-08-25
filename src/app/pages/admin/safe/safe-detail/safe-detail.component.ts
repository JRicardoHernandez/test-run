import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbToastrService } from '@nebular/theme';
import { BasePage } from '../../../../@core/shared/base-page';
import { SafeInterface } from '../../../../@core/interfaces/auction/safe.model';
import { SafeService } from '../../../../@core/backend/common/services/safe.service';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';


@Component({
  selector: 'ngx-safe-detail',
  templateUrl: './safe-detail.component.html',
  styleUrls: ['./safe-detail.component.scss']
})
export class SafeDetailComponent extends BasePage {

  storehouse: SafeInterface;

  public form: FormGroup;
  private data: any = {};
  public actionBtn: string = "Guardar";

  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: SafeService,
    public windowRef: NbWindowRef,
    public toastrService: NbToastrService,
    @Inject(NB_WINDOW_CONTEXT) context
  ) {
    super(toastrService);
    if (null != context.data) {
      this.data = context.data;
    }
  }
  ngOnInit(): void {
    this.prepareForm();
  }
  private prepareForm(): void {
    this.form = this.fb.group({

      idSafe:[''],
      manager: ['',Validators.required],
      descripcion: ['', Validators.required],
      ubication: ['',[Validators.required]],
      registerNumber: ['',[Validators.required]],
      municipalityCode: ['',[Validators.required]],
      localityCode: ['',Validators.required],
      stateCode: ['',[Validators.required]],
      cityCode: ['',Validators.required],

    });
  }
  
    public register(): void {
      const data = this.form.getRawValue();
      this.actionBtn == "Guardar" ? this.createRegister(data) : this.updateRegister(data);
    }
    private createRegister(data): void {
      this.service.register(data).subscribe(
        data => {
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
        data => {
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
        if (this.data.id != null) {
          this.actionBtn = "Actualizar";
          this.form.patchValue(this.data);
        }
      }

}
