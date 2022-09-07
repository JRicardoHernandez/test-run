import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { BasePage } from '../../../../@core/shared/base-page';
import { IndicatorReport } from '../../../../@core/interfaces/auction/indicator-report';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NbWindowService, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { BehaviorSubject } from 'rxjs';


import {IndicatorReportService   } from '../../../../@core/backend/common/services/Indicator-report.service';

@Component({
  selector: 'ngx-indicator-report-detail',
  templateUrl: './indicator-report-detail.component.html',
  styleUrls: ['./indicator-report-detail.component.scss']
})
export class IndicatorReportDetailComponent extends BasePage {

  data:IndicatorReport;
  form: FormGroup;
  
  filteredOptions$: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private fb: FormBuilder, 
    protected cd: ChangeDetectorRef, 
    protected router: Router, 
    private service: IndicatorReportService,
    public windowRef: NbWindowRef, 
    @Inject(NB_WINDOW_CONTEXT) context, 
    private dom: DomSanitizer,  
    private windowService: NbWindowService) { 
      super();
      if (null != context.data){
        this.data = context.data;
      }

      
    this.form = this.fb.group({
      tipo_servicio:[null, Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9@.-_-]{1,200}")])],
      rango_porcentaje_inicial : [null,Validators.compose([Validators.pattern("[0-9]{1,255}"),Validators.required])],
      rango_porcentaje_final: [null, Validators.compose([Validators.pattern("[0-9]{1,255}"),Validators.required])],
      pena_convencional: [null,Validators.compose([Validators.pattern("[0-9]{1,255}"),Validators.required])],
      no_contrato : [null, Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9@.-_-]{1,50}")])],
      estatus : [null, Validators.compose([Validators.pattern("[0-9]{1,255}"),Validators.required])],
      version: [null, Validators.compose([Validators.pattern("[0-9]{1,255}"),Validators.required])],
    });
    /* this.form.controls['normDetalle'].valueChanges.subscribe((value: string) => {
      if (value) {
        this.normService.search(value).subscribe(data => {
          this.filteredOptions$.next(data);
        })
      }
    }) */
    }
    actionBtn : string = "Guardar";
  
    get validate(){
      return this.form.controls;
    }

  
    
  ngOnInit(): void {
    if(this.data){
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.data)
      //this.form.controls['normId'].setValue(this.data.normId['id'])
      //this.form.controls['normDetalle'].setValue(this.data.normId['norm'])
    }
    
  }

/*   onSelectionChangeNorm(event){
    if(event.id){
     // this.form.controls['normId'].setValue(event.id);
     // this.form.controls['normDetalle'].setValue(event.norm);
    }
        
  } */

  register(): void {
    const data = this.form.value;
   // data.modificationDate = Date();
    if( this.actionBtn == "Guardar"){
      data.fecha_modificacion = new Date();
      
      
      data.usuario_creacion ="Rafael";
      data.usuario_modificacion = "Antonio";
      data.fecha_creacion = new Date();
      
      this.service.register(data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }else{
      data.fecha_modificacion = new Date();
      data.usuario_modificacion = "Antonio";
      

      this.service.update(this.data.id,data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }
  }
}
