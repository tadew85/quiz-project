import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultsComponent } from './results/results.component';
import { ScoresComponent } from './scores/scores.component';


const appRoutes: Routes = [
  { path: "Scores", component: ScoresComponent },
  { path: "results", component: ResultsComponent },
  { path:"quiz", component: QuizComponent },
  { path: "", redirectTo: "/quiz", pathMatch: "full" }
  //,{ path: "**", component: QuizComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    ResultsComponent,
    ScoresComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
