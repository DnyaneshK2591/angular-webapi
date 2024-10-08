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
import { HttpLoadingInterceptorService } from './core/interceptors/HttpLoadingInterceptorService';
import { HttpLoggerInterceptorService } from './core/interceptors/HttpLoggerInterceptorService';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoadingComponent,
    MessagesComponent,
    LocalJsonComponent,
    MockableIoComponent,
    LoginComponent,
    NavBarComponent,
    PageNotFoundComponent,
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
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpLoggerInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpLoadingInterceptorService,
      multi: true,
    },
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
