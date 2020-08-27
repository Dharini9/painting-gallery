import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/component/login/login.component';
import { PaintingsComponent } from '../app/component/paintings/paintings.component';
import { AuthGuard } from './helpers/guards/auth-guard.service';
import { MusicComponent } from '../app/component/music/music.component';
import { ProfileComponent } from '../app/component/profile/profile.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'painting', component: PaintingsComponent, canActivate: [AuthGuard] },
  { path: 'music', component: MusicComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
