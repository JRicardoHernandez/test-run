import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { BehaviorSubject } from 'rxjs';
import { DelegationService } from '../../../../@core/backend/common/services/delegation.service';
import { SubdelegationService } from '../../../../@core/backend/common/services/subdelegation.service';
import { Subdelegation } from '../../../../@core/interfaces/auction/subdelegation.model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-subdelegation-detail',
  templateUrl: './subdelegation-detail.component.html',
  styleUrls: ['./subdelegation-detail.component.scss']
})
export class SubdelegationDetailComponent extends BasePage {

 
  Subdelegation: Subdelegation;
  formSubdelegation: FormGroup;
  filteredOptions$: BehaviorSubject<any[]> = new BehaviorSubject([]);


  
  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: SubdelegationService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer, private windowService: NbWindowService,
    private delegationService: DelegationService,
    private subDelegationService: SubdelegationService
  ) {
    super();
    if (null != context.Subdelegation) {
      this.Subdelegation = context.Subdelegation;
    }


    this.formSubdelegation = this.fb.group({
      id: [''],
      description: [null, Validators.required],
      phaseEdo: ['', Validators.required],
      detailDelegation:[''],
      numDelegation: [null, [Validators.min(1)]],
      numDailyCon: [null, [Validators.required]],
      numRegister: [null, [Validators.min(1)]],
      dateDailyCon:[new Date()]
    });
    this.formSubdelegation.controls['detailDelegation'].valueChanges.subscribe((value: string) => {
      if (value) {
        this.delegationService.search(value).subscribe(data => {
          this.filteredOptions$.next(data);
        })
      }
    })
  }
  actionBtn: string = "Guardar";


  get validateSubdelegation() {
    return this.formSubdelegation.controls;
  }

  ngOnInit(): void {

    if (this.Subdelegation) {
      this.actionBtn = "Actualizar";
      this.formSubdelegation.patchValue(this.Subdelegation)

    }
  }

  onSelectionChangeDelegation(event){
    if(event.id){
      this.formSubdelegation.controls['numDelegation'].setValue(event.id);
      this.formSubdelegation.controls['detailDelegation'].setValue(event.descripcion);
    }
  }

  
  register(): void {
    const data = this.formSubdelegation.value;
    data.modificationDate = Date();
    if (this.actionBtn == "Guardar") {

      data.userCreation = "Rafael";
      data.userModification = "Antonio";
      data.creationDate = Date();

      this.service.register(data).subscribe(data => {
        this.windowRef.close();
      }, err => {
        console.error(err);
      })
    } else {
      this.service.update(this.Subdelegation.id, data).subscribe(data => {
        this.windowRef.close();
      }, err => {
        console.error(err);
      })
    }

  }
}