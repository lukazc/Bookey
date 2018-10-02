import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material Design imports
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatGridListModule, MatFormFieldModule, MatInputModule,
  MatSelectModule, MatButtonModule, MatCheckboxModule, MatPaginatorModule,
  MatProgressSpinnerModule, MatIconModule, MatExpansionModule, MatButtonToggleModule } from '@angular/material';
// Angular Flex Layout
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatGridListModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  exports: [
    LayoutModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatGridListModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  declarations: []
})
export class MaterialDesignModule { }
