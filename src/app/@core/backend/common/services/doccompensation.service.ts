import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { CatalogApi } from '../api/catalog-api';
import { Doccompensation } from '../../../interfaces/auction/doccompensation.model';

@Injectable()
export class DoccompensationService {
    constructor(private api: CatalogApi) { }

    get gridDataSource(): DataSource {
        return this.api.dataSource;
    }

    url = "doc-resarcimientos";
    
    list(pageNumber: number = 1, pageSize: number = 10) {
        const data = this.api.list(pageNumber, pageSize,this.url);
        return data;
    }
    register(legendData: Doccompensation): Observable<Doccompensation>{
        return this.api.register(legendData, this.url);
    }

    update(id:number, legendData: Doccompensation): Observable<Doccompensation>{
        return this.api.update(id, legendData, this.url);
    }

    delete(id:number){
        return this.api.delete(id, this.url);
    }
    search(text:string){
        return this.api.search(text,this.url);
    }
}