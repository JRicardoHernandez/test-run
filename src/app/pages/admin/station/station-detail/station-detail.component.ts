import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { StationService } from '../../../../@core/backend/common/services/station.service';
import { Station } from '../../../../@core/interfaces/auction/station.model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-station-detail',
  templateUrl: './station-detail.component.html',
  styleUrls: ['./station-detail.component.scss']
})
export class StationDetailComponent extends BasePage {

  
  station: Station;

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: StationService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService) { 
      super();
      if (null != context.station){
        this.station = context.station;
      }
    }
    actionBtn : string = "Guardar";

    form = this.fb.group({
    id:[''],

    description: ['', Validators.required],
    
    numType: ['', Validators.required],

    numRegister: ['', Validators.required]

    });
  
  get validate(){
    return this.form.controls;
  }
    
  ngOnInit(): void {
    
    if(this.station){
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.station)
     
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
      this.service.update(this.station.id,data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.error(err);
      })
    }
  }
}
