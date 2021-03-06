import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material Design imports
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatFormFieldModule, MatInputModule,
  MatSelectModule, MatButtonModule, MatCheckboxModule,
  MatProgressSpinnerModule, MatIconModule, MatExpansionModule, MatButtonToggleModule, MatStepperModule,
  MatMenuModule, MatDialogModule, MatBadgeModule, MatTooltipModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatSelectModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatBadgeModule,
    MatTooltipModule
  ],
  exports: [
    LayoutModule,
    MatToolbarModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatSelectModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatBadgeModule,
    MatTooltipModule
  ],
  declarations: []
})
export class MaterialDesignModule { }
