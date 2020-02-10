import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly  basUrl='http://localhost:3001/users';

  constructor(private http: HttpClient) { }

  getAll() {
      return this.http.get<User[]>('http://localhost:5001/profile/all');
  }

  register(user: User) {
      return this.http.post(this.basUrl+`/register`, user);
  }

  delete(id: number) {
      return this.http.delete(`/users/${id}`);
  }
}
