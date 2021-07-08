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
 
export const ArtMuseumMenus:MenuItem[] = [
        { label: 'Evolution', uniqueKey:'', parentKey:'', key:'starters-x', roles:['all']},
        { label: 'The Best', uniqueKey:'', parentKey:'', key:'starters-x', roles:['all']},
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
        { label: 'Aircraft, Ships and Cars', uniqueKey:'', parentKey:'', key:'planes', roles:['nonLiving','all']},    ];
@Injectable()
export class  MenuNav { 
    _artMuseumMenus:MenuItem[] = [
    { label: 'Evolution', uniqueKey:'', parentKey:'', key:'starters-x', roles:['all']},
    { label: 'The Best', uniqueKey:'', parentKey:'', key:'starters-x', roles:['all']},
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
    { label: 'Aircraft, Ships and Cars', uniqueKey:'', parentKey:'', key:'planes', roles:['nonLiving','all']},    ];
    
    get ArtMusuemMenus():MenuItem[] {
        return this._artMuseumMenus;
    }
 
};