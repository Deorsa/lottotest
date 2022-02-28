import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RandomNumService {

  apiUrl: string = 'https://cors-anywhere.herokuapp.com/http://www.randomnumberapi.com/api/v1.0/random?min=0&max=45&count=6';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }
  getrandNums() {

  return this.http.get<Array<5>>(this.apiUrl);
  }

}
