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
  TypeGoodstService
} from '../../../../@core/backend/common/services/type-goods.service';
import {
  SweetAlertConstants,
  SweetalertModel
} from '../../../../@core/interfaces/auction/sweetalert-model';
import {
  BaseApp
} from '../../../../@core/shared/base-app';
import { BasePage } from '../../../../@core/shared/base-page';
import {
  SweetalertService
} from '../../../../shared/sweetalert.service';

@Component({
  selector: 'ngx-type-good-detail',
  templateUrl: './type-good-detail.component.html',
  styleUrls: ['./type-good-detail.component.scss']
})
export class TypeGoodDetailComponent extends BasePage {

  Form: FormGroup;
  data: any = {};

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: TypeGoodstService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer, private windowService: NbWindowService, public toastrService: NbToastrService, public sweetalertService: SweetalertService) {
    super(toastrService);
    if (null != context.data) {
      this.data = context.data;
    }
  }
  actionBtn: string = "Guardar";

  form = this.fb.group({
    id: [null],
    name: [null, Validators.compose([Validators.pattern(""), Validators.required])],
    version: [null, Validators.compose([Validators.pattern(""), Validators.required])],
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
      creationDate: new Date(),
      userModificatio: 'User',
      modificatioDate: new Date(),
      name: this.form.value.name,
      version: this.form.value.version
    }
    if (this.actionBtn == "Guardar") {
      this.service.register(params).subscribe(data => {
        this.onLoadFailed('success', 'Tipo Bien', 'Registrado Correctamente');
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
        this.onLoadFailed('success', 'Tipo Bien', 'Actualizado Correctamente');
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
      this.windowRef.close();
    }
  }
}
