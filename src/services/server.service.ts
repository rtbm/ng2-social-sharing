import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ServerService {
  private baseUrl = '';

  constructor(private http: Http) {
  }

  get(path): Observable<Response> {
    return this.http.get(`${this.baseUrl}${path}`, {})
      .map((res: Response) => res.json());
  }
}
