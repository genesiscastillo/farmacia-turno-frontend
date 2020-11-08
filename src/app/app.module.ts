import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { ClientesService } from './clientes/clientes.service';
import { KeepHtmlPipe } from './pipes/keep-html.pipe';

import { AgmCoreModule } from '@agm/core';
import { NegToPosPipe } from './pipes/neg-to-pos.pipe';


@NgModule({
  declarations: [
    AppComponent,
    KeepHtmlPipe,
    NegToPosPipe
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'API_KEY_GOOGLE'
   }),
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ClientesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
