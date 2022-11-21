import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): string[]{
    return [
      '/assets/food images/food-1.jpg',
      '/assets/food images/food-8.jpg',
      '/assets/food images/food-3.jpg',
      '/assets/food images/food-4.jpg',
      '/assets/food images/food-5.jpg',
      '/assets/food images/food-6.jpg',
      '/assets/food images/food-7.jpg',
      '/assets/food images/food-8.jpg',
    ]
  }
}

