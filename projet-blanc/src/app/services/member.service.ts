import {inject, Injectable, OnInit, signal} from '@angular/core';
import {Member} from '../models/member.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberService implements OnInit {
  private readonly httpClient = inject(HttpClient);

  members = signal<Member[]>([]);

  constructor() { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.httpClient.get<{ message: string, body: Member[] }>('http://localhost:8080/api/member/getall').subscribe(response => {
      this.members.set(response.body);
      console.log(response.body);
    });
  }

  get(id: number) {
    if (id === undefined || id === null) {
      return null;
    }
    return this.members().find(member => member.id === id);
  }

  create(data: Member) {
    if (data === undefined || data === null) {
      console.error("Invalid data provided to create method");
      return false;
    }
    this.httpClient.post<Member>('http://localhost:8080/api/member/create', data).subscribe(member => {})
    this.members.update(member => [...member, data]);
    return true;
  }

  delete(id: number) {
    this.httpClient.delete('http://localhost:8080/api/member/delete/' + id).subscribe();
    const updatedMembers = this.members().filter(member => member.id !== id);
    this.members.set(updatedMembers);
  }


  

}
