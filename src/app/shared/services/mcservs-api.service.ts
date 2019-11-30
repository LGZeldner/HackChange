import { Injectable } from '@angular/core';
import { BaseApi } from './base-api';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class McservsApiService extends BaseApi {
  header: HttpHeaders;
  url = "mcservs";
  constructor(httpClient: HttpClient) {
    super (httpClient);
    this.header = new HttpHeaders();
    this.header.set ('Content-type', 'application/json');
  }
  async getMcservs () {
    return await this.get (this.url, this.header).toPromise();
  }
  postMcservs (data) {
    return this.post (this.url, data, this.header).toPromise();
  }
  putMcservs (id: number, data) {
    return this.put (`${this.url}/${id}`, data, this.header).toPromise();
  }
  deleteMcservs (id: number) {
    return this.delete (`${this.url}/${id}`, this.header).toPromise();
  }
}

