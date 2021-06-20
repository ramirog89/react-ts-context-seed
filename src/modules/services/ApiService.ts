import axios from 'axios';

import { ENV } from '../../constants';
import { getTodo_1, getTodo_2 } from '../../test/entities';

export class ApiService {
  private http = axios;

  public getTodo() {
    return this.request('todo', { method: 'GET', data: {} });
  }

  private request(url: string, { method, data }: { method: any, data: any}) {
    return this.http({
      baseURL: ENV.API.URL,
      url,
      method,
      data
    });
  }
}
