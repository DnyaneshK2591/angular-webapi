import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingService } from './shared/components/loading/loading.service';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { AboutComponent } from './feature/aboutview/about.component';
import { HomeComponent } from './feature/homeview/components/home/home.component';
import { MessagesService } from './shared/components/messages/messages.service';
import { MessagesComponent } from './shared/components/messages/messages.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, LoadingComponent,MessagesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ],
  providers: [LoadingService, MessagesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
