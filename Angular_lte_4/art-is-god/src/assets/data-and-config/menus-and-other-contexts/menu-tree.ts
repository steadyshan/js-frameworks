// import { MenuItem } from './../../../../docs/assets/data-and-config/menus-and-other-contexts/menu-tree';
import { Injectable } from '@angular/core';
import { LabeledStatement } from 'typescript';
  
export interface MenuItem {
    uniqueKey:string;
    parentKey:string;
    key:string;
    label:string;
    roles:string[] ; // unused for now ;
    children?:MenuItem[] ;
    dateUploaded?:string ;
};
// flat structure - use uniqueKey - parentKey as one to many relationsho[
 
export const MenuTree:MenuItem[] = [
        { label: 'Evolution', uniqueKey:'', parentKey:'art', key:'starters-x', roles:['all']},
        { label: 'The Best', uniqueKey:'', parentKey:'art', key:'showpiece', roles:['all']},
        { label: 'Latest Uploads', uniqueKey:'', parentKey:'art', key:'latest-uploads', roles:['relgion','all'] },
        { label: 'Shree Ganesh', uniqueKey:'', parentKey:'art', key:'shree-ganesh', roles:['relgion','all'], dateUploaded: '12-05-2021' },
        { label: 'Goddesses', uniqueKey:'', parentKey:'art', key:'devi', roles:['relgion','all']},
        { label: 'Mahadev', uniqueKey:'', parentKey:'art', key:'mahadev', roles:['relgion','all']},
        { label: 'Mahadev and Family', uniqueKey:'', parentKey:'art', key:'mahadev-family', roles:['relgion','all']},
        { label: 'Laxmi, Narayan, Shree Ram, and family, Bajrangbali', uniqueKey:'', parentKey:'art', key:'laxmi-vishnu-hanuman', roles:['relgion','all']},
            ];
@Injectable()
export class  MenuNav { 
    _menuTree:MenuItem[] = [
    { label: 'Evolution', uniqueKey:'', parentKey:'art', key:'starters-x', roles:['all']},
    { label: 'The Best', uniqueKey:'', parentKey:'art', key:'showpiece', roles:['all']},
    { label: 'Latest Uploads', uniqueKey:'', parentKey:'art', key:'latest-uploads', roles:['relgion','all'] },
    { label: 'Shree Ganesh', uniqueKey:'', parentKey:'art', key:'shree-ganesh', roles:['relgion','all'], dateUploaded: '12-05-2021' },
    { label: 'Goddesses', uniqueKey:'', parentKey:'art', key:'devi', roles:['relgion','all']},
    { label: 'Mahadev', uniqueKey:'', parentKey:'art', key:'mahadev', roles:['relgion','all']},
    { label: 'Mahadev and Family', uniqueKey:'', parentKey:'art', key:'mahadev-family', roles:['relgion','all']},
    { label: 'Laxmi, Narayan, Shree Ram, and family, Bajrangbali', uniqueKey:'', parentKey:'art', key:'laxmi-vishnu-hanuman', roles:['relgion','all']},
     ];
    
    get MenuTree():MenuItem[] {
        return this._menuTree;
    }
 
};