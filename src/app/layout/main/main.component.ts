import { Component } from '@angular/core';
import { CategoryComponent } from '../../feature/catefories/view/category/category.component';

const COMPONENTS = [CategoryComponent];

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [...COMPONENTS],
  templateUrl: './main.component.html',
  styles: ``
})
export class MainComponent {

}
