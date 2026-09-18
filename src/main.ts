import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet, withInMemoryScrolling } from '@angular/router';
import { HomeComponent } from './home.component';
import { AngelShieldComponent } from './angelshield.component';
@Component({selector:'app-root',standalone:true,imports:[RouterOutlet],template:'<router-outlet />'})
export class AppComponent {}
bootstrapApplication(AppComponent,{providers:[provideRouter([{path:'',component:HomeComponent,title:'Kevin Rosala — Développeur indépendant'},{path:'angelshield',component:AngelShieldComponent,title:'AngelShieldPlus — Sécurité personnelle'},{path:'**',redirectTo:''}],withInMemoryScrolling({scrollPositionRestoration:'enabled',anchorScrolling:'enabled'}))]}).catch(console.error);
