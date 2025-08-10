import { Component } from '@angular/core';
import { CategoryComponent } from '../../feature/catefories/view/category/category.component';
import {MatDividerModule} from '@angular/material/divider';
import { TasksComponent } from '../../feature/tasks/view/tasks/tasks.component';

const COMPONENTS = [CategoryComponent, TasksComponent];
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
