import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { MaterialDesignModule } from '@app-ui/material.design.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialDesignModule
  ]
})
export class MiscModule { }
