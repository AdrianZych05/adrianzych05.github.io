import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Main303 } from './modules/303/main-303.component';
import { HomeScreen } from './modules/home-screen/home-screen.component';
import { ClickGame } from './modules/other-pages/click-game/click-game.component';
//import { AuthGuard } from './core/services/auth.guard';

const routes: Routes = [   
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeScreen },
    {path: 'main-303', component: Main303},
    {path: 'click-game', component: ClickGame}
    //{ path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
