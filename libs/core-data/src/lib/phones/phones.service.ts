import { Injectable } from '@angular/core';
import { Phone } from './phone';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://kenneth-server.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class PhonesService {
  model = 'phones'

  constructor(private httpClient: HttpClient) { }

  getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  findPhone(phoneId: Phone) {
    return this.httpClient.get(this.getUrlForId(phoneId))
  }

  all() {
    return this.httpClient.get(this.getUrl());
  }

  create(phone: Phone) {
    return this.httpClient.post(this.getUrl(), phone);
  }

  delete(phone: Phone) {
    return this.httpClient.delete(this.getUrlForId(phone.id));
  }

  update(phone: Phone) {
    return this.httpClient.put(this.getUrlForId(phone.id), phone);
  }
}
