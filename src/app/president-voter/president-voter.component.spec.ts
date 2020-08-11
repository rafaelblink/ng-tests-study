import { PresidentVoterComponent } from './president-voter.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
describe('President vote component', () => {
  let component: PresidentVoterComponent;
  let fixture: ComponentFixture<PresidentVoterComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresidentVoterComponent],
    });
    fixture = TestBed.createComponent(PresidentVoterComponent);
    component = fixture.componentInstance;
    // fixture.nativeElement
    // fixture.debugElement
  });
  it('should render total votes', () => {
    component.othersVote = 20;
    component.myVote = 1;
    fixture.detectChanges();

    const debugElement = fixture.debugElement.query(By.css('.vote-count'));
    const element = debugElement.nativeElement as HTMLElement;

    expect(element.innerText).toContain('21');
  });
  it('should hightlight the upvote button if I have upvoted', () => {
    component.myVote = 1;
    fixture.detectChanges();
    const debugElement = fixture.debugElement.query(
      By.css('.glyphicon-menu-up')
    );
    expect(debugElement.classes.highlighted).toBeTruthy();
  });
});
