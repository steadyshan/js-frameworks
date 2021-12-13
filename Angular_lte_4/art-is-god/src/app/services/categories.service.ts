import { MenuItem, MenuNav, MenuTree } from './../../assets/data-and-config/menus-and-other-contexts/menu-tree';
import { Injectable } from '@angular/core';
@Injectable()
export class CategoriesService {

  constructor() {  }
  get Categories(): MenuItem[] { // one off this is invoked at login only 
    return MenuTree;
  }
  
}
