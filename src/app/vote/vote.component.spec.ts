import { VoteComponent } from './vote.component';
describe('vote component tests', () => {
  // Arrange
  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });
  afterEach(() => {
    // it will run after all tests
  });
  beforeAll(() => {
    // it will run once before all tests
  });
  afterAll(() => {
    // it will run once after all tests
  });
  it('should increment totalVotes when up voted', () => {
    // Act
    component.upVotes();
    // Assert
    expect(component.totalVotes).toBe(1);
  });
  it('should decrement totalVotes when down voted', () => {
    // Act
    component.downVotes();
    // Assert
    expect(component.totalVotes).toBe(-1);
  });
});
