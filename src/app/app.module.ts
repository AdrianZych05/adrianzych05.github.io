import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MainMenu } from './modules/navigation-bar/main-menu/main-menu.component';
import { NavigationBar } from './modules/navigation-bar/navigation-bar.component';
import { Main303 } from './modules/303/main-303.component';
import { HomeScreen } from './modules/home-screen/home-screen.component';
import { ClickGame } from './modules/other-pages/click-game/click-game.component';


@NgModule({
  declarations: [
    AppComponent,
    MainMenu,
    NavigationBar,
    Main303,
    HomeScreen,
    ClickGame
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }