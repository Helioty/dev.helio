import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SobreComponent implements OnInit {
  @Input() descricao: string;

  constructor() {}

  ngOnInit(): void {}
}
