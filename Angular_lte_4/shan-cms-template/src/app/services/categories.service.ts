import { MenuItem, MenuNav, ArtMuseumMenus } from './../../assets/data-and-config/menus-and-other-contexts/menu-tree';
import { Injectable } from '@angular/core';
import { LabeledStatement } from 'typescript';
@Injectable()
export class CategoriesService {

  constructor() {  }
  get Categories(): MenuItem[] {
    return ArtMuseumMenus;
  }
}
