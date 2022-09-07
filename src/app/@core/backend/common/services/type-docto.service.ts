import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { CatalogApi } from '../api/catalog-api';
import { TypeDoctoInterface } from '../../../interfaces/auction/type-docto.model';

@Injectable()
export class TypeDoctoService {
    url = 'type-docto';
    constructor(private api: CatalogApi) { }

    get gridDataSource(): DataSource {
        return this.api.dataSource;
    }
    
    list(pageNumber: number = 1, pageSize: number = 10) {
        const data = this.api.list(pageNumber, pageSize,this.url);
        return data;
    }
    register(Data: TypeDoctoInterface): Observable<TypeDoctoInterface>{
        return this.api.register(Data,this.url);
    }

    update(id:number, Data: TypeDoctoInterface): Observable<TypeDoctoInterface>{
        return this.api.update(id, Data,this.url);
    }

    delete(id:number){
        return this.api.delete(id,this.url);
    }

    search(text:string){
        return this.api.search(text,this.url);
    }
}