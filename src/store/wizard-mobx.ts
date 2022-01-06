import { Injectable } from '@wizardoc/injector';
import { observable, action, makeObservable } from 'mobx';
import {wizardMobxInterface} from "./types/index"

@Injectable()
export class WizardMobx implements wizardMobxInterface{
  constructor() {
    makeObservable(this)
  }
  @observable num: number = 1;
  @action setNum(): void {
    this.num++;
  }
}