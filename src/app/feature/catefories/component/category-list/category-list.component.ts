import { Component, inject } from '@angular/core';
import { CategoryServiceService } from '../../service/category.service.service';


@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [],
  templateUrl: './category-list.component.html',
  styles: ``
})
export class CategoryListComponent {

  private readonly categoriesService = inject(CategoryServiceService);
  public categories = this.categoriesService.categories;

}
