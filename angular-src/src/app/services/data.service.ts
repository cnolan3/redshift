import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http,
              private authService: AuthService) { }

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
   * search articles
  **/
  searchArticle(col, query, num, off) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(environment.apiUrl + '/data/search?col=' + col + '&query=' + query + '&num=' + num + '&off=' + off, {headers: headers})
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

  /**
   * search for star by name
  **/
  searchStar(query, which) {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    return this.http.get('http://www.astropical.space/astrodb/api.php?table=stars&which=' + which + '&limit=' + query + '&format=json', {headers: headers})
      .map(res => res.json());
  }

  /**
   * upload file
  **/
  uploadFile(formData) {
    /*
    const headers = new Headers();
    const token = this.authService.getToken();
    console.log("token:", token);
    headers.append('Authorization', token);
    */
    return this.http.post(environment.apiUrl + '/pId/upload', formData)
      .map(res => res.json());
  }
}
