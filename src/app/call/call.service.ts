import { HttpClient } from '@angular/common/http';

export class CallService {
  constructor(private http: HttpClient) {}

  add(call): any {
    return this.http.post('...', call);
  }

  getCalls(): any {
    return this.http.get('...');
  }

  delete(id): any {
    return this.http.delete('...');
  }
}
