import { Component } from '@angular/core';
import { CategoryComponent } from '../../feature/catefories/view/category/category.component';
import {MatDividerModule} from '@angular/material/divider';

const COMPONENTS = [CategoryComponent];
const MODULES = [MatDividerModule];

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [...COMPONENTS,...MODULES],
  templateUrl: './main.component.html',
  styles: ``
})
export class MainComponent {

}
