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
        { label: 'Shree Ganesh', uniqueKey:'', parentKey:'art', key:'shree-ganesh', roles:['relgion','all'], dateUploaded: '12-11-2021' },
        { label: 'Shree Ganesh Q4 2021 onward', uniqueKey:'', parentKey:'art', key:'shree-ganesh-gte-q4-2021', roles:['relgion','all'], dateUploaded: '06-18-2022' },
        { label: 'Goddesses', uniqueKey:'', parentKey:'art', key:'devi', roles:['relgion','all']},
        { label: 'Mahadev', uniqueKey:'', parentKey:'art', key:'mahadev', roles:['relgion','all'],  dateUploaded: '03-21-2022'},
        { label: 'Mahadev and Family', uniqueKey:'', parentKey:'art', key:'mahadev-family', roles:['relgion','all'],  dateUploaded: '03-21-2022'},
        { label: 'Laxmi, Narayan, Shree Ram, and family, Bajrangbali', uniqueKey:'', parentKey:'art', dateUploaded: '01-19-2022', key:'laxmi-vishnu-hanuman', roles:['relgion','all']},
        { label: 'Spiritual Souls:Datta Lineage, Sikhs, East of India', uniqueKey:'', parentKey:'art', dateUploaded: '04-19-2022',key:'dattavatar', roles:['relgion','all']},
        { label: 'Shree Swami Samartha', uniqueKey:'', parentKey:'art', key:'swami-samartha', roles:['relgion','all'], dateUploaded: '02-28-2022'},
        { label: 'Shirdi Sai Q1 Q2(+Q3) 2021', uniqueKey:'', parentKey:'art', key:'shirdi-sai-q1-q2-2021', roles:['relgion','all']},
        { label: 'Shirdi Sai Q2 Q3 2022', uniqueKey:'', parentKey:'art', key:'shirdi-sai-q2-q3-2022', roles:['relgion','all'],dateUploaded: '07-22-2022'},
        { label: 'Shirdi Sai Q3 Q4 2021/Q1 2022', uniqueKey:'', parentKey:'art', key:'shirdi-sai-q3-q4-2021', roles:['relgion','all'],dateUploaded: '03-31-2022'},
        { label: 'Shirdi Sai Satcharitra', uniqueKey:'', parentKey:'art', key:'baba-themes-1', roles:['relgion','all'], dateUploaded: '02-28-2022'},
        { label: 'People', uniqueKey:'', parentKey:'art', key:'people-places', roles:['nonLiving','all'], dateUploaded: '03-22-2022'},
        { label: 'Places, Scenes and Objects', uniqueKey:'', parentKey:'art', key:'places-scenes-objects', roles:['nonLiving','all'], dateUploaded: '12-06-2021'},
        { label: 'Misc, Themes', uniqueKey:'', parentKey:'art', key:'themes-misc', roles:['nonLiving','all']},
        { label: 'Rail', uniqueKey:'', parentKey:'art', key:'trains', roles:['nonLiving','all'], dateUploaded: '12-08-2021'},
        { label: 'Mumbai Meri Jaan', uniqueKey:'', parentKey:'art', key:'mumbai-meri-jaan', roles:['nonLiving','all'], dateUploaded: '07-25-2022'},
        { label: 'Aircraft, Ships and Cars', uniqueKey:'', parentKey:'art', key:'planes', roles:['nonLiving','all'],  dateUploaded: '07-23-2022'}  ];
@Injectable()
export class  MenuNav { 
    _menuTree:MenuItem[] = [
    { label: 'Evolution', uniqueKey:'', parentKey:'art', key:'starters-x', roles:['all']},
    { label: 'The Best', uniqueKey:'', parentKey:'art', key:'showpiece', roles:['all']},
    { label: 'Latest Uploads', uniqueKey:'', parentKey:'art', key:'latest-uploads', roles:['relgion','all'] },
    { label: 'Shree Ganesh ', uniqueKey:'', parentKey:'art', key:'shree-ganesh', roles:['relgion','all'], dateUploaded: '12-11-2021' },
    { label: 'Shree Ganesh Q4 2021 onward', uniqueKey:'', parentKey:'art', key:'shree-ganesh-gte-q4-2021', roles:['relgion','all'], dateUploaded: '12-14-2021' },
    { label: 'Goddesses', uniqueKey:'', parentKey:'art', key:'devi', roles:['relgion','all']},
    { label: 'Mahadev', uniqueKey:'', parentKey:'art', key:'mahadev', roles:['relgion','all'],  dateUploaded: '12-13-2021'},
    { label: 'Mahadev and Family', uniqueKey:'', parentKey:'art', key:'mahadev-family', roles:['relgion','all'],  dateUploaded: '12-11-2021'},
    { label: 'Laxmi, Narayan, Shree Ram, and family, Bajrangbali', uniqueKey:'', parentKey:'art', key:'laxmi-vishnu-hanuman', dateUploaded: '01-19-2022',roles:['relgion','all']},
    { label: 'Satgurus of Lord Datta Lineage', uniqueKey:'', parentKey:'art', key:'dattavatar', roles:['relgion','all']},
    { label: 'Shree Swami Samartha', uniqueKey:'', parentKey:'art', key:'swami-samartha', roles:['relgion','all'], dateUploaded: '12-09-2021'},
    { label: 'Shirdi Sai Q1 Q2(+Q3)2021', uniqueKey:'', parentKey:'art', key:'shirdi-sai-q1-q2-2021', roles:['relgion','all']},
    { label: 'Shirdi Sai Q3 Q4 2021', uniqueKey:'', parentKey:'art', key:'shirdi-sai-q3-q4-2021', roles:['relgion','all'],dateUploaded: '12-12-2021'},
    { label: 'Shirdi Sai Satcharitra', uniqueKey:'', parentKey:'art', key:'baba-themes-1', roles:['relgion','all'], dateUploaded: '12-06-2021'},
        { label: 'People', uniqueKey:'', parentKey:'art', key:'people-places', roles:['nonLiving','all'], dateUploaded: '02-24-2022'},
    { label: 'Places, Scenes and Objects', uniqueKey:'', parentKey:'art', key:'places-scenes-objects', roles:['nonLiving','all'], dateUploaded: '12-06-2021'},
    { label: 'Misc, Themes', uniqueKey:'', parentKey:'art', key:'themes-misc', roles:['nonLiving','all']},
    { label: 'Rail', uniqueKey:'', parentKey:'art', key:'trains', roles:['nonLiving','all'], dateUploaded: '12-08-2021'},
    { label: 'Aircraft, Ships and Cars', uniqueKey:'', parentKey:'art', key:'planes', roles:['nonLiving','all'],  dateUploaded: '07-20-2022'},    ];
    
    get MenuTree():MenuItem[] {
        return this._menuTree;
    }
 
};