import { Component } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

interface MenuItem {
  name: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-food',
  imports: [CommonModule, DecimalPipe],
  templateUrl: './food.component.html',
  styleUrl: './food.component.css'
})
export class FoodComponent {
breakfastItems: MenuItem[] = [
    { name: 'HUMMUS KLASYCZNY', price: 32.00, description: 'podawany z chrupiącym aromatycznym chlebkiem...' },
    { name: 'BABA GHANOUSH', price: 34.00, description: 'podawana z chrupiącym aromatycznym chlebkiem...' },
    { name: 'SHAKSHUKA', price: 36.00, description: 'z aromatycznym tofu i podawana z chrupiącym...' }
  ];

  extras: MenuItem[] = [
    { name: 'FALAFEL (1 SZT.)', price: 4.00, description: '' },
    { name: 'WEGAŃSKI SER FETA', price: 4.00, description: '' },
    { name: 'DODATKOWY SOS', price: 3.00, description: '' }
  ];
}
