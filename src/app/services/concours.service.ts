import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Concour } from '../models/concour';


@Injectable({
  providedIn: 'root'
})
export class ConcourService {

  readonly  basUrl='http://localhost:3001/concours';

  constructor(private http: HttpClient) { }

  all() {
      return this.http.get<Concour[]>(this.basUrl+'/all');
  }

  add(concour: Concour) {
      return this.http.post(this.basUrl+`/add`, concour);
  }

  remove(id:String) {
    console.log(id)
      return this.http.delete(this.basUrl+`/remove/${id}`);
  }
}
