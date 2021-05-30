import { Injectable } from '@angular/core';

@Injectable()
export class CategoriesService {

  constructor() { }
  get Categories(): string[] {
    return [
        'Ganesh, Shiva Parvati',
        'Vishnu, Laxmi, Hanuman',
        'Sadgurus ',
        'Shirdi Sai',
        'Living subjects',
        'Inanimate subjects',
            ];
  } 
}
