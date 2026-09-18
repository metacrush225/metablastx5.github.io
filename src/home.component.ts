import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({selector:'app-home',standalone:true,imports:[RouterLink],templateUrl:'./home.component.html',host:{class:'developer-page'}})
export class HomeComponent {}
