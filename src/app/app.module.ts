import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VoteComponent } from './vote/vote.component';
import { TodoComponent } from './todo/todo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CallComponent } from './call/call.component';
import { PresidentVoterComponent } from './president-voter/president-voter.component';
import { GreeterComponent } from './greeter/greeter.component';

@NgModule({
  declarations: [AppComponent, VoteComponent, TodoComponent, CallComponent, PresidentVoterComponent, GreeterComponent],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
