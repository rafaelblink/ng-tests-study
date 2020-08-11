import { PresidentVoterComponent } from '../president-voter.component';
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
  it('should increase total votes when I click up vote button', () => {
    const button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    button.triggerEventHandler('click', null);

    expect(component.totalVotes).toBe(1);
  });
  it('should decrease total votes when I click down vote button', () => {
    component.myVote = -1;
    const button = fixture.debugElement.query(By.css('.glyphicon-menu-down'));
    button.triggerEventHandler('click', null);

    expect(component.totalVotes).toBe(-1);
  });
  it('should decrease total votes when I click down vote button', () => {
    const button = fixture.debugElement.query(By.css('.glyphicon-menu-down'));
    button.triggerEventHandler('click', null);

    expect(component.totalVotes).toBe(-1);
  });
  it('should page have title inside wrapper voter', () => {
    const wrapper = fixture.debugElement.query(
      By.css('section[data-test="wrapper-voter"]')
    );
    const title = wrapper.query(By.css('h2')).nativeElement as HTMLElement;
    expect(title.innerText).toBe('President Voter');
  });
});
