// import { observable, action, makeObservable } from "mobx";
// import {appDataInter} from "./appDataInter"


// export class  AppData implements appDataInter {
//   constructor(){
//     makeObservable(this)
//   }
//   @observable num: number = 1;
//   @action setNum(): void {
//     this.num++;
//   }
// }

import {Injectable} from '@wizardoc/injector';
import {observable, action} from 'mobx';
import {appDataInter} from "./appDataInter"


// @Injectable()
export class  AppData implements appDataInter {
  constructor(){
    
  }
  @observable num: number = 1;
  @action setNum(): void {
    console.log(222)
    this.num++;
  }
}