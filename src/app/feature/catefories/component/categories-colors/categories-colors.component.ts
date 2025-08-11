import { Component, inject } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { CategoryServiceService } from '../../service/category.service.service';

const MODULES = [MatDivider];
@Component({
  selector: 'app-categories-colors',
  standalone: true,
  imports: [...MODULES],
  templateUrl: './categories-colors.component.html',
  styles: ``
})
export class CategoriesColorsComponent {

  private readonly categoriesService = inject(CategoryServiceService)
  public categories = this.categoriesService.categories;

}
