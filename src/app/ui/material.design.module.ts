import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material Design imports
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatFormFieldModule, MatInputModule,
  MatSelectModule, MatButtonModule, MatCheckboxModule,
  MatProgressSpinnerModule, MatIconModule, MatExpansionModule, MatButtonToggleModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  exports: [
    LayoutModule,
    MatToolbarModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  declarations: []
})
export class MaterialDesignModule { }
