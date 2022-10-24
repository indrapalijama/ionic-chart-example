import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';

import { IonicModule } from '@ionic/angular';
import { NgChartsModule } from 'ng2-charts';
import { PieChartComponent } from './pie-chart/pie-chart.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NgChartsModule,
  ],
  declarations: [BarChartComponent, LineChartComponent, PieChartComponent],
  entryComponents: [],
  providers: [],
  exports: [BarChartComponent, LineChartComponent, PieChartComponent],
})
export class ComponentsModule {}
