import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { RegulatoryService } from '../../../../@core/backend/common/services/regulatory.service';
import { RegulatoryInterface } from '../../../../@core/interfaces/auction/regulatory.model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-regulatory-detail',
  templateUrl: './regulatory-detail.component.html',
  styleUrls: ['./regulatory-detail.component.scss']
})
export class RegulatoryDetailComponent extends BasePage {

  
  regulatory: RegulatoryInterface;

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: RegulatoryService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService) { 
      super();
      if (null != context.regulatory){
        this.regulatory = context.regulatory;
      }
    }
    actionBtn : string = "Guardar";

    formRegulatory = this.fb.group({
    id:[''],

    id_fraccion: ['', Validators.required],

    numero: ['', Validators.required],

    descripcion: ['', Validators.required],

    validar_ef: ['', Validators.required],
    
    validar_ec: ['', Validators.required],

    version: [null, Validators.compose([Validators.pattern("^([0-9]+)+([.][0-9]+)+([.][0-9]+)?$"),Validators.required])],




    });
  
  get validateRegulatory(){
    return this.formRegulatory.controls;
  }
    
  ngOnInit(): void {
    
    if(this.regulatory){
      this.actionBtn = "Actualizar";
      this.formRegulatory.patchValue(this.regulatory)
     
    }
  }

  register(): void {
    const data = this.formRegulatory.value;
    if( this.actionBtn == "Guardar"){
      this.service.register(data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.error(err);
      })
    }else{
      this.service.update(this.regulatory.id,data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.error(err);
      })
    }
  }
}
