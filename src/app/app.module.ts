import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './navegacao/menu/menu.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { HomeComponent } from './navegacao/home/home.component';
import { LoginComponent } from './registro/login/login.component';
import { rootRouterConfig } from './app.routes';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProdutoService } from './produtos/produtos.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    FontAwesomeModule,
    HttpClientModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false})],

  ],
  providers: [
    ProdutoService,
    {provide: APP_BASE_HREF, useValue: '/'},
  ],
  bootstrap: [AppComponent, LoginComponent]
})
export class AppModule { }
