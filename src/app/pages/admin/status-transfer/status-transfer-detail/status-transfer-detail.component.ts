import {
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  DomSanitizer
} from '@angular/platform-browser';
import {
  Router
} from '@angular/router';
import {
  NbToastrService,
  NbWindowRef,
  NbWindowService,
  NB_WINDOW_CONTEXT
} from '@nebular/theme';
import {
  StatusTransferService
} from '../../../../@core/backend/common/services/status-trasnsfer.service';
import { SweetAlertConstants, SweetalertModel } from '../../../../@core/interfaces/auction/sweetalert-model';
import {
  BaseApp
} from '../../../../@core/shared/base-app';
import { BasePage } from '../../../../@core/shared/base-page';
import { SweetalertService } from '../../../../shared/sweetalert.service';

@Component({
  selector: 'ngx-status-transfer-detail',
  templateUrl: './status-transfer-detail.component.html',
  styleUrls: ['./status-transfer-detail.component.scss']
})
export class StatusTransferDetailComponent extends BasePage {

  Form: FormGroup;
  data: any = {};

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: StatusTransferService, public windowRef: NbWindowRef, public sweetalertService: SweetalertService, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer, private windowService: NbWindowService, public toastrService: NbToastrService,) {
    super(toastrService);
    if (null != context.data) {
      this.data = context.data;
    }
  }
  actionBtn: string = "Guardar";

  form = this.fb.group({
    id: [null],
    bank: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(30)])],
    code: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(20)])],
    description: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(300)])],
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
      bank: this.form.value.bank,
      code: this.form.value.code,
      description: this.form.value.description
    }
    if (this.actionBtn == "Guardar") {
      this.service.register(params).subscribe(data => {
        this.onLoadFailed('success', 'Estado Transferencia', 'Registrado Correctamente');
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
      this.service.update(this.data.id, params).subscribe(data => {
        this.onLoadFailed('success', 'Estado Transferencia', 'Actualizado Correctamente');
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
