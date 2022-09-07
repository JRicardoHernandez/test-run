import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { switchMap, map } from 'rxjs/operators';
import { ImageCategoryApi } from '../api/image-category.api';
import { FetchedSubCategoriesModel, ImageCategoryData } from '../../../interfaces/auction/fetched-sub-categories';

@Injectable()
export class ImageCategoryService extends ImageCategoryData {
    constructor(private api: ImageCategoryApi) {
        super();
    }

    get gridDataSource(): DataSource {
        return this.api.categoryDataSource;
    }
    //list(pageNumber: number, pageSize: number): Observable<GridData<GoodSchedule>>;
    list(pageNumber: number = 1, pageSize: number = 10): Observable<FetchedSubCategoriesModel[]> {
        return this.api.list(pageNumber, pageSize);
    }
}