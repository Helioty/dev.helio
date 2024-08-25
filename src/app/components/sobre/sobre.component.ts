import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  standalone: true,
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss'],
  imports: [AccordionModule, CommonModule, SkillsComponent],
})
export class SobreComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
