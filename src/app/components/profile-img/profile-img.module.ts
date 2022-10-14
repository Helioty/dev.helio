import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileImgComponent } from './profile-img.component';
import { ImageModule } from 'primeng/image';

@NgModule({
  declarations: [ProfileImgComponent],
  imports: [CommonModule, ImageModule],
  exports: [ProfileImgComponent],
})
export class ProfileImgModule {}
