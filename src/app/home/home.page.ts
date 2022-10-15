import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
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
