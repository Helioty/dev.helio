import { Component, OnInit } from '@angular/core';
import { skills } from 'src/app/data/skill-list';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
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
