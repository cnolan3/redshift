import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class StatsService {
 
  constructor(private http: Http) { }

  /**
   * get stats data from back end
  **/
  getStats() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(environment.apiUrl + '/stats/stats', {headers: headers})
      .map(res => res.json());
  }
}
