import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './page/signup/signup.component';
import { LoginComponent } from './page/login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import{FormsModule} from'@angular/forms';
import{HttpClientModule} from'@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './page/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { authInterceptorProviders } from 'services/auth.interceptor';
import { DashboardComponent } from './page/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './page/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './page/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './page/admin/sidebar/sidebar.component';
import { WelcomComponent } from './page/admin/welcom/welcom.component';
import { ViewCategoriesComponent } from './page/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './page/admin/add-category/add-category.component';
import { ViewQuizzesComponent } from './page/admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './page/admin/add-quiz/add-quiz.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { UpdateQuizComponent } from './page/admin/update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from './page/admin/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionComponent } from './page/admin/add-question/add-question.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomComponent,
    ViewCategoriesComponent,
    AddCategoryComponent, 
    ViewQuizzesComponent,
    AddQuizComponent,
    UpdateQuizComponent,
    ViewQuizQuestionsComponent,
    AddQuestionComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule, 
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    CKEditorModule
    
    
    
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
