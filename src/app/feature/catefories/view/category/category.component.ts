import { Component, inject } from '@angular/core';
import { CategoryListComponent } from '../../component/category-list/category-list.component';
import { CategoriesColorsComponent } from '../../component/categories-colors/categories-colors.component';
import { MatDivider } from '@angular/material/divider';
import { CategoryServiceService } from '../../service/category.service.service';
import { AsyncPipe } from '@angular/common';

const COMPONENT = [CategoryListComponent, CategoriesColorsComponent]
const PIPES = [AsyncPipe]

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [...COMPONENT, ...PIPES],
  templateUrl: './category.component.html',
  styles: ``
})
export class CategoryComponent {

  private readonly categoryService = inject(CategoryServiceService);

  public categories$ = this.categoryService.getCategories();

}
