import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ImageModule } from 'primeng/image';

@Component({
  standalone: true,
  selector: 'app-profile-img',
  templateUrl: './profile-img.component.html',
  styleUrls: ['./profile-img.component.scss'],
  imports: [CommonModule, ImageModule],
})
export class ProfileImgComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
