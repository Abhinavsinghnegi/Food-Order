import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  
  constructor() { }

  getFoodById(id: number): Foods{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodByTag(tag:string) : Foods[]{
    if(tag=='All')
    return this.getAll();
    else
    return this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAllTag():tag[]{
    return [
      {name: 'All', count: 14},
      {name: 'FastFood', count: 4},
      {name: 'Pizza', count: 2},
      {name: 'Lunch', count: 3},
      {name: 'SlowFood', count: 2},
      {name: 'Hamburger', count: 1},
      {name: 'Fry', count: 1},
      {name: 'Soup', count: 1},
    ];
  }

  getAll():Foods[]{
    return [
      {
        id : 1,
        name: 'Pizza',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl : '/assets/food images/food-1.jpg',
        tags: ['Pizza','FastFood'],
      },
      {
        id : 2,
        name: 'Meatball',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 3.5,
        imageUrl : '/assets/food images/food-3.jpg',
        tags: ['FastFood'],
      },
      {
        id : 3,
        name: 'Burger',
        cookTime: '10-20',
        price: 30,
        favorite: false,
        origins: ['italy'],
        star: 1.5,
        imageUrl : '/assets/food images/food-4.jpg',
        tags: ['Pizza','SlowFood'],
      },
      {
        id : 4,
        name: 'Pasta',
        cookTime: '10-20',
        price: 15,
        favorite: false,
        origins: ['italy'],
        star: 3.5,
        imageUrl : '/assets/food images/food-5.jpg',
        tags: ['SlowFood'],
      },
      {
        id : 5,
        name: 'Pizza',
        cookTime: '10-20',
        price: 10,
        favorite: true,
        origins: ['italy'],
        star: 4.5,
        imageUrl : '/assets/food images/food-6.jpg',
        tags: ['Hamburger','FastFood'],
      },
      {
        id : 6,
        name: 'Pizza',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl : '/assets/food images/food-7.jpg',
        tags: ['Lunch'],
      },
      {
        id : 7,
        name: 'Pizza',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl : '/assets/food images/food-8.jpg',
        tags: ['Lunch','Fry'],
      },
      {
        id : 8,
        name: 'Pizza',
        cookTime: '10-20',
        price: 10,
        favorite: true,
        origins: ['italy'],
        star: 4.5,
        imageUrl : '/assets/food images/food-1.jpg',
        tags: ['FastFood','Lunch','Soup'],
      },
    ];
  }
}

