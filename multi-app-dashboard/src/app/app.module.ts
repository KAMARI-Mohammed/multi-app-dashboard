import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpotifyComponent } from './spotify/spotify.component';
import { DiscordComponent } from './discord/discord.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { ProfileSectionComponent } from './dashboard/profile-section/profile-section.component';
import { AppsSectionComponent } from './dashboard/apps-section/apps-section.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SpotifyComponent,
    DiscordComponent,
    WhatsappComponent,
    SidebarComponent,
    HeaderComponent,
    ProfileSectionComponent,
    AppsSectionComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
