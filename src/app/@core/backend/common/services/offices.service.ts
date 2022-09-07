import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { CatalogApi } from '../api/catalog-api';
import { StatusTransferInterface } from '../../../interfaces/auction/status-transfer.model';
import { OfficesModel } from '../../../interfaces/auction/offices.model';

@Injectable()
export class OfficesService {
    url = 'offices';
    constructor(private api: CatalogApi) { }

    get gridDataSource(): DataSource {
        return this.api.dataSource;
    }
    
    list(pageNumber: number = 1, pageSize: number = 10) {
        const data = this.api.list(pageNumber, pageSize,this.url);
        return data;
    }
    register(legendData: OfficesModel): Observable<OfficesModel>{
        return this.api.register(legendData,this.url);
    }

    update(id:number, legendData: OfficesModel): Observable<OfficesModel>{
        return this.api.update(id, legendData,this.url);
    }

    delete(id:number){
        return this.api.delete(id,this.url);
    }
    
    search(text:string){
        return this.api.search(text,this.url);
    }
}