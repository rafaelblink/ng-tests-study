import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styles: [],
})
export class VoteComponent implements OnInit {
  totalVotes = 0;
  constructor() {}

  ngOnInit(): void {}

  upVotes(): void {
    this.totalVotes++;
  }

  downVotes(): void {
    this.totalVotes--;
  }
}
