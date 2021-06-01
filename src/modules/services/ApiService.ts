import axios from 'axios';

import { ENV } from '../../constants';

export class ApiService {
  http = axios;

  public getTodo() {
    return this.request('anytodo', { method: 'GET', data: {} });
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
