import { RoutingModule } from './routing.module';

describe('RoutingModule', () => {
  let RoutingModule: RoutingModule;

  beforeEach(() => {
    RoutingModule = new RoutingModule();
  });

  it('should create an instance', () => {
    expect(RoutingModule).toBeTruthy();
  });
});
