import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MaterialDesignModule } from '@app-ui/material.design.module';
import { StoreModule } from '@app-ui/store/store.module';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { StoreFirstGuard } from '@app/route.guard';
import { ToolbarComponent } from '@app-ui/toolbar.component';

@NgModule({
  declarations: [
    AppComponent, ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialDesignModule,
    StoreModule,
    RoutingModule
  ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
