import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { CatalogApi } from '../api/catalog-api';
import { StatusProcessModel } from '../../../interfaces/auction/status-process.model';

@Injectable()
export class StatusProcessService {
    constructor(private api: CatalogApi) { }

    get gridDataSource(): DataSource {
        return this.api.dataSource;
    }
    url = "status-process";
    
    list(pageNumber: number = 1, pageSize: number = 10) {
        const data = this.api.list(pageNumber, pageSize, this.url);
        return data;
    }
    search(text:string){
        return this.api.search(text,this.url);
    }
    register(statusProcess: StatusProcessModel): Observable<StatusProcessModel>{
        return this.api.register(statusProcess, this.url);
    }

    update(id:string, statusProcess: StatusProcessModel): Observable<StatusProcessModel>{
        return this.api.update(id, statusProcess, this.url);
    }

    delete(id:number){
        return this.api.delete(id, this.url);
    }
}