import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService, NbWindowRef, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BasePage } from '../../../../@core/shared/base-page';
import { BehaviorSubject } from 'rxjs';

import { STRING_PATTERN } from '../../../../@components/constants';
import { NUMBERS_PATTERN } from '../../../../@components/constants';
import { RackInterface } from '../../../../@core/interfaces/auction/rack.model';
import { BatchService } from '../../../../@core/backend/common/services/batch.service'; 
import { RackService } from '../../../../@core/backend/common/services/rack.service'; 
import { WarehouseService } from '../../../../@core/backend/common/services/warehouse.service'; 

@Component({
  selector: 'ngx-rack-detail',
  templateUrl: './rack-detail.component.html',
  styleUrls: ['./rack-detail.component.scss']
})
export class RackDetailComponent extends BasePage implements OnInit {

  public form: FormGroup;
  private data: RackInterface;
  public actionBtn: string = "Guardar";
  public filteredOptions$: BehaviorSubject<any[]> = new BehaviorSubject([]);
  public filteredWarehouseOptions$: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(
    @Inject(NB_WINDOW_CONTEXT) context,
    private service: RackService,
    private warehouseService: WarehouseService,
    private batchService: BatchService,
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    public windowRef: NbWindowRef,
    public toastrService: NbToastrService,
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
      id: [null, Validators.compose([ Validators.required, Validators.maxLength(3), Validators.pattern(NUMBERS_PATTERN) ])],
      warehouse: [null, Validators.compose([ Validators.required, Validators.minLength(1), Validators.pattern(STRING_PATTERN)]) ],
      idWarehouse: [null, Validators.compose([ Validators.required, Validators.minLength(1), Validators.maxLength(5),Validators.pattern(NUMBERS_PATTERN) ])],
      batch: [null, Validators.compose([ Validators.required, Validators.minLength(1), Validators.pattern(STRING_PATTERN) ])],
      idBatch: [null, Validators.compose([ Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.pattern(NUMBERS_PATTERN)]) ],
      description: [null, Validators.compose([ Validators.required, Validators.minLength(1), Validators.maxLength(39), Validators.pattern(STRING_PATTERN) ])], 
      status: [null, Validators.compose([ Validators.required, Validators.maxLength(1), Validators.pattern(STRING_PATTERN) ])],
      registerNumber: [null, Validators.compose([ Validators.pattern(NUMBERS_PATTERN) ])],
    });
    if (this.data) { 
      const dataUpdt = {
        ...this.data,
        idWarehouse: this.data.idWarehouse.idWarehouse,
        warehouse: this.data.idWarehouse.description,
        idBatch: this.data.idBatch.id,
        batch: this.data.description
      } 
      this.actionBtn = "Actualizar";
      this.form.patchValue(dataUpdt);
      this.form.controls['id'].disable();
      this.form.controls['warehouse'].disable();
      this.form.controls['batch'].disable();
    }
    this.form.controls['warehouse'].valueChanges.subscribe((value: string) => {
      if (value) {
        this.warehouseService.search(value).subscribe(data => {
          this.filteredWarehouseOptions$.next(data);
        })
      }
    })
    this.form.controls['batch'].valueChanges.subscribe((value: string) => {
      if (value) {
        this.batchService.search(value).subscribe(data => {
          this.filteredOptions$.next(data);
        })
      }
    })
  }

  public get id() { return this.form.get('id'); }
  public get warehouse() { return this.form.get('warehouse'); }
  public get batch() { return this.form.get('batch'); }
  public get description() { return this.form.get('description'); }
  public get rackStatus() { return this.form.get('status'); }
  public get registerNumber() { return this.form.get('registerNumber'); }

  public onSelectionChangeWarehouse(event){
    if(event.idWarehouse){
      this.form.controls['idWarehouse'].setValue(event.idWarehouse);
      this.form.controls['warehouse'].setValue(`${event.registerNumber} - ${event.description}`);
    }  
  }

  public onSelectionChangeBatch(event){
    if(event.id){
      this.form.controls['idBatch'].setValue(event.id);
      this.form.controls['batch'].setValue(`${event.numRegister} - ${event.description}`);
    }   
  }

  public register(): void {
    const data = this.form.getRawValue();
    this.actionBtn == "Guardar" ? this.createRegister(data) : this.updateRegister(data);
  }

  private createRegister(data): void {
    this.service.register(data).subscribe(
      (res) => {
        this.onLoadFailed('success', 'Rack', 'Registrado Correctamente');
      }, err => {
        const error = err.status === 0
          ? SweetAlertConstants.noConexion
          : err.error?.message
            ? err.error.message
            : err.message;
        this.onLoadFailed('danger', 'Error', error);
      }, () => {
        this.windowRef.close();
      });
  }

  private updateRegister(data): void {
    const id = {
      id: this.data.id, 
      idWarehouse: this.data.idWarehouse.idWarehouse,
      idBatch: this.data.idBatch.id
    }
    this.service.update( id, data).subscribe(
      () => {
        this.onLoadFailed('success', 'Rack', 'Actualizado Correctamente');
      }, err => {
        const error = err.status === 0
          ? SweetAlertConstants.noConexion
          : err.message;
        this.onLoadFailed('danger', 'Error', error);
      }, () => {
        this.windowRef.close();
      });
  }

}
