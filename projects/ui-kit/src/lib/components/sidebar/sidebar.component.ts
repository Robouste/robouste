import { ChangeDetectionStrategy, Component } from '@angular/core';

interface UiPalette {
  scale: string;
  color: string;
  contrast: string;
}

@Component({
  selector: 'rb-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RbSidebarComponent {}
