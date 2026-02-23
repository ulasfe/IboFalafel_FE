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
wrapItems: MenuItem[] = [
    { name: 'EGYPTIAN STYLE WRAP', price: 34.00, description: '3x falafel, hummus, iceberg lettuce. pickled white icicle and beetroot, fresh mint. mint-basil sauce.' },
    { name: 'GREEK WRAP', price: 35.50, description: '3x falafel, hummus, vegan feta cheese, fresh cucumber, tomato, mix lettuce, red onion, green pepper, black olive, corn, herbal sauce.' },
    { name: 'SOY STRIPS WRAP', price: 34.50, description: 'Soy strips, nummus, arugula, frillice lettuce, tomato. fresh cucumber, spicy-garlic sauce' },
    { name: 'MUSTARTD WRAP', price: 34.00, description: '3x falafel, hummus, mix lettuce, tomato, fresh cucember, grilled aprika, red cabbage & carrot coleslaw, roasty in mustard-agave sauce' },
    { name: 'KIMCHI WRAP', price: 34.00, description: '3x falafel, domowe kimchi, hummus, sałata fryzyjska, szpinak, roszponka, świeży ogórek, sos ziołowy'},
    { name: 'AVOCADO WRAP', price: 36.00, description: '3x falafel, awokado, hummus klasyczny, rukola, roszponka, sałata fryzyjska, sałata radicchio, pomidor, świeży ogórek, ostry sos mango'},
    { name: 'SEITAN WRAP', price: 36.50, description: 'Homemade seitan, hummus, arugula, red cabbage, onion, mix lettuce, tomato, fresh cucumber. peanut sauce'},
    { name: 'VEGE KEBAB', price: 35.00, description: 'Soy strips, hummus, iceberg lettuce, onion with parsley, tomato, pickled cucumber, red cabbage and carrot coleslaw, garlic sauce'}
  ];

saladItems: MenuItem[] = [
    { name: 'FALAFEL ON THE PLATE', price: 49.00, description: '4x falafel, hummus, frillice lettuce, lambs lettuce, spinach, arugula, kimchi, sprouts, carrot. fresh cucumber, tomato, pickled vegetables. pepperoni peppers, pomegranate seeds mix sauces' },
    { name: 'SALAD WITH FALAFEL ', price: 36.00, description: '3x falafel, lambs lettuce, spinach, fresh cucumber, cherry tomatoes, red paprika, hummus, sesame.' }
  ];

  grabItems: MenuItem[] = [
    { name: 'FRENCH FRIES', price: 14.00, description: '' },
    { name: 'KIMCHI ', price: 13.00, description: '' },
    { name: 'TURKISH PICKLES ', price: 14.00, description: '' },
    { name: 'HUMMUS  ', price: 32.00, description: 'Served with crispy and aromatic bread' }

  ];

    limitedItems: MenuItem[] = [
    { name: 'FRENCH FRIES ROLL', price: 35.50, description: 'Soy strips. french fries, hummus. tomato, red onion. pickled cucumber, garlic sauce.' }
  ];

  extraItems: MenuItem[] = [
    { name: 'FALAFEL (1 SZT.)', price: 4.00, description: '' },
    { name: 'VEGAN FETA CHEESE', price: 4.00, description: '' },
    { name: 'JALAPENO PEPPER', price: 3.00, description: '' },
    { name: 'OLIVES', price: 3.00, description: '' },
    { name: 'CORN', price: 3.00, description: '' },
    { name: 'ADDITIONAL SAUCE', price: 3.00, description: '' }
  ];
}
