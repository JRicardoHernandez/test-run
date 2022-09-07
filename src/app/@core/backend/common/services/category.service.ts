import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';

import { CategoryApi } from '../api/category.api';
import { FetchedSubCategoriesModel, ImageCategoryData } from '../../../interfaces/auction/fetched-sub-categories';
import { HttpEvent } from '@angular/common/http';

@Injectable()
export class CategoryService extends ImageCategoryData {
    constructor(private api: CategoryApi) {
        super();
    }

    get gridDataSource(): DataSource {
        return this.api.categoryDataSource;
    }
    
    list(pageNumber: number = 1, pageSize: number = 10): Observable<FetchedSubCategoriesModel[]> {
        return this.api.list(pageNumber, pageSize);
    }

    register = function (categoryData: FetchedSubCategoriesModel): Observable<FetchedSubCategoriesModel>{
        return this.api.register(categoryData);
    }

    upload(formData: FormData): Observable<HttpEvent<any>> {
        return this.api.upload(formData);
    }
}