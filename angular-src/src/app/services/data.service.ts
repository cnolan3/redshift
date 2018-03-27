import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  /**
   * get stats data from back end
  **/
  getStats() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(environment.apiUrl + '/data/stats', {headers: headers})
      .map(res => res.json());
  }

  /**
   * get article by id
  **/
  getArticle(id) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(environment.apiUrl + '/data/articles?id=' + id, {headers: headers})
      .map(res => res.json());
  }

  /**
   * get latest articles
  **/
  getLatestArts(num, off) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(environment.apiUrl + '/data/latestart?num=' + num + '&off=' + off, {headers: headers})
      .map(res => res.json());
  }
}
