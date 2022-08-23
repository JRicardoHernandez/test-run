import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { CatalogApi } from '../api/catalog-api';
import { GenericModel } from '../../../interfaces/auction/generic.model';

@Injectable()
export class GenericService {
    constructor(private api: CatalogApi) { }

    get gridDataSource(): DataSource {
        return this.api.dataSource;
    }
    url = "generics";
    
    list(pageNumber: number = 1, pageSize: number = 10) {
        const data = this.api.list(pageNumber, pageSize, this.url);
        return data;
    }
    search(text:string){
        return this.api.search(text,this.url);
    }
    register(legendData: GenericModel): Observable<GenericModel>{
        return this.api.register(legendData, this.url);
    }

    update(id:string, legendData: GenericModel): Observable<GenericModel>{
        return this.api.update(id, legendData, this.url);
    }

    delete(id:number){
        return this.api.delete(id, this.url);
    }
}