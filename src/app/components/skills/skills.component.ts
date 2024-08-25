import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import { skills } from 'src/app/data/skill-list';

@Component({
  standalone: true,
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  imports: [CommonModule, ProgressBarModule, TableModule],
})
export class SkillsComponent implements OnInit {
  skillList = skills.sort((a, b) => b.rate - a.rate);
  year = new Date().getFullYear();

  constructor() {}

  ngOnInit() {}

  getYearsOfExperience(startYear: number): number {
    return this.year - startYear;
  }
}
