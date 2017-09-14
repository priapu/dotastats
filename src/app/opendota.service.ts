import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OpendotaService {

  constructor(private http: Http) {}

  getHeroes() {
    return this.http.get('https://api.opendota.com/api/heroStats').map((res:Response) => res.json());
  }

  getProfile(id= '270336628') {
    return this.http.get('https://api.opendota.com/api/players/'+id).map((res:Response) => res.json());
  }

}
