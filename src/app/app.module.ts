import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingService } from './shared/components/loading/loading.service';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { AboutComponent } from './feature/aboutview/about.component';
import { MessagesService } from './shared/components/messages/messages.service';
import { MessagesComponent } from './shared/components/messages/messages.component';
import { LocalJsonComponent } from './feature/local-json/local-json.component';
import { MockableIoComponent } from './feature/mockable-io/mockable-io.component';
import { HomeComponent } from './feature/homeview/home.component';
import { HttpErrorInterceptorService } from './core/interceptors/HttpErrorInterceptorService';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoadingComponent,
    MessagesComponent,
    LocalJsonComponent,
    MockableIoComponent,
  ],
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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptorService,
      multi: true,
    },
    LoadingService,
    MessagesService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
