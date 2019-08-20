
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {

    constructor(private http: HttpClient) { }

    getConfig(): Observable<string>{
        return this.http.get<string>("http://localhost:8081/CountryStateCity/index");
    }
}