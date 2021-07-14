import { Injectable } from '@angular/core';
import { LabeledStatement } from 'typescript';
  
export interface MenuItem {
    uniqueKey:string;
    parentKey:string;
    key:string;
    label:string;
    roles:string[] ; // unused for now ;
};
// flat structure - use uniqueKey - parentKey as one to many relationsho[
 
export const MenuTree:MenuItem[] = [
         { label: 'Evolution', uniqueKey:'', parentKey:'art', key:'starters-x', roles:['all']},
        { label: 'Latest Uploads', uniqueKey:'', parentKey:'art', key:'latest-uploads', roles:['relgion','all'] },
        { label: 'Shree Ganesh', uniqueKey:'', parentKey:'art', key:'shree-ganesh', roles:['relgion','all'] },
        { label: 'Goddesses', uniqueKey:'', parentKey:'art', key:'devi', roles:['relgion','all']},
        { label: 'Mahadev', uniqueKey:'', parentKey:'art', key:'mahadev', roles:['relgion','all']},
        { label: 'Mahadev and Family', uniqueKey:'', parentKey:'art', key:'mahadev-family', roles:['relgion','all']},
        { label: 'Laxmi, Narayan, Shree Ram, and family, Bajrangbali', uniqueKey:'', parentKey:'art', key:'laxmi-vishnu-hanuman', roles:['relgion','all']},
        { label: 'Spiritual Souls:Datta Lineage, Sikhs, East of India', uniqueKey:'', parentKey:'art', key:'dattavatar', roles:['relgion','all']},
        { label: 'Shree Swami Samartha', uniqueKey:'', parentKey:'art', key:'swami-samartha', roles:['relgion','all']},
        { label: 'Shirdi Sai Q1 Q2(+Q3) 2021', uniqueKey:'', parentKey:'art', key:'shirdi-sai-q1-q2-2021', roles:['relgion','all']},
        { label: 'People', uniqueKey:'', parentKey:'art', key:'people-places', roles:['nonLiving','all']},
        { label: 'Places, Scenes and Objects', uniqueKey:'', parentKey:'art', key:'places-scenes-objects', roles:['nonLiving','all']},
        { label: 'Misc, Themes', uniqueKey:'', parentKey:'art', key:'themes-misc', roles:['nonLiving','all']},
        { label: 'Rail', uniqueKey:'', parentKey:'art', key:'trains', roles:['nonLiving','all']},
        { label: 'Aircraft, Ships and Cars', uniqueKey:'', parentKey:'art', key:'planes', roles:['nonLiving','all']},    ];
@Injectable()
export class  MenuNav { 
    _menuTree:MenuItem[] = [
     { label: 'Evolution', uniqueKey:'', parentKey:'art', key:'starters-x', roles:['all']},
    { label: 'The Best', uniqueKey:'', parentKey:'art', key:'starters-x', roles:['all']},
    { label: 'Latest Uploads', uniqueKey:'', parentKey:'art', key:'latest-uploads', roles:['relgion','all'] },
    { label: 'Shree Ganesh', uniqueKey:'', parentKey:'art', key:'shree-ganesh', roles:['relgion','all'] },
    { label: 'Goddesses', uniqueKey:'', parentKey:'art', key:'devi', roles:['relgion','all']},
    { label: 'Mahadev', uniqueKey:'', parentKey:'art', key:'mahadev', roles:['relgion','all']},
    { label: 'Mahadev and Family', uniqueKey:'', parentKey:'art', key:'mahadev-family', roles:['relgion','all']},
    { label: 'Laxmi, Narayan, Shree Ram, and family, Bajrangbali', uniqueKey:'', parentKey:'art', key:'laxmi-vishnu-hanuman', roles:['relgion','all']},
    { label: 'Satgurus of Lord Datta Lineage', uniqueKey:'', parentKey:'art', key:'dattavatar', roles:['relgion','all']},
    { label: 'Shree Swami Samartha', uniqueKey:'', parentKey:'art', key:'swami-samartha', roles:['relgion','all']},
    { label: 'Shirdi Sai Q1 Q2(+Q3)2021', uniqueKey:'', parentKey:'art', key:'shirdi-sai-q1-q2-2021', roles:['relgion','all']},
    { label: 'People', uniqueKey:'', parentKey:'art', key:'people-places', roles:['nonLiving','all']},
    { label: 'Places, Scenes and Objects', uniqueKey:'', parentKey:'art', key:'places-scenes-objects', roles:['nonLiving','all']},
    { label: 'Misc, Themes', uniqueKey:'', parentKey:'art', key:'themes-misc', roles:['nonLiving','all']},
    { label: 'Rail', uniqueKey:'', parentKey:'art', key:'trains', roles:['nonLiving','all']},
    { label: 'Aircraft, Ships and Cars', uniqueKey:'', parentKey:'art', key:'planes', roles:['nonLiving','all']},    ];
    
    get MenuTree():MenuItem[] {
        return this._menuTree;
    }
 
};