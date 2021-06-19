import { getTodo_1 } from './entities';

export class ApiServiceMock {
  public getTodo = () => Promise.resolve([getTodo_1()]);
}
