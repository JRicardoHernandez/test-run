import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { CatalogApi } from '../api/catalog-api';
import { LegalSupport } from '../../../interfaces/auction/legal-suport.model';

@Injectable()
export class LegalSupportService {
    constructor(private api: CatalogApi) { }
    url = 'legal-supports'
    get gridDataSource(): DataSource {
        return this.api.dataSource;
    }

    list(pageNumber: number = 1, pageSize: number = 10) {
        const data = this.api.list(pageNumber, pageSize, this.url);
        return data;
    }

    search(text: string) {
        return this.api.search(text, this.url);
    }

    register(legendData: LegalSupport): Observable<LegalSupport> {
        return this.api.register(legendData, this.url);
    }

    update(id: string, legendData: LegalSupport): Observable<LegalSupport> {
        return this.api.update(id, legendData, this.url);
    }

    delete(id: number) {
        return this.api.delete(id, this.url);
    }
}