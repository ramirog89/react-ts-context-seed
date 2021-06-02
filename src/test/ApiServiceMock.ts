import { getTodo_1 } from './entities';

export class ApiServiceMock {
  public getTodo = jest.fn().mockReturnValue([getTodo_1()]);
}
