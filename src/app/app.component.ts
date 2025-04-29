import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoardComponent } from './components/board/board.component';
import { CommonModule } from '@angular/common';
import { NebularModule } from './nebular-module/nebular-module.module';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BoardComponent, CommonModule, NebularModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Tik-Tac-Toe';
}
