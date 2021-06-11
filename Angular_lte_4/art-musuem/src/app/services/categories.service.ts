import { Injectable } from '@angular/core';
import { LabeledStatement } from 'typescript';
// import { MockStringBundlerHost } from '../../../node_modules_1/@angular/tsc-wrapped/test/bundler_spec';
interface ParamElement {
  label:string;
  key:string;
  roles:string[] ; // religion, people, nonLiving, all - for now
}
@Injectable()
export class CategoriesService {

  constructor() { }
  get Categories(): ParamElement[] {
    return [
      { label: 'Journey overview', key:'starters-x', roles:['all']},
      { label: 'Latest Uploads', key:'latest-uploads', roles:['relgion','all'] },
      { label: 'Shree Ganesh', key:'shree-ganesh', roles:['relgion','all'] },
      { label: 'Goddesses', key:'devi', roles:['relgion','all']},
      { label: 'Mahadev', key:'mahadev', roles:['relgion','all']},
      { label: 'Mahadev and Family', key:'mahadev-family', roles:['relgion','all']},
      { label: 'Laxmi, Narayan, Shree Ram, and family, Bajrangbali', key:'laxmi-vishnu-hanuman', roles:['relgion','all']},
      { label: 'Satgurus of Lord Datta Lineage', key:'dattavatar', roles:['relgion','all']},
      { label: 'Shree Swami Samartha', key:'swami-samartha', roles:['relgion','all']},
      { label: 'Shirdi Sai Q1 Q2 2021', key:'shirdi-sai-q1-q2-2021', roles:['relgion','all']},
      { label: 'Rail', key:'trains', roles:['nonLiving','all']},
      { label: 'Aircraft', key:'planes', roles:['nonLiving','all']},
      { label: 'Ships and Cars', key:'planes', roles:['nonLiving','all']},
     
      /*
       { label: 'Sea', key:'ships'},{ label: 'Automobiles', key:'cars'},
     { label: 'Starter', key:'starters'},
      { label: 'Transport', key:'starters2'},
      { label: 'Air', key:'photo-planes'},
      { label: 'Rail', key:'trains'},
      { label: 'Sea', key:'ships'},{ label: 'Automobiles', key:'cars'},
      */

            ];/*return [
              { label: 'Starter', key:'starters'},
              { label: 'Ganesh, Shiva Parvati', key:'dietyGaneshShivParvati'},
              { label: 'Vishnu, Laxmi, Hanuman', key:'dietyVishnuLaxmiHanuman'},
              { label: 'Sadgurus ', key:'sSadgurus'},
              { label: 'Shirdi Sai', key:'sShirdiSai'},
              { label: 'Living subjects', key:'livingSubjects'},
              { label: 'Inanimate subjects', key:'inanimateSubjects'},
       
              { label: 'Specials', key:'specials'},
                   ];*/
  } 
}
