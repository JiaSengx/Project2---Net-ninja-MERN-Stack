import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export abstract class ApiBaseService {
  constructor(protected http: HttpClient) {}

  protected get apiEndpoint() {
    return `${environment.apiUrl}/api`;
  }

  getRecords(subApiUrl: string) {
    return this.http.get(`${this.apiEndpoint}/${subApiUrl}`);
  }
}
