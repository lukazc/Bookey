import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material Design imports
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatGridListModule, MatFormFieldModule, MatInputModule,
  MatSelectModule, MatButtonModule, MatCheckboxModule, MatPaginatorModule,
  MatProgressSpinnerModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  exports: [
    LayoutModule,
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  declarations: []
})
export class MaterialDesignModule { }
