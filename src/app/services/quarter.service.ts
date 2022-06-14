import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Quarter} from "../Quarter";

@Injectable({
  providedIn: 'root'
})
export class QuarterService {

  private apiUrl = "http://localhost:5000/quarters";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Quarter[]> {
    return this.http.get<Quarter[]>(this.apiUrl);
  }
}
