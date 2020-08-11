import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-president-voter',
  templateUrl: './president-voter.component.html',
  styleUrls: ['./president-voter.component.css'],
})
export class PresidentVoterComponent {
  constructor() {}
  @Input() othersVote = 0;
  @Input() myVote = 0;

  @Output() vote = new EventEmitter();

  upVote(): void {
    if (this.myVote === 1) {
      return;
    }

    this.myVote++;

    this.vote.emit({ myVote: this.myVote });
  }

  downVote(): void {
    if (this.myVote === -1) {
      return;
    }

    this.myVote--;

    this.vote.emit({ myVote: this.myVote });
  }

  get totalVotes(): number {
    return this.othersVote + this.myVote;
  }
}
