import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { OpendotaService } from './opendota.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [OpendotaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
