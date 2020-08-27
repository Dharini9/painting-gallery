import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from '../app/component/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaintingsComponent } from '../app/component/paintings/paintings.component';
import { HeaderComponent } from '../app/component/header/header.component';
import { MusicComponent } from '../app/component/music/music.component';
import { ProfileComponent } from '../app/component/profile/profile.component';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockApiService } from './services/mock-api.service';
import { ArtistComponent } from './component/profile/artist/artist.component';
import { TeacherComponent } from './component/profile/teacher/teacher.component';
import { ViewMusicComponent } from './component/music/view-music/view-music.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PaintingsComponent,
    HeaderComponent,
    MusicComponent,
    ProfileComponent,
    ArtistComponent,
    TeacherComponent,
    ViewMusicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatButtonToggleModule,
    InMemoryWebApiModule.forRoot(MockApiService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
