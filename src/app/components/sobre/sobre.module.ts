import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { SobreComponent } from './sobre.component';
import { SkillsComponent } from './skills/skills.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [SobreComponent, SkillsComponent],
  imports: [AccordionModule, CommonModule, ProgressBarModule, TableModule],
  exports: [SobreComponent],
})
export class SobreModule {}
