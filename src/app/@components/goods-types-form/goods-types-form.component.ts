import { Component, OnInit, Input } from "@angular/core";
import { AbstractControl, FormGroup } from "@angular/forms";
import { DefaultSelect } from "../select/detault-select";
import { ISelectParams } from "../select/select-params";

@Component({
  selector: "ngx-goods-types-form", 
  templateUrl: "./goods-types-form.component.html",
  styleUrls: ["./goods-types-form.component.scss"],
})
export class GoodsTypesFormComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() typeField: string = "type";
  @Input() subtypeField: string = "subtype";
  @Input() ssubtypeField: string = "ssubtype";
  @Input() sssubtypeField: string = "sssubtype";
  types = new DefaultSelect();
  subtypes = new DefaultSelect();
  ssubtypes = new DefaultSelect();
  sssubtypes = new DefaultSelect();

  get type() {
    return this.form.get(this.typeField);
  }
  get subtype() {
    return this.form.get(this.subtypeField);
  }
  get ssubtype() {
    return this.form.get(this.ssubtypeField);
  }
  get sssubtype() {
    return this.form.get(this.sssubtypeField);
  }

  constructor() {}

  ngOnInit(): void {}

  getTypes(params: ISelectParams) {
    // this.service.getTypes(params).subscribe((data) => {
    //   this.types = new DefaultSelect([], 0);
    // });
  }

  getSubtypes(params: ISelectParams) {
    // this.service
    //   .getSubtypes({ type: this.type.value, ...params })
    //   .subscribe((data) => {
    //     this.subtypes = new DefaultSelect(data.data, data.count);
    //   });
  }

  getSsubtypes(params: ISelectParams) {
    // this.service
    //   .getSsubtypes({
    //     type: this.type.value,
    //     subtype: this.subtype.value,
    //     ...params,
    //   })
    //   .subscribe((data) => {
    //     this.ssubtypes = new DefaultSelect(data.data, data.count);
    //   });
  }

  getSssubtypes(params: ISelectParams) {
    // this.service
    //   .getSssubtypes({
    //     type: this.type.value,
    //     subtype: this.subtype.value,
    //     ssubtype: this.ssubtype.value,
    //     ...params,
    //   })
    //   .subscribe((data) => {
    //     this.sssubtypes = new DefaultSelect(data.data, data.count);
    //   });
  }

  onTypesChange(type: any) {
    this.resetFields([this.subtype, this.ssubtype, this.sssubtype]);
    this.subtypes = new DefaultSelect();
    this.ssubtypes = new DefaultSelect();
    this.sssubtypes = new DefaultSelect();
  }

  onSubtypesChange(subtype: any) {
    this.types = new DefaultSelect([subtype.type], 1);
    this.type.setValue(subtype.type.id);
    this.resetFields([this.ssubtype, this.sssubtype]);
    this.ssubtypes = new DefaultSelect();
    this.sssubtypes = new DefaultSelect();
  }

  onSsubtypesChange(ssubtype: any) {
    this.types = new DefaultSelect([ssubtype.type], 1);
    this.subtypes = new DefaultSelect([ssubtype.subtype], 1);
    this.type.setValue(ssubtype.type.id);
    this.subtype.setValue(ssubtype.subtype.id);
    this.resetFields([this.sssubtype]);
  }

  onSssubtypesChange(sssubtype: any) {
    this.types = new DefaultSelect([sssubtype.type], 1);
    this.subtypes = new DefaultSelect([sssubtype.subtype], 1);
    this.ssubtypes = new DefaultSelect([sssubtype.ssubtype], 1);
    this.type.setValue(sssubtype.type.id);
    this.subtype.setValue(sssubtype.subtype.id);
    this.ssubtype.setValue(sssubtype.ssubtype.id);
  }

  resetFields(fields: AbstractControl[]) {
    fields.forEach((field) => {
      field.setValue(null);
    });
    this.form.updateValueAndValidity();
  }
}
