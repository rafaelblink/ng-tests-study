import { HttpClient } from '@angular/common/http';

export class CallService {
  constructor(private http: HttpClient) {}

  add(call) {
    return this.http.post('...', call);
  }

  getCalls() {
    return this.http.get('...');
  }

  delete(id) {
    return this.http.delete('...');
  }
}
