import { Component, OnInit, Input, } from '@angular/core';  
import { FormGroup, AbstractControl } from '@angular/forms';
import { DefaultSelect } from "../select/detault-select";
import { ISelectParams } from "../select/select-params";


@Component({
  selector: 'ngx-deleg-subdeleg-shared',
  templateUrl: './deleg-subdeleg-shared.component.html',
  styleUrls: ['./deleg-subdeleg-shared.component.scss']
})

export class DelegSubdelegSharedComponent implements OnInit{

  @Input() form: FormGroup;
  @Input() delegationField: string = "delegation";
  @Input() subdelegationField: string = "subdelegation";
  @Input() showSubdelegation: boolean = true

  delegations = new DefaultSelect();
  subdelegations = new DefaultSelect();
  

  get delegation() {
    return this.form.get(this.delegationField);
  }

  get subdelegation() {
    return this.form.get(this.subdelegationField);
  }


  constructor() {}

  ngOnInit(): void {}

  getDelegations(params: ISelectParams) {
    // this.service.getTypes(params).subscribe((data) => {
    //   this.types = new DefaultSelect([], 0);
    // });
  }

  getSubDelegations(params: ISelectParams) {
    // this.service.getTypes(params).subscribe((data) => {
    //   this.types = new DefaultSelect([], 0);
    // });
  }

  onDelegationsChange(type: any) {
    this.resetFields([this.subdelegation]);
    this.subdelegations = new DefaultSelect();
  }

  onSubDelegationsChange(subdelegation: any) {
    this.delegations = new DefaultSelect([subdelegation.delegation], 1);
    this.delegation.setValue(subdelegation.delegation.id);
   
  }

  
  resetFields(fields: AbstractControl[]) {
    fields.forEach((field) => {
      field.setValue(null);
    });
    this.form.updateValueAndValidity();
  }
}


