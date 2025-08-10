import { Component, inject, OnInit } from '@angular/core';
import { ThemeToggleComponent } from './shared/components/theme-toggle/theme-toggle.component';
import { ThemeService } from './shared/services/theme.service';
import { MainComponent } from './layout/main/main.component';

const COMPONENTS = [
  ThemeToggleComponent,
  MainComponent
];

const MODULES = [];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [...COMPONENTS],
  template: `
    <div class="relative min-h-screen w-full">
      <app-theme-toggle />

      <app-main/>
    </div>
  `,
  styles: ``,
})
export class AppComponent implements OnInit {
  private themeService = inject(ThemeService);

  public ngOnInit(): void {
    const currentColorTheme = this.themeService.getPreferredColorTheme();

    this.themeService.setColorTheme(currentColorTheme);
  }
}
