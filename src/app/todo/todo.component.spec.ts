import { FormBuilder, Validators } from '@angular/forms';
import { TodoComponent } from './todo.component';

describe('todo component tests', () => {
  let component: TodoComponent;
  beforeEach(() => {
    component = new TodoComponent(new FormBuilder());
  });

  it('should create a form with 2 controls', () => {
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
  });
  it('should make the name control required, check passing string empty, if control is invalid', () => {
    const control = component.form.get('name');
    control.setValue('');
    expect(control.invalid).toBeTruthy();
  });
  it('should make the email control valid', () => {
    const control = component.form.get('email');
    control.setValue('rafa@gmail.com');
    expect(control.valid).toBeTruthy();
  });
});
