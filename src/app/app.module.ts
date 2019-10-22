import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterLinkPageComponent } from './components/router-link-page/router-link-page.component';
import { ExternalLinkDirective } from './directive/external-link.directive';

@NgModule({
  declarations: [
    AppComponent,
    RouterLinkPageComponent,
    ExternalLinkDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
