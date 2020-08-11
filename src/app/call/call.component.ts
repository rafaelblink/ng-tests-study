import { CallService } from './call.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.css'],
})
export class CallComponent implements OnInit {
  constructor(private service: CallService) {}

  calls: any[] = [];
  message;

  ngOnInit(): void {
    this.service.getCalls().subscribe((calls: any[]) => {
      this.calls = calls;
    });
  }

  add() {
    const newCall = { title: '... ' };
    this.service.add(newCall).subscribe(
      (t) => this.calls.push(t),
      (err) => (this.message = err)
    );
  }

  delete(id) {
    if (confirm('Are you sure?')) {
      this.service.delete(id).subscribe();
    }
  }
}
