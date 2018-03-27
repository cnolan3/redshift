import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlashMessagesModule } from 'ngx-flash-messages';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterLoginComponent } from './components/register-login/register-login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ArticleComponent } from './components/article/article.component';
import { SubmitComponent } from './components/submit/submit.component';
import { ForumComponent } from './components/forum/forum.component';
import { NewsComponent } from './components/news/news.component';
import { PlanetsComponent } from './components/planets/planets.component';


import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import { ValidateService } from './services/validate.service';


import { AuthGuard } from './guards/auth.guard';
import { environment } from '../environments/environment';


const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'info', component: InfoComponent},
  {path:'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path:'submit', component: SubmitComponent, canActivate: [AuthGuard]},
  {path:'article/:id', component: ArticleComponent},
  {path:'forum', component: ForumComponent},
  {path:'news', component: NewsComponent},
  {path:'planets', component: PlanetsComponent}
]

export function fact() {
  return localStorage.getItem('id_token');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    FooterComponent,
    RegisterLoginComponent,
    NavbarComponent,
    ProfileComponent,
    ArticleComponent,
    SubmitComponent,
    ForumComponent,
    NewsComponent,
    PlanetsComponent
  ],
  imports: [
    FlashMessagesModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: fact,
        whitelistedDomains: [environment.apiUrl]
      }
    })
  ],
  providers: [
    AuthService,
    AuthGuard,
    DataService,
    ValidateService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    RegisterLoginComponent
  ]
})
export class AppModule { }
