import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { SatSaeClassificationService } from '../../../../@core/backend/common/services/satsae-classification.service';
import { SatSaeClassification } from '../../../../@core/interfaces/auction/satsae-classification.model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-satsae-classification-detail',
  templateUrl: './satsae-classification-detail.component.html',
  styleUrls: ['./satsae-classification-detail.component.scss']
})
export class SatsaeClassificationDetailComponent extends BasePage {

  
  satSae: SatSaeClassification;

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: SatSaeClassificationService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService) { 
      super();
      if (null != context.satSae){
        this.satSae = context.satSae;
      }
    }
    actionBtn : string = "Guardar";

    form = this.fb.group({
    id:[''],

    certificateDesc: ['', Validators.required],
    
    noClasifGoods: ['', Validators.required],

    type: ['', Validators.required],

    typeDesc: ['', Validators.required],

    chapter: ['', Validators.required],

    eon: ['', Validators.required],

    chapterDesc: ['', Validators.required],

    perishable: ['', Validators.required],

    unitMeasurement1: ['', Validators.required],

    unitMeasurement2: ['', Validators.required],

    unitMeasurement3: ['', Validators.required],

    transferable: ['', Validators.required]

    });
  
  get validate(){
    return this.form.controls;
  }
    
  ngOnInit(): void {
    
    if(this.satSae){
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.satSae)
     
    }
  }

  register(): void {
    const data = this.form.value;
    if( this.actionBtn == "Guardar"){
      this.service.register(data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.error(err);
      })
    }else{
      this.service.update(this.satSae.id,data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.error(err);
      })
    }
  }
}
