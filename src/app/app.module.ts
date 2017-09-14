import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { OpendotaService } from './opendota.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { MyprofileComponent } from './myprofile/myprofile.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MyprofileComponent,
    data: { title: 'My profile' }
  },
  {
    path: 'heroes',
    component: HeroesListComponent,
    data: { title: 'Hero list' }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroesListComponent,
    MyprofileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [OpendotaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
