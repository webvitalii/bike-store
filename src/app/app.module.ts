import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from '@core/guards/auth.guard';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';

import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { AuthInterceptor } from './cms-admin/services/auth.interceptor';
import { NetworkInterceptor } from '@core/interceptors/network.interceptor';

import { MainComponent } from './layout/main/main.component';
import { NavComponent } from './layout/nav/nav.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';


@NgModule({
  declarations: [
    ErrorComponent,
    HomeComponent,
    MainComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, CoreModule, SharedModule],
  exports: [],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NetworkInterceptor,
      multi: true
    }
  ],
  bootstrap: [MainComponent]
})
export class AppModule {}
