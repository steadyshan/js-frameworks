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
      { label: 'Shree Ganesh', key:'shree-ganesh'},
      { label: 'Goddesses', key:'devi'},
      { label: 'Mahadev', key:'mahadev'},
      { label: 'Mahadev and Family', key:'mahadev-family'},
      { label: 'Laxmi, Narayan, Shree Ram, and family, Bajrangbali', key:'laxmi-vishnu-hanuman'},
      { label: 'Satgurus of Lord Datta Lineage', key:'dattavatar'},
      { label: 'Shirdi Sai Q1 Q2 2021', key:'shirdi-sai-q1-q2-2021'},
      { label: 'Aircraft', key:'planes'},
      
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
