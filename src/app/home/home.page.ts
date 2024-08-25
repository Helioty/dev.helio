import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuItem } from 'primeng/api/menuitem';
import { SobreComponent } from '../components/sobre/sobre.component';
import { ProfileImgComponent } from '../components/profile-img/profile-img.component';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SobreComponent,
    ProfileImgComponent,
  ],
})
export class HomePage implements OnInit {
  dockItems: MenuItem[];

  constructor() {}

  ngOnInit(): void {
    // this.dockItems = [
    //   {
    //     label: 'Finder',
    //     // icon: 'assets/showcase/images/dock/finder.svg',
    //   },
    //   {
    //     label: 'App Store',
    //     // icon: 'assets/showcase/images/dock/appstore.svg',
    //   },
    //   {
    //     label: 'Photos',
    //     // icon: 'assets/showcase/images/dock/photos.svg',
    //   },
    //   {
    //     label: 'Trash',
    //     // icon: 'assets/showcase/images/dock/trash.png',
    //   },
    // ];
  }
}
