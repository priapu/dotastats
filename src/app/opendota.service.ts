import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OpendotaService {

  constructor(private http: Http) {}

  getHeroes() {
    return this.http.get('https://api.opendota.com/api/heroes').map((res:Response) => res.json());
  }

}
