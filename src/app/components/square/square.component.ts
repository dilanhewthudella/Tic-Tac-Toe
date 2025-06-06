import { Component, Input } from '@angular/core';
import { NebularModule } from '../../nebular-module/nebular-module.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [NebularModule, CommonModule],
  template: `
    <button nbButton *ngIf="!value">{{ value }}</button>
    <button nbButton hero status="success" *ngIf="value == 'X'">
      {{ value }}
    </button>
    <button nbButton hero status="info" *ngIf="value == 'O'">
      {{ value }}
    </button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }'],
})
export class SquareComponent {
  @Input() value!: 'X' | 'O';
}
