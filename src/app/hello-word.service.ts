import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from './message';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelloWordService {
  private url= 'http://localhost:9999/api/v1/greeting';

  constructor(private http: HttpClient) { }

  helloWorldService() {
   // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('admin' + ':' + 'admin') });
    return this.http.get<Message>(this.url);
  }

  getName(id: string): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }
}
