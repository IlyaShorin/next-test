import { makeAutoObservable } from 'mobx';
import { ListType, SelectType } from '../types';

export class NotionPageStore {
  textList: ListType = [{ kind: 'text', value: '' }];
  select = ['title h1', 'text', 'callout', 'checkbox'];
  constructor() {
    makeAutoObservable(this);
    if (typeof window !== 'undefined') {
      this.textList = JSON.parse(
        localStorage.getItem('list') || '[{"kind":"text","value":""}]'
      );
    }
  }
  changeTextListKind(index: number, value: SelectType) {
    if (value === 'checkbox') {
      this.textList[index].checked = false;
    }
    this.textList[index].kind = value;
  }
  changeCheckboxChecked(index: number, value: boolean) {
    this.textList[index].checked = value;
  }
  changeTextElementValue(index: number, value: string | number) {
    this.textList[index].value = value;
  }
  addTextListItem(index: number) {
    this.textList.splice(index + 1, 0, { kind: 'text', value: '' });
  }
}
