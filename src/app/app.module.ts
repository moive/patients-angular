import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, viewsComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarDashboardComponent } from './components/navbar-dashboard/navbar-dashboard.component';
import { ContentDashboardComponent } from './components/content-dashboard/content-dashboard.component';
import { ListPatientsComponent } from './components/list-patients/list-patients.component';

@NgModule({
  declarations: [
    viewsComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarDashboardComponent,
    ContentDashboardComponent,
    ListPatientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
