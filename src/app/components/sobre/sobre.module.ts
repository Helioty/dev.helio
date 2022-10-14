import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { SobreComponent } from './sobre.component';

@NgModule({
  declarations: [SobreComponent],
  imports: [AccordionModule, CommonModule],
  exports: [SobreComponent],
})
export class SobreModule {}
