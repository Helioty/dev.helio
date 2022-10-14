import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SobreModule } from 'src/app/components/sobre/sobre.module';
import { ProfileImgModule } from 'src/app/components/profile-img/profile-img.module';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ProfileImgModule,
    SobreModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
