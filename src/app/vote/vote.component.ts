import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styles: [],
})
export class VoteComponent implements OnInit {
  @Output() voteChanged = new EventEmitter();
  totalVotes = 0;
  constructor() {}

  ngOnInit(): void {}

  upVotes(): void {
    this.totalVotes++;
    this.voteChanged.emit(this.totalVotes);
  }

  downVotes(): void {
    this.totalVotes--;
    this.voteChanged.emit(this.totalVotes);
  }
}
