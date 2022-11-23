import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

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
        tags: ['FastFood','Lunch'],
      },
      {
        id : 2,
        name: 'Pizza',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl : '/assets/food images/food-3.jpg',
        tags: ['FastFood','Lunch'],
      },
      {
        id : 3,
        name: 'Pizza',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl : '/assets/food images/food-4.jpg',
        tags: ['FastFood','Lunch'],
      },
      {
        id : 4,
        name: 'Pizza',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl : '/assets/food images/food-5.jpg',
        tags: ['FastFood','Lunch'],
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
        tags: ['FastFood','Lunch'],
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
        tags: ['FastFood','Lunch'],
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
        tags: ['FastFood','Lunch'],
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
        tags: ['FastFood','Lunch'],
      },
    ];
  }
}

