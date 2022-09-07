import {SubCategoryModel} from "./sub-category.model";

export class FetchedCategoriesModel {

  constructor(public name: string, public id: number, deleted: boolean, public image?:[],SubCategories?:SubCategoryModel[]){}
}
