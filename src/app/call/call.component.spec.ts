import { CallService } from './call.service';
import { CallComponent } from './call.component';

import { from, throwError, EMPTY } from 'rxjs';

describe('call component tests', () => {
  let component: CallComponent;
  let service: CallService;
  beforeEach(() => {
    service = new CallService(null);
    component = new CallComponent(service);
  });
  it('should set calls property with the items returned from the server', () => {
    const call = { id: 1, title: 'a' };

    spyOn(service, 'getCalls').and.callFake(() => {
      return from([
        [
          { id: 1, title: 'a' },
          { id: 2, title: 'b' },
          { id: 3, title: 'c' },
        ],
      ]);
    });
    component.ngOnInit();
    expect(component.calls).toContain(call);
  });
  it('should call the server to save the cahnges when a new call is added', () => {
    const spy = spyOn(service, 'add').and.callFake((call) => {
      // tslint:disable-next-line: deprecation
      return EMPTY;
    });
    component.add();
    expect(spy).toHaveBeenCalled();
  });
  it('should add the new todo returned from the server', () => {
    const call = { id: 1, title: 'name' };
    // spyOn(service, 'add').and.callFake(() => {
    //   return from([call]);
    // });
    spyOn(service, 'add').and.returnValue(from([call]));
    component.add();
    expect(component.calls.indexOf(call)).toBeGreaterThan(-1);
  });
  it('should set the message propertie if server return error', () => {
    const message = 'Error from the server';
    spyOn(service, 'add').and.returnValue(throwError(message));
    component.add();
    expect(component.message).toBe(message);
  });
  it('should call the server to delete a call item if the user confirms', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    const spy = spyOn(service, 'delete').and.returnValue(EMPTY);

    component.delete(1);
    expect(spy).toHaveBeenCalledWith(1);
  });
  it('should NOT call the server to delete a call item if the user cancels', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    const spy = spyOn(service, 'delete').and.returnValue(EMPTY);

    component.delete(1);
    expect(spy).not.toHaveBeenCalled();
  });
});
