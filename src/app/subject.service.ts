import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Subject } from './subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private subjectUrl = 'http://210.140.173.214:3000/subjects';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getSubject(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.subjectUrl);
  }
}
