import { ChangeDetectorRef, Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { DomSanitizer } from '@angular/platform-browser';
import { BaseApp } from '../../../../@core/shared/base-app';
import { RAuntDicService} from '../../../../@core/backend/common/services/r-asunt-dic.service';

@Component({
  selector: 'ngx-r-asunt-dic-detail',
  templateUrl: './r-asunt-dic-detail.component.html',
  styleUrls: ['./r-asunt-dic-detail.component.scss']
})
export class RAsuntDicDetailComponent extends BaseApp {

  rASuntDic: any = {};

  constructor(private fb: FormBuilder, 
    protected cd: ChangeDetectorRef, 
    protected router: Router, 
    private service: RAuntDicService,
    public windowRef: NbWindowRef, 
    @Inject(NB_WINDOW_CONTEXT) context, 
    private dom: DomSanitizer,  
    private windowService: NbWindowService) { 
      super();
      if (null != context.norm){
        this.rASuntDic = context.norm;
      }
    }
    actionBtn : string = "Guardar";

    form = this.fb.group({
      code: [null, Validators.compose([Validators.pattern("[0-9]{0,255}"),Validators.required])],
      dictum: [null, Validators.compose([Validators.pattern("[0-9]{0,255}"),Validators.required])],
      doc: [null, Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9@.-_-]{1,200}")])],
      bien: [null, Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9@.-_-]{1,200}")])],
      g_of: [null, Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9@.-_-]{1,200}")])],
      i: [null, Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9@.-_-]{1,200}")])],
      e: [null, Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9@.-_-]{1,200}")])],
      no_registro: [null, Validators.compose([Validators.pattern("[0-9]{0,255}"),Validators.required])],
      tipo_volante: [null],
    });
  
    get validate(){
      return this.form.controls;
    }
    
  ngOnInit(): void {
    
    if(this.rASuntDic.id){
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.rASuntDic)
    }
    
  }

  register(): void {
    const data = this.form.value;
    data.modificationDate = Date();
    if( this.actionBtn == "Guardar"){

      data.userCreation ="Rafael";
      data.userModification = "Antonio";
      data.creationDate = Date();

      this.service.register(data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.error(err);
      })
    }else{
      this.service.update(this.rASuntDic.id,data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.error(err);
      })
    }
  }
}
