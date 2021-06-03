import { Injectable } from '@angular/core';
import { LabeledStatement } from 'typescript';
// import { MockStringBundlerHost } from '../../../node_modules_1/@angular/tsc-wrapped/test/bundler_spec';
interface ParamElement {
  label:string;
  key:string;
}
@Injectable()
export class CategoriesService {

  constructor() { }
  get Categories(): ParamElement[] {
    return [
      { label: 'Journey overview', key:'starters-x'},
      { label: 'Journey overview', key:'starters-x'},
      { label: 'Shree Ganesh', key:'shree-ganesh'},
      { label: 'Goddesses', key:'devi'},
      { label: 'Mahadev', key:'mahadev'},
      { label: 'Mahadev and Family', key:'trains'},
      { label: 'Sea', key:'ships'},{ label: 'Automobiles', key:'cars'},
      

       { label: 'Specials', key:'specials'},
      /*
      { label: 'Starter', key:'starters'},
      { label: 'Transport', key:'starters2'},
      { label: 'Air', key:'photo-planes'},
      { label: 'Rail', key:'trains'},
      { label: 'Sea', key:'ships'},{ label: 'Automobiles', key:'cars'},
      */

       { label: 'Specials', key:'specials'},
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
