import { MenuItem, MenuNav, ArtMuseumMenus } from './../../assets/data-and-config/menus-and-other-contexts/menu-tree';
import { Injectable } from '@angular/core';
import { LabeledStatement } from 'typescript';
@Injectable()
export class CategoriesService {

  constructor() {  }
  get Categories(): MenuItem[] {
    return ArtMuseumMenus;
  }
  get CategoriesOld(): MenuItem[] {
    
    return [
      { label: 'Showcase', uniqueKey:'', parentKey:'', key:'starters-x', roles:['all']},
      { label: 'Latest Uploads', uniqueKey:'', parentKey:'', key:'latest-uploads', roles:['relgion','all'] },
      { label: 'Shree Ganesh', uniqueKey:'', parentKey:'', key:'shree-ganesh', roles:['relgion','all'] },
      { label: 'Goddesses', uniqueKey:'', parentKey:'', key:'devi', roles:['relgion','all']},
      { label: 'Mahadev', uniqueKey:'', parentKey:'', key:'mahadev', roles:['relgion','all']},
      { label: 'Mahadev and Family', uniqueKey:'', parentKey:'', key:'mahadev-family', roles:['relgion','all']},
      { label: 'Laxmi, Narayan, Shree Ram, and family, Bajrangbali', uniqueKey:'', parentKey:'', key:'laxmi-vishnu-hanuman', roles:['relgion','all']},
      { label: 'Satgurus of Lord Datta Lineage', uniqueKey:'', parentKey:'', key:'dattavatar', roles:['relgion','all']},
      { label: 'Shree Swami Samartha', uniqueKey:'', parentKey:'', key:'swami-samartha', roles:['relgion','all']},
      { label: 'Shirdi Sai Q1 Q2 2021', uniqueKey:'', parentKey:'', key:'shirdi-sai-q1-q2-2021', roles:['relgion','all']},
      { label: 'People', uniqueKey:'', parentKey:'', key:'people-places', roles:['nonLiving','all']},
      { label: 'Places, Scenes and Objects', uniqueKey:'', parentKey:'', key:'places-scenes-objects', roles:['nonLiving','all']},
      { label: 'Misc, Themes', uniqueKey:'', parentKey:'', key:'themes-misc', roles:['nonLiving','all']},
      { label: 'Rail', uniqueKey:'', parentKey:'', key:'trains', roles:['nonLiving','all']},
      { label: 'Aircraft, Ships and Cars', uniqueKey:'', parentKey:'', key:'planes', roles:['nonLiving','all']},
     
      /*
       { label: 'Sea', uniqueKey:'', parentKey:'', key:'ships'},{ label: 'Automobiles', uniqueKey:'', parentKey:'', key:'cars'},
     { label: 'Starter', uniqueKey:'', parentKey:'', key:'starters'},
      { label: 'Transport', uniqueKey:'', parentKey:'', key:'starters2'},
      { label: 'Air', uniqueKey:'', parentKey:'', key:'photo-planes'},
      { label: 'Rail', uniqueKey:'', parentKey:'', key:'trains'},
      { label: 'Sea', uniqueKey:'', parentKey:'', key:'ships'},{ label: 'Automobiles', uniqueKey:'', parentKey:'', key:'cars'},
      */

            ];/*return [
              { label: 'Starter', uniqueKey:'', parentKey:'', key:'starters'},
              { label: 'Ganesh, Shiva Parvati', uniqueKey:'', parentKey:'', key:'dietyGaneshShivParvati'},
              { label: 'Vishnu, Laxmi, Hanuman', uniqueKey:'', parentKey:'', key:'dietyVishnuLaxmiHanuman'},
              { label: 'Sadgurus ', uniqueKey:'', parentKey:'', key:'sSadgurus'},
              { label: 'Shirdi Sai', uniqueKey:'', parentKey:'', key:'sShirdiSai'},
              { label: 'Living subjects', uniqueKey:'', parentKey:'', key:'livingSubjects'},
              { label: 'Inanimate subjects', uniqueKey:'', parentKey:'', key:'inanimateSubjects'},
       
              { label: 'Specials', uniqueKey:'', parentKey:'', key:'specials'},
                   ];*/
  } 
}
