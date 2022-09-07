import {SubCategoryModel} from "./sub-category.model";

export class CategoryModel {
  name: string;
  id:number;
  imageUrl:string;
  deleted:boolean;
  SubCategories?:SubCategoryModel[];
  constructor(name: string, id: number, deleted:boolean,SubCategories?: SubCategoryModel[]){
    this.name = name;
    this.id = id;
    this.SubCategories = SubCategories;
    this.imageUrl = null;
    this.deleted = deleted;
  }
}
