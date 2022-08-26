import {
  Injectable
} from '@angular/core';
import {
  HttpClient,
  HttpParams
} from '@angular/common/http';
import {
  Observable
} from 'rxjs';
import {
  HttpService
} from './http.service';
import {
  DataSource
} from 'ng2-smart-table/lib/lib/data-source/data-source';
@Injectable()
export class CatalogApi {
  private apiController: string;
  constructor(private api: HttpService, private http: HttpClient) {}
  get dataSource(): DataSource {
    return this.api.getServerDataSource(`${this.api.apiUrl}/${this.apiController}`);
  }
  list(pageNumber: number, pageSize: number, url: string): Observable < any[] > {
    this.apiController = url;
    const params = new HttpParams().set('inicio', `${pageNumber+1}`).set('pageSize', `${pageSize}`);
    return this.api.get(this.apiController, {
      params
    });
  }

  search(text: string, url: string) {
    this.apiController = url;
    const params = new HttpParams().set('text', `${text}`);
    return this.api.get(this.apiController + '/search', {
      params
    });
  }
  listAll(url: string) {
    this.apiController = url;
    return this.api.get(this.apiController);
  }
  register(paragraph: any, url: string): Observable < any > {
    this.apiController = url;
    return this.api.post(this.apiController, paragraph);
  }
  update(id: number | string, paragraph: any, url: string) {
    this.apiController = url;
    return this.api.put(this.apiController + '/' + id, paragraph);
  }
  updateCompose(keys: Object, paragraph: any, url: string) {
    this.apiController = url;
    const keysArray = Object.values(keys);
    const keysString = keysArray.join('/')
    /*
    keys = {
      id: 3,
      idQuestion: 1
    }
    [3, 1]
     => /3/1
    */
   console.log( this.apiController + '/' + keysString )
    return this.api.put(this.apiController + '/' + keysString, paragraph);
  }
  delete(id: number | string, url: string) {
    this.apiController = url;
    return this.api.delete(this.apiController + '/' + id);
  }
}
