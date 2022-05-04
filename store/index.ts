import { makeAutoObservable } from 'mobx';
import { NotionPageStore } from './Notion';

export class RootStore {
  notion;

  constructor() {
    this.notion = new NotionPageStore();

    makeAutoObservable(this);
  }
}

export const rootStore = new RootStore();
