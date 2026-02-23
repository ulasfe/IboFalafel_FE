import { Component } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

interface MenuItem {
  name: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-drinks',
  imports: [CommonModule, DecimalPipe],
  templateUrl: './drinks.component.html',
  styleUrl: './drinks.component.css'
})
export class DrinksComponent {
coldDrinks: MenuItem[] = [
    { name: 'cold 1', price: 32.00, description: 'Just cold water' },
    { name: 'cold 2', price: 34.00, description: 'Nothing special' },
    { name: 'cold 3', price: 36.00, description: '3 is not just a number :P' }
  ];

  hotDrinks : MenuItem[] = [
    { name: 'Coffee', price: 4.00, description: '' },
    { name: 'Tea', price: 4.00, description: '' },
    { name: 'Hot water', price: 3.00, description: '' }
  ];
}
