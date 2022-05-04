export type ListType = {
  kind: SelectType;
  value: string | number;
  checked?: boolean;
}[];
export type SelectType = 'title h1' | 'text' | 'callout' | 'checkbox';
