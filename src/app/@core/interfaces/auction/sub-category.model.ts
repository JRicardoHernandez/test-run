export class SubCategoryModel {

  name: string;
  id:number;
  imageUrl?:string;
  constructor(name:string,id:number){
    this.name = name;
    this.id = id;
    this.imageUrl = null;
  };
}
