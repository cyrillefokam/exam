import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './page/signup/signup.component';
import { LoginComponent } from './page/login/login.component';
import { HomeComponent } from './page/home/home.component';
import { DashboardComponent } from './page/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './page/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from 'services/admin.guard';
import { NormalGuard } from 'services/normal.guard';
import { ProfileComponent } from './page/profile/profile.component';
import { WelcomComponent } from './page/admin/welcom/welcom.component';
import { ViewCategoriesComponent } from './page/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './page/admin/add-category/add-category.component';
import { ViewQuizzesComponent } from './page/admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './page/admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './page/admin/update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from './page/admin/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionComponent } from './page/admin/add-question/add-question.component';


const routes: Routes = [
  {

    path:'',
    component:HomeComponent,
    pathMatch:'full',
  },
  {
    path:'signup',
    component:SignupComponent,
    pathMatch:'full',
  },

  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full',
  },
  {
    path:'admin',
    component:DashboardComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:'',
        component:WelcomComponent,
      },
      {
        path:'profile',
        component:ProfileComponent,
      },  
      {
        path:'categories',
        component:ViewCategoriesComponent
      },
      {
        path:'add-category',
        component:AddCategoryComponent,
      },
      {
        path:'quizzes',
        component:ViewQuizzesComponent,
      },
      {
        path:'add-quiz',
        component:AddQuizComponent
      },
      {
        path:'quiz/:qid',
        component:UpdateQuizComponent
      },
      {
        path:'view-questions/:qid/:title',
        component:ViewQuizQuestionsComponent
      },
      {
        path:'add-question/:qid/:title',
        component:AddQuestionComponent
      }

    ]
  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    pathMatch:'full',
    canActivate:[NormalGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
