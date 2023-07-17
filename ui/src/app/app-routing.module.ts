import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { QuizComponent } from './quiz/quiz.component';
import { LevelComponent } from './level/level.component';
import { ScoreComponent } from './score/score.component';

const routes: Routes = [
  {path: '' , component: RegisterComponent},
  {path: 'category' , component: LevelComponent},
  {path: 'quiz' , component: QuizComponent},
  {path: 'score' , component: ScoreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
