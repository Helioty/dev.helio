import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api/api.service';
import { IKeyValue } from '../api/api.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public descricao$: Observable<string>;

  constructor(private readonly apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getProfile().subscribe();
    this.descricao$ = this.apiService.descricao;
  }
}
